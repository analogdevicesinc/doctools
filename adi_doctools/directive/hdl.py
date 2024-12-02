from docutils import nodes
from docutils.parsers.rst import directives

import re
from os import path, walk
from os import pardir, makedirs
from math import ceil
from lxml import etree
from sphinx.util import logging
from sphinx.util.osutil import SEP

from .node import node_div
from .common import directive_base
from .common import parse_rst
from .string import string_hdl
from ..parser.hdl import parse_hdl_component
from ..parser.hdl import parse_hdl_regmap, resolve_hdl_regmap
from ..parser.hdl import parse_hdl_build_status
from ..writer.hdl_component import hdl_component

logger = logging.getLogger(__name__)


log = {
    'signal': "{lib}/component.xml: Signal {signal} defined in the hdl-interfaces directive does not exist in the IP-XACT!",  # noqa: E501
    'path': "Inconsistent paths, {cwd} not in {doc}",
    'regmap-no-name': "hdl-regmap directive without name option, skipped!",
    'param': "{lib}/component.xml: {param} defined in the hdl-parameters directive does not exist in the IP-XACT!"  # noqa: E501
}


class directive_interfaces(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    @staticmethod
    def pretty_dep(string, parent):
        if string is None:
            return ''
        elif string == 'false':
            return 'Disabled'
        else:
            return string.replace("'MODELPARAM_VALUE.", '').replace("'", '')

    def tables(self, subnode, content, component, lib_name):
        description = self.get_descriptions(content)

        if component is None:
            subnode += self.generic_table(description)
            return subnode

        bs = component['bus_interface']
        for tag in bs:
            section = nodes.section(
                ids=[f"bus-interface-{tag}"]
            )
            caption = node_div()
            caption += nodes.paragraph(text=tag)

            if bs[tag]['dependency'] is not None:
                pd = self.pretty_dep(bs[tag]['dependency'], tag)
                caption += [nodes.inline(text="Enabled if "),
                            nodes.literal(text=pd)]
                if 'index' in bs[tag]:
                    txt = (", where '*' is the instance "
                           f"(up to {bs[tag]['index'][1]})")
                    caption += nodes.inline(text=txt)
                caption += nodes.inline(text='.')
            if tag in description:
                caption += parse_rst(self.state, description[tag],
                                     f"hdl-interfaces_{lib_name}")

            content, _ = self.collapsible(section, (component['name'], tag),
                                          caption)

            tgroup = nodes.tgroup(cols=4)
            for _ in range(4):
                colspec = nodes.colspec(colwidth=1)
                tgroup.append(colspec)
            table = nodes.table()
            table += tgroup

            self.table_header(tgroup, ["Physical Port", "Logical Port", "Direction", "Dependency"])  # noqa: E501

            rows = []
            pm = bs[tag]['port_map']
            for key in pm:
                self.column_entries(rows, [
                    [key, 'literal' ],
                    [pm[key]['logical_port'], 'literal'],
                    [pm[key]['direction'], 'paragraph'],
                    [self.pretty_dep(pm[key]['dependency'], key), 'literal'],
                ])

            tbody = nodes.tbody()
            tbody.extend(rows)
            tgroup += tbody
            content += table

            subnode += section

        section = nodes.section(ids=["ports"])
        content, _ = self.collapsible(section, (component['name'], "Ports"))

        tgroup = nodes.tgroup(cols=4)
        for _ in range(4):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Physical Port", "Direction", "Dependency", "Description"])  # noqa: E501

        rows = []
        pr = component['ports']
        dm = component['bus_domain']
        for key in pr:
            row = nodes.row()
            self.column_entry(row, key, 'literal')
            self.column_entry(row, pr[key]['direction'], 'paragraph')
            self.column_entry(row, self.pretty_dep(pr[key]['dependency'], key), 'literal')
            
            if 'clk' in key or 'clock' in key:
                domain = 'clock domain'
            elif 'reset':
                domain = 'reset signal'
            else:
                domain = 'domain'
            if key in dm:
                bus = 'Buses' if len(dm[key]) > 1 else 'Bus'
                plr = 'are' if len(dm[key]) > 1 else 'is'
                in_domain = (f"{bus} ``{'``, ``'.join(dm[key])}`` {plr} "
                             f"synchronous to this {domain}.")
            else:
                in_domain = ""
            if key in description:
                self.column_entry(row, " ".join([description[key], in_domain]),
                                  'reST', classes=['description'])
            else:
                self.column_entry(row, in_domain,
                                  'reST', classes=['description'])
            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody
        content += table

        subnode += section

        for tag in description:
            if tag not in bs and tag not in pr:
                logger.warning(log['signal'].format(signal=tag, lib=lib_name))

        return subnode

    def run(self):
        env = self.state.document.settings.env

        node = node_div()

        if 'path' in self.options:
            lib_name = self.options['path']
        else:
            lib_name = env.docname.replace('/index', '')

        discover_hdl_component(env, lib_name)
        if lib_name in env.component:
            self.tables(node, self.content, env.component[lib_name], lib_name)
        else:
            self.tables(node, self.content, None, lib_name)

        return [node]


class directive_regmap(directive_base):
    option_spec = {'name': directives.unchanged,
                   'no-type-info': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    @staticmethod
    def get_hex_addr(addr: int, addr_incr: int):
        if addr_incr == 0:
            dword = f"{hex(addr)}"
            byte = f"{hex(addr<<2)}"
        else:
            dword = f"{hex(addr)} + {hex(addr_incr)}*n"
            byte = f"{hex(addr<<2)} + {hex(addr_incr<<2)}*n"

        return (dword, byte)

    def tables(self, subnode, obj, key):
        uid = "hdl-regmap-" + key
        section = nodes.section(ids=[uid])

        content, _ = self.collapsible(section, f"{obj['title']} register map")
        tgroup = nodes.tgroup(cols=7)
        for _ in range(7):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table(classes=['regmap'])
        table += tgroup

        self.table_header(tgroup, ["DWORD", "BYTE", ["Reg Name", 3], "Description"])  # noqa: E501
        self.table_header(tgroup, [["", 1], "BITS", "Field Name", "Type", "Default Value", "Description"])  # noqa: E501

        rows = []
        for reg in obj['regmap']:
            dword, byte = self.get_hex_addr(reg['address'], reg['addr_incr'])
            self.column_entries(rows, [
                [dword, 'literal', ['bold']],
                [byte, 'literal', ['bold']],
                [reg['name'], 'literal', ['bold'], 3],
                [reg['description'], 'reST', ['description', 'bold']],
            ], uid=uid)

            for field in reg['fields']:
                bits = "" if field['bits'] is None else field['bits']
                default = '' if field['default'] is None else field['default']

                if type(default) is int:
                    if type(bits) is tuple:
                        len_ = ceil((bits[0] - bits[1] + 1) / 4)
                        default = hex(default)[2:]
                        default = '0x' + '0'*(len_ - len(default)) + default
                    else:
                        default = hex(default)

                # Underscore with word-breaking 0 width space
                default = default.replace("_", "_\u200B")
                # Ensure `` parsed as pre in formulas
                for a in ['+', '-', '/', '*', '^', '~', '!']:
                    default = default.replace(a + "``", a + " ``")

                if type(bits) is tuple:
                    if bits[0] == bits[1]:
                        bits = bits[0]
                    else:
                        bits = f"{bits[0]}:{bits[1]}"

                self.column_entries(rows, [
                    ["", 'literal', [''], 1],
                    [f"[{bits}]", 'literal'],
                    [field['name'], 'literal'],
                    [field['rw'], 'literal'],
                    [default, 'literal', ['default']],
                    [field['description'], 'reST', ['description']],
                ], uid=uid)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody
        content += table

        subnode += section

        if 'no-type-info' in self.options:
            return subnode

        tgroup = nodes.tgroup(cols=3)
        for _ in range(3):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Access Type", "Name", "Description"])

        rows = []
        for at in obj['access_type']:
            self.column_entries(rows, [
                [at, 'paragraph'],
                [string_hdl.access_type[at]['name'], 'paragraph'],
                [string_hdl.access_type[at]['description'], 'paragraph']
            ], uid=uid)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody
        section += table

        return subnode

    def run(self):
        env = self.state.document.settings.env
        owner = env.docname

        node = node_div()

        if 'name' in self.options:
            lib_name = self.options['name']
        else:
            logger.warning(log['regmap-no-name'])
            return [node]

        subnode = nodes.section(ids=["hdl-regmap"])

        # Search all because one file can have more than one regmap.
        file = None
        for f in env.regmaps:
            if lib_name in env.regmaps[f]['subregmap']:
                file = f
                break

        if file is None:
            logger.warning(f"{lib_name} not-found in any regmap, skipped!")
            return [node]

        if owner not in env.regmaps[f]['owners']:
            env.regmaps[f]['owners'].append(owner)
        self.tables(subnode, env.regmaps[f]['subregmap'][lib_name], lib_name)

        node += subnode
        return [node]


class directive_parameters(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def dot_fix(self, string):
        if (string.rfind('.') != len(string)-1):
            return string + '.'
        else:
            return string

    def tables(self, content, parameter, lib_name):
        description = self.get_descriptions(content)

        if parameter is None:
            return self.generic_table(description)

        tgroup = nodes.tgroup(cols=5)
        for _ in range(5):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Name", "Description", "Default Value", "Choices/Range"])  # noqa: E501
        
        rows = []
        for key in parameter:
            row = nodes.row()
            self.column_entry(row, "{:s}".format(key), 'literal')
            if key in description:
                self.column_entry(row, description[key],
                                  'reST', classes=['description'])
            else:
                desc = self.dot_fix(parameter[key]['description'])
                self.column_entry(row, desc, 'paragraph',
                                  classes=['description'])
            for tag, ty in zip(['default'], ['literal']):
                if parameter[key][tag] is not None:
                    self.column_entry(row, parameter[key][tag], ty,
                                      classes=[tag])
                else:
                    logger.warning(f"Got empty {tag} at parameter {key}!")
                    self.column_entry(row, "", 'paragraph')
            crange = []
            for tag in ['choices', 'range']:
                if parameter[key][tag] is not None:
                    crange.append(parameter[key][tag])
            crange = '. '.join(crange)
            self.column_entry(row, crange, 'paragraph', classes=[tag])

            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody

        for tag in description:
            if tag not in parameter:
                logger.warning(log['param'].format(param=tag, lib=lib_name))

        return table

    def run(self):
        env = self.state.document.settings.env

        node = node_div()        

        if 'path' not in self.options:
            self.options['path'] = env.docname.replace('/index', '')
        lib_name = self.options['path']

        discover_hdl_component(env, lib_name)
        subnode = nodes.section(ids=["hdl-parameters"])
        if lib_name in env.component:
            subnode += self.tables(self.content,
                                   env.component[lib_name]['parameters'],
                                   lib_name)
        else:
            subnode += self.tables(self.content, None, lib_name)

        node += subnode

        return [node]


class directive_component_diagram(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def missing_diagram(self):
        tree = hdl_component.render_placeholder(self.options['path'])
        svg_raw = etree.tostring(tree, encoding="utf-8", method="xml")
        svg_raw = svg_raw.decode("utf-8")

        svg = nodes.raw('', svg_raw, format='html')
        return [svg]

    def diagram(self, outdir):
        name = hdl_component.get_name(self.options['path'])
        p = path.abspath(path.join(outdir, pardir, 'managed'))
        f = open(path.join(p, name))
        svg_raw = f.read()

        svg = nodes.raw('', svg_raw, format='html')
        return [svg]

    def run(self):
        env = self.state.document.settings.env

        node = node_div()

        if 'path' not in self.options:
            self.options['path'] = env.docname.replace('/index', '')
        lib_name = self.options['path']

        subnode = nodes.section(ids=["hdl-component-diagram"])

        discover_hdl_component(env, lib_name)
        if lib_name in env.component:
            subnode += self.diagram(env.app.builder.outdir)
        else:
            subnode += self.missing_diagram()

        node += subnode

        return [node]


class directive_build_status(directive_base):
    option_spec = {'file': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def tables(self, obj):
        tgroup = nodes.tgroup(cols=2)
        for _ in range(2):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)

        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Project", "Status"])

        rows = []
        for item in obj:
            row = nodes.row()
            self.column_entry(row, item[0], 'literal')
            state = 'Failure' if item[1] else 'Success'
            color = ['red'] if item[1] else ['green']
            self.column_entry(row, state, 'paragraph', color)
            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody

        return table

    def run(self):
        if 'file' not in self.options:
            return []

        file = self.options['file']

        if not path.isfile(file):
            logger.warning(f"Build status file {file} does not exist!")
            return []

        item, build_number, msg = parse_hdl_build_status(file)
        for m in msg:
            logger.warning(m)

        table = self.tables(item)
        t = f"Project Build Status #{build_number}"
        title, messages = self.make_title(t)
        table.insert(0, title)

        return [table] + messages


def hdl_component_write_managed(env, tree, lib):
    dest_dir = path.abspath(path.join(env.app.builder.outdir, pardir,
                                      'managed'))
    dest_file = path.join(dest_dir, hdl_component.get_name(lib))

    if not path.exists(dest_dir):
        makedirs(dest_dir)
    tree.write(dest_file)


def discover_hdl_component(env, lib):
    """
    Component discovery.
    On the first run, parses, subsequent runs grabs from the cache.
    """
    cp = env.component
    if lib in cp:
        if env.docname not in cp[lib]['owners']:
            cp[lib]['owners'].append(env.docname)
        return

    f = f"..{SEP}{lib}{SEP}component.xml"
    if not path.isfile(f):
        return

    ctime = path.getctime(f)
    cp[lib] = parse_hdl_component(f, ctime)
    cp[lib]['owners'].append(env.docname)
    tree = hdl_component.render(lib, cp[lib])
    hdl_component_write_managed(env, tree, lib)


def manage_hdl_components(env, docnames, libraries):
    if not hasattr(env, 'component'):
        env.component = {}

    cp = env.component
    for lib in list(cp):
        f = f"..{SEP}{lib}{SEP}component.xml"
        if not path.isfile(f):
            del cp[lib]
            continue

        ctime = path.getctime(f)
        if ctime <= cp[lib]['ctime']:
            continue

        cp[lib] = parse_hdl_component(f, ctime, cp[lib]['owners'])
        tree = hdl_component.render(lib, cp[lib])
        hdl_component_write_managed(env, tree, lib)
        for d in cp[lib]['owners']:
            if d not in docnames:
                if d in env.found_docs:
                    docnames.append(d)
                else:
                    cp[lib]['owners'].remove(d)


def manage_hdl_regmaps(env, docnames):
    if not hasattr(env, 'regmaps'):
        env.regmaps = {}

    prefix = f"..{SEP}hdl{SEP}docs" if env.config.monolithic else "."
    rm = env.regmaps
    for lib in list(rm):
        f = f"{prefix}{SEP}regmap{SEP}adi_regmap_{lib}.txt"
        if not path.isfile(f):
            del rm[lib]
    # Inconsistent naming convention, need to parse all in directory.
    for (dirpath, dirnames, filenames) in walk(f"{prefix}/regmap"):
        for file in filenames:
            m = re.search("adi_regmap_(\\w+)\\.txt", file)
            if not bool(m):
                continue

            reg_name = m.group(1)
            file_ = path.join(prefix, "regmap", file)
            if path.isfile(file_):
                ctime = path.getctime(file_)
            else:
                continue

            if reg_name in rm and rm[reg_name]['ctime'] < ctime:
                for o in rm[reg_name]['owners']:
                    if o not in docnames:
                        if o in env.found_docs:
                            docnames.append(o)
                        else:
                            rm[reg_name]['owners'].remove(o)
            if reg_name in rm and rm[reg_name]['ctime'] >= ctime:
                pass
            else:
                rm[reg_name] = parse_hdl_regmap(ctime, file_)
    resolve_hdl_regmap(rm)


def manage_hdl_artifacts(app, env, docnames):
    prefix = "hdl" if env.config.monolithic else "."
    libraries = [[k.replace('/index', ''), [k]]
                 for k in env.found_docs if k.find(f"{prefix}{SEP}library{SEP}") == 0]

    manage_hdl_components(env, docnames, libraries)
    manage_hdl_regmaps(env, docnames)


def hdl_setup(app):
    app.add_directive('hdl-parameters', directive_parameters)
    app.add_directive('hdl-component-diagram', directive_component_diagram)
    app.add_directive('hdl-interfaces', directive_interfaces)
    app.add_directive('hdl-regmap', directive_regmap)
    app.add_directive('hdl-build-status', directive_build_status)

    app.connect('env-before-read-docs', manage_hdl_artifacts)
