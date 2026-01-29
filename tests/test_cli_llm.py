"""Tests for llm CLI command."""

import json
from os import path

from adi_doctools.cli.llm import format_entry, llm


sample = path.join("asset", "sample.jsonl")

def test_format():
    """Test formatting of user messages from sample file."""
    with open(sample, 'r', encoding='utf-8') as f:
        for line in f:
            entry = json.loads(line.strip())
            format_entry(entry)

def test_jsonl_tail_basic(monkeypatch, capsys):
    """Test basic JSONL tail functionality with sample file."""
    monkeypatch.setattr('sys.argv', ['pytest', '--no-follow', sample])

    try:
        llm()
        exit_code = 0
    except SystemExit as e:
        exit_code = e.code if e.code is not None else 0

    captured = capsys.readouterr()
    assert exit_code == 0, f"Command failed with exit code {exit_code}"
    assert len(captured.out) > 0

