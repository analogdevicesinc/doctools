"""Extend linkcheck to try links on a sitemap first.

Builds a look-up table with the entries in the sitemaps defined at linkcheck_sitemaps
config, and if the URL requested belongs to any sitemap, mark as valid, skipping the
HTTP request.
"""

from __future__ import annotations

import xml.etree.ElementTree as ET
from typing import TYPE_CHECKING
from urllib.parse import urljoin, urlparse, urlunparse
from packaging.version import Version

from sphinx.util import logging
from sphinx.util import requests
from sphinx import __version__ as __sphinx_version__

if TYPE_CHECKING:
    from sphinx.application import Sphinx
    from sphinx.config import Config
    from sphinx.util.typing import ExtensionMetadata

logger = logging.getLogger(__name__)


class LinkcheckSitemap:
    """Collects and stores URLs from sitemaps."""

    def __init__(self, config: Config) -> None:
        self.config = config
        self.normalized_urls: set[str] = set()

    def fetch_sitemaps(self) -> None:
        """Fetch all sitemaps and extract URLs."""
        sitemaps = getattr(self.config, 'linkcheck_sitemaps', [])

        if not sitemaps:
            return

        for url in sitemaps:
            try:
                logger.info(f'Fetching sitemap: {url}')
                self._fetch_sitemap(url)
            except Exception as exc:
                logger.warning(f'Failed to fetch sitemap {url}: {exc}')

    def _fetch_sitemap(self, url: str) -> None:
        """Fetch a single sitemap and extract URLs."""
        try:
            request_headers = getattr(self.config, 'linkcheck_request_headers', {})
            _url = urlunparse(
                urlparse(url)._replace(path='/', params='', query='', fragment='')
            )
            if _url in request_headers:
                headers = request_headers['*']
            elif '*' in request_headers:
                headers = request_headers['*']
            else:
                headers = {}

            response = requests.get(url, timeout=60, headers=headers)
            response.raise_for_status()
            content = response.content

            if url.endswith(".gz") or response.headers.get('content-type', '').endswith('gzip'):
                from io import BytesIO
                import gzip

                with gzip.GzipFile(fileobj=BytesIO(content)) as f:
                    content = f.read().decode("utf-8")

            root = ET.fromstring(content)

            if root.tag.endswith('sitemapindex'):
                self._process_sitemap_index(root, url)
            elif root.tag.endswith('urlset'):
                self._process_urlset(root)
            else:
                logger.warning(f'Unknown sitemap format in {url}')

        except ET.ParseError as exc:
            logger.warning(f'Failed to parse sitemap XML {url}: {exc}')
        except Exception as exc:
            logger.warning(f'Error fetching sitemap {url}: {exc}')

    def _process_sitemap_index(self, root: ET.Element, base_url: str) -> None:
        """Process a sitemap index file that contains references to other sitemaps."""
        namespace = self._get_namespace(root)

        for sitemap in root.findall(f'.//{{{namespace}}}sitemap'):
            loc_elem = sitemap.find(f'{{{namespace}}}loc')
            if loc_elem is not None and loc_elem.text:
                nested_sitemap_url = urljoin(base_url, loc_elem.text.strip())
                logger.debug(f'Found nested sitemap: {nested_sitemap_url}')
                self._fetch_sitemap(nested_sitemap_url)

    def _process_urlset(self, root: ET.Element) -> None:
        """Process a urlset and extract URLs."""
        namespace = self._get_namespace(root)

        for url in root.findall(f'.//{{{namespace}}}url'):
            loc_elem = url.find(f'{{{namespace}}}loc')
            if loc_elem is not None and loc_elem.text:
                self.normalized_urls.add(
                    self._normalize_url(loc_elem.text.strip())
                )

    def _get_namespace(self, root: ET.Element) -> str:
        """Extract the namespace from the XML root element."""
        default_ns = 'http://www.sitemaps.org/schemas/sitemap/0.9'

        if root.tag.startswith('{'):
            end = root.tag.find('}')
            if end > 0:
                return root.tag[1:end]

        return default_ns

    def _normalize_url(self, url: str) -> str:
        """Normalize URL for better matching (remove trailing slash, etc.)."""
        return urlunparse(
            urlparse(url)._replace(params='', query='', fragment='')
        )

    def includes(self, url: str) -> bool:
        """Check if a URL exists in the collected sitemaps."""
        normalized = self._normalize_url(url)
        if normalized in self.normalized_urls:
            return True

        return False


def builder_inited_linkcheck_sitemap(app: Sphinx) -> None:
    """Initialize the sitemap collector and fetch sitemap URLs."""
    if not hasattr(app, 'builder') or app.builder.name != 'linkcheck':
        return

    collector = LinkcheckSitemap(app.config)
    collector.fetch_sitemaps()

    app.builder.linkcheck_sitemap = collector


def process_uri_with_sitemap(app: Sphinx, uri: str) -> str | None:
    """Process URI through sitemap lookup before linkcheck validation.

    If the URI is found in any sitemap, mark as success by adding a marker to
    the URI.
    """
    if app.builder.name != 'linkcheck':
        return None

    linkcheck_sitemap = getattr(app.builder, 'linkcheck_sitemap', None)
    if not linkcheck_sitemap:
        return None

    if linkcheck_sitemap.includes(uri):
        return f'{uri} (from sitemap)'

    return None


def patch_linkcheck_worker(app: Sphinx, config: Config) -> None:
    """Patch the HyperlinkAvailabilityCheckWorker to handle in-sitemap URIs."""
    if not hasattr(app, 'builder') or app.builder.name != 'linkcheck':
        return

    from sphinx.builders.linkcheck import HyperlinkAvailabilityCheckWorker

    if Version(__sphinx_version__) > Version('8.1.3'):
        from sphinx.builders.linkcheck import _Status
        working = _Status.WORKING
    else:
        working = 'working'

    original_check = HyperlinkAvailabilityCheckWorker._check

    def patched_check(self, docname: str, uri: str, hyperlink) -> tuple:
        """Patched _check method that handles in-sitemap URIs."""
        if uri.endswith(' (from sitemap)'):
            return working, '', 0
        return original_check(self, docname, uri, hyperlink)

    HyperlinkAvailabilityCheckWorker._check = patched_check


def setup(app: Sphinx) -> ExtensionMetadata:
    """Set up the sphinx_sitemap_linkcheck extension."""

    app.add_config_value('linkcheck_sitemaps', [], 'html', types=frozenset({list, tuple}))

    app.connect('builder-inited', builder_inited_linkcheck_sitemap)
    app.connect('builder-inited', lambda app: patch_linkcheck_worker(app, app.config))

    app.connect('linkcheck-process-uri', process_uri_with_sitemap)

    return {
        'version': 'builtin',
        'parallel_read_safe': True,
        'parallel_write_safe': True,
    }