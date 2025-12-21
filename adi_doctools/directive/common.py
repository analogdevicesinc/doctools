from packaging.version import Version
from multiprocessing import Manager
from typing import List, Optional

from docutils import nodes
from docutils.statemachine import ViewList
from docutils.parsers.rst import Directive, directives
from docutils.parsers.rst.roles import set_classes
from sphinx.util import logging
from sphinx.util.docutils import SphinxDirective
from sphinx.directives.code import container_wrapper
from sphinx.directives.other import Include

from sphinx import __version__ as __sphinx_version__

import re
import jinja2
import yaml
from os import path, pardir, makedirs
from uuid import uuid4
from hashlib import sha1
from typing import Tuple

from typing import Sequence
from docutils.nodes import Node

from .node import node_div, node_input, node_label, node_icon, node_source, node_a, node_collection
from .node import node_iframe, node_video

logger = logging.getLogger(__name__)

dft_hide_collapsible_content = True


def length_or_percentage_or_unitless_list(argument):
    """
    Converts a space- or comma-separated list of values into a Python list
    of a length or percentage unit.
    (Directive option conversion function.)

    Raises ValueError for non-positive measure of a valid unit.
    """
    if ',' in argument:
        entries = argument.split(',')
    else:
        entries = argument.split()
    return [directives.length_or_percentage_or_unitless(entry) for entry in entries]


def parse_rst(state, content, uid: Optional[str] = None):
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
    # TODO improve nested parse warnings, e.g. manipulate docname, lineno, add label
    state.nested_parse(rst, 0, node)
    return node


def directive_description_doctree_resolved(app, doctree, fromdocname):
    has_meta = any(
        isinstance(node, nodes.meta) and node.get('name') == 'description'
        for node in doctree.traverse(nodes.meta)
    )
    if has_meta:
        return

    content = None
    for node in doctree.traverse(nodes.paragraph):
        if node.parent.tagname != 'meta':
            content = node.astext().strip()
            break
    if not content:
        return

    meta = nodes.meta(name='description',
                      content=content)
    doctree.insert(0, meta)


class directive_description(Directive):
    has_content = True

    def run(self):
        description = ' '.join(self.content)
        if len(description) > 160:
            docname = self.state.document.settings.env.docname
            self.state_machine.reporter.warning(
                f"{docname}: Description provided is too long "
                f" ({len(description)} > 160).",
                line=self.lineno
            )
        meta = nodes.meta(name='description',
                          content=description)
        return [meta]


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
                     morecols: int = 0, uid: Optional[str] = None):
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

    def column_entries(self, rows, items, uid: Optional[str] = None):
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

    def generic_table(self, description, uid: Optional[str] = None, media_print=False):
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


class directive_include_template(Include):
    """
    Like the standard "Include" directive, but parses the content
    as yaml and the include as a jinja2 tamplate.
    """
    has_content = True
    option_spec = Include.option_spec.copy()
    option_spec.update({
        "file": str,
    })

    def run(self) -> Sequence[Node]:
        content_text = "\n".join(self.content)
        if "file" in self.options:
            if len(self.content):
                self.state_machine.reporter.warning(
                    f"Option :file: and content: '''\n{content_text}\n''' provided, "
                    "but only sourced file will be used.",
                    line=self.lineno
                )
            _, filename = self.env.relfn2path(self.options["file"])
            try:
                with open(filename, "r") as f:
                    content_text = f.readlines()
            except FileNotFoundError as e:
                self.state_machine.reporter.warning(
                    e,
                    line=self.lineno
                )
            content_text = "".join(content_text)
        try:
            parsed_yaml = yaml.safe_load(content_text) if content_text else {}
        except Exception as e:
            self.state_machine.reporter.warning(
                e,
                line=self.lineno
            )
            return []

        def _render_include(path, text):
            templ = jinja2.Template(text)
            try:
                return templ.render(**parsed_yaml)
            except Exception as e:
                self.state_machine.reporter.warning(
                    f"jinja2: {path}: {e}",
                    line=self.lineno
                )
            return ""

        def _include_read(app, path, docname, arg):
            arg[0] = _render_include(path, arg[0])
            self.env.events.disconnect(listener_id)

        if Version(__sphinx_version__) >= Version('7.2.5'):
            listener_id = self.env.events.connect(
                    "include-read",
                    _include_read,
                    priority=500
                )
            return super().run()

        # - Sphinx < 7.2.5
        def _insert_input(include_lines, source):
            from docutils.statemachine import StateMachine
            from pathlib import Path

            text = "\n".join(include_lines[:-2])
            text = _render_include(Path(source), text)
            include_lines = text.splitlines() + include_lines[-2:]
            return StateMachine.insert_input(self.state_machine, include_lines, source)

        old_insert_input = self.state_machine.insert_input
        self.state_machine.insert_input = _insert_input
        try:
            return super().run()
        finally:
            self.state_machine.insert_input = old_insert_input


def directive_collection_before_read_docs(app, env, docnames):
    if not hasattr(app.builder, "collection_image"):
        manager = Manager()
        app.builder.collection_image = manager.dict()


def directive_collection_build_finished(app, exc):
    if app.builder.format != 'html':
        return

    import json

    env = app.env

    # Merge collection_image map with cache
    # we don't care about removed images, since the o.g. path is a uid
    dest_dir = path.abspath(path.join(app.builder.outdir, pardir,
                                      'managed'))
    file_map = path.join(dest_dir, 'collection_image_map.json')
    if not path.exists(dest_dir):
        makedirs(dest_dir)
    json_map = {}
    if path.exists(file_map):
        with open(file_map) as f:
            json_map = json.loads(f.read())

    if hasattr(app.builder, 'collection_image'):
        json_map.update(app.builder.collection_image)

    if not hasattr(env, 'collection'):
        env.collection = []

    pattern = app.config.collection_pattern

    def get_title(entry, inventory, doc):
        if inventory == app.config.repository:
            doc = env.docname if doc == '.' else doc
            if doc in env.titles:
                entry['name'] = env.titles[doc].astext()
            elif f"{doc}/index" in env.titles:
                entry['name'] = env.titles[f"{doc}/index"].astext()
            return

        if not hasattr(env, "intersphinx_named_inventory"):
            return
        inv = env.intersphinx_named_inventory.get(inventory)
        if inv:
            if doc in inv['std:doc']:
                pass
            elif f"{doc}/index" in inv['std:doc']:
                doc = f"{doc}/index"
            else:
                return

            if Version(__sphinx_version__) < Version("8.1.4"):
                _, _, _, display_name = inv['std:doc'][doc]
                entry['name'] = display_name
            else:
                entry['name'] = inv['std:doc'][doc].display_name

    collection_ = {}
    used_keys = set()
    for item in env.collection:
        if item['key'] in used_keys:
            logger.warning(
                f"collection: Duplicated key '{item['key']}', skipped."
            )
        used_keys.add(item['key'])
        collection_[item['key']] = {
            'docname': item['docname'],
            'description': item['description'],
            'include': item['include'],
        }
        if app.config.repository:
            collection_[item['key']]['docname'] = f"{app.config.repository}/{item['docname']}"
            if 'image' in item and item['image'] in json_map:
                if json_map[item['image']].find('://') == -1:
                    collection_[item['key']]['image'] = f"{app.config.repository}/{json_map[item['image']]}"
                else:
                    collection_[item['key']]['image'] = json_map[item['image']]
        if 'subtitle' in item:
            collection_[item['key']]['subtitle'] = item['subtitle']
        if 'label' in item:
            collection_[item['key']]['label'] = item['label']

        for inventory in item['include']:
            for key in item['include'][inventory]:
                if 'name' not in item['include'][inventory][key]:
                    get_title(item['include'][inventory][key], inventory, key)

    json_ = {'pattern': pattern, 'collection': collection_}

    file = path.join(app.builder.outdir, 'collection.json')
    with open(file, 'w') as f:
        json.dump(json_, f, indent=4)
    with open(file_map, 'w') as f:
        json.dump(json_map, f, indent=4)


class directive_collection(SphinxDirective):
    option_spec = {
        'subtitle': directives.unchanged_required,
        'image': directives.unchanged_required,
        'label': directives.unchanged_required,
    }
    has_content = True
    final_argument_whitespace = True

    required_arguments = 1
    optional_arguments = 0

    def run(self):
        if self.env.config.no_collections:
            return []

        self.assert_has_content()

        key = self.arguments[0].strip()
        subtitle = self.options.pop('subtitle', None)
        image = self.options.pop('image', None)
        if image:
            image = directives.uri(image)
        label = self.options.pop('label', None)
        label = re.split(r'(?<!\\)[ ,]', label)
        label = [d.replace('\\ ', ' ') for d in label if d]

        description = []
        for i, line in enumerate(self.content):
            # First include, break-out description part
            if not line.startswith(' ') and line.strip().endswith(':'):
                break
        description = "\n".join(self.content[:i])

        include = {}
        current_include = None
        got_itself = False
        for i, line in enumerate(self.content[i:]):
            line = line.split("#", 1)[0]  # Strip comments
            if not line.startswith(' ') and line.strip().endswith(':'):
                current_include = line.strip()[:-1]
                if current_include not in include:
                    include[current_include] = {}
                continue
            if not current_include:
                continue

            if not line.startswith('  -') and line != "":
                self.state_machine.reporter.warning(
                    "collection: Malformed include line skipped: "
                    f"'{line}'",
                    line=self.lineno
                )
                continue
            line = line.strip()
            if line == "":
                continue

            line = line[2:]
            match = re.match(r'([^<]+)<([^>]+)>', line)
            if match:
                name = match.group(1).strip()
                path_ = match.group(2)
            else:
                name = None
                path_ = line

            self.assert_docname(current_include, path_, self.env.docname)

            docname = self.env.docname
            if docname.endswith('/index'):
                docname = docname[:-6]
            if (current_include == self.config.repository and
                (path_ == '.' or path_ == docname or path_ == self.env.docname)):
                got_itself = True
                path_ = docname
            if (current_include != self.config.repository and
                (path_ == '.')):
                    self.state_machine.reporter.warning(
                    f"collection: Got '.' repository '{current_include}', "
                    f"which isn't the current '{self.config.repository}'.",
                    line=self.lineno
                )

            include[current_include][path_] = {}
            if name:
                include[current_include][path_]["name"] = name

        if not got_itself and self.config.repository:
            if self.config.repository not in include:
                include[self.config.repository] = {}
            include[self.config.repository][docname] = {}

        if not hasattr(self.env, 'collection'):
            self.env.collection = []

        entry = {
            'docname': self.env.docname,
            'key': key,
            'description': description,
            'include': include,
        }
        if subtitle:
            entry['subtitle'] = subtitle
        if label:
            entry['label'] = label
        if image:
            node = node_collection(classes=['_collection'], olduri=image)
            oldrelfn, _ =  self.env.relfn2path(
                image,
                self.env.docname
            )
            entry['image'] = oldrelfn
            image_node = nodes.image(self.block_text, uri=image)
            node += image_node
        else:
            node = node_collection(classes=['_collection'])

        self.env.collection.append(entry)

        return [node]

    def assert_docname(self, inventory, doc, doc_):
        if not hasattr(self.env, "intersphinx_named_inventory"):
            return
        if inventory == self.config.repository:
            doc = doc_ if doc == '.' else doc
            if doc not in self.env.found_docs:
                self.state_machine.reporter.warning(
                    f"unknown document: '{doc}'",
                    line=self.lineno
                )
            return

        inv = self.env.intersphinx_named_inventory.get(inventory)
        if inv:
            if doc in inv['std:doc']:
                return
            if f"{doc}/index" in inv['std:doc']:
                return

            self.state_machine.reporter.warning(
                f"Doc '{doc}' not in inventory '{inventory}'.",
                line=self.lineno
            )
            return

        self.state_machine.reporter.warning(
            f"Inventory '{inventory}' is not on loaded on intersphinx.",
            line=self.lineno
        )
        return


def directive_collection_purge_doc(app, env, docname):
    if not hasattr(env, 'collection'):
        return

    env.collection = [
        item for item in env.collection if item['docname'] != docname
    ]


def directive_collection_merge_info(app, env, docnames, other):
    if not hasattr(env, 'collection'):
        env.collection = []
    if hasattr(other, 'collection'):
        env.collection.extend([
            item for item in other.collection if item['docname'] in docnames
        ])


class directive_video(Directive):
    """
    Embeds videos (or youtube links).
    For media print (pdf), hides the html iframe/[video/mp4] and
    show the link using CSS rules.
    """
    def align(argument):
        return directives.choice(argument, directive_video.align_h_values)

    has_content = True
    add_index = True
    final_argument_whitespace = True

    align_h_values = ('left', 'center', 'right')

    option_spec = {
        'align': align
    }
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

        align = self.options.pop('align', None)
        if align is not None:
            # TODO figure out visit_table to use correct node['align']
            node['classes'].append('align-' + align)

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

class directive_flex(Directive):
    """
    Wraps the content in div with the flex class.
    This class losely sets CSS flex rules to show content side-by-side
    if enough space is provided.
    """
    option_spec = {
        'class': directives.class_option,
    }
    has_content = True
    add_index = True
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 0

    def run(self):
        set_classes(self.options)
        classes_ = ['flex']
        if 'classes' in self.options:
            classes_.extend(self.options.get('classes'))
        node = node_div(
            classes=classes_
        )
        self.state.nested_parse(self.content, self.content_offset, node)

        return [node]

class directive_grid(Directive):
    """
    Wraps the content in div with the grid class.
    This class losely sets CSS grid rules to show content side-by-side
    with defined number of columns.
    Widths is converted to CSS grid-template-columns.
    """
    option_spec = {
        'class': directives.class_option,
        'widths': length_or_percentage_or_unitless_list,
    }
    has_content = False
    has_content = True
    add_index = True
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 0

    def run(self):
        set_classes(self.options)
        widths = self.options.pop('widths', None)
        if widths is None:
            raise self.error(
                'Error in "%s" directive: "widths" option is required.'
                % (self.name))

        classes_ = ['grid']
        if 'classes' in self.options:
            classes_.extend(self.options.get('classes'))
        node = node_div(
            classes=classes_
        )
        widths = ' '.join([(w + '%' if w[-1].isnumeric() else w) for w in widths])
        node['style'] = f"grid-template-columns: {widths};"
        self.state.nested_parse(self.content, self.content_offset, node)

        return [node]


class directive_clear_content(Directive):
    """
    Clear the content on the sides of the elements (adds whitespace).
    The break flag adds a page break to the print layout,
    similar to LaTeX's cleardoublepage.
    """
    def side(argument):
        return directives.choice(argument, directive_clear_content.side_values)

    option_spec = {
        'side': side,
        'break': directives.flag
    }
    has_content = False
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 0

    side_values = ('left', 'right', 'both')

    def run(self):
        side = self.options.pop('side', None)
        if side is None:
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
        'no-path': directives.flag,
        'show-user': directives.flag,
        'showuser': directives.flag # DEPRECATED
    }
    has_content = True
    final_argument_whitespace = True

    required_arguments = 0
    optional_arguments = 1

    usr_prefix = None
    homedir = None
    language = None
    win = False
    esc = None
    no_path = False

    def run(self):
        self.assert_has_content()

        types = ['$', '/', '~', '#', ' ']

        wd = self.get_opts()
        wd_ = wd

        line_strip = ''
        ll = None
        le = None
        block = []
        parsed = []
        content = list(self.content)
        content.append('/')
        quotes = 0
        for line in content:
            typ = line[0] if len(line) > 0 else ' '
            tye = line[-1] if len(line) > 0 else ' '
            line_ = line[1:] if typ in types else line

            wd = self.parse_path(line_strip, wd)
            line_strip = line_.strip()

            # Path overwrite
            if typ == '/':
                wd = line
            elif typ == '~':
                if len(line_) > 0 and line_[0] == '/':
                    wd = self.homedir+line[1:]
                else:
                    wd = self.homedir

            if le == "\\":
                typ = ll
            elif typ == "$":
                line_ = line_.strip()
            # Block flush condition
            # * If the line type change or
            # * Is command type and not scaped and quotes closed
            # * Is command comment
            if ((ll != typ and ll is not None) or
               (ll == '$' and block[-1][-1] != self.esc and not(quotes % 2)) or
               (ll == '#' and len(block) > 0)):
                parsed.append((wd_, '\n'.join(block), ll))
                if typ not in ['/', '~']:
                    block = [line_]
                    quotes = line_.count("'")
                    quotes += line_.count('"')
                wd_ = wd
            else:
                block.append(line_)
                quotes += line_.count("'")
                quotes += line_.count('"')
            ll = typ
            le = tye

        literals = node_div(
            classes=['code-shell']
        )
        for entry in parsed:
            literals += self.block2node(*entry)

        caption = self.options.get('caption')
        if caption:
            try:
                literals = container_wrapper(self, literals, caption)
            except ValueError as exc:
                document = self.state.document
                return [document.reporter.warning(exc, line=self.lineno)]

        self.add_name(literals)

        return [literals]

    def get_opts(self):
        """
        Get and sanitize options
        """
        shells = ['bash', 'sh', 'zsh', 'ps1']

        user = self.options.get('user')
        group = self.options.get('group')
        if len(self.arguments) > 0:
            self.language = self.arguments[0].strip()
        if user is None:
            user = "user"
        if group is None:
            group = "analog"
        if self.language not in shells:
            if self.language is not None:
                location = self.state_machine.get_source_and_line(self.lineno)
                logger.warning(("shell '%s' is invalid, valid values are "
                                f"[{', '.join(shells)}]."),
                               self.language, location=location)
            self.language = "bash"
        # Generate static vars
        if self.language == 'ps1':
            self.win = True
            wd = "/c"
            self.homedir = f"/c/Users/{user}"
            self.esc = '`'
        else:
            wd = f"/home/{user}"
            self.homedir = wd
            self.esc = '\\'

        # DEPRECATED: showuser
        if 'showuser' in self.options or 'show-user' in self.options:
            if not self.win:
                self.usr_prefix = f"{user}@{group}:"
            else:
                self.usr_prefix = f"{user}.{group} "
        else:
            self.usr_prefix = ""

        if 'no-path' in self.options:
            self.no_path = True

        return wd

    def parse_path(self, line, wd):
        """
        Covert "cd" commands into paths.
        For windows, do a fake to bash conversion, similar to cygpath
        'line' is a list of the current line whitespace split
        """
        line = line.split()
        if len(line) < 2:
            return wd

        for i in range(0, len(line)):
            if line[i-1] != "cd":
                continue

            p_ = line[i]
            if p_[0] in ['"', "'"]:
                i_ = i
                while line[i][-1] not in ['"', "'"]:
                    i += 1
                p_ = ' '.join(line[i_:i+1])[1:-1]
            if self.win:
                p_ = p_.replace('\\', '/')

            if p_[0] == '~':
                wd = self.homedir + p_[1:]
            elif self.win and p_[1] == ':':
                wd = '/'+p_[0]+p_[2:]
            else:
                wd = path.abspath(path.join(wd, p_))
                if self.win and wd == '/':
                    wd = "/c"

            if len(wd) > 1 and wd[-1] in ['/', ';']:
                wd = wd[:-1]
            i += 1
        return wd

    def block2node(self, wd, line, typ):
        """
        Convert block into node objects
        """
        if typ in ['/', '~']:
            return None

        if self.no_path:
            wd = None
        else:
            if self.win:
                if len(wd)  == 1:
                    # Improper case
                    wd = '/c'
                wd = (wd[1].upper()+':'+wd[2:]).replace('/', '\\')
            else:
                wd = wd.replace('\\','')

        if not self.win:
            sep = '$'
        elif wd is not None and len(wd) == 2:
            sep = '\\>'
        else:
            sep = '>'

        lit = node_div()
        if typ == '$':
            if wd is not None:
                if wd.startswith(self.homedir):
                    wd = '~' + wd[len(self.homedir):]
                sep = self.usr_prefix + wd + sep
            else:
                sep = self.usr_prefix[:-1] + sep
            lit += nodes.literal_block(sep, sep,
                                       classes=['no-select', 'float-left'])

        if typ == '$':
            lit_ = nodes.literal_block(line, line)
            lit_['language'] = self.language
        elif typ == '#':
            lit_ = nodes.literal_block('#'+line, '#'+line)
            lit_['language'] = self.language
        elif typ == ' ':
            lit_ = nodes.literal_block(line, line, classes=['no-select'])
            lit_['language'] = 'text'
        else:
            lit_ = nodes.literal_block(line, line, classes=['no-select'])
            lit_['language'] = 'text'
        lit += lit_

        lit += node_div(
            classes=["clear-left"]
        )
        return lit


class directive_svg(SphinxDirective):
    """
    Embeds a svg image source code onto the page.
    The advantage is that the svg and the page share the same DOM sandbox,
    allowing the svg to contain links, and interactive elements such as
    hover effects.
    """
    def align(argument):
        return directives.choice(argument, directive_video.align_h_values)

    has_content = True
    add_index = True
    final_argument_whitespace = True

    align_h_values = ('left', 'center', 'right')

    option_spec = {
        'align': align
    }
    required_arguments = 1
    optional_arguments = 0

    def run(self):
        figure_node = node_div(
            classes=['svg']
        )
        if self.state.document.settings.file_insertion_enabled:
            try:
                f = open(self.arguments[0].strip())
                svg_raw = f.read()
                svg = nodes.raw('fsdf', svg_raw, format='html')
                figure_node += svg
            except Exception as e:
                logger.warning(e)

        align = self.options.pop('align', None)
        if align is not None:
            # TODO figure out visit_table to use correct node['align']
            figure_node['classes'].append('align-' + align)

        # From: https://sourceforge.net/p/docutils/code/HEAD/tree/trunk/docutils/docutils/parsers/rst/directives/images.py#l110
        if self.content:
            # optional caption (single paragraph or empty comment)
            # + optional legend (arbitrary body elements).
            node = nodes.Element()          # anonymous container for parsing
            self.state.nested_parse(self.content, self.content_offset, node)
            for i, child in enumerate(node):
                # skip temporary nodes that will be removed by transforms
                if isinstance(child, (nodes.target, nodes.pending)):
                    figure_node += child
                    continue
                if isinstance(child, nodes.paragraph):
                    caption = nodes.caption(child.rawsource, '',
                                            *child.children)
                    caption.source = child.source
                    caption.line = child.line
                    figure_node += caption
                    break
                if isinstance(child, nodes.comment) and len(child) == 0:
                    break
                error = self.reporter.error(
                    'SVG caption must be a paragraph or empty comment.',
                    nodes.literal_block(self.block_text, self.block_text),
                    line=self.lineno)
                return [figure_node, error]
            if len(node) > i+1:
                figure_node += nodes.legend('', *node[i+1:])

        return [figure_node]

def common_setup(app):
    app.add_directive('description', directive_description)
    app.add_directive('collapsible', directive_collapsible)
    app.add_directive('include-template', directive_include_template)
    app.add_directive('collection', directive_collection)
    app.add_directive('video', directive_video)
    app.add_directive('flex', directive_flex)
    app.add_directive('grid', directive_grid)
    app.add_directive('clear-content', directive_clear_content)
    app.add_directive('shell', directive_shell)
    app.add_directive('svg', directive_svg)

    app.add_config_value('hide_collapsible_content',
                         dft_hide_collapsible_content, 'env')
    app.add_config_value('collection_pattern',
                         {}, 'env')

    app.connect("env-before-read-docs", directive_collection_before_read_docs)
    app.connect('env-purge-doc', directive_collection_purge_doc)
    app.connect('env-merge-info', directive_collection_merge_info)
    app.connect('doctree-resolved', directive_description_doctree_resolved)
    app.connect('build-finished', directive_collection_build_finished)
