"""Tests for the search CLI command."""
from contextlib import ExitStack
from unittest.mock import patch, MagicMock
from urllib.request import Request

from packaging.version import Version
from sphinx import __version__ as __sphinx_version__
from adi_doctools.cli.search import search


SAMPLE_SEARCHINDEX = '''Search.setIndex({
    "docnames": ["index", "tutorial", "api"],
    "filenames": ["index.html", "tutorial.html", "api.html"],
    "titles": ["Welcome", "Tutorial", "API Reference"],
    "alltitles": {
        "Welcome": [[0, null]],
        "Tutorial": [[1, null]],
        "Getting Started": [[1, "getting-started"]],
        "API Reference": [[2, null]]
    },
    "titleterms": {
        "welcom": [0],
        "tutori": [1],
        "start": [1],
        "api": [2],
        "refer": [2]
    },
    "terms": {
        "welcom": [0],
        "tutori": [1],
        "start": [1],
        "api": [2],
        "refer": [2],
        "exampl": [1]
    }
})'''


def mock_urlopen_searchindex(url_or_request, timeout=None):
    """Mock urlopen to return searchindex.js or handle HEAD requests."""
    mock_response = MagicMock()

    is_head_request = isinstance(url_or_request, Request) and url_or_request.method == 'HEAD'

    if is_head_request:
        mock_response.read.return_value = b''
    else:
        mock_response.read.return_value = SAMPLE_SEARCHINDEX.encode('utf-8')

    mock_response.__enter__.return_value = mock_response
    mock_response.__exit__.return_value = None

    headers_dict = {'Last-Modified': 'Mon, 01 Jan 2024 00:00:00 GMT'}
    mock_response.headers = MagicMock()
    mock_response.headers.get = lambda key, default=None: headers_dict.get(key, default)

    return mock_response


def mock_fetch_inventory(*args, **kwargs):
    """Mock Sphinx's _fetch_inventory to return empty inventory (Sphinx < 9.0.0)."""
    mock_inv = MagicMock()
    mock_inv.data = {}  # Empty inventory - no intersphinx refs
    return mock_inv


def mock_fetch_inventory_data(*args, **kwargs):
    """Mock Sphinx's _fetch_inventory_data (Sphinx >= 9.0.0)."""
    # Return (raw_data, target_uri)
    return (b'', '')


def mock_load_inventory(*args, **kwargs):
    """Mock Sphinx's _load_inventory (Sphinx >= 9.0.0)."""
    mock_inv = MagicMock()
    mock_inv.data = {}  # Empty inventory - no intersphinx refs
    return mock_inv


def test_cli_search_basic(monkeypatch, capsys):
    """Test basic search functionality with --url."""
    monkeypatch.setattr('sys.argv', ['pytest', '--url', 'https://example.com/searchindex.js', '--limit', '3', 'tutorial'])

    with ExitStack() as stack:
        stack.enter_context(patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex))
        stack.enter_context(patch('adi_doctools.cli.search.save_to_cache'))
        stack.enter_context(patch('adi_doctools.cli.search.save_inventory_to_cache'))

        if Version(__sphinx_version__) < Version('9.0.0'):
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory))
        else:
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory_data', side_effect=mock_fetch_inventory_data))
            stack.enter_context(patch('adi_doctools.cli.search._load_inventory', side_effect=mock_load_inventory))

        try:
            search()
            exit_code = 0
        except SystemExit as e:
            exit_code = e.code if e.code is not None else 0

    captured = capsys.readouterr()
    assert exit_code == 0
    assert 'Tutorial' in captured.out
    assert 'example.com' in captured.out


def test_cli_search_no_results(monkeypatch, capsys):
    """Test search with no matching results."""
    monkeypatch.setattr('sys.argv', ['pytest', '--url', 'https://example.com/searchindex.js', '--limit', '3', 'nonexistent'])

    with ExitStack() as stack:
        stack.enter_context(patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex))
        stack.enter_context(patch('adi_doctools.cli.search.save_to_cache'))
        stack.enter_context(patch('adi_doctools.cli.search.save_inventory_to_cache'))

        if Version(__sphinx_version__) < Version('9.0.0'):
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory))
        else:
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory_data', side_effect=mock_fetch_inventory_data))
            stack.enter_context(patch('adi_doctools.cli.search._load_inventory', side_effect=mock_load_inventory))

        try:
            search()
            exit_code = 0
        except SystemExit as e:
            exit_code = e.code if e.code is not None else 0

    captured = capsys.readouterr()
    assert exit_code == 0
    assert 'No results found' in captured.out


def test_cli_search_multiple_terms(monkeypatch, capsys):
    """Test search with multiple query terms."""
    monkeypatch.setattr('sys.argv', ['pytest', '--url', 'https://example.com/searchindex.js', '--limit', '3', 'getting', 'started'])

    with ExitStack() as stack:
        stack.enter_context(patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex))
        stack.enter_context(patch('adi_doctools.cli.search.save_to_cache'))
        stack.enter_context(patch('adi_doctools.cli.search.save_inventory_to_cache'))

        if Version(__sphinx_version__) < Version('9.0.0'):
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory))
        else:
            stack.enter_context(patch('adi_doctools.cli.search._fetch_inventory_data', side_effect=mock_fetch_inventory_data))
            stack.enter_context(patch('adi_doctools.cli.search._load_inventory', side_effect=mock_load_inventory))

        try:
            search()
            exit_code = 0
        except SystemExit as e:
            exit_code = e.code if e.code is not None else 0

    captured = capsys.readouterr()
    assert exit_code == 0
    assert 'Tutorial' in captured.out or 'Getting Started' in captured.out

