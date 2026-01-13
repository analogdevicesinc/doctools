"""Tests for the search CLI command."""
from unittest.mock import patch, MagicMock

from click.testing import CliRunner
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


def mock_urlopen_searchindex(url, timeout=None):
    """Mock urlopen to return searchindex.js."""
    mock_response = MagicMock()
    mock_response.read.return_value = SAMPLE_SEARCHINDEX.encode('utf-8')
    mock_response.__enter__.return_value = mock_response
    mock_response.__exit__.return_value = None
    return mock_response


def mock_fetch_inventory(*args, **kwargs):
    """Mock Sphinx's _fetch_inventory to return empty inventory."""
    mock_inv = MagicMock()
    mock_inv.data = {}  # Empty inventory - no intersphinx refs
    return mock_inv


def test_cli_search_basic():
    """Test basic search functionality with --url."""
    runner = CliRunner()

    with patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex), \
         patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory):
        result = runner.invoke(search, [
            '--url', 'https://example.com/searchindex.js',
            '--limit', '3',
            'tutorial'
        ])

    assert result.exit_code == 0
    assert 'Tutorial' in result.output
    assert 'example.com' in result.output


def test_cli_search_no_results():
    """Test search with no matching results."""
    runner = CliRunner()

    with patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex), \
         patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory):
        result = runner.invoke(search, [
            '--url', 'https://example.com/searchindex.js',
            '--limit', '3',
            'nonexistent'
        ])

    assert result.exit_code == 0
    assert 'No results found' in result.output


def test_cli_search_multiple_terms():
    """Test search with multiple query terms."""
    runner = CliRunner()

    with patch('adi_doctools.cli.search.urlopen', side_effect=mock_urlopen_searchindex), \
         patch('adi_doctools.cli.search._fetch_inventory', side_effect=mock_fetch_inventory):
        result = runner.invoke(search, [
            '--url', 'https://example.com/searchindex.js',
            '--limit', '3',
            'getting', 'started'
        ])

    assert result.exit_code == 0
    assert 'Tutorial' in result.output or 'Getting Started' in result.output

