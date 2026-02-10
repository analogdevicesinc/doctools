"""Shared utilities for search commands."""

import hashlib
import json
import logging
import os
import re
import shutil
import sys
import time
from concurrent.futures import ThreadPoolExecutor
from datetime import datetime
from email.utils import parsedate_to_datetime
from pathlib import Path
from typing import Callable, TypeVar
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

logger = logging.getLogger(__name__)

T = TypeVar('T')

STOPWORDS = {
    'a', 'and', 'are', 'as', 'at',
    'be', 'but', 'by',
    'for',
    'if', 'in', 'into', 'is', 'it',
    'near', 'no', 'not',
    'of', 'on', 'or',
    'such',
    'that', 'the', 'their', 'then', 'there', 'these', 'they', 'this', 'to',
    'was', 'will', 'with',
}

_ANSI_ESCAPE_PATTERN = re.compile(
    r'\x1b\[[0-9;]*m|\x1b\]8;;[^\x1b]*\x1b\\|\x1b\]8;;\x1b\\'
)


def get_terminal_size() -> tuple[int, int]:
    """Get terminal dimensions.

    :return: Tuple of (width, height) in characters
    """
    size = shutil.get_terminal_size()
    return size.columns, size.lines


def calculate_limit_from_terminal(lines_per_result: int = 6,
                                  header_lines: int = 10) -> int:
    """Calculate result limit based on terminal height.

    :param lines_per_result: Lines each result takes (default 6 for sphinx,
        4 for wiki)
    :param header_lines: Lines reserved for header/footer
    :return: Maximum number of results to display
    """
    _, height = get_terminal_size()
    return max(3, (height - header_lines) // lines_per_result)


def calculate_wrapped_lines(text: str, width: int) -> int:
    """Calculate physical lines needed for text with ANSI codes.

    Strips ANSI escape codes before calculating the visible length,
    then determines how many lines the text will occupy at the given width.

    :param text: Text that may contain ANSI escape codes
    :param width: Terminal width in characters
    :return: Number of physical lines the text will occupy
    """
    if not text:
        return 1

    visible_text = strip_ansi(text)
    visible_length = len(visible_text)
    return max(1, (visible_length + width - 1) // width)


def truncate_text(text: str, max_chars: int,
                  query_terms: list[str] | None = None,
                  stopwords: set[str] | None = None,
                  add_ellipsis: bool = True) -> str:
    """Truncate text and optionally highlight query terms.

    Strips ANSI codes from input, truncates to the specified length,
    and optionally highlights query terms (excluding stopwords) with
    yellow ANSI color.

    :param text: Text to truncate (may contain ANSI codes)
    :param max_chars: Maximum characters for the result
    :param query_terms: Optional list of terms to highlight
    :param stopwords: Set of words to skip when highlighting
        (defaults to STOPWORDS)
    :param add_ellipsis: Whether to add "..." when truncating
    :return: Truncated text with optional highlighting
    """
    if stopwords is None:
        stopwords = STOPWORDS

    plain_text = strip_ansi(text)

    if len(plain_text) <= max_chars:
        result = plain_text
    else:
        if add_ellipsis:
            result = plain_text[:max_chars - 3] + "..."
        else:
            result = plain_text[:max_chars]

    if query_terms:
        result = highlight_query_terms(result, query_terms, stopwords)

    return result


def move_cursor_up(lines: int) -> None:
    """Move terminal cursor up N lines.

    Only operates when stdout is a TTY.

    :param lines: Number of lines to move up
    """
    if lines > 0 and sys.stdout.isatty():
        sys.stdout.write(f'\033[{lines}A')
        sys.stdout.flush()


def move_cursor_down(lines: int) -> None:
    """Move terminal cursor down N lines.

    Only operates when stdout is a TTY.

    :param lines: Number of lines to move down
    """
    if lines > 0 and sys.stdout.isatty():
        sys.stdout.write(f'\033[{lines}B')
        sys.stdout.flush()


def clear_line() -> None:
    """Clear current terminal line.

    Only operates when stdout is a TTY.
    """
    if sys.stdout.isatty():
        sys.stdout.write('\r\033[2K')
        sys.stdout.flush()


def make_clickable_link(url: str, display_text: str | None = None) -> str:
    """Create OSC 8 clickable terminal link.

    Creates a hyperlink that can be clicked in supporting terminals.
    Falls back to plain text when stdout is not a TTY.

    :param url: URL for the link
    :param display_text: Text to display (defaults to URL)
    :return: Formatted string with OSC 8 escape codes (or plain text)
    """
    if display_text is None:
        display_text = url

    if not sys.stdout.isatty():
        return display_text

    return f"\033]8;;{url}\033\\{display_text}\033]8;;\033\\"


def strip_ansi(text: str) -> str:
    """Remove ANSI escape codes from text.

    Handles both standard ANSI color codes and OSC 8 hyperlinks.

    :param text: Text containing ANSI escape codes
    :return: Plain text without escape codes
    """
    return _ANSI_ESCAPE_PATTERN.sub('', text)


def highlight_query_terms(text: str, query_terms: list[str],
                          stopwords: set[str] | None = None) -> str:
    """Highlight query terms with yellow ANSI color.

    Terms in the stopwords set are not highlighted.

    :param text: Text to process
    :param query_terms: List of terms to highlight
    :param stopwords: Set of words to skip (defaults to STOPWORDS)
    :return: Text with highlighted terms
    """
    if stopwords is None:
        stopwords = STOPWORDS

    result = text
    for term in query_terms:
        if term.lower() not in stopwords and len(term) > 2:
            pattern = re.compile(re.escape(term), re.IGNORECASE)
            # Yellow text: \033[93m ... \033[0m
            result = pattern.sub(
                lambda m: f'\033[93m{m.group()}\033[0m',
                result
            )
    return result

class SearchResultsCache:
    """Manage cached search results with working-directory isolation.

    Results are stored per working directory using an MD5 hash of the
    current path, allowing different projects to maintain separate
    result caches.

    :param cache_dir: Base cache directory path
    :param prefix: Filename prefix for this cache type
    """

    def __init__(self, cache_dir: Path, prefix: str = 'last_results') -> None:
        """Initialize the cache.

        :param cache_dir: Base cache directory path
        :param prefix: Filename prefix for this cache type
        """
        self.cache_dir = cache_dir
        self.prefix = prefix
        # Create unique filename based on current working directory
        cwd_hash = hashlib.md5(os.getcwd().encode()).hexdigest()
        self.cache_file = cache_dir / f'{prefix}_{cwd_hash}.json'

    def save(self, results: list[dict]) -> None:
        """Save search results to cache file.

        :param results: List of result dictionaries to cache
        """
        self.cache_dir.mkdir(parents=True, exist_ok=True)
        with open(self.cache_file, 'w', encoding='utf-8') as f:
            json.dump(results, f, indent=2)

    def load(self) -> list[dict] | None:
        """Load previous search results from cache.

        :return: List of cached results, or None if cache doesn't exist
            or is invalid
        """
        if not self.cache_file.exists():
            return None

        try:
            with open(self.cache_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except (json.JSONDecodeError, IOError):
            return None


class HttpCache:
    """HTTP-aware cache with Last-Modified validation.

    Provides caching for HTTP resources with validation based on the
    Last-Modified header. Cached data is stored as JSON with metadata.

    :param cache_dir: Directory for cache files
    """

    def __init__(self, cache_dir: Path) -> None:
        """Initialize the HTTP cache.

        :param cache_dir: Directory for cache files
        """
        self.cache_dir = cache_dir

    def get_path(self, url: str, suffix: str = '.json') -> Path:
        """Get cache file path for a given URL.

        :param url: URL to cache
        :param suffix: File extension for cache file
        :return: Path to the cache file
        """
        url_hash = hashlib.md5(url.encode()).hexdigest()
        return self.cache_dir / f'{url_hash}{suffix}'

    def is_valid(self, cache_path: Path,
                 remote_last_modified: datetime | None) -> bool:
        """Check if cache file is valid based on Last-Modified header.

        :param cache_path: Path to the cache file
        :param remote_last_modified: Last-Modified datetime from server
        :return: True if cache is valid and can be used
        """
        if not cache_path.exists() or not remote_last_modified:
            return False

        try:
            with open(cache_path, 'r', encoding='utf-8') as f:
                cached_data = json.load(f)
        except (json.JSONDecodeError, OSError, IOError) as e:
            logger.debug(f"Failed to load cache {cache_path}: {e}")
            return False

        if isinstance(cached_data, dict) and cached_data.get('__cache_error__'):
            return False

        cached_last_modified_str = cached_data.get(
            '__cache_metadata__', {}
        ).get('last_modified')
        if not cached_last_modified_str:
            return False

        cached_last_modified = parsedate_to_datetime(cached_last_modified_str)
        return remote_last_modified <= cached_last_modified

    def load(self, cache_path: Path) -> dict | None:
        """Load data from cache file.

        :param cache_path: Path to the cache file
        :return: Cached data (without metadata), or None if error cached
        """
        with open(cache_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        if isinstance(data, dict) and data.get('__cache_error__'):
            return None

        if isinstance(data, dict) and '__cache_metadata__' in data:
            data = {k: v for k, v in data.items() if k != '__cache_metadata__'}

        return data

    def save(self, cache_path: Path, data: dict,
             last_modified: datetime | None = None) -> None:
        """Save data to cache file with optional Last-Modified metadata.

        :param cache_path: Path to the cache file
        :param data: Data to cache
        :param last_modified: Optional Last-Modified datetime for validation
        """
        cache_path.parent.mkdir(parents=True, exist_ok=True)

        cache_data = dict(data) if isinstance(data, dict) else data

        if last_modified:
            if isinstance(cache_data, dict):
                if hasattr(last_modified, 'strftime'):
                    lm_str = last_modified.strftime('%a, %d %b %Y %H:%M:%S GMT')
                else:
                    lm_str = str(last_modified)
                cache_data['__cache_metadata__'] = {'last_modified': lm_str}

        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(cache_data, f)

    def save_error(self, cache_path: Path, error_type: str, url: str) -> None:
        """Save an error marker to cache file.

        Used to cache error responses (e.g., 404) to avoid repeated
        failed requests.

        :param cache_path: Path to the cache file
        :param error_type: Type of error (e.g., '404')
        :param url: URL that caused the error
        """
        cache_path.parent.mkdir(parents=True, exist_ok=True)

        error_marker = {
            '__cache_error__': True,
            'error_type': error_type,
            'url': url,
            'timestamp': time.time()
        }

        with open(cache_path, 'w', encoding='utf-8') as f:
            json.dump(error_marker, f)


def fetch_url(url: str, timeout: int = 30,
              headers: dict[str, str] | None = None) -> str:
    """Fetch URL content with error handling.

    :param url: URL to fetch
    :param timeout: Request timeout in seconds
    :param headers: Optional HTTP headers
    :return: Response content as string
    :raises HTTPError: On HTTP error responses
    :raises URLError: On connection failures
    """
    req_headers = headers or {}
    if 'User-Agent' not in req_headers:
        req_headers['User-Agent'] = 'adoc-search/1.0'

    request = Request(url, headers=req_headers)
    with urlopen(request, timeout=timeout) as response:
        return response.read().decode('utf-8')


def fetch_last_modified(url: str, timeout: int = 10) -> datetime | None:
    """Get Last-Modified header via HEAD request.

    :param url: URL to check
    :param timeout: Request timeout in seconds
    :return: Parsed datetime or None if unavailable
    """
    try:
        request = Request(url, method='HEAD')
        with urlopen(request, timeout=timeout) as response:
            last_modified = response.headers.get('Last-Modified')
            if last_modified:
                return parsedate_to_datetime(last_modified)
    except (HTTPError, URLError):
        pass
    return None


def fetch_batch(urls: list[str], fetch_fn: Callable[[str], T],
                max_workers: int = 20) -> dict[str, T]:
    """Fetch multiple URLs in parallel using ThreadPoolExecutor.

    :param urls: List of URLs to fetch
    :param fetch_fn: Function to call for each URL (takes URL, returns result)
    :param max_workers: Maximum concurrent workers (capped at len(urls))
    :return: Dict mapping URL to result
    """
    if not urls:
        return {}

    results = {}

    def fetch_one(url: str) -> tuple[str, T]:
        return url, fetch_fn(url)

    worker_count = min(len(urls), max_workers)
    with ThreadPoolExecutor(max_workers=worker_count) as executor:
        futures = [executor.submit(fetch_one, url) for url in urls]
        for future in futures:
            url, result = future.result()
            results[url] = result

    return results
