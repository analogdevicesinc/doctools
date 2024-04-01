from typing import List, Tuple, Dict

import re
import os
import contextlib
from lxml import etree

from ..directive.string import string_hdl


# From https://github.com/tfcollins/vger/blob/main/vger/hdl_reg_map.py
def parse_hdl_regmap(reg: str, ctime: float, prefix: str) -> Tuple[Dict, List[str]]:
    regmap = {
        'subregmap': {},
        'owners': [],
        'ctime': ctime
    }
    warning = []

    file = f"{prefix}/regmap/adi_regmap_{reg}.txt"
    if not os.path.isfile(file):
        warning.append(f"File {file} doesn't exist!")
        return (regmap, warning)

    with open(file, "r") as f:
        data = f.readlines()
    data = [d.replace("\n", "") for d in data]

    while "TITLE" in data:
        # Get title
        tit = data.index("TITLE")

        title = str(data[tit + 1].strip())
        title_tool = str(data[tit + 2].strip())
        data = data[tit + 2:]

        if 'ENDTITLE' in [title_tool, title]:
            warning.append(f"Malformed title fields at file {prefix}/regmap/adi_regmap_{reg}.txt, skipped!")
            continue

        regmap['subregmap'][title_tool] = {
            'title': title,
            'regmap': [],
            'access_type': []
        }

        # Get registers
        access_type = []
        while "REG" in data:
            regi = data.index("REG")
            rfi = data.index("ENDREG")

            if not regi:
                break

            reg_addr = data[regi + 1].strip()
            reg_name = data[regi + 2].strip()
            reg_desc = [data[f_].strip() for f_ in range(regi + 3, rfi)]
            reg_desc = " ".join(reg_desc)

            with contextlib.suppress(ValueError):
                tet = data.index("TITLE") if "TITLE" in data else -1
                if tet != -1:
                    if regi > tet:
                        # into next regmap
                        break
            data = data[regi + 1:]

            # Get fields
            fields = []
            while "FIELD" in data:
                fi = data.index("FIELD")
                efi = data.index("ENDFIELD")

                if not fi:
                    break

                with contextlib.suppress(ValueError):
                    rege = data.index("REG") if "REG" in data else -1
                    if rege != -1:
                        if fi > rege:
                            # into next register
                            break

                field_loc = data[fi + 1].strip()
                field_loc = field_loc.split(" ")
                field_bits = field_loc[0].replace("[", "").replace("]", "")
                field_default = ' '.join(field_loc[1:]) if len(field_loc) > 1 else "NA"

                field_name = data[fi + 2].strip()
                field_rw = data[fi + 3].strip()

                if field_rw == 'R':
                    field_rw = 'RO'
                elif field_rw == 'W':
                    field_rw = 'WO'
                if '-V' in field_rw:
                    if 'V' not in access_type:
                        access_type.append('V')
                field_rw_ = field_rw.replace('-V','')
                if field_rw_ not in access_type:
                    if field_rw_ not in string_hdl.access_type:
                        warning.append(f"Malformed access type {field_rw} for register {field_name}, file {prefix}/regmap/adi_regmap_{reg}.txt.")
                    else:
                        access_type.append(field_rw)

                field_desc = [data[f_].strip() for f_ in range(fi + 4, efi)]
                field_desc = " ".join(field_desc)

                # TODO Remove dokuwiki scaping support
                # Temporary dokuwiki scaping convert to not break current
                # dokuwiki tables
                field_default = field_default.replace("''", "``")
                field_desc = field_desc.replace("''", "``")

                fields.append(
                    {
                        "name": field_name,
                        "bits": field_bits,
                        "default": field_default,
                        "rw": field_rw,
                        "description": field_desc,
                    }
                )

                data = data[efi + 1:]

            try:
                if '+' in reg_addr:
                    reg_addr_ = reg_addr.split('+')
                    reg_addr_[0] = int(reg_addr_[0], 16)
                    reg_addr_[1] = int(reg_addr_[1].replace('*n',''), 16)
                    reg_addr_dword = f"{hex(reg_addr_[0])} + {hex(reg_addr_[1])}*n"
                    reg_addr_byte = f"{hex(reg_addr_[0]<<2)} + {hex(reg_addr_[1]<<2)}*n"
                else:
                    reg_addr_ = int(reg_addr, 16)
                    reg_addr_dword = f"{hex(reg_addr_)}"
                    reg_addr_byte = f"{hex(reg_addr_<<2)}"
            except Exception:
                warning.append(f"Got malformed register address {reg_addr} for register {reg_name}, file {prefix}/regmap/adi_regmap_{reg}.txt.")
                reg_addr_dword = ""
                reg_addr_byte = ""

            regmap['subregmap'][title_tool]['regmap'].append(
                {
                    'name': reg_name,
                    'address': [reg_addr_dword,    reg_addr_byte],
                    'description': reg_desc,
                    'fields': fields
                }
            )
        regmap['subregmap'][title_tool]['access_type'] = access_type
    return (regmap, warning)


def parse_hdl_component(path: str, ctime: float) -> Dict:
    component = {
        'name': "",
        'bus_interface': {},
        'bus_domain': {},
        'ports': {},
        'parameters': {},
        'ctime': ctime
    }

    def get_namespaces(item):
        nsmap = item.nsmap
        for i in ['spirit', 'xilinx', 'xsi']:
            if i not in nsmap:
                raise Exception(f"Required namespace {i} not in file!")

        return (nsmap['spirit'], nsmap['xilinx'], nsmap['xsi'])

    def get(item, local_name):
        items = get_all(item, local_name)
        if len(items) == 0:
            return None
        else:
            return items[0]

    def get_all(item, local_name: str):
        template = "/*[local-name()='%s']"
        local_name = local_name.split('/')
        return item.xpath('.' + ''.join([template % ln for ln in local_name]))

    def sattrib(item, attr):
        nonlocal spirit
        return item.get(f"{{{spirit}}}{attr}")

    def xattrib(item, attr):
        nonlocal xilinx
        return item.get(f"{{{xilinx}}}{attr}")

    def stag(item):
        nonlocal spirit
        return item.tag.replace(f"{{{spirit}}}", '')

    def xtag(item):
        nonlocal xilinx
        return item.tag.replace(f"{{{xilinx}}}", '')

    def clean_dependency(string):
        expr = r"spirit:decode\(id\(((.*?))\)\)"
        return re.sub(expr, r"\1", string).replace(')', '').replace('(', '')

    def get_dependency(item, type_=None):
        if type_ is None:
            type_ = stag(item)

        dependency = get(item,
                         f"vendorExtensions/{type_}Info/enablement/isEnabled")
        if dependency is None:
            return None
        else:
            return clean_dependency(xattrib(dependency, 'dependency'))

    def get_range(item):
        min_ = sattrib(item, 'minimum')
        max_ = sattrib(item, 'maximum')
        if max_ is None or min_ is None:
            return None
        else:
            return f"From {min_} to {max_}."

    def get_choice_type(name):
        return name[name.find('_')+1:name.rfind('_')]

    def format_default_value(value, fmt):
        if fmt == "bitString" and value[0:2].lower() == "0x":
            return f"'h{value[2:].upper()}"
        if fmt == "bitString" and value[0] == '"' and value[-1] == '"':
            return f"'b{value[1:-1]}"
        if fmt == "bool":
            return value.title()
        return value

    def format_type_value(string, value):
        if string == 'bitString':
            if value[0:2] == "'h":
                return 'Hex'
            else:
                return 'Bits'
        if string == 'long':
            return 'Integer'
        return string

    def merge_sequential(items):
        """
        Merge generated sequencial signals/buses, for example:
        {data_tx_12, data_tx_23_p} -> data_tx_*_p
        {data_phy3, data_phy4} -> data_phy*
        Requires dependency to contain a " > *" with * being the to be merged
        value (e.g "PARAMETER > 12").
        """
        re_expr1 = r"(^|_)([0-9]+)([a-zA-Z]+|_)"  # reversed regex
        re_expr2 = "> {}"
        for key in list(items):
            m = re.search(re_expr1, key[::-1])

            if not bool(m):
                continue

            dep_ = items[key]['dependency']

            if dep_ is None:
                continue

            index = m.group(2)[::-1]
            n = re.search(re_expr2.format(index), dep_)

            if not bool(n):
                continue

            index = int(m.group(2))
            key_ = (re.sub(re_expr1, r"\1*\3", key[::-1]))[::-1]
            if key_ not in items:
                items[key_] = items[key]
                items[key_]['index'] = [index, index]

                dep = items[key_]['dependency']
                if dep is not None:
                    re_dep = f"\\s+({index})(\\s+|$|\\))"
                    m = re.search(re_dep, dep)
                    if bool(m):
                        items[key_]['dependency'] = re.sub(re_dep, " * ", dep)

                if 'port_map' in items[key_]:
                    for inner_key in list(items[key_]['port_map']):
                        inner_key_ = (re.sub(re_expr1, r"\1*\3", inner_key[::-1]))[::-1]
                        if (inner_key_ != inner_key):
                            items[key_]['port_map'][inner_key_] = items[key_]['port_map'][inner_key]
                            del items[key_]['port_map'][inner_key]

            else:
                if index < items[key_]['index'][0]:
                    items[key_]['index'][0] = index
                if index > items[key_]['index'][1]:
                    items[key_]['index'][1] = index

            del items[key]

    root = etree.parse(path).getroot()
    spirit, xilinx, _ = get_namespaces(root)
    name = get(root, 'name').text

    component['name'] = name
    bs = component['bus_interface']
    dm = component['bus_domain']
    for bus_interface in get_all(root, 'busInterfaces/busInterface'):
        bus_name = get(bus_interface, 'name').text
        if '_signal_clock' in bus_name:
            signal_name = get(get(bus_interface, 'portMaps/portMap'), 'physicalPort/name').text
            if signal_name not in dm:
                dm[signal_name] = []
            dm[signal_name].append(bus_name[0:bus_name.find('_signal_clock')])
            continue
        if '_signal_reset' in bus_name:
            signal_name = get(get(bus_interface, 'portMaps/portMap'), 'physicalPort/name').text
            if signal_name not in dm:
                dm[signal_name] = []
            dm[signal_name].append(bus_name[0:bus_name.find('_signal_reset')])
            continue

        if get(bus_interface, 'slave') is not None:
            bus_role = 'slave'
        elif get(bus_interface, 'master') is not None:
            bus_role = 'master'
        else:
            bus_role = None

        bs[bus_name] = {
            'name': sattrib(get(bus_interface, 'busType'), 'name'),
            'role': bus_role,
            'dependency': get_dependency(bus_interface, 'busInterface'),
            'port_map': {}
        }

        pm = bs[bus_name]['port_map']
        for port_map in get_all(bus_interface, 'portMaps/portMap'):
            pm[get(port_map, 'physicalPort/name').text] = {
                'logical_port': get(port_map, 'logicalPort/name').text,
                'direction': ''
            }

    lport = component['ports']
    for port in get_all(root, 'model/ports/port'):
        port_name = get(port, 'name').text
        port_direction = get(port, 'wire/direction').text
        port_left = get(port, 'wire/vector/left')
        port_right = get(port, 'wire/vector/right')

        if port_left is not None and port_right is not None:
            port_direction += f" [{port_left.text}:{port_right.text}]"

        dependency = get_dependency(port, 'port')

        found = False
        for bus in bs:
            if port_name in bs[bus]['port_map']:
                found = True
                bs[bus]['port_map'][port_name]['direction'] = port_direction
                # portInfo dependency is more complete than busInterfaceInfo
                if dependency is not None:
                    bs[bus]['dependency'] = dependency
                break

        if found is False:
            lport[port_name] = {
                'direction': port_direction,
                'dependency': dependency
            }

    merge_sequential(lport)
    merge_sequential(bs)

    pr = component['parameters']
    for parameter in get_all(root, 'parameters/parameter'):
        param_description = get(parameter, 'displayName')
        if param_description is not None:
            param_name = get(parameter, 'name').text
            param_value = get(parameter, 'value')
            param_format = sattrib(param_value, 'format')
            param_default = format_default_value(param_value.text, param_format)
            pr[param_name] = {
                'description': param_description.text,
                'default': param_default,
                'type': format_type_value(param_format, param_default),
                '_choice_ref': sattrib(param_value, 'choiceRef'),
                'choices': None,
                'range': get_range(param_value)
            }

    for parameter in get_all(root, 'model/modelParameters/modelParameter'):
        param_name = get(parameter, 'name').text
        param_type = sattrib(parameter, 'dataType')
        if param_type == "std_logic_vector":
            param_type = "logic vector"
        if param_type is not None and param_name in pr:
            if pr[param_name]['type'] is None:
                pr[param_name]['type'] = param_type.capitalize()
            else:
                param_format = pr[param_name]['type']
                pr[param_name]['type'] = param_format[0].upper()+param_format[1:]

    for choice in get_all(root, 'choices/choice'):
        name = get(choice, 'name').text
        for key in pr:
            if pr[key]['_choice_ref'] == name:
                type_ = get_choice_type(name)
                values = get_all(choice, 'enumeration')
                string = []
                if type_ == 'pairs':
                    for v in values:
                        string.append(f"{sattrib(v, 'text')} ({v.text})")
                elif type_ == 'list':
                    for v in values:
                        string.append(v.text)
                else:
                    break
                pr[key]['choices'] = ', '.join(string)
                break

    return component

def parse_hdl_build_status(file: str) -> Tuple[List, int, List[str]]:
    warning = []

    if not os.path.isfile(file):
        warning.append(f"File {file} doesn't exist!")
        return ([], None, warning)

    with open(file, "r") as f:
        data = f.readlines()

    if data[3][0:35] != '| Project | Build number | Status |' \
        or data[4][0:25] != '| --- | --- | --- | --- |' \
        or data[-1][0:11] != '# Finished:':
        warning.append(f"Malformed build status file {file}.")
        return ([], None, warning)

    try:
        s = 'build number'
        build_number = int(data[0][data[0].find(s)+len(s)+1:])
    except:
        build_number = -1
        warning.append(f"Couldn't get the build number from the first line of {file}.")

    project = []
    for i in range (5, len(data) - 2):
        split = data[i].split('|')
        if len(split) < 4:
            warning.append(f"Malformed line at {file}:{i}.")
            continue

        project.append([split[1].strip(), 0 if split[3].strip() == "SUCCESS" else 1])

    return (project, build_number, warning)
