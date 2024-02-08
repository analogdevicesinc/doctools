from docutils import nodes
from docutils.parsers.rst import directives

import re
import os.path
from lxml import etree

from .node import node_div
from .common import logger
from .common import directive_base
from .common import parse_rst
from .common import node_div
from .string import string_hdl
from ..tool.hdl_parser import parse_hdl_component, parse_hdl_regmap, parse_hdl_build_status
from ..tool.hdl_render import hdl_component

class directive_interfaces(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def pretty_dep(self, string):
        if string is None:
            return ''
        return string.replace("'MODELPARAM_VALUE.",'').replace("'",'')

    def tables(self, subnode, content, component):
        description = self.get_descriptions(content)

        if component is None:
            return self.generic_table(description)

        bs = component['bus_interface']
        for tag in bs:
            section = nodes.section(
                ids=[f"bus-interface-{tag}"]
            )
            caption = node_div()
            caption += nodes.paragraph(text=tag)

            if bs[tag]['dependency'] is not None:
                caption += [nodes.inline(text="Enabled if "),
                    nodes.literal(text=self.pretty_dep(bs[tag]['dependency']))]
                if 'index' in bs[tag]:
                    caption += nodes.inline(text=f", where '*' is the instance (up to {bs[tag]['index'][1]})")
                caption += nodes.inline(text=".")
            if tag in description:
                caption += parse_rst(self.state, description[tag])


            content, _ = self.collapsible(section, tag, caption)

            tgroup = nodes.tgroup(cols=3)
            for _ in range(3):
                colspec = nodes.colspec(colwidth=1)
                tgroup.append(colspec)
            table = nodes.table()
            table += tgroup

            self.table_header(tgroup, ["Physical Port", "Logical Port", "Direction"])

            rows = []
            pm = bs[tag]['port_map']
            for key in pm:
                self.column_entries(rows, [
                    [key, 'literal'],
                    [pm[key]['logical_port'], 'literal'],
                    [pm[key]['direction'], 'paragraph'],
                ])

            tbody = nodes.tbody()
            tbody.extend(rows)
            tgroup += tbody
            content += table

            subnode += section

        section = nodes.section(ids=[f"ports"])
        content, _ = self.collapsible(section, f"Ports")

        tgroup = nodes.tgroup(cols=4)
        for _ in range(4):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Physical Port", "Direction", "Dependency", "Description"])

        rows = []
        pr = component['ports']
        dm = component['bus_domain']
        for key in pr:
            row = nodes.row()
            self.column_entry(row, key, 'literal')
            self.column_entry(row, pr[key]['direction'], 'paragraph')
            self.column_entry(row, self.pretty_dep(pr[key]['dependency']), 'literal')
            if 'clk' in key or 'clock' in key:
                domain = 'clock domain'
            elif 'reset':
                domain = 'reset signal'
            else:
                domain = 'domain'
            if key in dm:
                bus = 'Buses' if len(dm[key]) > 1 else 'Bus'
                plr = 'are' if len(dm[key]) > 1 else 'is'
                in_domain = f"{bus} ``{'``, ``'.join(dm[key])}`` {plr} synchronous to this {domain}."
            else:
                in_domain = ""
            if key in description:
                self.column_entry(row, " ".join([description[key], in_domain]), 'reST', classes=['description'])
            else:
                self.column_entry(row, in_domain, 'reST', classes=['description'])
            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody
        content += table

        subnode += section

        for tag in description:
            if tag not in bs and tag not in pr:
                logger.warning(f"Signal {tag} defined in the directive does not exist in the IP-XACT (component.xml)!")

        return subnode

    def run(self):
        env = self.state.document.settings.env
        self.current_doc = env.doc2path(env.docname)

        node = node_div()

        if 'path' in self.options:
            lib_name = self.options['path']
        else:
            lib_name = env.docname.replace('/index', '')

        manage_hdl_component_late(env, lib_name)
        if lib_name in env.component:
            self.tables(node, self.content, env.component[lib_name])
        else:
            self.tables(node, self.content, None)

        return [ node ]

class directive_regmap(directive_base):
    option_spec = {'name': directives.unchanged, 'no-type-info': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def tables(self, subnode, obj):
        section = nodes.section(ids=[f"register-map-{obj['title']}"])

        content, _ = self.collapsible(section, f"{obj['title']} register map")
        tgroup = nodes.tgroup(cols=7)
        for _ in range(7):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table(classes=['regmap'])
        table += tgroup

        self.table_header(tgroup, ["DWORD", "BYTE", "BITS", "Name", "Type", "Default Value", "Description"])

        rows = []
        for reg in obj['regmap']:
            self.column_entries(rows, [
                [reg['address'][0], 'literal', ['bold']],
                [reg['address'][1], 'literal', ['bold']],
                [reg['name'], 'literal', ['bold'], 3],
                [reg['description'], 'reST', ['description']],
            ])

            for field in reg['fields']:
                self.column_entries(rows, [
                    ['', 'literal'],
                    ['', 'literal'],
                    [f"[{field['bits']}]", 'literal'],
                    [field['name'], 'literal'],
                    [field['rw'], 'literal'],
                    [field['default'], 'default_value', ['default']],
                    [field['description'], 'reST', ['description']],
                ])

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
            ])

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody
        section += table

        return subnode

    def run(self):
        env = self.state.document.settings.env
        self.current_doc = env.doc2path(env.docname)
        if os.getcwd() not in self.current_doc:
            raise Exception(f"Inconsistent paths, {os.getcwd()} not in {self.current_doc}")
        owner = self.current_doc[len(os.getcwd())+1:-4]

        node = node_div()

        if 'name' in self.options:
            lib_name = self.options['name']
        else:
            logger.warning("hdl-regmap directive without name option, skipped!")
            return [ node ]

        subnode = nodes.section(ids=["hdl-regmap"])

        # Have to search all because it is allowed to have more than one regmap per file...
        file = None
        for f in env.regmaps:
            if lib_name in env.regmaps[f]['subregmap']:
                file = f
                break

        if file is None:
            logger.warning(f"Title {lib_name} not-found in any regmap file, skipped!")
            return [ node ]

        if owner not in env.regmaps[f]['owners']:
            env.regmaps[f]['owners'].append(owner)
        self.tables(subnode, env.regmaps[f]['subregmap'][lib_name])

        node += subnode
        return [ node ]

class directive_parameters(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def dot_fix(self, string):
        if (string.rfind('.') != len(string)-1):
            return string + '.'
        else:
            return string

    def tables(self, content, parameter):
        description = self.get_descriptions(content)

        if parameter is None:
            return self.generic_table(description)

        tgroup = nodes.tgroup(cols=5)
        for _ in range(5):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Name", "Description", "Default Value", "Choices/Range"])

        rows = []
        for key in parameter:
            row = nodes.row()
            self.column_entry(row, "{:s}".format(key), 'literal')
            if key in description:
                self.column_entry(row, description[key], 'reST', classes=['description'])
            else:
                self.column_entry(row, self.dot_fix(parameter[key]['description']), 'paragraph', classes=['description'])
            for tag, ty in zip(['default'], ['literal']):
                if parameter[key][tag] is not None:
                    self.column_entry(row, parameter[key][tag], ty, classes=[tag])
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
                    logger.warning(f"{tag} defined in the directive does not exist in the IP-XACT (component.xml)!")

        return table

    def run(self):
        env = self.state.document.settings.env
        self.current_doc = env.doc2path(env.docname)

        node = node_div()

        if 'path' not in self.options:
            self.options['path'] = env.docname.replace('/index', '')
        lib_name = self.options['path']

        manage_hdl_component_late(env, lib_name)
        subnode = nodes.section(ids=["hdl-parameters"])
        if lib_name in env.component:
            subnode += self.tables(self.content, env.component[lib_name]['parameters'])
        else:
            subnode += self.tables(self.content, None)

        node += subnode

        return [ node ]

class directive_component_diagram(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def missing_diagram(self):
        tree = hdl_component.render_placeholder(self.options['path'])
        svg_raw = etree.tostring(tree, encoding="utf-8", method="xml").decode("utf-8")

        svg = nodes.raw('', svg_raw, format='html')
        return [ svg ]

    def diagram(self):
        name = hdl_component.get_name(self.options['path'])
        path = '_build/managed'
        f = open(os.path.join(path, name))
        svg_raw = f.read()

        svg = nodes.raw('', svg_raw, format='html')
        return [ svg ]

    def run(self):
        env = self.state.document.settings.env
        self.current_doc = env.doc2path(env.docname)

        node = node_div()

        if 'path' not in self.options:
            self.options['path'] = env.docname.replace('/index', '')
        lib_name = self.options['path']

        subnode = nodes.section(ids=["hdl-component-diagram"])

        manage_hdl_component_late(env, lib_name)
        if lib_name in env.component:
            subnode += self.diagram()
        else:
            subnode += self.missing_diagram()

        node += subnode

        return [ node ]

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
            self.column_entry(row, 'Failure' if item[1] else 'Success', 'paragraph', ['red'] if item[1] else ['green'])
            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody

        return table

    def run(self):
        if 'file' not in self.options:
            return []

        file = self.options['file']

        if not os.path.isfile(file):
            logger.warning(f"Build status file {file} does not exist!")
            return []

        item, build_number, msg = parse_hdl_build_status(file)
        for m in msg:
            logger.warning(m)

        table = self.tables(item)
        title, messages = self.make_title(f"Project Build Status #{build_number}")
        table.insert(0, title)

        return [ table ] + messages

def hdl_component_write_managed(env, tree, lib):
    dest_dir = os.path.join(env.srcdir, '_build/managed')
    dest_file = os.path.join(dest_dir, hdl_component.get_name(lib))

    if not os.path.exists(dest_dir):
        os.makedirs(dest_dir)
    tree.write(dest_file)

def manage_hdl_component_late(env, lib):
    """
    Special case when the doc page does not match the library hierarchically.
    This is discouraged, but IPs inside hdl/library/xilinx and hdl/library/intel
    require this.
    These artifacts will not be properly managed!
    """
    if lib in env.component:
        return

    prefix = "../repos/hdl" if env.config.is_system_top else ".."
    f = f"{prefix}/{lib}/component.xml"
    if not os.path.isfile(f):
        return

    logger.info(f"Discouraged non-hierarchical relation between {lib} library and {env.docname}.rst doc page.")

    ctime = os.path.getctime(f)
    cp = env.component
    cp[lib] = parse_hdl_component(f, ctime)
    tree = hdl_component.render(lib, cp[lib])
    hdl_component_write_managed(env, tree, lib)

def manage_hdl_components(env, docnames, libraries):
    if not hasattr(env, 'component'):
        env.component = {}

    prefix = "../repos" if env.config.is_system_top else ".."
    cp = env.component
    for lib in list(cp):
        f = f"{prefix}/{lib}/component.xml"
        if not os.path.isfile(f):
            del cp[lib]

    for lib, doc in libraries:
        f = f"{prefix}/{lib}/component.xml"
        if not os.path.isfile(f):
            continue
        ctime = os.path.getctime(f)
        if lib in cp and cp[lib]['ctime'] >= ctime:
            pass
        else:
            cp[lib] = parse_hdl_component(f, ctime)
            tree = hdl_component.render(lib, cp[lib])
            hdl_component_write_managed(env, tree, lib)
            docnames.append(doc)

def manage_hdl_regmaps(env, docnames):
    if not hasattr(env, 'regmaps'):
        env.regmaps = {}

    prefix = "../repos/hdl/docs" if env.config.is_system_top else "."
    rm = env.regmaps
    for lib in list(rm):
        f = f"{prefix}/regmap/adi_regmap_{lib}.txt"
        if not os.path.isfile(f):
            del rm[lib]
    # Inconsistent naming convention, need to parse all in directory.
    for (dirpath, dirnames, filenames) in os.walk(f"{prefix}/regmap"):
        for file in filenames:
            m = re.search("adi_regmap_(\w+)\.txt", file)
            if not bool(m):
                continue

            reg_name = m.group(1)
            ctime = os.path.getctime(f"{prefix}/regmap/{file}")
            if reg_name in rm and rm[reg_name]['ctime'] < ctime:
                for o in rm[reg_name]['owners']:
                    if o not in docnames:
                        docnames.append(o)
            if reg_name in rm and rm[reg_name]['ctime'] >= ctime:
                pass
            else:
                rm[reg_name], msg = parse_hdl_regmap(reg_name, ctime, prefix)
                for m in msg:
                    logger.warning(m)

def manage_hdl_artifacts(app, env, docnames):
    prefix = "hdl/" if env.config.is_system_top else ""
    libraries = [[k.replace('/index',''), k] for k in env.found_docs if k.find(f"{prefix}library/") == 0]

    manage_hdl_components(env, docnames, libraries)
    manage_hdl_regmaps(env, docnames)


def hdl_setup(app):
    app.add_directive('hdl-parameters', directive_parameters)
    app.add_directive('hdl-component-diagram', directive_component_diagram)
    app.add_directive('hdl-interfaces', directive_interfaces)
    app.add_directive('hdl-regmap', directive_regmap)
    app.add_directive('hdl-build-status', directive_build_status)

    app.connect('env-before-read-docs', manage_hdl_artifacts)
