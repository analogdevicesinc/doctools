from typing import List, Tuple, Dict

import re
import os
import contextlib
from lxml import etree

from ..directive.string import string_hdl


def parse_hdl_regmap(ctime: float, file: str) -> Tuple[Dict, List[str]]:
    """
    From https://github.com/tfcollins/vger/blob/main/vger/hdl_reg_map.py
    Added methods:
    * USING: import regs and fields from other regmap.
    * WHERE n IS FROM {} to {}: set a repetition pattern for regs and fields.
    """
    regmap = {
        'subregmap': {},
        'owners': [],
        'ctime': ctime
    }
    warning = []

    def get_where(desc: str, warn: List, reg: str, fi=None) -> Tuple[any]:
        re_expr = r"FROM ([0-9]+) TO ([0-9]+)$"

        m = re.search(re_expr, desc)
        if not bool(m):
            if fi is not None:
                warn.append(f"Malformed where {desc} in field bits {fi} "
                            f"at reg {reg}!")
            else:
                warn.append(f"Malformed where {desc} in reg address "
                            f"{reg}!")

            return ''

        if not m.group(1).isdigit() or not m.group(2).isdigit():
            warn.append(f"Non-numerals in where {desc} in reg address "
                        f"{reg}!")
            return ''

        return (f" Where n is from {m.group(1)} to {m.group(2)}.",
                (int(m.group(1)), int(m.group(2))+1))

    if not os.path.isfile(file):
        warning.append(f"File {file} doesn't exist!")
        return (regmap, warning)

    with open(file, "r") as f:
        data = f.readlines()
    data = [d.replace("\n", "") for d in data]

    while "TITLE" in data:
        # Get title
        tit = data.index("TITLE")
        if data[tit + 1].startswith('USING'):
            using = data[tit + 1][6:]
            tit += 1
            if len(using) == 0:
                warning.append("Malformed using in title entry, skipped!")
                continue
        else:
            using = None

        title = str(data[tit + 1])
        title_tool = str(data[tit + 2])
        data = data[tit + 2:]

        if 'ENDTITLE' in [title_tool, title]:
            warning.append("Malformed title entry, skipped!")
            continue

        regmap['subregmap'][title_tool] = {
            'title': title,
            'using': using,
            'regmap': [],
            'access_type': []
        }

        # Get registers
        access_type = []
        while "REG" in data:
            regi = data.index("REG")
            rfi = data.index("ENDREG")
            reg_deps = []

            if not regi:
                break

            reg_where = None
            if data[regi + 1].startswith("0x"):
                reg_import = False

                reg_addr = data[regi + 1]

                reg_d = data[regi + 2]
                where_desc = ''
                if reg_d.startswith("WHERE n IS"):
                    where_desc, reg_where = get_where(reg_d[10:], warning,
                                                      reg_addr)
                    regi = regi + 1

                reg_name = data[regi + 2]
                reg_desc = [data[f_] for f_ in range(regi + 3, rfi)]
                reg_desc = " ".join(reg_desc) + where_desc
                try:
                    if '+' in reg_addr:
                        reg_addr = reg_addr.split('+')
                        if reg_addr[1].strip() == 'n':
                            reg_addr_incr = 1
                        else:
                            reg_addr_incr = int(reg_addr[1].replace('*n', ''),
                                                16)
                        reg_addr = int(reg_addr[0], 16)
                        if where_desc == '':
                            warning.append(f"Ranged addr {reg_addr} without "
                                           f"where method at {reg_name}!")
                    else:
                        reg_addr = int(reg_addr, 16)
                        reg_addr_incr = 0
                        if where_desc != '':
                            warning.append(f"Static addr {reg_addr} "
                                           f"with where method at {reg_name}!")
                except Exception:
                    warning.append(f"Malformed register address {reg_addr} "
                                   f"for register {reg_name}.")
                    reg_addr = 0
                    reg_addr_incr = 0
            else:
                reg_import = True
                reg_addr = 0
                reg_addr_incr = 0
                reg_name = data[regi + 1]
                reg_desc = None
                reg_deps = []

            with contextlib.suppress(ValueError):
                tet = data.index("TITLE") if "TITLE" in data else -1
                if tet != -1:
                    if regi > tet:
                        # into next regmap
                        break
            data = data[rfi + 1:]

            # Get fields
            fields = []
            while "FIELD" in data:
                fi = data.index("FIELD")
                efi = data.index("ENDFIELD")

                if not fi:
                    break

                with contextlib.suppress(ValueError):
                    if "REG" in data:
                        rege = data.index("REG")
                    else:
                        rege = -1
                    if rege != -1 and fi > rege:
                        # into next register
                        break
                if data[fi + 1].startswith('['):
                    field_where = None
                    field_import = False
                    field_loc = data[fi + 1]
                    field_loc = field_loc.split(" ")
                    field_bits = field_loc[0].replace("[", "").replace("]", "")
                    if field_bits != 'n':
                        delimiters = ["+", "-", "*", "/"]
                        if ':' in field_bits:
                            bits_ = field_bits.split(':')
                        else:
                            bits_ = [field_bits, field_bits]
                        try:
                            bit0_ = int(bits_[0])
                        except Exception:
                            bit0_ = bits_[0]
                            bit_str = bit0_
                            for delimiter in delimiters:
                                bit_str = " ".join(bit_str.split(delimiter))
                            for str_part in bit_str.split():
                                try:
                                    bit_tmp = int(str_part)
                                except Exception:
                                    reg_deps.append(str_part)
                        try:
                            bit1_ = int(bits_[1])
                        except Exception:
                            bit1_ = bits_[1]
                            bit_str = bit1_
                            for delimiter in delimiters:
                                bit_str = " ".join(bit_str.split(delimiter))
                            for str_part in bit_str.split():
                                try:
                                    bit_tmp = int(str_part)
                                except Exception:
                                    reg_deps.append(str_part)
                        field_bits = (bit0_, bit1_)

                    if len(field_loc) > 1:
                        field_default = ' '.join(field_loc[1:])
                        try:
                            fd_ = int(field_default, 16)
                            if type(field_bits) is tuple:
                                len_f = (field_bits[0] - field_bits[1] + 1)
                                len_d = len(bin(fd_)[2:])
                                if len_d > len_f:
                                    warning.append("Default value "
                                                   f"'{field_default}' "
                                                   f"overflows field width "
                                                   f"{field_loc[0]} at reg "
                                                   f"'{reg_name}'!")
                            field_default = fd_

                        except Exception:
                            # Convert parameter delimiter into Sphinx literal
                            field_default = field_default.replace("''", "``")

                            if "0xX" not in field_default:
                                default_str = field_default
                                default_str = default_str.replace("``", "")
                                default_str = default_str.replace("log2", "")
                                default_str = default_str.replace("max", "")
                                default_str = default_str.replace("min", "")
                                delimiters = ["+", "-", "*", "/", "^", "(", ")", ","]
                                for delimiter in delimiters:
                                    default_str = " ".join(default_str.split(delimiter))
                                for str_part in default_str.split():
                                    try:
                                        default_tmp = int(str_part)
                                    except Exception:
                                        reg_deps.append(str_part)
                    else:
                        field_default = None

                    fi_d = data[fi + 2]
                    where_desc = ''
                    if fi_d.startswith("WHERE n IS"):
                        where_desc, field_where = get_where(fi_d[10:], warning,
                                                            reg_name, field_bits)
                        fi = fi + 1
                        if field_bits != 'n':
                            warning.append("Where method with field bits "
                                           f"{field_loc[0]} instead of n "
                                           f"at reg '{reg_name}'!")
                    elif field_bits == 'n':
                        warning.append("No where method for ranged field "
                                       f"n at reg '{reg_name}'!")

                    field_name = data[fi + 2]
                    field_name = field_name.replace("/", "or")
                    field_rw = data[fi + 3]

                    if field_rw == 'R':
                        field_rw = 'RO'
                    elif field_rw == 'W':
                        field_rw = 'WO'
                    if '-V' in field_rw:
                        if 'V' not in access_type:
                            access_type.append('V')
                    field_rw_ = field_rw.replace('-V', '')
                    if field_rw_ not in access_type:
                        if field_rw_ not in string_hdl.access_type:
                            warning.append(f"Malformed access type {field_rw} "
                                           f"for reg {field_name}")
                        else:
                            access_type.append(field_rw)

                    field_desc = [data[f_] for f_ in range(fi + 4, efi)]
                    field_desc = " ".join(field_desc) + where_desc

                    field_desc = field_desc.replace("''", "``")
                    fields.append({
                        "import": field_import,
                        "where": field_where,
                        "name": field_name,
                        "bits": field_bits,
                        "default": field_default,
                        "rw": field_rw,
                        "description": field_desc,
                    })
                else:
                    for i in range(fi + 1, efi):
                        field_name = data[i]
                        fields.append({
                            "import": True,
                            "where": None,
                            "name": data[i],
                            "bits": None,
                            "default": None,
                            "rw": None,
                            "description": None,
                        })

                data = data[efi + 1:]

            if len(reg_deps):
                reg_deps_set = set(reg_deps)
                reg_deps = list(reg_deps_set)
                reg_deps.sort()
            regmap['subregmap'][title_tool]['regmap'].append(
                {
                    'import': reg_import,
                    'where': reg_where,
                    'name': reg_name,
                    'address': reg_addr,
                    'addr_incr': reg_addr_incr,
                    'description': reg_desc,
                    'fields': fields,
                    'dependencies': reg_deps
                }
            )
        regmap['subregmap'][title_tool]['access_type'] = access_type

    return (regmap, warning)


def resolve_hdl_regmap(rm: Dict) -> List[str]:
    """
    Resolve imported registers and fields at regmaps with the "USING" method.
    parse_hdl_regmap must be called first.
    """
    warning = []

    def patch_field(r, p, r_, p_name):
        for i, j in enumerate(r):
            if j['import']:
                for p_ in p:
                    if j['name'] == p_['name']:
                        r[i] = p_.copy()
            if r[i]['import']:
                warning.append(f"Field {j['name']} in reg {p_name} "
                               f"from import {r_} not found!")

    def patch_reg(r, p, r_):
        for j in r:
            if j['import']:
                for p_ in p:
                    if j['name'] == p_['name']:
                        j['import'] = False
                        j['address'] = p_['address']
                        j['description'] = p_['description']
                        patch_field(j['fields'], p_['fields'], r_, p_['name'])
            if j['import']:
                warning.append(f"Reg {j['name']} in import {r_} not found!")

    def resolve(r):
        using = None
        if r['using'] is not None:
            for i in rm:
                for k in rm[i]['subregmap']:
                    if r['using'] == k:
                        using = rm[i]['subregmap'][k]
                        break
            if using is None:
                warning.append(f"Couldn't find regmap '{r['using']}'!")

        if using is not None:
            patch_reg(r['regmap'], using['regmap'], r['using'])
            r['using'] = None

    for i in rm:
        for k in rm[i]['subregmap']:
            resolve(rm[i]['subregmap'][k])

    return warning


def expand_hdl_regmap(rm: Dict) -> List[str]:
    """
    Expand registers and fields with the "WHERE n IS FROM {} TO {}" method.
    resolve_hdl_regmap must be called first.
    This method is not called in the doc generation to avoid clutter.
    """
    warning = []

    def expand_fields(regmap):
        for r in regmap['regmap']:
            expanded = []
            for f in r['fields']:
                if f['where'] is not None:
                    for n in range(*f['where']):
                        f_ = f.copy()
                        f_['name'] = f_['name'].replace('n', str(n))
                        f_['bits'] = (n, n)
                        expanded.append(f_)
                else:
                    expanded.append(f)
            r['fields'] = expanded

    def expand_registers(regmap):
        expanded = []
        for r in regmap['regmap']:
            if r['where'] is not None:
                for n in range(*r['where']):
                    r_ = r.copy()
                    r_['name'] = r_['name'].replace('n', str(n))
                    r_['address'] = r_['addr_incr'] * n
                    r_['addr_incr'] = 0
                    expanded.append(r_)
            else:
                expanded.append(r)

        regmap['regmap'] = expanded

    for i in rm:
        for k in rm[i]['subregmap']:
            expand_fields(rm[i]['subregmap'][k])

    return warning


def parse_hdl_component(path: str, ctime: float, owners: List = []) -> Dict:
    component = {
        'name': "",
        'bus_interface': {},
        'bus_domain': {},
        'ports': {},
        'parameters': {},
        'ctime': ctime,
        'owners': owners.copy()
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
        Merge generated sequencial signals/buses ending with
        _[qi]?([0-9]+)$ or _([0-9]+)_[pn]$ or _phy([0-9]+)$,
        for example:
          {data_tx_12_p, data_tx_23_p} -> data_tx_*_p
          {data_tx_12, data_tx_23} -> data_tx_*
          {adc_data_i0, adc_data_i0} -> adc_data_i*
          {adc_data_q0, adc_data_q0} -> adc_data_q*
          {rx_phy2, rx_phy4} -> rx_phy*
        However, do not create new IP using _phy*, instead use _*, e.g. phy_*.
        """
        re_expr = r"^([pn]_)?([0-9]+)([iq]|yhp)?(_.*)"  # reversed regex
        for key in list(items):
            m = re.search(re_expr, key[::-1])

            if not bool(m):
                continue

            index = m.group(2)[::-1]

            key_ = re.sub(re_expr, r"\1*\3\4", key[::-1])[::-1]
            if key_ not in items:
                items[key_] = items[key]
                items[key_]['index'] = [index, index]

                re_dep = f"\\s+({index})(\\s+|$|\\))"
                if items[key_]['dependency'] is not None:
                    items[key_]['dependency'] = re.sub(re_dep, " * ", items[key_]['dependency'])

                if 'port_map' in items[key_]:
                    pm = items[key_]['port_map']
                    for k in pm:
                        if pm[k]['dependency'] is not None:
                            m = re.search(re_dep, pm[k]['dependency'])
                            if bool(m):
                                pm[k]['dependency'] = re.sub(re_dep, " * ", pm[k]['dependency'])

                    for inner_key in list(items[key_]['port_map']):
                        inner_key_ = (re.sub(re_expr, r"\1*\3", inner_key[::-1]))[::-1]
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
                'direction': None,
                'dependency': None,
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
                bs[bus]['port_map'][port_name]['dependency'] = dependency
                # Can't break because the port_name might be used in more than
                # one bus, e.g. BUS0 enabled if CFG=1 and BUS 2 if CFG=1.

        if found is False:
            lport[port_name] = {
                'direction': port_direction,
                'dependency': dependency,
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
