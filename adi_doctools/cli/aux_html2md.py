"""
Convert Sphinx HTML documentation to Markdown format.
"""

import re
from urllib.parse import urljoin
from lxml import html as lxml_html


class SphinxHTMLToMarkdown:
    """Convert Sphinx-generated HTML to Markdown."""

    def __init__(self, base_url):
        self.base_url = base_url
        self.output = []

    def convert(self, html_content):
        """Convert HTML content to Markdown.

        Args:
            html_content: HTML string to convert

        Returns:
            Markdown string
        """
        tree = lxml_html.fromstring(html_content)

        # Find main content area
        main_content = tree.find('.//div[@role="main"]')
        if main_content is None:
            main_content = tree.find('.//div[@class="document"]')
        if main_content is None:
            main_content = tree.find('.//div[@class="documentwrapper"]')
        if main_content is None:
            main_content = tree.find('.//main')
        if main_content is None:
            main_content = tree.find('.//body')

        if main_content is None:
            return None

        self.process_element(main_content)

        return '\n'.join(self.output).strip() + '\n'

    def process_element(self, elem, list_depth=0):
        """Recursively process HTML elements."""
        tag = elem.tag

        # Skip navigation, headers, footers, and sphinx-specific UI elements
        classes = elem.get('class', '')
        if any(skip in classes for skip in [
            'headerlink', 'sphinxsidebar', 'related', 'footer',
            'document-nav', 'breadcrumb', 'toctree-wrapper'
        ]):
            return

        if tag in ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']:
            self.handle_heading(elem)
        elif tag == 'p':
            self.handle_paragraph(elem)
        elif tag == 'pre':
            self.handle_pre(elem)
        elif tag == 'figure':
            self.handle_figure(elem)
        elif tag == 'img' and elem.getparent().tag != 'figure':
            self.handle_standalone_image(elem)
        elif tag == 'ul':
            self.handle_list(elem, ordered=False, depth=list_depth)
        elif tag == 'ol':
            self.handle_list(elem, ordered=True, depth=list_depth)
        elif tag == 'table':
            self.handle_table(elem)
        elif tag == 'a':
            self.process_children(elem, list_depth)
        elif tag == 'section':
            self.process_children(elem, list_depth)
        elif 'admonition' in classes or tag == 'div' and any(
            adm in classes for adm in ['note', 'warning', 'attention', 'important', 'tip', 'caution']
        ):
            self.handle_admonition(elem)
        elif tag == 'div':
            if 'highlight' in classes or 'literal-block' in classes:
                pre = elem.find('.//pre')
                if pre is not None:
                    self.handle_pre(pre)
                else:
                    self.process_children(elem, list_depth)
            else:
                self.process_children(elem, list_depth)
        elif tag == 'dl':
            self.handle_definition_list(elem)
        elif tag in ['dt', 'dd']:
            pass
        else:
            self.process_children(elem, list_depth)

    def process_children(self, elem, list_depth=0):
        """Process all children of an element."""
        for child in elem:
            self.process_element(child, list_depth)

    def handle_heading(self, elem):
        """Convert heading to Markdown."""
        level = int(elem.tag[1])
        text = self.get_text(elem).strip()

        if text:
            self.output.append('')
            self.output.append('#' * level + ' ' + text)
            self.output.append('')

    def handle_paragraph(self, elem):
        """Convert paragraph to Markdown."""
        text = self.get_text(elem).strip()
        if text:
            self.output.append('')
            self.output.append(text)

    def handle_pre(self, elem):
        """Convert code block to Markdown."""
        language = ''
        parent = elem.getparent()

        def get_language(elem):
            classes = parent.get('class', '')
            lang_match = re.search(r'highlight-(\w+)|language-(\w+)', classes)
            if lang_match:
                return lang_match.group(1) or lang_match.group(2)
            return None

        if parent is not None:
            language = get_language(parent)
            if language is None:
                parent = parent.getparent()
                language = get_language(parent)

        # Get code content (preserving internal structure)
        code = elem.text_content()

        self.output.append('')
        self.output.append(f'```{language}')
        self.output.append(code.rstrip())
        self.output.append('```')
        self.output.append('')

    def handle_figure(self, elem):
        """Convert figure with caption to Markdown."""
        img = elem.find('.//img')
        figcaption = elem.find('.//figcaption')

        if img is not None:
            src = img.get('src', '')
            alt = img.get('alt', '')

            if src:
                src = urljoin(self.base_url, src)

            # Clear alt if it equals the url
            if alt == src or alt == img.get('src', ''):
                alt = ''

            self.output.append('')
            self.output.append(f'![{alt}]({src})')

            if figcaption is not None:
                caption = self.get_text(figcaption).strip()
                if caption:
                    self.output.append('')
                    self.output.append(f'*{caption}*')

            self.output.append('')

    def handle_standalone_image(self, elem):
        """Convert standalone image to Markdown."""
        src = elem.get('src', '')
        alt = elem.get('alt', '')
        original_src = elem.get('src', '')

        if src:
            src = urljoin(self.base_url, src)

            # Clear alt if it equals the url
            if alt == src or alt == original_src:
                alt = ''

            self.output.append('')
            self.output.append(f'![{alt}]({src})')
            self.output.append('')

    def handle_list(self, elem, ordered=False, depth=0):
        """Convert list to Markdown."""
        self.output.append('')

        for i, li in enumerate(elem.findall('li'), 1):
            indent = '  ' * depth

            if ordered:
                prefix = f'{indent}{i}. '
            else:
                prefix = f'{indent}- '

            text = self.get_text(li, inline=True).strip()

            if text:
                lines = text.split('\n')
                self.output.append(prefix + lines[0])

                for line in lines[1:]:
                    if line.strip():
                        self.output.append('  ' * (depth + 1) + line)

            for nested in li.findall('ul'):
                self.handle_list(nested, ordered=False, depth=depth + 1)
            for nested in li.findall('ol'):
                self.handle_list(nested, ordered=True, depth=depth + 1)

        if depth == 0:
            self.output.append('')

    def handle_table(self, elem):
        """Convert table to Markdown with aligned columns."""
        rows = []

        for row in elem.findall('.//tr'):
            cells = []
            for cell in row.findall('.//th') + row.findall('.//td'):
                text = self.get_text(cell, inline=True).strip()
                text = ' '.join(text.split('\n'))
                cells.append(text)
            if cells:
                rows.append(cells)

        if not rows:
            return

        max_cols = max(len(row) for row in rows)

        for row in rows:
            while len(row) < max_cols:
                row.append('')

        col_widths = [0] * max_cols
        for row in rows:
            for i, cell in enumerate(row):
                col_widths[i] = max(col_widths[i], len(cell))

        col_widths = [max(w, 3) for w in col_widths]

        self.output.append('')

        if rows:
            header_cells = [cell.ljust(col_widths[i]) for i, cell in enumerate(rows[0])]
            self.output.append('| ' + ' | '.join(header_cells) + ' |')

            separators = ['-' * col_widths[i] for i in range(max_cols)]
            self.output.append('| ' + ' | '.join(separators) + ' |')

            for row in rows[1:]:
                data_cells = [cell.ljust(col_widths[i]) for i, cell in enumerate(row)]
                self.output.append('| ' + ' | '.join(data_cells) + ' |')

        self.output.append('')

    def handle_admonition(self, elem):
        """Convert admonition to Markdown."""
        classes = elem.get('class', '')

        adm_type = 'Note'
        for atype in ['note', 'warning', 'attention', 'important', 'tip', 'caution']:
            if atype in classes.lower():
                adm_type = atype.title()
                break

        title_elem = elem.find('.//*[@class="admonition-title"]')
        if title_elem is not None:
            adm_type = self.get_text(title_elem).strip()

        content_parts = []
        for child in elem:
            if child.get('class') == 'admonition-title':
                continue
            text = self.get_text(child).strip()
            if text:
                content_parts.append(text)

        content = '\n'.join(content_parts)

        self.output.append('')
        self.output.append(f'> **{adm_type}**')
        self.output.append('>')
        for line in content.split('\n'):
            self.output.append(f'> {line}')
        self.output.append('')

    def handle_definition_list(self, elem):
        """Convert definition list to Markdown."""
        self.output.append('')

        for child in elem:
            if child.tag == 'dt':
                term = self.get_text(child, inline=True).strip()
                self.output.append(f'**{term}**')
            elif child.tag == 'dd':
                definition = self.get_text(child, inline=True).strip()
                for line in definition.split('\n'):
                    if line.strip():
                        self.output.append(f':   {line}')
                self.output.append('')

        self.output.append('')

    def get_text(self, elem, inline=False):
        """Extract text from element, handling inline formatting."""
        parts = []

        if elem.text:
            parts.append(elem.text)

        for child in elem:
            classes = child.get('class', '')
            if 'headerlink' in classes:
                continue

            tag = child.tag
            child_text = ''

            if tag == 'a':
                href = child.get('href', '')
                link_text = self.get_text(child, inline=True).strip()

                if href:
                    href = urljoin(self.base_url, href)
                    child_text = f'[{link_text}]({href})'
                else:
                    child_text = link_text

            elif tag == 'code':
                code_text = child.text_content().strip()
                child_text = f'`{code_text}`'

            elif tag == 'strong' or tag == 'b':
                bold_text = self.get_text(child, inline=True).strip()
                child_text = f'**{bold_text}**'

            elif tag == 'em' or tag == 'i':
                italic_text = self.get_text(child, inline=True).strip()
                child_text = f'*{italic_text}*'

            elif tag == 'br':
                child_text = '\n'

            elif tag in ['span', 'div', 'p'] and inline:
                child_text = self.get_text(child, inline=True)

            else:
                child_text = self.get_text(child, inline=True)

            parts.append(child_text)

            if child.tail:
                parts.append(child.tail)

        return ''.join(parts)


def convert_html_to_markdown(url, html_content):
    """Convert Sphinx HTML to Markdown format."""
    try:
        converter = SphinxHTMLToMarkdown(url)
        return converter.convert(html_content)
    except Exception:
        return None
