import logging
import subprocess
from os import path
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse, urlunparse

import xml.etree.ElementTree as ET
from docling.document_converter import DocumentConverter

from logging_conf import set_logging


logger = logging.getLogger(__name__)

sitemap_url = 'https://www.analog.com/media/en/en-pdf-sitemap.xml'
sitemap_file = 'en-pdf-sitemap.xml'
max_workers = 8
max_docling_workers = 4
cutoff_date = "2025-12-00"
include_paths = ["/data-sheets/"]

class Sitemap2MD:
    def __init__(self) -> None:
        self.urls_sitemap = {}
        self.urls_pending = {}
        self.pdfs_pendings = []

    def do(self):
        self._get_sitemap()
        self._process_sitemap()
        self._filter_up_to_date()
        self._fetch_pdfs()
        self._docling_pdfs()

    def _get_sitemap(self):
        """Download the sitemap XML."""
        if not path.exists(sitemap_file):
            logger.info(f'Downloading sitemap from {sitemap_url}')
            subprocess.run(
                ['wget', '-q', sitemap_url, '-O', sitemap_file],
                check=True,
            )
        else:
            logger.info(f'Sitemap {sitemap_file} already exists, skipping download')

    def _process_sitemap(self) -> None:
        """Fetch a single sitemap and extract URLs."""
        try:
            tree = ET.parse('en-pdf-sitemap.xml')
            root = tree.getroot()

            if root.tag.endswith('urlset'):
                self._process_urlset(root)
            else:
                logger.warning(f'Unknown sitemap format in {sitemap_file}')

        except ET.ParseError as exc:
            logger.warning(f'Failed to parse sitemap XML {sitemap_file}: {exc}')

    def _get_namespace(self, root: ET.Element) -> str:
        """Extract the namespace from the XML root element."""

        if root.tag.startswith('{'):
            end = root.tag.find('}')
            if end > 0:
                return root.tag[1:end]

    def _normalize_url(self, url: str) -> str:
        """Normalize URL for better matching (remove trailing slash, etc.)."""
        return urlunparse(
            urlparse(url)._replace(params='', query='', fragment='')
        )


    def _process_urlset(self, root: ET.Element) -> None:
        """Process a urlset and extract URLs."""
        namespace = self._get_namespace(root)

        for url in root.findall(f'.//{{{namespace}}}url'):
            loc_elem = url.find(f'{{{namespace}}}loc')
            lastmod = url.find(f'{{{namespace}}}lastmod')
            if (loc_elem is not None and loc_elem.text and
                lastmod is not None and lastmod.text):
                # ISO 8601 is lexicographically ordered
                if lastmod.text.strip() < cutoff_date:
                    continue
                if not any(path_ in loc_elem.text for path_ in include_paths):
                    continue
                self.urls_sitemap[self._normalize_url(loc_elem.text.strip())] = lastmod.text.strip()

        logger.info(f"Got {len(self.urls_sitemap.keys())} items newer than {cutoff_date}")

    def _filter_up_to_date(self):
        up_to_date = 0
        already_fetched = 0

        for url, lastmod in self.urls_sitemap.items():
            parsed = urlparse(url)
            local_path = Path(parsed.path.lstrip('/'))
            lastmod_path = local_path.with_suffix('.lastmod')
            md_path = local_path.with_suffix('.md')

            if lastmod_path.exists() and md_path.exists():
                stored_lastmod = lastmod_path.read_text().strip()
                if stored_lastmod == lastmod:
                    logger.debug(f'  {md_path} (up-to-date)')
                    up_to_date += 1
                    continue

            if local_path.exists():
                logger.debug(f'  {local_path} (cached)')
                self.pdfs_pendings.append((local_path, lastmod))
                already_fetched += 1
                continue

            self.urls_pending[url] = lastmod

        logger.info(f'{up_to_date} up-to-date, {already_fetched} already fetched, {len(self.urls_pending)} to fetch')

    def _fetch_pdfs(self):
        """Download PDFs."""
        def _fetch_one(url: str, lastmod: str):
            parsed = urlparse(url)
            local_path = Path(parsed.path.lstrip('/'))

            local_path.parent.mkdir(parents=True, exist_ok=True)

            logger.info(f'Downloading {url}')
            result = subprocess.run(
                ['wget', '-q', url, '-O', str(local_path)],
                capture_output=True,
            )
            if result.returncode != 0:
                logger.warning(f'Failed to download {url}: {result.stderr.decode()}')
                return None

            return local_path

        with ThreadPoolExecutor(max_workers=max_workers) as executor:
            futures = {
                executor.submit(_fetch_one, url, lastmod): (url, lastmod)
                for url, lastmod in self.urls_pending.items()
            }
            for future in as_completed(futures):
                url, lastmod = futures[future]
                try:
                    pdf_path = future.result()
                    if pdf_path is not None:
                        self.pdfs_pendings.append((pdf_path, lastmod))
                except Exception as exc:
                    logger.warning(f'Error fetching {url}: {exc}')

        logger.info(f'{len(self.pdfs_pendings)} PDFs to convert')

    def _docling_pdfs(self):
        """Convert all pending PDFs to Markdown using docling."""
        converter = DocumentConverter()

        def _convert_one(pdf_path: Path, lastmod: str):
            md_path = pdf_path.with_suffix('.md')
            lastmod_path = pdf_path.with_suffix('.lastmod')
            logger.info(f'Converting {pdf_path} -> {md_path}')
            result = converter.convert(str(pdf_path))
            md_path.write_text(result.document.export_to_markdown())
            lastmod_path.write_text(lastmod)
            pdf_path.unlink()
            logger.info(f'Created {md_path}')

        with ThreadPoolExecutor(max_workers=max_docling_workers) as executor:
            futures = {
                executor.submit(_convert_one, pdf_path, lastmod): pdf_path
                for pdf_path, lastmod in self.pdfs_pendings
            }
            for future in as_completed(futures):
                pdf_path = futures[future]
                try:
                    future.result()
                except Exception as exc:
                    logger.warning(f'Failed to convert {pdf_path}: {exc}')

def main():
    set_logging()
    md = Sitemap2MD()
    md.do()


main()
