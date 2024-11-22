from typing import TypedDict, Optional, List, Tuple, Dict

import re
import contextlib
from lxml import etree
from os import path
from sphinx.util import logging

from ..typing.hdl import Intf, IntfPort
from ..typing.hdl import Library, LibraryVendor
from ..typing.hdl import Project
from ..directive.string import string_hdl
from .tcl import tcl

logger = logging.getLogger(__name__)


def parse_hdl_regmap(ctime: float, file: str) -> Dict:
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

    def get_where(desc: str, reg: str, fi=None) -> Tuple[any]:
        re_expr = r"FROM ([0-9]+) TO ([0-9]+)$"

        m = re.search(re_expr, desc)
        if not bool(m):
            if fi is not None:
                logger.warning(f"Malformed where {desc} in field bits {fi} "
                               f"at reg {reg}!")
            else:
                logger.warning(f"Malformed where {desc} in reg address "
                               f"{reg}!")

            return ''

        if not m.group(1).isdigit() or not m.group(2).isdigit():
            logger.warning(f"Non-numerals in where {desc} in reg address "
                           f"{reg}!")
            return ''

        return (f"Where n is from {m.group(1)} to {m.group(2)}.",
                (int(m.group(1)), int(m.group(2))+1))

    if not path.isfile(file):
        logger.warning(f"{file}: File doesn't exist!")
        return regmap

    with open(file, "r") as f:
        data = f.readlines()
    data = [d.replace("\n", "") for d in data]

    using = []
    while "TITLE" in data:
        # Get title
        tit = data.index("TITLE")
        if data[tit + 1].startswith('USING'):
            while data[tit + 1].startswith('USING'):
                using_ = data[tit + 1][6:].strip()
                tit += 1
                if len(using_) == 0:
                    logger.warning("Malformed using in title entry, skipped!")
                    continue
                using.append(using_)

        title = str(data[tit + 1]).strip()
        title_tool = str(data[tit + 2])
        data = data[tit + 2:]

        if 'ENDTITLE' in [title_tool, title]:
            logger.warning("Malformed title entry, skipped!")
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
            reg_params = []

            if not regi:
                break

            reg_where = None
            if data[regi + 1].startswith("0x"):
                reg_import = False

                reg_addr = data[regi + 1]

                reg_d = data[regi + 2]
                where_desc = ''
                if reg_d.startswith("WHERE n IS"):
                    where_desc, reg_where = get_where(reg_d[10:], reg_addr)
                    regi = regi + 1

                reg_name = data[regi + 2].strip()
                reg_desc = [data[f_].replace("''", "``") for f_ in range(regi + 3, rfi)]
                if where_desc != "":
                    reg_desc.append(where_desc)

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
                            logger.warning(f"Ranged addr {reg_addr} without "
                                           f"where method at {reg_name}!")
                    else:
                        reg_addr = int(reg_addr, 16)
                        reg_addr_incr = 0
                        if where_desc != '':
                            logger.warning(f"Static addr {reg_addr} "
                                           f"with where method at {reg_name}!")
                except Exception:
                    logger.warning(f"Malformed register address {reg_addr} "
                                   f"for register {reg_name}.")
                    reg_addr = 0
                    reg_addr_incr = 0
            else:
                reg_import = True
                reg_addr = 0
                reg_addr_incr = 0
                reg_name = data[regi + 1].strip()
                reg_desc = None
                reg_params = []

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

                if efi < fi:
                        logger.warning(f"Got ENDFIELD without FIELD "
                                       f"for register {reg_name}.")

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
                    field_loc = field_loc.split()
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
                                    reg_params.append(str_part)
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
                                    reg_params.append(str_part)
                        field_bits = (bit0_, bit1_)

                    if len(field_loc) > 1:
                        field_default = ' '.join(field_loc[1:])
                        field_default_long = ' '.join(field_loc[1:])
                        try:
                            fd_ = int(field_default, 16)
                            if type(field_bits) is tuple:
                                len_f = (field_bits[0] - field_bits[1] + 1)
                                len_d = len(bin(fd_)[2:])
                                if len_d > len_f:
                                    logger.warning("Default value "
                                                   f"'{field_default}' "
                                                   f"overflows field width "
                                                   f"{field_loc[0]} at reg "
                                                   f"'{reg_name}'!")
                            field_default = fd_
                            field_default_long = fd_

                        except Exception:
                            split_field = field_default.split(" = ", 2)
                            if "''" in field_default:
                                logger.warning("Default value "
                                               f"'{field_default}' "
                                               f"contains ''!")
                            field_default = split_field[0].replace("''", "")
                            field_default_long = field_default

                            if "0xX" not in field_default:
                                try:
                                    default_str = split_field[1]
                                    field_default_long = split_field[1]
                                    field_default = f"{split_field[0]}"
                                except Exception:
                                    default_str = split_field[0]
                                default_str = re.sub("`[A-Z0-9_]+", "", default_str)
                                default_str = re.findall("[A-Z0-9_]+", default_str)
                                for str_part in default_str:
                                    try:
                                        int(str_part)
                                    except Exception:
                                        reg_params.append(re.sub('\\[[0-9:]+\\]', ' ', str_part))
                                        # TODO: Match parse_hdl_library extracted parameters
                    else:
                        field_default = None
                        field_default_long = None

                    fi_d = data[fi + 2]
                    where_desc = ''
                    if fi_d.startswith("WHERE n IS"):
                        where_desc, field_where = get_where(fi_d[10:], reg_name,
                                                            field_bits)
                        fi = fi + 1
                        if field_bits != 'n':
                            logger.warning("Where method with field bits "
                                           f"{field_loc[0]} instead of n "
                                           f"at reg '{reg_name}'!")
                    elif field_bits == 'n':
                        logger.warning("No where method for ranged field "
                                       f"n at reg '{reg_name}'!")

                    field_name = data[fi + 2].strip()
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
                    field_rw = field_rw.replace('-V', 'V')
                    if field_rw_ not in access_type:
                        if field_rw_ not in string_hdl.access_type:
                            logger.warning(f"Malformed access type {field_rw} "
                                           f"for reg {field_name}")
                        else:
                            access_type.append(field_rw)

                    field_desc = [data[f_].replace("''", "``") for f_ in range(fi + 4, efi)]
                    if where_desc != '':
                        field_desc.append(where_desc)
                    if field_default_long is not None and field_default_long != field_default:
                        field_desc.append(f"``{field_default} = {field_default_long}``")

                    fields.append({
                        "import": field_import,
                        "where": field_where,
                        "name": field_name,
                        "bits": field_bits,
                        "default": field_default,
                        "default_long": field_default_long,
                        "rw": field_rw,
                        "description": field_desc,
                    })
                else:
                    for i in range(fi + 1, efi):
                        if any(c in data[i] for c in ('[', ']')) or len(data[i]) == 1:
                            logger.warning(f"Suspicious imported field '{data[i]}' "
                                           f"at imported field group at reg {reg_name}!")
                        fields.append({
                            "import": True,
                            "where": None,
                            "name": data[i].strip(),
                            "bits": None,
                            "default": None,
                            "default_long": None,
                            "rw": None,
                            "description": None,
                        })

                data = data[efi + 1:]

            if len(reg_params):
                reg_params_set = set(reg_params)
                reg_params = list(reg_params_set)
                reg_params.sort()
            regmap['subregmap'][title_tool]['regmap'].append(
                {
                    'import': reg_import,
                    'where': reg_where,
                    'name': reg_name,
                    'address': reg_addr,
                    'addr_incr': reg_addr_incr,
                    'description': reg_desc,
                    'fields': fields,
                    'parameters': reg_params
                }
            )
        regmap['subregmap'][title_tool]['access_type'] = access_type

    return regmap


def resolve_hdl_regmap(rm: Dict) -> None:
    """
    Resolve imported registers and fields at regmaps with the "USING" method.
    parse_hdl_regmap must be called first.
    """

    def patch_field(r, p, r_, p_name):
        for i, j in enumerate(r):
            if j['import']:
                for p_ in p:
                    if j['name'] == p_['name']:
                        r[i] = p_.copy()
                        break
                else:
                    logger.warning(f"Field {j['name']} in reg {p_name} "
                                   f"from import {r_} not found!")

    def patch_reg(r, p, r_):
        def patch_reg_(j, p):
            for p_ in p['regmap']:
                if j['name'] == p_['name']:
                    j['import'] = False
                    j['where'] = p_['where']
                    j['address'] = p_['address']
                    j['addr_incr'] = p_['addr_incr']
                    j['description'] = p_['description']
                    patch_field(j['fields'], p_['fields'], r_, p_['name'])
                    return True
            return False

        for j in r:
            if j['import']:
                # The imported register may have two formats:
                # * implicit, no period (e.g. CTRL):
                #   search all imported register maps
                # * explicit, w/ period (e.g. COMMON.CTRL):
                #   left side is the regmap key, and the right side the reg key
                idx = j['name'].find('.')
                if idx != -1:
                    p_ = j['name'][:idx]
                    j['name'] = j['name'][idx+1:]
                    if p_ in p:
                        patch_reg_(j, p[p_])
                else:
                    for p_ in p:
                        if patch_reg_(j, p[p_]):
                            break
            if j['import']:
                logger.warning(f"Reg {j['name']} in import {r_} not found!")

    def resolve(r):
        using = {}
        for use in r['using']:
            use_ = None
            for i in rm:
                for k in rm[i]['subregmap']:
                    if use == k:
                        use_ = rm[i]['subregmap'][k]
                        break
                else:
                    continue
                break
            if use_ is None:
                logger.warning(f"Couldn't find regmap '{use}'!")
            else:
                using[k] = use_

        patch_reg(r['regmap'], using, r['using'])
        r['using'] = []

    for i in rm:
        for k in rm[i]['subregmap']:
            resolve(rm[i]['subregmap'][k])

    return


def expand_hdl_regmap(rm: Dict) -> None:
    """
    Expand fields with the "WHERE n IS FROM {} TO {}" method.
    resolve_hdl_regmap must be called first.
    This method is not called in the doc generation to avoid clutter.
    Register expansion is done in the SV PKG writer.
    """

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

    for i in rm:
        for k in rm[i]['subregmap']:
            expand_fields(rm[i]['subregmap'][k])

    return


def parse_hdl_component(file: str, ctime: float, owners: List = []) -> Dict:
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

    root = etree.parse(file).getroot()
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

    if not path.isfile(file):
        logger.warning(f"File {file} doesn't exist!")
        return ([], None)

    with open(file, "r") as f:
        data = f.readlines()

    if data[3][0:35] != '| Project | Build number | Status |' \
        or data[4][0:25] != '| --- | --- | --- | --- |' \
        or data[-1][0:11] != '# Finished:':
        logger.warning(f"Malformed build status file {file}.")
        return ([], None)

    try:
        s = 'build number'
        build_number = int(data[0][data[0].find(s)+len(s)+1:])
    except Exception as e:
        build_number = -1
        logger.warning("Couldn't get the build number from the first line "
                       f"of '{file}', exception: {e}.")

    project = []
    for i in range(5, len(data) - 2):
        split = data[i].split('|')
        if len(split) < 4:
            logger.warning(f"Malformed line at {file}:{i}.")
            continue

        project.append([split[1].strip(), 0 if split[3].strip() == "SUCCESS" else 1])

    return (project, build_number)


def parse_hdl_vendor(
    file: str
) -> Tuple[Tuple[str], List[str]]:
    """
    Obtain the carrier from the project vendor file.
    """
    obj = set()
    if not path.isfile(file):
        return ((), ["File doesn't exist!"])

    with open(file, "r") as f:
        data = f.readlines()

    for line in data:
        line = ' '.join(line.split())
        if line.startswith("if [regexp \""):
            m = re.search("if \\[regexp \"_(\\w+)\" \\$project_name", line)
            if not bool(m):
                continue
            obj.add(m.group(1))

    return (tuple(obj), [])


def parse_hdl_library(
    file: str,
) -> Tuple[Optional[LibraryVendor], Optional[str], Optional[str]]:
    """
    Obtain the library dependencies and interfaces from the library file.
    Vendor agnostic, even though we use:
    * adi_ip_files: xilinx
    * ad_ip_file: intel
    Would be better to switch to the same method in the future.
    """
    # library/my_ip/my_ip_monitor/my_ip_monitor_glue_ip.tcl
    # ip_name:   my_ip_monitor_glue (ip inventory (unique per vendor))
    # path_: my_ip/my_ip_monitor (makefile dep (global unique))
    basename = path.basename(file)
    ip_name = basename[:basename.rfind("_")]
    ip_name_ = path.basename(path.dirname(file))
    if ip_name != ip_name_:
        logger.warning(f"{file}: Path basename does not match filename format.")

    idx = file.find('library')
    if idx != -1:
        path_ = path.dirname(file)[idx+8:]
    else:
        logger.warning(f"'library' not found in path to extract long name'")
        return (None, None, None)

    if not path.isfile(file):
        logger.warning("File doesn't exist!")
        return (None, None, None)

    tcl_ = tcl(file)

    # Check library name against ip_name
    for line in tcl_:
        for m in ['adi_ip_create', 'ad_ip_create']:
            if line.startswith(m):
                line_ = line.split()
                if ip_name != line_[1]:
                    logger.warning(f"{file}: '{m}' IP name '{line_[1]}' does not "
                                   f"match name '{ip_name}', line {i}")
            break

    # Obtain the file dependencies and top module candidate
    deps = set()
    line = tcl_.line_startswith(["adi_ip_files", "ad_ip_files"])
    if line is None:
        line = tcl_.line_startswith("add_files ")
        top_mod_ = None
    else:
        top_mod_ = line.split()[1]

    if line is not None:
        deps.update(tcl.get_list_items(line))

    for line in tcl_:
        if (line.startswith('add_fileset_file')):
            line_ = line.split()
            if len(line_) >= 5:
                deps.add(line_[4])

    if top_mod_ == None:
        logger.warning(f"{file}: Unable to find top module name for library "
                       f"'{ip_name}', will use the lib name instead.")
        top_mod_ = ip_name

    # Add itself as a dependency
    deps.add(path.basename(file))

    # Obtain the library dependencies
    lib_deps = tcl_.in_method_match("analog\\.com:\\$VIVADO_IP_LIBRARY:(\\w+)",
                                    "adi_ip_add_core_dependencies")

    # Obtain the interface dependencies
    intf = tcl_.in_method_match("analog\\.com:(?:interface|user):(\\w+)",
                                "adi_add_bus")

    # Remove _rtl suffixed
    intf = [e for e in intf if not e.endswith('_rtl')]

    # Find top module name with type
    top_mod = None
    for d in deps:
        if d.startswith(top_mod_) and d[len(top_mod_):] in [".v", ".sv"]:
            top_mod = d
            break

    # Obtain parameters from the top module
    def get_parameters(mod):
        f = path.join(path.dirname(file), mod)
        if not path.isfile(f):
            logger.warning(f"{file}: Top module '{f}' from library '{ip_name}'"
                           " does not exist")
            return None

        with open(f, "r") as f_:
            data = f_.readlines()

        for i, line in enumerate(data):
            if line.strip().startswith("module "):
                break

        if i == len(data) - 1:
            logger.warning(f"{file}: Failed to find 'module' in '{f}'")
            return None

        data = data[i+1:]
        params = []
        for j, line in enumerate(data):
            line = line.strip()
            if line.startswith("parameter "):
                line = re.sub('\\[[0-9:]+:[0-9]+\\]', '', line)
                idx = line.index('=')
                line = [line[:idx], line[idx+1:].strip()]
                if len(line) != 2:
                    logger.warning(f"{file}: Malformed parameter at line {i+j+2} of module '{f}'")
                    continue
                name = line[0].split()[-1]
                value = line[1].replace(',', '')

                params.append((name, value))

            elif line.startswith(')') and line.endswith('('):
                break

        return tuple(params)


    if top_mod is not None:
        param = get_parameters(top_mod)
    else:
        param = None
        logger.warning(f"{file}: Failed to find top module for IP '{ip_name}'")

    # Obtain parameters from the top module
    def get_parameters_ttcl(mod):
        f = path.join(path.dirname(file), mod)
        if not path.isfile(f):
            logger.warning(f"{file}: TTcl '{f}' from library '{ip_name}' does not exist")
            return None

        with open(f, "r") as f_:
            data = f_.readlines()

        param = set()
        for i, line in enumerate(data):
            line = line.split()
            m = "MODELPARAM_VALUE."
            if len(line) == 6 and line[4].startswith(m):
                line = line[4][len(m):-1]
                param.add(line)

        return tuple(param)

    # Find pkg_sv-ttcl, if any
    pkg_sv_ttcl = f"{top_mod_}_pkg_sv.ttcl"
    if pkg_sv_ttcl in deps:
        param_ttcl = get_parameters_ttcl(pkg_sv_ttcl)
    else:
        param_ttcl = None

    if param_ttcl is not None and param is not None:
        # compare
        params_ = [p[0] for p in param]
        for p in param_ttcl:
            if p not in params_:
                logger.warning(f"{file}: Parameter '{p}' in the '{pkg_sv_ttcl}'"
                               f" file not found in the top module '{top_mod}'")
        pass

    obj = LibraryVendor(
        dependencies=tuple(deps),
        library_dependencies=tuple(lib_deps),
        interfaces=tuple(intf),
        parameters=param
    )
    return (obj, path_, ip_name)


def resolve_hdl_library(
    libraries: Dict[str, Library],
    key: str,
    intf_lut: Intf,
) -> None:
    """
    Resolve a library by extracting generic dependencies, resolving paths
    and checking interfaces
    """
    library = libraries[key]

    # Filter generic deps, if:
    # * more than one vendor, the generic files are the intersection
    # * a single vendor, mark as generic if common endings and no vendor name
    deps = {}
    if len(library['vendor']) > 1:
        for v in library['vendor']:
            deps[v] = set(library['vendor'][v]['dependencies'])
        deps['generic'] = set.intersection(*[deps[v] for v in deps])
    else:
        v = list(library['vendor'].keys())[0]
        deps['generic'] = set()
        deps[v] = set()
        for dep in library['vendor'][v]['dependencies']:
            if (dep.endswith(('.v', '.vh', '.vhd', '.sv', 'tcl')) and not
                dep.endswith(('_ip.tcl', '_hw.tcl')) and
                v  not in dep):
                deps['generic'].add(dep)
            else:
                deps[v].add(dep)

    # Expand $ad_hdl_dir and make it relative
    for v in deps:
        for k in deps[v]:
            if k.startswith('$ad_hdl_dir/'):
                lib_path = path.join('library', key)
                relpath = path.relpath(k[12:], lib_path)
                deps[v].add(relpath)
                deps[v].remove(k)

    for v in library['vendor']:
        deps_ = deps[v] - deps['generic']
        library['vendor'][v]['dependencies'] = tuple(sorted(deps_))
    deps_ = tuple(deps['generic'])
    library['generic']['dependencies'] = tuple(sorted(deps_))


    # Find path (relative to hdl/library) of library dependencies
    def resolve_lib_dep(dep):
        for lib in libraries:
            if v in libraries[lib]['vendor']:
                if libraries[lib]['name'] == dep:
                    return lib
        logger.warning(f"Library dependency key '{dep}' not found!")
        return dep
    for v in library['vendor']:
        lib_deps = set()
        for dep in library['vendor'][v]['library_dependencies']:
            lib_deps.add(resolve_lib_dep(dep))
        library['vendor'][v]['library_dependencies'] = tuple(sorted(lib_deps))

    # Find interfaces_ip.tcl source for intf db and obtain
    # Effectively, Xilinx
    for v in library['vendor']:
        deps_intf = set()
        interface_deps = set()
        for intf in library['vendor'][v]['interfaces']:
            if intf not in intf_lut:
                logger.warning(f"Interface {intf} does not exist in any "
                               "interfaces_ip.tcl file.")
            else:
                abs_path = path.join('library', key)
                base = path.relpath(path.join(intf_lut[intf], intf), abs_path)
                deps_intf.add(base + '.xml')
                deps_intf.add(base + "_rtl.xml")
                # XILINX_INTERFACE_DEPS are relative to the library folder
                interface_deps.add(path.relpath(intf_lut[intf], 'library'))
        library['vendor'][v]['interfaces'] = tuple(sorted(deps_intf))
        library['vendor'][v]['interfaces_tcl'] = tuple(sorted(interface_deps))

    return


def parse_hdl_project(
    file: str
) -> Tuple[Optional[Project], Optional[str]]:
    """
    Obtain the project dependencies from the project files.
    Start from system_project.tcl, then walktrough the sourced tcls.
    """

    idx = file.find('projects')
    if idx != -1:
        path_ = path.dirname(file)[idx+9:]
    else:
        logger.warning(f"'projects' not found in path to extract long name'")
        return (None, None)

    if not path.isfile(file):
        logger.warning(f"{file}: File doesn't exist!")
        return (None, None)

    # Get project name and carrier from path
    project = path.dirname(path_)
    carrier = path.basename(path_)
    if project == "":
        project = carrier
    elif project == "common":
        project = "template"

    base_path = path.dirname(file)
    sys_path = path.join(base_path, "system_project.tcl")
    if not path.isfile(sys_path):
        logger.warning(f"{sys_path}: File doesn't exist!")
        return (None, None)

    tcl_ = tcl(sys_path)
    # Check adi_project, project name and carrier from adi_project*
    project_name = None
    for line in tcl_:
        if line.startswith("adi_project"):
            line_ = line.split()
            project_name = line_[1]
            idx = project_name.find(carrier)
            if idx > 0:
                project_ = line_[1][:idx-1]
                if project_ != project:
                    logger.warning(f"{sys_path}: Project '{project_}' in "
                                   "'adi_project' does not match from path.")
            elif idx == 0:
                pass
            else:
                logger.warning(f"{sys_path}: Carrier from path '{carrier}' "
                                "not found in 'adi_project'.")

            break

    if project_name is None:
        logger.warning(f"{sys_path}: 'adi_project' not found.")
        return (None, None)

    m_deps = set()
    # Get sourced files from system_project.tcl entry point
    tcl_files, tcl_files_ = tcl.get_sourced_files(sys_path)
    m_deps.update(tcl_files_)
    # Get project files
    for t in tcl_files:
        for l in t:
            if l.startswith('adi_project_files'):
                i_ = tcl.get_list_items(l)
                # Convert to relative to file dir
                dir_ = path.dirname(file)
                for f in i_:
                    if f.startswith("$ad_hdl_dir/"):
                        f = f[12:]
                        f = path.relpath(f, dir_)
                    m_deps.add(f)

    # Get sourced files from system_bd/qsys.tcl entry point
    tcl_files, tcl_files_ = tcl.get_sourced_files(file)
    m_deps.update(tcl_files_)
    m_deps = list(m_deps)
    m_deps.sort(reverse=True)
    # Get libraries
    lib_deps = set()
    for t in tcl_files:
        for l in t:
            if l.startswith('ad_ip_instance'):
                l_ = l.split()
                if len(l_) > 1:
                    lib_deps.add(l_[1])
            elif l.startswith('add_instance'):
                l_ = l.split()
                if len(l_) > 2:
                    lib_deps.add(l_[2])


    obj = Project(
        name=project_name,
        lib_deps=tuple(lib_deps),
        m_deps=tuple(m_deps)
    )
    return (obj, path_)


def resolve_hdl_project(
    project: Project,
    libraries: Dict[str, Library],
) -> None:
    def find_lib(key, vendor):
        """
        Find path (relative to hdl/library) of library dependencies
        If not found, consider as third_party and don't include to set
        """
        for lib in libraries:
            if key in lib and vendor in libraries[lib]['vendor']:
                return lib
        return

    lib_deps = set()
    for lib in project['lib_deps']:
        if lib_ := find_lib(lib, project['vendor']):
            lib_deps.add(lib_)
    lib_deps = list(lib_deps)
    lib_deps.sort()

    project['lib_deps'] = tuple(lib_deps)
    return


def parse_hdl_interfaces(
    file: str,
) -> Tuple[Intf]:
    """
    Obtain the interfaces from the interfaces file.
    """
    obj = []

    if not path.isfile(file):
        logger.warning(f"{file}: File doesn't exist!")
        return ()

    with open(file, "r") as f:
        data = f.readlines()

    intf = None
    descr = None
    for i, line in enumerate(data):
        line = line.strip()
        if len(line) > 0 and line[0] == '#':
            descr = line[1:].strip()
        if line.startswith('adi_if_define'):
            intf = line.split()[1].replace('"', '')
            obj.append(Intf(
                description=descr,
                name=intf,
                ports=[]
            ))
            descr = None

        if line.startswith('adi_if_ports'):
            if len(obj) == 0:
                logger.warning(f"{file}: 'adi_if_ports' at line {i+1} "
                                "without precending adi_if_ports")
                continue
            ports = line.split()
            try:
                if len(ports) < 4:
                    raise Exception(f"too few arguments, got {len(ports)}")
                if ports[1] not in ['input', 'output']:
                    raise Exception(f"unknown direction '{ports[1]}'")
                direction = ports[3]
                width = int(ports[2])
                name = ports[3]
                domain = 'none' if len(ports) < 5 else ports[4]
                domain = None if domain == 'none' else domain
                default = None if len(ports) < 6 else int(ports[5])

                obj[-1]['ports'].append(IntfPort(
                    direction=direction,
                    width=width,
                    name=name,
                    domain=domain,
                    default=default,
                ))
            except Exception as e:
                logger.warning(f"{file}: Malformed 'adi_if_ports' at line {i+1}, "
                               f"exception: {e}")
    for o in obj:
        o['ports'] = tuple(o['ports'])
    return tuple(obj)
