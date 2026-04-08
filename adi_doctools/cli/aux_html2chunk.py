"""
Convert Sphinx HTML documentation to section-level chunks for vector search embedding.
"""
from pathlib import Path
from lxml import html as lxml_html

from .aux_html2md import find_main_content
from .aux_html2md import HTMLToMarkdown


HEADING_TAGS = frozenset(('h1', 'h2', 'h3', 'h4', 'h5', 'h6'))

def is_a_chunk(section):
    """
    A section is a chunk if first child is a heading,
    or first child is span with id and second is heading.
    """
    children = [c for c in section if isinstance(c.tag, str)]
    if not children:
        return False
    first = children[0]
    if first.tag in HEADING_TAGS:
        return True
    if first.tag == 'span' and first.get('id') and len(children) > 1:
        if children[1].tag in HEADING_TAGS:
            return True
    return False

def _normalize_chunks(tree):
    """Convert invalid section elements to divs to avoid treating them as chunks."""
    for section in tree.xpath('.//section'):
        if not is_a_chunk(section):
            section.tag = 'div'

def _heading_text(section):
    for tag in HEADING_TAGS:
        h = section.find(tag)
        if h is not None:
            return h.text_content().replace('¶', '').strip()
    return ''

def _heading_chain(section, page_title):
    chain = []
    el = section
    while el is not None:
        title = _heading_text(el)
        if title:
            chain.insert(0, title)
        parent = el.getparent()
        el = parent if parent is not None and parent.tag == 'section' else None
    if not chain and page_title is not None:
        chain.append(page_title)
    return chain

def _extract_breadcrumb(tree):
    nav = tree.find(".//nav[@class='breadcrumb']")
    if nav is None:
        return []
    return [
        a.text_content().replace('¶', '').strip()
        for a in nav.xpath('.//ol/li/a')
        if a.text_content().strip()
    ]


class HTMLToChunks(HTMLToMarkdown):
    """Convert Sphinx-generated HTML to Chunks."""

    def __init__(self):
        self.output = []
        self.base_url = None # Disable markdown links.
        self.chunk_only = True # Process a single section, disable fancy formatting

    def process_chunk_body(self, section):
        for child in section:
            if child.tag in HEADING_TAGS:
                continue
            self.process_element(child)

    def convert(self, html_path, docs_root, max_text_chars=1000):
        """1000 ~ 250 tokens."""

        with open(html_path, 'r') as f:
            html_content = f.read()
        rel_path = str(Path(html_path).relative_to(docs_root)).replace('\\', '/')

        tree = lxml_html.fromstring(html_content)

        main = find_main_content(tree)
        if main is None:
            return []

        _normalize_chunks(main)

        breadcrumb = _extract_breadcrumb(tree)

        h1 = main.find('.//h1')
        page_title = (
            h1.text_content().replace('¶', '').strip()
            if h1 is not None
            else None
        )

        sections = main.xpath('.//section')

        chunks = []
        for sec in sections:
            anchor = sec.get('id', '')
            headings = _heading_chain(sec, page_title)

            self.process_chunk_body(sec)

            hierarchy = [*breadcrumb, *headings]
            context = ' > '.join(hierarchy) + ':\n' if hierarchy else ''

            if sec.find('h1') is None:
                path_ = rel_path + ('#' + anchor if anchor else '')
            else:
                path_ = rel_path

            text= '\n'.join(self.output).strip() + '\n'
            if not text.strip():
                continue

            self.output=[]
            chunks.append({
                'chunk': (context + text)[:max_text_chars],
                'text': text[:300],
                'url': path_,
                'title': page_title,
                'breadcrumb': breadcrumb,
                'headings': headings,
            })
        return chunks
