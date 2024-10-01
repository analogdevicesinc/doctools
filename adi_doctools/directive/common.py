from typing import List, Optional

from docutils import nodes
from docutils.statemachine import ViewList
from docutils.parsers.rst import Directive, directives
from sphinx.util import logging
from sphinx.util.docutils import SphinxDirective
from sphinx.directives.code import container_wrapper

import re
from os import path
from uuid import uuid4
from hashlib import sha1
from typing import Tuple

from .node import node_div, node_input, node_label, node_icon, node_source, node_a, node_pre
from .node import node_iframe, node_video

logger = logging.getLogger(__name__)

dft_hide_collapsible_content = True


def parse_rst(state, content, uid: Optional[str]=None):
    """
    Parses rst markup, content can be:
    * String
    * List: ["my", "line", "", "my other line"]
    * Docutils ViewList
    """
    if uid is None:
        uid = f"virtual_{str(uuid4())}"
    content = [content] if isinstance(content, str) else content
    rst = ViewList(source=uid, initlist=content)
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
                     morecols: int = 0, uid: Optional[str]=None):
        attributes = {}
        if morecols != 0:
            attributes['morecols'] = morecols
        entry = nodes.entry(classes=classes, **attributes)
        if text is None or len(text) == 0:
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
            # text can be a String, List, or ViewList.
            entry += parse_rst(self.state, text, uid)
        else:
            return
        row += entry

    def column_entries(self, rows, items, uid: Optional[str]=None):
        row = nodes.row()
        for item in items:
            if len(item) == 3:
                self.column_entry(row, item[0], item[1], classes=item[2],
                                  uid=uid)
            elif len(item) == 4:
                self.column_entry(row, item[0], item[1], classes=item[2],
                                  morecols=item[3],
                                  uid=uid)
            else:
                self.column_entry(row, item[0], item[1],
                                  uid=uid)
        rows.append(row)

    def generic_table(self, description, uid: Optional[str]=None, media_print=False):
        tgroup = nodes.tgroup(cols=2)
        for _ in range(2):
            colspec = nodes.colspec(colwidth=1)
            tgroup.append(colspec)
        table = nodes.table()
        table += tgroup

        # example: self.table_header(tgroup, ["Bear with me", "Description"])
        self.table_header(tgroup, ["Name", "Description"])

        rows = []
        for key in description:
            row = nodes.row()

            entry = nodes.entry()
            if not media_print:  # Check if not in PDF mode
                entry += nodes.literal(text="{:s}".format(key))
            else:
                entry += nodes.paragraph(text="{:s}".format(key))  # Use paragraph for PDF mode
            row += entry

            entry = nodes.entry()
            entry += parse_rst(self.state, description[key], uid=uid)
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

    def collapsible(self, section, text: [str, Tuple[str, str]] = "", node=None):
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


class directive_video(Directive):
    has_content = True
    add_index = True
    final_argument_whitespace = True

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
                src=f"https://www.youtube-nocookie.com/embed/{yt_id}",
                classes=['only-screen']
            )
            node += iframe
        else:
            node = node_div(
                classes=['embed-video']
            )
            video = node_video(
                controls="controls",
                classes=['only-screen']
            )
            source = node_source(
                type="video/mp4",
                src=url
            )
            video += source
            node += video

        node_ = nodes.inline(
            classes=['only-screen']
        )
        self.state.nested_parse(self.content, self.content_offset, node_)
        node += node_

        # Generate a video admonition for print
        adm = node_div(
            classes=['admonition', 'video', 'only-print']
        )
        adm += nodes.paragraph(
            text="Video",
            classes=["admonition-title"]
        )

        video_link = node_a(href=url)
        video_link += nodes.inline(text=url)

        self.state.nested_parse(self.content, self.content_offset, adm)
        node_ = nodes.paragraph()
        node_ += video_link
        adm += node_
        node += adm

        return [node]


class directive_clear_content(Directive):
    option_spec = {
        'side': directives.unchanged_required,
        'break': directives.flag
    }
    has_content = False
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 0

    def run(self):
        side = self.options.get('side')
        values = ['left', 'right', 'both']
        if side not in values:
            if side is not None:
                location = self.state_machine.get_source_and_line(self.lineno)
                logger.warning(("clear-content option '%s' is invalid, valid ",
                                f"values are [{', '.join(values)}]."),
                               side, location=location)
            side = 'both'

        classes = [f"clear-{side}"]
        if 'break' in self.options:
            classes.append('break-after')
        node = node_div(
            classes=classes
        )

        return [node]


class directive_shell(SphinxDirective):
    option_spec = {
        'user': directives.unchanged_required,
        'group': directives.unchanged_required,
        'caption': directives.unchanged_required,
        'showuser': directives.flag
    }
    has_content = True
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 1

    def run(self):
        self.assert_has_content()

        shells = ['bash', 'sh', 'zsh', 'ps1']
        types = ['$', '/', '~', '#', ' ']

        user = self.options.get('user')
        group = self.options.get('group')
        caption = self.options.get('caption')
        language = self.arguments[0].strip() if len(self.arguments) > 0 else None
        if user is None:
            user = "user"
        if group is None:
            group = "analog"
        if language not in shells:
            if language is not None:
                location = self.state_machine.get_source_and_line(self.lineno)
                logger.warning(("shell '%s' is invalid, valid values are "
                                f"[{', '.join(shells)}]."),
                               language, location=location)
            language = "bash"
        if 'showuser' in self.options:
            if language != 'ps1':
                wd_p = f"{user}@{group}:"
            else:
                wd_p = f"[{group}:{user}] "
        else:
            wd_p = ""

        def resolve_block(l_, l, wd, lang):
            if l in ['/', '~']:
                return None

            sep = '$' if lang != 'ps1' else '>'
            lit = node_div()
            if l in ['$', '#']:
                if wd is not None:
                    sep = wd + sep
                lit += nodes.literal_block(sep, sep,
                                           classes=['no-select', 'float-left'])

            if l == '$':
                lit_ = nodes.literal_block(l_, l_, classes=['bold'])
                lit_['language'] = language
                lit += lit_
            elif l == '#':
                lit_ = nodes.literal_block('#'+l_,'#'+l_)
                lit_['language'] = language
                lit += lit_
            elif l == ' ':
                lit += nodes.literal_block(l_, l_, classes=['no-select'])
            else:
                lit += nodes.literal_block(l_, l_, classes=['no-select'])

            lit += node_div(
                classes = [f"clear-left"]
            )
            return lit

        literals = node_div(
            classes=['code-shell']
        )
        ll = None
        if language == 'ps1':
            wd = wd_ = '/C:/'
        else:
            wd = wd_ = '~'
        block = []
        cd_flush = False
        l__ = ''
        for line in self.content:
            if l__.startswith("cd "):
                if language != 'ps1':
                    wd = path.abspath(path.join(wd, l__[3:]))
                else:
                    l__ = l__.replace('\\', '/')
                    if l__[4] == ':':
                        wd = '/'+l__[3:]
                    else:
                        wd = path.abspath(path.join(path.sep, wd, l__[3:]))
                if len(wd) > 1 and wd[-1] == "/":
                    wd = wd[:-1]

            l = line[0] if len(line) > 0 else ' '
            l_ = line[1:] if l in types else line
            l__ = l_.strip()

            if language != 'ps1':
                if l == '/':
                    wd = line
                elif l == '~':
                    wd = line
            if ((ll != l and ll is not None) or (ll == '$' and block[-1][-1] != '\\') or
                ll == '#' and len(block) > 0):
                wd__ = wd_ if language != 'ps1' else wd_.replace('/', '\\')[1:]
                literals += resolve_block('\n'.join(block), ll,
                                          wd_p+wd__, language)
                if l not in ['/', '~']:
                    block = [l_]
                wd_ = wd
            else:
                block.append(l_)
            ll = l
        literals += resolve_block('\n'.join(block), ll, wd, language)

        caption = self.options.get('caption')
        if caption:
            try:
                literals = container_wrapper(self, literals, caption)
            except ValueError as exc:
                return [document.reporter.warning(exc, line=self.lineno)]

        self.add_name(literals)

        return [literals]


def common_setup(app):
    app.add_directive('collapsible', directive_collapsible)
    app.add_directive('video', directive_video)
    app.add_directive('clear-content', directive_clear_content)
    app.add_directive('shell', directive_shell)

    app.add_config_value('hide_collapsible_content', dft_hide_collapsible_content, 'env')
