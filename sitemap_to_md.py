import logging
import os
import subprocess
import sys
import importlib
from os import path
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse, urlunparse

import xml.etree.ElementTree as ET

from docling.document_converter import DocumentConverter, PdfFormatOption
from docling.datamodel.base_models import InputFormat, ConversionStatus

from logging_conf import set_logging


logger = logging.getLogger(__name__)

sitemap_url = 'https://www.analog.com/media/en/en-pdf-sitemap.xml'
sitemap_file = 'en-pdf-sitemap.xml'
max_workers = 8
max_docling_workers = 4
cutoff_date = "2023-12-00"
include_paths = ["/data-sheets/"]
blacklist = [
    "max25086-89.pdf",
    "adsp-cm402f_cm403f_cm407f_cm408f_cm409f.pdf",
    "ad976_976a",
]

_BACKENDS = {
    'dlparse_v4': None,
    'dlparse_v1': 'docling.backend.docling_parse_backend.DoclingParseDocumentBackend',
    'pypdfium2':  'docling.backend.pypdfium2_backend.PyPdfiumDocumentBackend',
}


def _make_converter(backend: str) -> DocumentConverter:
    cls_path = _BACKENDS[backend]
    if cls_path is None:
        return DocumentConverter()
    module_name, class_name = cls_path.rsplit('.', 1)
    backend_cls = getattr(importlib.import_module(module_name), class_name)
    return DocumentConverter(
        format_options={InputFormat.PDF: PdfFormatOption(backend=backend_cls)}
    )


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
        self._filter_blacklist()
        self._docling_pdfs()

    def _get_sitemap(self):
        """Download the sitemap XML."""
        if not path.exists(sitemap_file):
            logger.info(f'sitemap: downloading {sitemap_url}')
            subprocess.run(
                ['wget', '-q', sitemap_url, '-O', sitemap_file],
                check=True,
            )
        else:
            logger.info(f'sitemap: {sitemap_file} already exists, skipped download')

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

        logger.info(f"urlset: {len(self.urls_sitemap.keys())} items newer than {cutoff_date}")

    def _filter_up_to_date(self):
        up_to_date = 0
        already_fetched = 0

        for url, lastmod in self.urls_sitemap.items():
            parsed = urlparse(url)
            local_path = Path(parsed.path.lstrip('/'))
            md_path = local_path.with_suffix('.md')

            if md_path.exists():
                first_line = md_path.read_text().split('\n', 1)[0]
                stored_lastmod = self._parse_lastmod_comment(first_line)
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

        logger.info(f'date filter: {up_to_date} up-to-date, {already_fetched} cached, {len(self.urls_pending)} to fetch')

    @staticmethod
    def _parse_lastmod_comment(line: str):
        """Extract lastmod value from <!-- lastmod ... --> comment."""
        line = line.strip()
        if line.startswith('<!-- lastmod ') and line.endswith(' -->'):
            return line[len('<!-- lastmod '):-len(' -->')]
        return None

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

    def _filter_blacklist(self):
        pdfs_pending = []
        blacklisted = 0

        for pdf_path in self.pdfs_pendings:
            if path.basename(pdf_path[0]) in blacklist:
                blacklisted += 1
                continue
            pdfs_pending.append(pdf_path)

        self.pdfs_pendings = pdfs_pending
        logger.info(f'blacklist filter: {blacklisted} ignored')

    @staticmethod
    def _silence_third_party():
        """Kill noisy third-party loggers that install their own handlers."""
        for name in logging.Logger.manager.loggerDict:
            lg = logging.getLogger(name)
            if name == __name__:
                continue
            lg.setLevel(logging.CRITICAL)
            # Also silence handlers they added directly (e.g. RapidOCR)
            for h in lg.handlers:
                h.setLevel(logging.CRITICAL)

    def _docling_pdfs(self):
        """Convert all pending PDFs to Markdown using docling."""
        self._silence_third_party()
        logger.info(f'docling: {len(self.pdfs_pendings)} pdfs in queue')

        # Suppress raw fd-level stderr (pypdfium2 finalizer traces, etc.)
        real_stderr = os.fdopen(os.dup(2), 'w', closefd=True)
        for h in logging.getLogger().handlers:
            if isinstance(h, logging.StreamHandler) and h.stream is sys.stderr:
                h.stream = real_stderr

        devnull_fd = os.open(os.devnull, os.O_WRONLY)
        saved_stderr_fd = os.dup(2)
        os.dup2(devnull_fd, 2)
        os.close(devnull_fd)
        saved_stderr = sys.stderr
        sys.stderr = open(os.devnull, 'w')

        def _convert_one(pdf_path: Path, lastmod: str):
            md_path = pdf_path.with_suffix('.md')
            logger.info(f'convert: {pdf_path}')

            for backend in _BACKENDS:
                logger.debug(f'  with backend {backend} for {pdf_path}')
                result = _make_converter(backend).convert(str(pdf_path))
                if result.status in (ConversionStatus.SUCCESS, ConversionStatus.PARTIAL_SUCCESS):
                    md_path.write_text(f'<!-- lastmod {lastmod} -->\n{result.document.export_to_markdown()}')
                    pdf_path.unlink()
                    return
                logger.debug(f'convert: {pdf_path} failed with backend {backend} (status={result.status})')

            logger.warning(f'convert: {pdf_path} failed with all backends')

        try:
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
                        msg = str(exc).split('\n')[0][:200]
                        logger.warning(f'Failed to convert {pdf_path}: {msg}')
        finally:
            sys.stderr.close()
            sys.stderr = saved_stderr
            os.dup2(saved_stderr_fd, 2)
            os.close(saved_stderr_fd)
            for h in logging.getLogger().handlers:
                if isinstance(h, logging.StreamHandler) and h.stream is real_stderr:
                    h.stream = sys.stderr
            real_stderr.close()


def main():
    set_logging()
    Sitemap2MD().do()


main()
