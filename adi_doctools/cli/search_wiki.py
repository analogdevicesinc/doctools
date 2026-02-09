"""Search Analog Devices DokuWiki (wiki.analog.com)

Uses the DokuWiki search API:
- Search: https://wiki.analog.com/<query>?do=search
- Raw content: https://wiki.analog.com/<pagename>?do=export_raw
"""

import hashlib
import json
import os
import re
import shutil
import sys
import logging
from urllib.request import urlopen, Request
from urllib.error import URLError, HTTPError
from urllib.parse import quote

from .argument_parser import get_arguments_search_wiki
from .logging import DIM, BLUE, NC

from pathlib import Path

logger = logging.getLogger(__name__)

WIKI_BASE_URL = "https://wiki.analog.com"
CACHE_DIR = Path('/tmp/adoc.search-wiki')
RESULTS_FILE = CACHE_DIR / f'last_results_{hashlib.md5(os.getcwd().encode()).hexdigest()}.json'


def get_terminal_width():
    """Get the current terminal width."""
    return shutil.get_terminal_size().columns


def get_terminal_height():
    """Get the current terminal height."""
    return shutil.get_terminal_size().lines


def calculate_limit_from_terminal():
    """Calculate result limit based on terminal height."""
    height = get_terminal_height()
    limit = max(3, (height - 10) // 4)
    return limit


def parse_wiki_search_results(html: str) -> list:
    """Parse DokuWiki search results HTML using regex.

    DokuWiki search results have two sections:
    1. search_quickhits: Quick pagename matches (ul.search_quickhits > li > a.wikilink1)
    2. search_fulltextresult: Full-text search results (div.search_fullpage_result)

    Returns list of dicts with 'url', 'title', 'snippet' keys
    """
    results = []
    seen_urls = set()

    # Extract quickhits section
    quickhits_match = re.search(r'<ul class="search_quickhits">(.*?)</ul>', html, re.DOTALL)
    if quickhits_match:
        quickhits_html = quickhits_match.group(1)
        # Extract links from quickhits
        # Format: <a href="/path" class="wikilink1" title="..." data-wiki-id="...">Title</a>
        links = re.findall(
            r'<a\s+href="([^"]+)"[^>]*class="[^"]*wikilink1[^"]*"[^>]*>([^<]+)</a>',
            quickhits_html
        )
        for href, title in links:
            url = href if href.startswith('http') else WIKI_BASE_URL + href
            if url not in seen_urls:
                # Decode HTML entities
                title = title.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')
                results.append({
                    'url': url,
                    'title': title,
                    'snippet': ''
                })
                seen_urls.add(url)

    # Extract fulltext results
    fulltext_results = re.findall(
        r'<div class="search_fullpage_result">\s*<dt>\s*<a\s+href="([^"]+)"[^>]*class="[^"]*wikilink1[^"]*"[^>]*>([^<]+)</a>.*?<dd class="snippet">([^<]*(?:<[^>]+>[^<]*)*)</dd>',
        html,
        re.DOTALL
    )
    for href, title, snippet_html in fulltext_results:
        # Clean up href (remove search highlight params)
        if '?s[]=' in href:
            href = href.split('?s[]=')[0]
        url = href if href.startswith('http') else WIKI_BASE_URL + href

        if url not in seen_urls:
            # Decode HTML entities
            title = title.replace('&amp;', '&').replace('&lt;', '<').replace('&gt;', '>')

            # Clean snippet: remove HTML tags and DokuWiki markup
            snippet = re.sub(r'<[^>]+>', '', snippet_html)
            snippet = snippet.replace('====== ', '').replace(' ======', '')
            snippet = snippet.replace('===== ', '').replace(' =====', '')
            snippet = ' '.join(snippet.split())[:300]

            results.append({
                'url': url,
                'title': title,
                'snippet': snippet
            })
            seen_urls.add(url)

    return results


def fetch_url(url: str) -> str:
    """Fetch URL content with error handling."""
    try:
        req = Request(url, headers={'User-Agent': 'adoc-search-wiki/1.0'})
        with urlopen(req, timeout=30) as response:
            return response.read().decode('utf-8')
    except HTTPError as e:
        logger.error(f"HTTP error {e.code}: {url}")
        raise
    except URLError as e:
        logger.error(f"URL error: {e.reason}")
        raise


def search_wiki(query: str, limit: int = 10) -> list:
    """Search the wiki and return results."""
    search_url = f"{WIKI_BASE_URL}/{quote(query)}?do=search"

    try:
        html = fetch_url(search_url)
    except (HTTPError, URLError) as e:
        logger.error(f"Failed to search wiki: {e}")
        return []

    results = parse_wiki_search_results(html)
    return results[:limit]


def save_search_results(results: list):
    """Save search results to cache for later fetch."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    with open(RESULTS_FILE, 'w') as f:
        json.dump(results, f)


def load_search_results() -> list:
    """Load previous search results from cache."""
    if not RESULTS_FILE.exists():
        return []
    try:
        with open(RESULTS_FILE, 'r') as f:
            return json.load(f)
    except (json.JSONDecodeError, IOError):
        return []


def fetch_wiki_page(url: str, format: str = 'md') -> str:
    """Fetch a wiki page content."""
    # Normalize URL
    if '?do=' not in url:
        raw_url = url + '?do=export_raw'
        html_url = url + '?do=export_xhtml'
    else:
        raw_url = url.replace('?do=export_xhtml', '?do=export_raw')
        html_url = url.replace('?do=export_raw', '?do=export_xhtml')

    if format == 'html':
        return fetch_url(html_url)
    else:  # raw (default)
        return fetch_url(raw_url)


def fetch_by_index(index: int, format: str = 'md') -> str:
    """Fetch a page by index from previous search results."""
    results = load_search_results()
    if not results:
        logger.error("No previous search results found. Run a search first.")
        sys.exit(1)

    if index < 0 or index >= len(results):
        logger.error(f"Index {index} out of range. Valid range: 0-{len(results)-1}")
        sys.exit(1)

    result = results[index]
    url = result['url']
    print(f"Fetching: {result['title']}", file=sys.stderr)
    print(f"URL: {url}", file=sys.stderr)
    print("---", file=sys.stderr)

    return fetch_wiki_page(url, format)


def display_results(results: list, query: str, verbose: bool = False):
    """Display search results in the terminal."""
    if not results:
        print("No results found.")
        return

    terminal_width = get_terminal_width()

    for i, result in enumerate(results):
        title = result.get('title', 'Untitled')
        url = result.get('url', '')
        snippet = result.get('snippet', '')

        # Highlight query terms in title
        highlighted_title = title
        for term in query.split():
            if len(term) > 2:
                pattern = re.compile(re.escape(term), re.IGNORECASE)
                highlighted_title = pattern.sub(
                    lambda m: f'\033[93m{m.group()}\033[0m',
                    highlighted_title
                )

        # Format output
        index_str = f"[{i}]"
        title_line = f"{BLUE}{index_str}{NC} {highlighted_title}"

        print(title_line)
        print(f"{DIM}{url}{NC}")

        if snippet:
            # Truncate snippet to terminal width
            max_snippet = terminal_width - 4
            if len(snippet) > max_snippet:
                snippet = snippet[:max_snippet - 3] + "..."
            print(f"  {snippet}")

        print()

    save_search_results(results)


def search_wiki_cli():
    """Search wiki CLI entry point."""
    args = get_arguments_search_wiki()

    if args.fetch is not None:
        # Fetch mode
        if args.fetch.startswith('http://') or args.fetch.startswith('https://'):
            content = fetch_wiki_page(args.fetch, format=args.format)
        else:
            try:
                index = int(args.fetch)
                content = fetch_by_index(index, format=args.format)
            except ValueError:
                logger.error("--fetch must be either an integer index or a full URL")
                print(f"Got: {args.fetch}", file=sys.stderr)
                sys.exit(1)
        print(content)
        return

    if not args.query:
        logger.error("Query is required")
        sys.exit(1)

    query = ' '.join(args.query)
    limit = args.limit
    if limit is None:
        limit = calculate_limit_from_terminal()

    print(f"Searching wiki.analog.com for: {query}")
    print()

    results = search_wiki(query, limit)
    display_results(results, query, args.verbose)

    if results:
        print(f"{DIM}Fetch with: adoc search-wiki --fetch <index>{NC}")
