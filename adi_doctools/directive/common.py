from typing import List

from docutils import nodes
from docutils.statemachine import ViewList
from docutils.parsers.rst import Directive, directives
from sphinx.util import logging

import re
from uuid import uuid4
from hashlib import sha1
from typing import Tuple

from .node import node_div, node_input, node_label, node_icon, node_source
from .node import node_iframe, node_video

logger = logging.getLogger(__name__)

dft_hide_collapsible_content = True


def parse_rst(state, tag):
    rst = ViewList()
    rst.append(tag, f"virtual_{str(uuid4())}", 0)
    node = nodes.section()
    node.document = state.document
    state.nested_parse(rst, 0, node)
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
            # TODO match any delimiter (*,-)
            if line.startswith('* -'):
                key = line[line.find('* -')+3:].split()[0]
                items[key] = []
            else:
                if line.startswith('  - '):
                    line.replace('  - ', '', 1)
                line = line.strip()
                if line.find('| ') != -1:
                    line = line.replace('| ', '\n', 1)
                else:
                    line += ' '
                items[key].append(line)
        for key in items:
            items[key] = ''.join(items[key]).replace('-', '', 1).strip()
        return items

    def column_entry(self, row, text, node_type: str, classes: List = [],
                     morecols: int = 0):
        attributes = {}
        if morecols != 0:
            attributes['morecols'] = morecols
        entry = nodes.entry(classes=classes, **attributes)
        if text == '' or text is None:
            entry += nodes.paragraph(text='')
            row += entry
            return
        if node_type == 'nodes':
            entry += text
        elif node_type == 'literal':
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
            elif len(item) == 4:
                self.column_entry(row, item[0], item[1], classes=item[2],
                                  morecols=item[3])
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
            attributes = {}
            if type(header_name) is not str:
                attributes['morecols'] = header_name[1]
                header_name = header_name[0]
            entry = nodes.entry(**attributes)
            entry += nodes.paragraph(text=header_name)
            row += entry

        thead.append(row)

    def collapsible(self, section,
                    text: [str, Tuple[str, str]] = "", node=None):
        """
        Creates a collapsible content.
        text: When a tuple, the first string is a unique id, useful when the
              collapsible title is not guarantee to be unique on the page.
        """
        env = self.state.document.settings.env
        if type(text) is tuple:
            text_id = "".join(text)
            text = text[1]
        else:
            text_id = text

        _id = sha1(text_id.encode('utf-8')).hexdigest()
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

        _id = sha1("".join(self.content).encode('utf-8')).hexdigest()
        content, _ = self.collapsible(node, (_id, self.arguments[0].strip()))
        self.state.nested_parse(self.content, self.content_offset, content)

        return [node]


class directive_video(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 1
    optional_arguments = 0

    yt_pattern = r'(https?://)?(www\.)?youtube\.com/watch\?v=([a-zA-Z0-9_-]+)'

    def run(self):
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

        return [node]


def common_setup(app):
    app.add_directive('collapsible', directive_collapsible)
    app.add_directive('video', directive_video)

    app.add_config_value('hide_collapsible_content', dft_hide_collapsible_content, 'env')
