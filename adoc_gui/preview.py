"""What a reference points to, in a few words: the title and the first text
of its target, read from the page of the target.

The page is the built one: of the documentation server for a target of the
project, of the other documentation for a target of an inventory. Only its
text is kept, never its markup.
"""

from __future__ import annotations

import re
import threading
import time
import urllib.error
import urllib.request
from html.parser import HTMLParser
from urllib.parse import urldefrag, urlsplit

# The text kept, in characters, and the paragraphs it is taken from
MAX_TEXT = 320
MAX_PARAGRAPHS = 3
# The page read, in bytes
MAX_PAGE = 3 * 1024 * 1024
TIMEOUT = 6
# The pages kept, and for how long those of other documentations are, in seconds
KEPT = 48
KEPT_FOR = 600

HEADINGS = {'h1', 'h2', 'h3', 'h4', 'h5', 'h6'}
# A term, the signature of an object, the caption of a figure or a table
TITLES = HEADINGS | {'dt', 'caption', 'figcaption'}
TEXTS = {'p', 'dd', 'li'}
# Not the text of the page: its tags, and the classes of what is around it
NOT_TEXT = {'headerlink', 'toctree-wrapper', 'related', 'sphinxsidebar', 'breadcrumbs', 'versionadded',
            'versionchanged'}
SKIPPED = {'script', 'style', 'nav', 'header', 'footer', 'aside', 'pre', 'table', 'form', 'button', 'svg', 'select'}
VOID = {'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr'}
SPACES = re.compile(r'\s+')


class Done(Exception):
    """Enough of the page is read."""


class Excerpt(HTMLParser):
    """The title and the first text of a page, from the element with an id:
    of the page, from its first heading, without one."""

    def __init__(self, anchor: str | None):
        super().__init__(convert_charrefs=True)
        self.anchor = anchor
        self.page = ''
        self.title = ''
        self.paragraphs: list[str] = []
        self.found = not anchor
        # The tags that are open, with whether what is in them is skipped
        self._open: list[tuple[str, bool]] = []
        self._skipped = 0
        self._part: str | None = None
        self._part_depth = 0
        # The element of the id, while it is open
        self._anchor_depth = 0
        self._anchor_tag = ''
        self._text: list[str] = []
        self._in_title = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag in VOID:
            if tag == 'br' and self._part:
                self._text.append(' ')
            return
        # The mark of a heading that links to it is not its text, nor is what
        # leads to other pages
        skipped = (tag in SKIPPED or attrs.get('role') == 'navigation'
                   or not NOT_TEXT.isdisjoint((attrs.get('class') or '').split()))
        self._open.append((tag, skipped))
        self._skipped += skipped
        if tag == 'title' and not self.page:
            self._in_title = True
        if not self.found and attrs.get('id') == self.anchor:
            self.found = True
            self._anchor_depth = len(self._open)
            self._anchor_tag = tag
        if not self.found or self._skipped or self._part:
            return
        if not self.anchor and not self.title and tag != 'h1':
            # A page starts at its title
            return
        if tag in TITLES:
            # The heading after the text is of what follows
            if self.title and (self.paragraphs or tag in HEADINGS):
                if self.paragraphs:
                    raise Done
                return
            if not self.title:
                self._part = 'title'
        elif tag in TEXTS and (self.title or self.anchor):
            self._part = 'text'
        if self._part:
            self._text = []
            self._part_depth = len(self._open)

    def handle_endtag(self, tag):
        if tag in VOID:
            return
        if tag == 'title':
            self._in_title = False
        # Tags that are not closed are closed with the one around them
        if not any(name == tag for name, _ in self._open):
            return
        while self._open:
            name, skipped = self._open.pop()
            self._skipped -= skipped
            if self._part and len(self._open) < self._part_depth:
                self._close()
            if self._anchor_depth and len(self._open) < self._anchor_depth:
                # What the id is of ends here: a figure, a paragraph. A
                # heading or a term goes on with its text.
                self._anchor_depth = 0
                if self.paragraphs or (self.title and self._anchor_tag not in TITLES):
                    raise Done
            if name == tag:
                break

    def handle_data(self, data):
        if self._in_title:
            self.page += data
        elif self._part and not self._skipped:
            self._text.append(data)

    def _close(self):
        text = SPACES.sub(' ', ''.join(self._text)).strip()
        part, self._part = self._part, None
        if not text:
            return
        if part == 'title':
            self.title = text
            return
        self.paragraphs.append(text)
        if len(self.paragraphs) >= MAX_PARAGRAPHS or sum(map(len, self.paragraphs)) >= MAX_TEXT:
            raise Done


def shorten(text: str, length: int = MAX_TEXT) -> str:
    if len(text) <= length:
        return text
    cut = text[:length].rsplit(' ', 1)[0].rstrip(' ,;:.')
    return f'{cut}…'


def excerpt(html: str, anchor: str | None = None) -> dict:
    """{ title, text, page } of the target of a page, what is found of them."""
    parser = Excerpt(anchor)
    try:
        parser.feed(html)
        parser.close()
        # What the page ends in
        if parser._part:
            parser._close()
    except Done:
        pass
    if not parser.found:
        return {}
    answer = {
        'title': shorten(parser.title, 160),
        'text': shorten(' '.join(parser.paragraphs)),
        'page': shorten(SPACES.sub(' ', parser.page).strip(), 160),
    }
    return {key: value for key, value in answer.items() if value}


def read_page(url: str) -> str:
    request = urllib.request.Request(url, headers={'User-Agent': 'adoc-gui', 'Accept': 'text/html'})
    with urllib.request.urlopen(request, timeout=TIMEOUT) as response:  # noqa: S310, http and https only
        if 'html' not in response.headers.get_content_type():
            raise ValueError('not a page')
        charset = response.headers.get_content_charset() or 'utf-8'
        return response.read(MAX_PAGE).decode(charset, errors='replace')


class Previews:
    """The pages read, kept for a while: a page holds many targets."""

    def __init__(self, read=read_page):
        self._read = read
        self._pages: dict[str, tuple[float, object, str]] = {}
        self._lock = threading.Lock()

    def _page(self, url: str, version) -> str:
        """version: what the page is of, it is read again when it changes."""
        now = time.monotonic()
        with self._lock:
            kept = self._pages.get(url)
            if kept and kept[1] == version and now - kept[0] < KEPT_FOR:
                return kept[2]
        html = self._read(url)
        with self._lock:
            self._pages.pop(url, None)
            self._pages[url] = (now, version, html)
            while len(self._pages) > KEPT:
                self._pages.pop(next(iter(self._pages)))
        return html

    def of(self, url: str, version=None) -> dict:
        page, anchor = urldefrag(url)
        if urlsplit(page).scheme not in ('http', 'https'):
            return {'error': 'no preview'}
        try:
            answer = excerpt(self._page(page, version), anchor or None)
        except (OSError, ValueError, urllib.error.URLError):
            return {'error': 'the page cannot be read'}
        return answer or {'error': 'not in the page'}
