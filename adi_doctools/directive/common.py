from docutils import nodes
from docutils.statemachine import ViewList
from docutils.parsers.rst import Directive, directives
from sphinx.util.nodes import nested_parse_with_titles
from sphinx.util import logging
import re
from uuid import uuid4
from hashlib import sha1

from .node import node_div, node_input, node_label, node_icon, node_source, node_iframe, node_video

logger = logging.getLogger(__name__)

dft_hide_collapsible_content = True

def parse_rst(state, tag):
    rst = ViewList()
    rst.append(tag, f"virtual_{str(uuid4())}", 0)
    node = nodes.section()
    node.document = state.document
    nested_parse_with_titles(state, rst, node)
    return node

class directive_base(Directive):
    has_content = True
    add_index = True
    current_doc = ''
    final_argument_whitespace = True

    @staticmethod
    def get_descriptions(content):
        items = {}
        key = ''
        for line in content:
            if line.startswith('* -'):
                key = line[line.find('* -')+3:].split()[0]
                items[key] = []
            else:
                items[key].append(line)
        for key in items:
            items[key] = ' '.join(items[key]).replace('-', '', 1).strip()
        return items

    def column_entry(self, row, text, node_type, classes=[]):
        entry = nodes.entry(classes=classes)
        if node_type == 'literal':
            entry += nodes.literal(text=text)
        elif node_type == 'paragraph':
            entry += nodes.paragraph(text=text)
        elif node_type == 'reST':
            entry += parse_rst(self.state, text)
        elif node_type == 'default_value':
            if text[0:2] != '0x':
                entry += parse_rst(self.state, text)
            else:
                entry += nodes.literal(text=text)
        else:
            return
        row += entry

    def column_entries(self, rows, items):
        row = nodes.row()
        for item in items:
            if len(item) == 3:
                self.column_entry(row, item[0], item[1], classes=item[2])
            else:
                self.column_entry(row, item[0], item[1])
        rows.append(row)

    def generic_table(self, description):
        tgroup = nodes.tgroup(cols=2)
        for _ in range(2):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        self.table_header(tgroup, ["Name", "Description"])

        rows = []
        for key in description:
            row = nodes.row()
            entry = nodes.entry()
            entry += nodes.literal(text="{:s}".format(key))
            row += entry
            entry = nodes.entry()
            entry += parse_rst(self.state, description[key])
            row += entry
            rows.append(row)

        tbody = nodes.tbody()
        tbody.extend(rows)
        tgroup += tbody

        return table

    def make_title(self, caption):
        # From: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/parsers/rst/directives/tables.py#l45
        text_nodes, messages = self.state.inline_text(caption,
                                                      self.lineno)
        title = nodes.title(caption, '', *text_nodes)
        (title.source,
         title.line) = self.state_machine.get_source_and_line(self.lineno)
        return title, messages

    @staticmethod
    def table_header(tgroup, columns):
        thead = nodes.thead()
        tgroup += thead
        row = nodes.row()

        for header_name in columns:
            entry = nodes.entry()
            entry += nodes.paragraph(text=header_name)
            row += entry

        thead.append(row)

    def collapsible(self, section, text="", node=None):
        env = self.state.document.settings.env

        _id = sha1(text.encode('utf-8')).hexdigest()
        container = nodes.container(
            "",
            is_div=True,
            classes=['collapsible']
        )
        checked = {"checked": ''} if not env.config.hide_collapsible_content else {}
        input_ = node_input(
            type="checkbox",
            **checked,
            ids=[_id],
            name=_id,
            classes=['collapsible_input']
        )
        label = node_label(
            **{"for": _id}
        )
        icon = node_icon(
            classes=['icon']
        )
        content = nodes.container(
            "",
            is_div=True,
            classes=['collapsible_content']
        )
        if node is None:
            label += nodes.paragraph(text=text)
        else:
            label += node
        label += icon

        container += input_
        container += label
        container += content

        section += container

        return (content, label)

class directive_collapsible(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 1
    optional_arguments = 0

    def run(self):
        self.assert_has_content()

        env = self.state.document.settings.env
        self.current_doc = env.doc2path(env.docname)

        node = node_div()

        content, _ = self.collapsible(node, self.arguments[0].strip())
        self.state.nested_parse(self.content, self.content_offset, content)

        return [ node ]

class directive_video(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 1
    optional_arguments = 0

    yt_pattern = r'(https?://)?(www\.)?youtube\.com/watch\?v=([a-zA-Z0-9_-]+)'
    def run (self):
        url = self.arguments[0].strip()

        yt_match = re.search(self.yt_pattern, url)
        if yt_match:
            node = node_div(
                classes=['iframe-video']
            )
            yt_id = yt_match.group(3)
            iframe = node_iframe(
                src=f"https://www.youtube-nocookie.com/embed/{yt_id}"
            )
            node += iframe
        else:
            node = node_div()
            video = node_video(
                controls="controls"
            )
            source = node_source(
                type="video/mp4",
                src=url
            )
            video += source
            node += video

        return [ node ]

def common_setup(app):
    app.add_directive('collapsible', directive_collapsible)
    app.add_directive('video', directive_video)

    app.add_config_value('hide_collapsible_content', dft_hide_collapsible_content, 'env')
