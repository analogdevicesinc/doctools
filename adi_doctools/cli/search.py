"""Search searchindex.js and relate to objects.inv
Translated to python from
./adi_doctools/themes/harmonic/scripts/search.js
That is a fork from sphinx provided search.
"""

import asyncio
import hashlib
import json
import os
import pickle
import re
import shutil
import sys
import time
from packaging.version import Version
from concurrent.futures import ThreadPoolExecutor
from html.parser import HTMLParser
from io import StringIO
from urllib.request import urlopen
from urllib.error import URLError, HTTPError
from urllib.parse import urljoin, urlparse

import click
import snowballstemmer

from ..lut import repos, remote_doc, source_hostname_raw
from .aux_html2md import convert_html_to_markdown

from pathlib import Path
from sphinx import __version__ as __sphinx_version__
from sphinx.ext.intersphinx._load import _InvConfig

if Version(__sphinx_version__) < Version('9.0.0'):
    from sphinx.ext.intersphinx._load import _fetch_inventory
else:
    from sphinx.ext.intersphinx._load import _fetch_inventory_data, _load_inventory


BLUE = '\033[94m'
RESET = '\033[0m'

CACHE_DIR = Path('/tmp/adoc.search')
CACHE_VALIDITY = 3600  # 1 hour
RESULTS_FILE = CACHE_DIR / f'last_results_{hashlib.md5(os.getcwd().encode()).hexdigest()}.json'

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

SCORE_TITLE = 15
SCORE_PARTIAL_TITLE = 8
SCORE_TERM = 5
SCORE_PARTIAL_TERM = 2


def split_strings_in_tuple(t):
    out = []
    for item in t:
        if isinstance(item, str):
            out.extend(item.split())
        else:
            out.append(item)
    return tuple(out)


def get_terminal_width():
    """Get the current terminal width."""
    return shutil.get_terminal_size().columns


def get_terminal_height():
    """Get the current terminal height."""
    return shutil.get_terminal_size().lines


def calculate_limit_from_terminal():
    """Calculate result limit based on terminal height.

    The result takes 6 lines
    - Title line
    - URL line
    - References line (label refs + doc ref)
    - Summary line 1
    - Summary line 2
    - Blank line

    10 is the header size.
    """
    height = get_terminal_height()
    limit = max(3, (height - 10) // 6)
    return limit


def calculate_wrapped_lines(text, width):
    """Calculate how many lines text will take when wrapped."""
    if not text:
        return 1

    # Strip ANSI codes
    ansi_escape = re.compile(r'\x1b\[[0-9;]*m|\x1b\]8;;[^\x1b]*\x1b\\|\x1b\]8;;\x1b\\')
    visible_text = ansi_escape.sub('', text)
    visible_length = len(visible_text)

    return max(1, (visible_length + width - 1) // width)


def truncate_text(text, max_chars, query_terms=None, add_ellipsis=True):
    """Truncate text to fit within max characters."""
    # Strip all ANSI codes
    ansi_escape = re.compile(r'\x1b\[[0-9;]*m|\x1b\]8;;[^\x1b]*\x1b\\|\x1b\]8;;\x1b\\')
    plain_text = ansi_escape.sub('', text)

    if len(plain_text) <= max_chars:
        result = plain_text
    else:
        if add_ellipsis:
            result = plain_text[:max_chars - 3] + "..."
        else:
            result = plain_text[:max_chars]

    if query_terms:
        for term in query_terms:
            if term.lower() not in STOPWORDS:
                pattern = re.compile(re.escape(term), re.IGNORECASE)
                result = pattern.sub(lambda m: click.style(m.group(), fg='yellow'), result)

    return result


def move_cursor_up(lines):
    """Move cursor up by specified number of lines."""
    if lines > 0 and sys.stdout.isatty():
        sys.stdout.write(f'\033[{lines}A')
        sys.stdout.flush()


def move_cursor_down(lines):
    """Move cursor down by specified number of lines."""
    if lines > 0 and sys.stdout.isatty():
        sys.stdout.write(f'\033[{lines}B')
        sys.stdout.flush()


def clear_line():
    """Clear the current line."""
    if sys.stdout.isatty():
        sys.stdout.write('\r\033[2K')
        sys.stdout.flush()


def make_clickable_link(url, display_text=None):
    """Create a clickable terminal link using OSC 8."""
    if display_text is None:
        display_text = url

    if not sys.stdout.isatty():
        # In non-TTY mode, just return the display text (no hyperlink codes)
        return display_text

    # OSC 8 format: \033]8;;URL\033\\DISPLAY_TEXT\033]8;;\033\\
    return f"\033]8;;{url}\033\\{display_text}\033]8;;\033\\"


def extract_path_from_url(url):
    """Extract a pathname from URL for display."""
    if '://' in url:
        path = url.split('://', 1)[1]
    else:
        path = url

    if '/' in path:
        parts = path.split('/', 1)
        if len(parts) > 1:
            path = parts[1]

    if '#' in path:
        path = path.split('#')[0]

    if path.endswith('.html'):
        path = path[:-5]

    return path



class HTMLTextExtractor(HTMLParser):
    """Extract text content from HTML, skipping scripts and styles."""

    def __init__(self):
        super().__init__()
        self.text = StringIO()
        self.skip = False

    def handle_starttag(self, tag, attrs):
        if tag in ('script', 'style'):
            self.skip = True

    def handle_endtag(self, tag):
        if tag in ('script', 'style'):
            self.skip = False

    def handle_data(self, data):
        if not self.skip:
            self.text.write(data)

    def get_text(self):
        return self.text.getvalue()


def get_cache_path(url):
    """Get the cache file path for a given URL."""
    parsed = urlparse(url)

    parts = [parsed.netloc]

    path = parsed.path.strip('/')
    path = path[:-len("/searchindex.js")]
    parts.append(path.replace('/', '.'))

    filename = '.'.join(parts) + '.json'

    return CACHE_DIR / filename


def is_cache_valid(cache_path):
    """Check if cache file exists and is less than 10 minutes old."""
    if not cache_path.exists():
        return False

    file_age = time.time() - cache_path.stat().st_mtime
    return file_age < CACHE_VALIDITY


def load_from_cache(cache_path):
    """Load search index from cache file."""
    with open(cache_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if isinstance(data, dict) and data.get('__cache_error__'):
        return None

    return data


def save_to_cache(cache_path, data):
    """Save search index to cache file."""
    # Ensure cache directory exists
    cache_path.parent.mkdir(parents=True, exist_ok=True)

    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(data, f)


def save_error_to_cache(cache_path, error_type, url):
    """Save an error marker to cache file."""
    cache_path.parent.mkdir(parents=True, exist_ok=True)

    error_marker = {
        '__cache_error__': True,
        'error_type': error_type,
        'url': url,
        'timestamp': time.time()
    }

    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(error_marker, f)


def save_search_results(results):
    """Save search results to temp file for --fetch option."""
    RESULTS_FILE.parent.mkdir(parents=True, exist_ok=True)

    results_data = []
    for i, (title, url, score, repo_name, doc_ref, label_refs, docname) in enumerate(results, 1):
        results_data.append({
            'index': i,
            'title': title,
            'url': url,
            'score': score,
            'repo': repo_name,
            'docname': docname,
            'doc_ref': doc_ref
        })

    with open(RESULTS_FILE, 'w', encoding='utf-8') as f:
        json.dump(results_data, f, indent=2)


def load_search_results():
    """Load previous search results from temp file."""
    if not RESULTS_FILE.exists():
        return None

    try:
        with open(RESULTS_FILE, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception:
        return None


def fetch_url_content(url, format='md'):
    """Fetch content from URL in specified format."""
    if format == 'src':
        click.echo("Error: --format src is not applicable for URL fetch.", err=True)
        click.echo("The 'src' format fetches source files (.rst/.md) from repositories,", err=True)
        click.echo("which requires using an index from previous search results.", err=True)
        raise click.Abort()

    click.echo("")
    click.echo(f"{BLUE}Format:{RESET} {format.upper()}", nl=False)
    if format == 'md':
        click.echo(" (converted to markdown)")
    elif format == 'html':
        click.echo(" (html)")

    click.echo(click.style("Available: md (default), html, src", dim=True))
    click.echo(f"\n{BLUE}Fetching:{RESET} {url}\n")

    try:
        with urlopen(url, timeout=30) as response:
            html_content = response.read().decode('utf-8')
    except HTTPError as e:
        click.echo(f"Error: HTTP {e.code} - {url}", err=True)
        raise click.Abort()
    except URLError as e:
        click.echo(f"Error: Failed to fetch URL - {e.reason}", err=True)
        raise click.Abort()
    except Exception as e:
        click.echo(f"Error: {e}", err=True)
        raise click.Abort()

    click.echo("─" * get_terminal_width())

    if format == 'html':
        click.echo(html_content)
    elif format == 'md':
        markdown = convert_html_to_markdown(url, html_content)
        if markdown is None:
            click.echo("Error: Failed to convert HTML to Markdown", err=True)
            raise click.Abort()
        click.echo(markdown)

def fetch_source_file(index, format='src'):
    """Fetch and display file from previous search results in specified format."""
    results = load_search_results()

    if results is None:
        click.echo("Error: No previous search results found. Run a search first.", err=True)
        raise click.Abort()

    result = None
    for r in results:
        if r['index'] == index:
            result = r
            break

    if result is None:
        click.echo(f"Error: No result found at index {index}. Valid indices: 1-{len(results)}", err=True)
        raise click.Abort()

    result_url = result['url']

    click.echo("")
    click.echo(f"{BLUE}Format:{RESET} {format.upper()}", nl=False)
    if format == 'md':
        click.echo(" (converted to markdown)")
    elif format == 'src':
        click.echo(" (source reST or markdown)")
    elif format == 'html':
        click.echo(" (html)")
    click.echo(click.style("Available: md (default), src, html", dim=True))

    if format == 'html':
        click.echo(f"\n{BLUE}Fetching from:{RESET} [{index}] {result['title']}")
        click.echo(f"{BLUE}URL:{RESET} {result_url}\n")

        try:
            with urlopen(result_url, timeout=30) as response:
                html_content = response.read().decode('utf-8')
        except Exception as e:
            click.echo(f"Error: Failed to fetch HTML - {e}", err=True)
            raise click.Abort()

        click.echo("─" * get_terminal_width())
        click.echo(html_content)
        return

    elif format == 'md':
        click.echo(f"\n{BLUE}Fetching from:{RESET} [{index}] {result['title']}")
        click.echo(f"{BLUE}URL:{RESET} {result_url}\n")

        try:
            with urlopen(result_url, timeout=30) as response:
                html_content = response.read().decode('utf-8')
        except Exception as e:
            click.echo(f"Error: Failed to fetch HTML - {e}", err=True)
            raise click.Abort()

        markdown = convert_html_to_markdown(result_url, html_content)
        if markdown is None:
            click.echo("Error: Failed to convert HTML to Markdown", err=True)
            raise click.Abort()

        click.echo("─" * get_terminal_width())
        click.echo(markdown)
        return

    # format == 'src' - fetch source file
    repo_name = result['repo']
    docname = result['docname']

    if not repo_name or repo_name not in repos:
        click.echo(f"Error: Unknown source location for '{repo_name or 'unknown'}'.", err=True)
        click.echo("  " + ", ".join(sorted(repos.keys())), err=True)
        raise click.Abort()

    repo_info = repos[repo_name]
    pathname = repo_info['pathname']
    branch = repo_info['branch']

    # Construct the source file path
    # docname is like "library/axi_dmac/index" -> "library/axi_dmac/index.rst"
    # or could be other extensions
    source_extensions = ['.rst', '.md']

    click.echo(f"\n{BLUE}Fetching from:{RESET} [{index}] {result['title']}")
    click.echo(f"{BLUE}Repository:{RESET} {repo_name}")
    click.echo(f"{BLUE}Document:{RESET} {docname}\n")

    source_url = None
    content = None

    for ext in source_extensions:
        # Build the full path: pathname/docname.ext
        if pathname:
            full_path = f"{pathname}/{docname}{ext}"
        else:
            full_path = f"{docname}{ext}"

        # Use source_hostname_raw template
        test_url = source_hostname_raw.format(
            repository=repo_name,
            branch=branch,
            pathname=full_path
        )

        try:
            response = urlopen(test_url)
            content = response.read().decode('utf-8')
            source_url = test_url
            break
        except HTTPError as e:
            if e.code == 404:
                continue
            else:
                raise
        except Exception:
            continue

    if content is None:
        click.echo(f"Error: Could not fetch source file. Tried extensions: {', '.join(source_extensions)}", err=True)
        click.echo(f"URL: {result['url']}", err=True)
        raise click.Abort()

    include_pattern = re.compile(r'^\s*\.\.\s+include::\s+(.+?)\s*$', re.MULTILINE)
    lines = [line for line in content.strip().split('\n') if line.strip() and not line.strip().startswith('..') or line.strip().startswith('.. include::')]

    if len(lines) <= 1:
        match = include_pattern.search(content)
        if match:
            include_path = match.group(1).strip()

            # Resolve the include path relative to the current file
            # The current file path is like "doc/sphinx/source/drivers/adc/ad405x.rst"
            # The include path is like "../../../../../drivers/adc/ad405x/README.rst"

            if pathname:
                current_file_path = f"{pathname}/{docname}"
            else:
                current_file_path = docname

            current_dir = '/'.join(current_file_path.split('/')[:-1]) if '/' in current_file_path else ''

            if current_dir:
                resolved_path = f"{current_dir}/{include_path}"
            else:
                resolved_path = include_path

            path_parts = []
            for part in resolved_path.split('/'):
                if part == '..':
                    if path_parts:
                        path_parts.pop()
                elif part and part != '.':
                    path_parts.append(part)

            resolved_path = '/'.join(path_parts)

            included_url = source_hostname_raw.format(
                repository=repo_name,
                branch=branch,
                pathname=resolved_path
            )

            try:
                click.echo(f"{BLUE}Following include directive to:{RESET} {include_path}\n")
                response = urlopen(included_url)
                content = response.read().decode('utf-8')
                source_url = included_url
            except HTTPError as e:
                if e.code == 404:
                    click.echo("Warning: Could not fetch included file (404). Showing original content.", err=True)
                    click.echo(f"Attempted URL: {included_url}\n", err=True)
                else:
                    click.echo(f"Warning: Could not fetch included file (HTTP {e.code}). Showing original content.", err=True)
            except Exception as e:
                click.echo(f"Warning: Could not fetch included file: {e}. Showing original content.", err=True)

    click.echo(f"{BLUE}Source URL:{RESET} {source_url}\n")
    click.echo("─" * get_terminal_width())
    click.echo(content)


def get_inventory_cache_path(base_url):
    """Get cache path for objects.inv based on base URL."""
    inv_url = base_url.rstrip('/') + '/objects.inv'
    parsed = urlparse(inv_url)

    parts = [parsed.netloc]

    path = parsed.path.strip('/')
    path = path[:-len("/objects.inv")]
    parts.append(path.replace('/', '.'))

    filename = '.'.join(parts) + '.inv.pickle'
    return CACHE_DIR / filename


def load_inventory_from_cache(cache_path):
    """Load inventory from cache file."""
    with open(cache_path, 'rb') as f:
        # First byte indicates if it's an error marker
        first_bytes = f.read(10)
        f.seek(0)

        if first_bytes.startswith(b'{'):
            f.close()
            with open(cache_path, 'r', encoding='utf-8') as jf:
                data = json.load(jf)
                if isinstance(data, dict) and data.get('__cache_error__'):
                    return None

        return pickle.load(f)


def save_inventory_to_cache(cache_path, inventory):
    """Save inventory to cache file."""
    cache_path.parent.mkdir(parents=True, exist_ok=True)

    with open(cache_path, 'wb') as f:
        pickle.dump(inventory, f)


def save_inventory_error_to_cache(cache_path, error_type, url):
    """Save an error marker for inventory cache."""
    cache_path.parent.mkdir(parents=True, exist_ok=True)

    error_marker = {
        '__cache_error__': True,
        'error_type': error_type,
        'url': url,
        'timestamp': time.time()
    }

    with open(cache_path, 'w', encoding='utf-8') as f:
        json.dump(error_marker, f)


def fetch_search_index(url):
    """Fetch and parse searchindex.js from URL, with caching."""
    cache_path = get_cache_path(url)

    if is_cache_valid(cache_path):
        cached_data = load_from_cache(cache_path)
        if cached_data is None:
            return None
        return cached_data

    try:
        with urlopen(url, timeout=30) as response:
            content = response.read().decode('utf-8')
    except HTTPError as e:
        if e.code == 404:
            save_error_to_cache(cache_path, '404', url)
            return None
        raise URLError(f"HTTP {e.code}: {url}")
    except URLError as e:
        raise URLError(f"Failed to fetch {url}: {e.reason}")

    match = re.search(r'Search\.setIndex\((.*)\)', content, re.DOTALL)
    if not match:
        raise ValueError("Could not find Search.setIndex() in searchindex.js")

    json_str = match.group(1)
    try:
        data = json.loads(json_str)
        save_to_cache(cache_path, data)
        return data
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse searchindex.js JSON: {e}")


def fetch_intersphinx_inventory(base_url):
    """Fetch and parse intersphinx objects.inv file, with caching."""
    if not base_url.endswith('/'):
        base_url += '/'

    inv_url = base_url + 'objects.inv'
    cache_path = get_inventory_cache_path(base_url)

    if is_cache_valid(cache_path):
        try:
            cached_inv = load_inventory_from_cache(cache_path)
            if cached_inv is None:
                return None
            return cached_inv
        except Exception:
            pass

    config = _InvConfig(
        intersphinx_cache_limit=5,
        intersphinx_timeout=10,
        tls_verify=False,
        tls_cacerts=None,
        user_agent='',
    )

    try:
        if Version(__sphinx_version__) < Version('9.0.0'):
            inv = _fetch_inventory(
                target_uri='',
                inv_location=inv_url,
                config=config,
                srcdir=Path(),
            )
        else:
            raw_data, target_uri = _fetch_inventory_data(
                target_uri='',
                inv_location=inv_url,
                config=config,
                srcdir=Path(),
                cache_path=None,
            )
            inv = _load_inventory(raw_data, target_uri=target_uri)
        save_inventory_to_cache(cache_path, inv)
        return inv
    except HTTPError as e:
        if e.code == 404:
            save_inventory_error_to_cache(cache_path, '404', inv_url)
            return None
        raise
    except Exception:
        return None


def get_intersphinx_references(inventory, docname, repo_name, base_url):
    """Get intersphinx references for a document."""
    if not inventory:
        return {'doc_ref': None, 'label_refs': []}

    result = {'doc_ref': None, 'label_refs': []}

    if 'std:doc' in inventory.data and docname in inventory.data['std:doc']:
        if repo_name:
            result['doc_ref'] = f":external+{repo_name}:doc:`{docname}`"
        else:
            result['doc_ref'] = f":std:doc:`{docname}`"

    if 'std:label' in inventory.data:
        doc_uri_prefix = f"{docname}.html#"

        for label_name, inv_item in inventory.data['std:label'].items():
            if inv_item.uri.startswith(doc_uri_prefix):
                full_url = urljoin(base_url, inv_item.uri)

                if repo_name:
                    ref_text = f":external+{repo_name}:ref:`{label_name}`"
                else:
                    ref_text = f":std:label:`{label_name}`"

                result['label_refs'].append((ref_text, label_name, full_url))

    return result


def get_base_url(searchindex_url):
    """Extract base documentation URL from searchindex.js URL."""
    return searchindex_url.rsplit('/', 1)[0] + '/'


def stem_query(query_terms, stemmer):
    """Stem query terms and filter stopwords."""
    stemmed = []
    for term in query_terms:
        term_lower = term.lower()
        if term_lower not in STOPWORDS:
            stemmed.append(stemmer.stemWord(term_lower))
    return stemmed


def extract_html_text(html_content, anchor=None):
    """Extract text from HTML content."""
    try:
        # Try to find [role="main"] section
        main_match = re.search(r'<[^>]+role=["\']main["\'][^>]*>(.*)',
                              html_content, re.DOTALL | re.IGNORECASE)

        if main_match:
            content = main_match.group(1)
        else:
            content = html_content

        # If anchor specified, try to extract that section
        if anchor:
            anchor_id = anchor.lstrip('#')
            patterns = [
                rf'<[^>]+id=["\']?{re.escape(anchor_id)}["\']?[^>]*>(.*?)(?=<h[1-6][^>]*>|</section>|</div>|$)',
                rf'id=["\']?{re.escape(anchor_id)}["\']?[^>]*>([^<]*.*?)(?=<h[1-6]|</(?:div|section)|$)',
            ]

            for pattern in patterns:
                anchor_match = re.search(pattern, content, re.DOTALL | re.IGNORECASE)
                if anchor_match:
                    content = anchor_match.group(1)
                    break

        extractor = HTMLTextExtractor()
        extractor.feed(content)
        text = extractor.get_text()

        text = re.sub(r'\s+', ' ', text).strip()
        return text
    except Exception:
        return ""


def get_summary(html_content, query_terms, anchor=None, max_chars=480):
    """Extract a summary from HTML content around the first matching keyword."""
    text = extract_html_text(html_content, anchor)
    if not text:
        return None

    text_lower = text.lower()

    positions = []
    for term in query_terms:
        term_lower = term.lower()
        pos = text_lower.find(term_lower)
        if pos >= 0:
            positions.append(pos)

    if not positions:
        start_pos = 0
    else:
        start_pos = max(min(positions) - 180, 0)

    summary = text[start_pos:start_pos + max_chars].strip()

    for term in query_terms:
        if term.lower() in STOPWORDS:
            continue
        pattern = re.compile(re.escape(term), re.IGNORECASE)
        summary = pattern.sub(lambda m: click.style(m.group(), fg='yellow'), summary)

    prefix = "..." if start_pos > 0 else ""
    suffix = "..." if start_pos + max_chars < len(text) else ""

    summary = prefix + summary + suffix

    return summary


def search_index(index_data, query_terms, stemmer):
    """Search the index for query terms."""
    results = {}

    docnames = index_data.get('docnames', [])
    titles = index_data.get('titles', [])
    alltitles = index_data.get('alltitles', {})
    titleterms = index_data.get('titleterms', {})
    terms = index_data.get('terms', {})

    # Stem query terms
    stemmed_terms = stem_query(query_terms, stemmer)
    if not stemmed_terms:
        return results

    query_lower = ' '.join(term.lower() for term in query_terms)

    # 1. Search in alltitles (exact and partial title matches)
    for title_text, occurrences in alltitles.items():
        title_lower = title_text.lower()

        # Check for exact match of full query
        if query_lower in title_lower:
            score = SCORE_TITLE
            if query_lower == title_lower:
                score = SCORE_TITLE + 5  # Bonus for exact match
            elif title_lower.startswith(query_lower):
                score = SCORE_TITLE + 2  # Bonus for prefix match
            else:
                score = SCORE_PARTIAL_TITLE

            for file_id, anchor in occurrences:
                if file_id < len(docnames):
                    docname = docnames[file_id]
                    key = (docname, anchor)
                    if key not in results or results[key][1] < score:
                        results[key] = (title_text, score)

        # Check for individual term matches in title
        else:
            matched_terms = sum(1 for term in query_terms if term.lower() in title_lower)
            if matched_terms > 0:
                # Score based on proportion of query terms found
                score = int(SCORE_PARTIAL_TITLE * (matched_terms / len(query_terms)))
                for file_id, anchor in occurrences:
                    if file_id < len(docnames):
                        docname = docnames[file_id]
                        key = (docname, anchor)
                        if key not in results or results[key][1] < score:
                            results[key] = (title_text, score)

    # 2. Search in titleterms (stemmed title keywords)
    for stemmed_term in stemmed_terms:
        if stemmed_term in titleterms:
            file_ids = titleterms[stemmed_term]
            if isinstance(file_ids, list):
                for file_id in file_ids:
                    if file_id < len(titles) and file_id < len(docnames):
                        title = titles[file_id]
                        docname = docnames[file_id]
                        key = (docname, None)
                        score = SCORE_PARTIAL_TITLE
                        if key not in results or results[key][1] < score:
                            results[key] = (title, score)

    # 3. Search in terms (full-text stemmed keywords)
    for stemmed_term in stemmed_terms:
        if stemmed_term in terms:
            file_ids = terms[stemmed_term]
            if isinstance(file_ids, list):
                for file_id in file_ids:
                    if file_id < len(titles) and file_id < len(docnames):
                        title = titles[file_id]
                        docname = docnames[file_id]
                        key = (docname, None)
                        # Only add if not already found with higher score
                        score = SCORE_TERM
                        if key not in results or results[key][1] < score:
                            results[key] = (title, score)

    return results


def format_results_sync(results, base_url, limit):
    """Format and sort search results (without summaries)."""
    formatted = []

    for (docname, anchor), (title, score) in results.items():
        url = urljoin(base_url, f"{docname}.html")
        if anchor:
            url += f"#{anchor}"

        formatted.append((title, url, score))

    formatted.sort(key=lambda x: (-x[2], x[0].lower()))

    return formatted[:limit]


async def fetch_single_summary(url, query_terms, anchor, executor):
    """Fetch and extract summary for a single result."""
    loop = asyncio.get_event_loop()

    def fetch_sync():
        try:
            with urlopen(url, timeout=10) as response:
                html_content = response.read().decode('utf-8')
                return get_summary(html_content, query_terms, anchor)
        except Exception:
            return None

    return await loop.run_in_executor(executor, fetch_sync)


async def update_result_summary(result_num, url, query_terms, anchor, result_line_counts, terminal_width, executor):
    """Fetch summary and update the display for one result."""
    summary = await fetch_single_summary(url, query_terms, anchor, executor)

    if not sys.stdout.isatty():
        if summary:
            click.echo(f"  [{result_num}] {summary}")
        return

    max_chars_per_line = terminal_width - 2
    if summary:
        # Strip ANSI codes to calculate visible length
        ansi_escape = re.compile(r'\x1b\[[0-9;]*m|\x1b\]8;;[^\x1b]*\x1b\\|\x1b\]8;;\x1b\\')
        visible_summary = ansi_escape.sub('', summary)

        has_second_line = len(visible_summary) > max_chars_per_line
        line1 = truncate_text(summary, max_chars_per_line, query_terms, add_ellipsis=not has_second_line)

        if has_second_line:
            remaining_visible = visible_summary[max_chars_per_line:]
            line2 = truncate_text(remaining_visible, max_chars_per_line, query_terms, add_ellipsis=True)
        else:
            line2 = ""
    else:
        line1 = "(no summary)"
        line2 = ""

    # Calculate lines to move back from bottom
    # We need to:
    # 1. Skip all results AFTER this one: sum(result_line_counts[result_num:])
    # 2. Skip this result's blank line: +1
    # 3. Skip this result's second summary line: +1
    # Total: sum(result_line_counts[result_num:]) + 3

    # Note: result_num is 1-indexed (1, 2, 3, ...), but result_line_counts is 0-indexed
    # result_line_counts[result_num:] correctly gives all results after this one
    lines_back = sum(result_line_counts[result_num:]) + 3

    # Move cursor to first summary line for this result
    move_cursor_up(lines_back)

    # Clear and write first summary line
    clear_line()
    sys.stdout.write(f"  {line1}")
    sys.stdout.write('\033[0m\n')

    # Clear and write second summary line
    clear_line()
    sys.stdout.write(f"  {line2}")
    sys.stdout.write('\033[0m')
    sys.stdout.flush()

    # Move cursor back to bottom
    move_cursor_down(lines_back - 1)


async def fetch_and_display_summaries(formatted_results, query_terms, base_url, result_line_counts, terminal_width):
    """Fetch summaries asynchronously and update display."""
    with ThreadPoolExecutor(max_workers=10) as executor:
        tasks = []
        for i, (title, url, score) in enumerate(formatted_results, 1):
            anchor = None
            if '#' in url:
                url_parts = url.split('#', 1)
                anchor = '#' + url_parts[1]

            task = update_result_summary(i, url, query_terms, anchor, result_line_counts, terminal_width, executor)
            tasks.append(task)

        await asyncio.gather(*tasks)


@click.command()
@click.option(
    '--url',
    help='Explicit url to documentation (searchindex.js)'
)
@click.option(
    '--repo',
    help='Repository name(s), comma-separated (e.g., "documentation,hdl,no-OS"), "all" searches all repositories.'
)
@click.option(
    '--limit',
    default=None,
    type=int,
    help='Maximum number of results to show'
)
@click.option(
    '--verbose', '-v',
    is_flag=True,
    help='Show result scores'
)
@click.option(
    '--fetch', '-f',
    default=None,
    help='Fetch file by index from previous search results, or provide a full url'
)
@click.option(
    '--format',
    type=click.Choice(['html', 'src', 'md'], case_sensitive=False),
    default='md',
    help='Output format for --fetch: html, src (source .rst/.md), md (converted markdown, default)'
)
@click.argument('query', nargs=-1, required=False)
def search(url, repo, limit, verbose, fetch, format, query):
    """Search Sphinx documentation.

    Fetches the search index from a Sphinx-generated documentation site
    and searches for the given query terms. Uses the same search algorithm
    as Sphinx's JavaScript search.

    If neither --url nor --repo is specified, searches all known repositories.

    Examples:

        # Search
        adoc search ad9084 profile
        adoc search --repo documentation -- user guide
        adoc search --repo documentation,hdl,no-OS -- axi
        adoc search --url https://analogdevicesinc.github.io/hdl/2023_R2 -- ad4630
        adoc search --repo hdl --limit 10 -- axi

        # Fetch by index from previous search
        adoc search --fetch 3                     # Default: converted markfown
        adoc search --fetch 3 --format src        # Source file (.rst or .md)
        adoc search --fetch 3 --format html       # html

        # Fetch by url
        adoc search --fetch https://analogdevicesinc.github.io/.../index.html

    Format options:
        html: Page html
        src:  Source file (.rst or .md)
        md:   Page html onverted to Markdown (default)
    """
    if fetch is not None:
        if isinstance(fetch, str) and (fetch.startswith('http://') or fetch.startswith('https://')):
            fetch_url_content(fetch, format=format)
        else:
            try:
                index = int(fetch)
                fetch_source_file(index, format=format)
            except ValueError:
                click.echo("Error: --fetch must be either an integer index or a full URL", err=True)
                click.echo(f"Got: {fetch}", err=True)
                raise click.Abort()
        return

    if not query:
        click.echo("Error: Query is required", err=True)
        raise click.Abort()

    if url and repo:
        click.echo("Error: Cannot specify both --url and --repo", err=True)
        raise click.Abort()

    if url and not url.endswith('searchindex.js'):
        if not url.endswith('/'):
            url += '/'
        url += 'searchindex.js'

    if not url and not repo:
        repo = 'all'

    if limit is None:
        limit = calculate_limit_from_terminal()

    repo_sources = []  # List of (repo_name, url) tuples
    if repo:
        if repo.strip() == 'all':
            repo_names = sorted(repos.keys())
            click.echo(f"Searching {len(repo_names)} repositories...")
        else:
            repo_names = [r.strip() for r in repo.split(',')]

            unknown_repos = [r for r in repo_names if r not in repos]
            if unknown_repos:
                click.echo(f"Error: Unknown repository(ies): {' '.join(unknown_repos)}", err=True)
                click.echo(f"Available repositories: {' '.join(sorted(repos.keys()))}", err=True)
                raise click.Abort()

        for repo_name in repo_names:
            repo_url = f"{remote_doc}{repo_name}/searchindex.js"
            repo_sources.append((repo_name, repo_url))
    else:
        repo_sources = [(None, url)]

    # At this time, don't allow multiword exact match.
    query = split_strings_in_tuple(query)
    query_str = ' '.join(query)

    stemmer = snowballstemmer.stemmer('porter')

    try:
        all_results = []

        for repo_name, repo_url in repo_sources:
            try:
                index_data = fetch_search_index(repo_url)
                if index_data is None:
                    continue

                base_url = get_base_url(repo_url)

                inventory = fetch_intersphinx_inventory(base_url)
                results = search_index(index_data, query, stemmer)

                for (docname, anchor), (title, score) in results.items():
                    result_url = urljoin(base_url, f"{docname}.html")
                    if anchor:
                        result_url += f"#{anchor}"

                    refs = get_intersphinx_references(inventory, docname, repo_name, base_url)

                    all_results.append({
                        'repo': repo_name,
                        'title': title,
                        'url': result_url,
                        'score': score,
                        'anchor': anchor,
                        'docname': docname,
                        'doc_ref': refs['doc_ref'],
                        'label_refs': refs['label_refs']
                    })

            except Exception as e:
                click.echo(f"Warning: Failed to search {repo_name or repo_url}: {e}", err=True)
                continue

        if not all_results:
            click.echo(f"\nNo results found for \"{query_str}\"")
            return

        all_results.sort(key=lambda x: (-x['score'], x['title'].lower()))
        total = len(all_results)
        click.echo(f"\nFound {total} result{'s' if total != 1 else ''} for \"{query_str}\"")

        all_results = all_results[:limit]

        formatted_results = [(r['title'], r['url'], r['score'], r['repo'], r['doc_ref'], r['label_refs'], r['docname']) for r in all_results]
        showing = len(formatted_results)

        if showing < total:
            click.echo(f"Top {showing} results:\n")
        else:
            click.echo()

        terminal_width = get_terminal_width()

        result_line_counts = []
        for i, (title, url, score, repo_name, doc_ref, label_refs, docname) in enumerate(formatted_results, 1):
            if sys.stdout.isatty():
                blue = BLUE
                reset = RESET
            else:
                blue = ""
                reset = ""

            number_prefix = f"[{i}] "

            if verbose:
                if len(repo_sources) > 1 and repo_name:
                    title_line = f"{number_prefix}{blue}[Score: {score}] [{repo_name}] {title}{reset}"
                else:
                    title_line = f"{number_prefix}{blue}[Score: {score}] {title}{reset}"
            else:
                if len(repo_sources) > 1 and repo_name:
                    title_line = f"{number_prefix}{blue}[{repo_name}] {title}{reset}"
                else:
                    title_line = f"{number_prefix}{blue}{title}{reset}"

            refs_parts = []

            if label_refs:
                clickable_refs = []
                for ref_text, label_name, full_url in label_refs:
                    clickable_ref = make_clickable_link(full_url, ref_text)
                    clickable_refs.append(clickable_ref)
                refs_parts.extend(clickable_refs)

            if doc_ref:
                clickable_doc_ref = make_clickable_link(url, doc_ref)
                refs_parts.append(clickable_doc_ref)

            if refs_parts:
                # Strip ANSI codes
                ansi_escape = re.compile(r'\x1b\[[0-9;]*m|\x1b\]8;;[^\x1b]*\x1b\\|\x1b\]8;;\x1b\\')

                max_width = terminal_width
                included_refs = []
                current_length = 0

                for ref in refs_parts:
                    visible_ref = ansi_escape.sub('', ref)
                    ref_length = len(visible_ref)

                    separator_length = 1 if included_refs else 0

                    # Check if adding this ref would exceed width
                    if current_length + separator_length + ref_length <= max_width:
                        included_refs.append(ref)
                        current_length += separator_length + ref_length
                    else:
                        # Would exceed width, stop adding refs
                        break

                # Build the final refs line
                if included_refs:
                    # If we dropped refs and " ..." doesn't fit, drop refs from the end until it does
                    if len(included_refs) < len(refs_parts):
                        ellipsis_length = 4  # len(" ...")
                        while included_refs and current_length + ellipsis_length > max_width:
                            dropped_ref = included_refs.pop()
                            visible_dropped = ansi_escape.sub('', dropped_ref)
                            if included_refs:
                                current_length -= len(visible_dropped) + 1  # +1 for " "
                            else:
                                current_length -= len(visible_dropped)

                    if included_refs:
                        refs_text = ' '.join(included_refs)
                        if len(included_refs) < len(refs_parts):
                            refs_text += " ..."
                        refs_line = click.style(refs_text, dim=True)
                    else:
                        refs_line = ""
                else:
                    refs_line = ""
            else:
                refs_line = ""

            url_line = f"{url}"

            # In non-TTY mode, summaries are printed at the bottom
            if sys.stdout.isatty():
                summary_line1 = "  ..."
                summary_line2 = "  "
                show_summary_lines = True
            else:
                summary_line1 = ""
                summary_line2 = ""
                show_summary_lines = False

            # Calculate how many physical lines this result will take
            # Structure: title + url + refs (may wrap if long) + [summary x2] + blank
            lines_count = calculate_wrapped_lines(title_line, terminal_width)
            lines_count += calculate_wrapped_lines(url_line, terminal_width)
            lines_count += calculate_wrapped_lines(refs_line, terminal_width)
            if show_summary_lines:
                lines_count += 2  # two summary lines (TTY only)
            lines_count += 1  # blank line

            result_line_counts.append(lines_count)

            click.echo(title_line)
            click.echo(url_line)
            click.echo(refs_line)
            if show_summary_lines:
                click.echo(summary_line1)
                click.echo(summary_line2)
            click.echo()

        save_search_results(formatted_results)

        formatted_for_async = [(title, url, score) for title, url, score, _, _, _, _ in formatted_results]
        asyncio.run(fetch_and_display_summaries(formatted_for_async, query, None, result_line_counts, terminal_width))

        if sys.stdout.isatty():
            click.echo()

        click.echo(click.style("Fetch source with: adoc search --fetch <index>", dim=True))

    except URLError as e:
        click.echo(f"Error: {e}", err=True)
        raise click.Abort()
    except ValueError as e:
        click.echo(f"Error: {e}", err=True)
        raise click.Abort()
    except Exception as e:
        click.echo(f"Unexpected error: {e}", err=True)
        raise click.Abort()
