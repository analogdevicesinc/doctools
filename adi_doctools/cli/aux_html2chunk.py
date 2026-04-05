"""
Convert Sphinx HTML documentation to section-level chunks for vector search embedding.
"""
import re
from copy import deepcopy
from pathlib import Path
from lxml import html as lxml_html

from .aux_html2md import SKIP_CLASSES
from .aux_html2md import find_main_content, get_plain_text


def _remove_by_xpath(elem, xpath):
    for el in elem.xpath(xpath):
        el.getparent().remove(el)


def _clean_section(section):
    clone = deepcopy(section)
    for s in clone.xpath('./section'):
        clone.remove(s)
    for cls in SKIP_CLASSES:
        _remove_by_xpath(clone, f".//*[contains(@class, '{cls}')]")
    return clone


def _section_text(section):
    clone = _clean_section(section)
    return re.sub(r'\s+', ' ', get_plain_text(clone)).strip()


def _direct_heading(section):
    for tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
        h = section.find(tag)
        if h is not None:
            return h
    return None


def _heading_chain(section, page_title):
    chain = []
    el = section
    while el is not None:
        heading = _direct_heading(el)
        if heading is not None:
            chain.insert(0, heading.text_content().replace('¶', '').strip())
        parent = el.getparent()
        el = parent if parent is not None and parent.tag == 'section' else None
    if not chain:
        chain.append(page_title)
    return chain


def _child_summaries(section, chars_per=100):
    summaries = []
    for child in section.xpath('./section'):
        heading = _direct_heading(child)
        title = ''
        if heading is not None:
            title = heading.text_content().replace('¶', '').strip()

        if not title:
            continue
        text = _section_text(child)
        summaries.append(title + (': ' + text[:chars_per] if text else ''))
    return summaries


def _build_context(breadcrumb, headings):
    parts = []
    if breadcrumb:
        parts.append(' / '.join(breadcrumb))
    if headings:
        parts.append(' / '.join(headings))
    if not parts:
        return ''
    return ' — '.join(parts) + ': '


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
    """Parse one Sphinx HTML file and return section-level chunks.

    Each chunk is a dict with keys:
        text, displayText, url, pageTitle, headings, breadcrumb, anchor
    """
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
        context = _build_context(breadcrumb, headings)
        return [{
            'text': (context + body_text)[:max_text_chars],
            'displayText': body_text[:300],
            'url': rel_path,
            'pageTitle': page_title,
            'headings': headings,
            'breadcrumb': breadcrumb,
            'anchor': '',
        }]

    chunks = []
    for sec in sections:
        anchor = sec.get('id', '')
        headings = _heading_chain(sec, page_title)

        body_text = _section_text(sec)
        child_sums = _child_summaries(sec)

        if child_sums:
            body_text = (body_text + '. ' if body_text else '') + '. '.join(child_sums)

        if not body_text:
            continue

        display_text = _section_text(sec) or (child_sums[0] if child_sums else body_text)
        context = _build_context(breadcrumb, headings)

        chunks.append({
            'text': (context + body_text)[:max_text_chars],
            'displayText': display_text[:300],
            'url': rel_path + ('#' + anchor if anchor else ''),
            'pageTitle': page_title,
            'headings': headings,
            'breadcrumb': breadcrumb,
            'anchor': anchor,
        })
    return chunks
