"""
Convert Sphinx HTML documentation to section-level chunks for vector search embedding.
"""
import re
from copy import deepcopy
from pathlib import Path
from lxml import html as lxml_html

from .aux_html2md import SKIP_CLASSES
from .aux_html2md import find_main_content


HEADING_TAGS = frozenset(('h1', 'h2', 'h3', 'h4', 'h5', 'h6'))


def _get_plain_text(elem):
    parts = []

    if elem.text:
        parts.append(elem.text)

    for child in elem:
        classes = child.get('class', '')
        if classes is not None and 'headerlink' in classes:
            if child.tail:
                parts.append(child.tail)
            continue

        tag = child.tag
        if isinstance(tag, str):
            if tag in ('code',):
                parts.append(child.text_content())
            elif tag == 'br':
                parts.append('\n')
            else:
                parts.append(_get_plain_text(child))

        if child.tail:
            parts.append(child.tail)

    return ''.join(parts)


def _heading_text(section):
    for tag in HEADING_TAGS:
        h = section.find(tag)
        if h is not None:
            return h.text_content().replace('¶', '').strip()
    return ''


def _section_body(section):
    clone = deepcopy(section)

    for s in clone.xpath('./section'):
        clone.remove(s)

    for tag in HEADING_TAGS:
        h = clone.find(tag)
        if h is not None:
            clone.remove(h)
            break

    for cls in SKIP_CLASSES:
        for el in clone.xpath(f".//*[contains(@class, '{cls}')]"):
            el.getparent().remove(el)

    return re.sub(r'\s+', ' ', _get_plain_text(clone)).strip()


def _heading_chain(section, page_title):
    chain = []
    el = section
    while el is not None:
        title = _heading_text(el)
        if title:
            chain.insert(0, title)
        parent = el.getparent()
        el = parent if parent is not None and parent.tag == 'section' else None
    if not chain:
        chain.append(page_title)
    return chain


def _child_summaries(section, chars_per=100):
    summaries = []
    for child in section.xpath('./section'):
        title = _heading_text(child)
        if not title:
            continue
        text = _section_body(child)
        summaries.append(title + (': ' + text[:chars_per] if text else ''))
    return summaries


def _extract_breadcrumb(tree):
    nav = tree.find(".//nav[@class='breadcrumb']")
    if nav is None:
        return []
    return [
        a.text_content().replace('¶', '').strip()
        for a in nav.xpath('.//ol/li/a')
        if a.text_content().strip()
    ]


def HTMLToChunks(html_path, docs_root, max_text_chars=1000):
    """Parse one Sphinx HTML file and return section-level chunks."""
    with open(html_path, 'r', encoding='utf-8', errors='replace') as f:
        html_content = f.read()

    tree = lxml_html.fromstring(html_content)
    rel_path = str(Path(html_path).relative_to(docs_root)).replace('\\', '/')

    main = find_main_content(tree)
    if main is None:
        return []

    breadcrumb = _extract_breadcrumb(tree)

    h1 = main.find('.//h1')
    page_title = (
        h1.text_content().replace('¶', '').strip()
        if h1 is not None
        else Path(html_path).stem
    )

    sections = main.xpath('.//section')
    if not sections:
        body_text = re.sub(r'\s+', ' ', main.text_content()).strip()
        if not body_text:
            return []
        headings = [page_title]
        context = ' / '.join([*breadcrumb, *headings]) + ': '
        return [{
            'chunk': (context + body_text)[:max_text_chars],
            'text': body_text[:300],
            'url': rel_path,
            'title': page_title,
            'breadcrumb': breadcrumb,
            'headings': headings,
        }]

    chunks = []
    for sec in sections:
        anchor = sec.get('id', '')
        headings = _heading_chain(sec, page_title)

        body = _section_body(sec)
        child_sums = _child_summaries(sec)

        if child_sums:
            body = (body + '. ' if body else '') + '. '.join(child_sums)

        if not body:
            continue

        hierarchy = [*breadcrumb, *headings]
        context = ' / '.join(hierarchy) + ': ' if hierarchy else ''

        is_h1 = sec.find('h1') is not None
        chunks.append({
            'chunk': (context + body)[:max_text_chars],
            'text': body[:300],
            'url': rel_path if is_h1 else rel_path + ('#' + anchor if anchor else ''),
            'title': page_title,
            'breadcrumb': breadcrumb,
            'headings': headings,
        })
    return chunks
