"""
Tests for agent CLI command.
"""

import json
from os import path

from click.testing import CliRunner

from adi_doctools.cli.agent import agent, format_entry


sample = path.join("asset", "sample.jsonl")

def test_format():
    """Test formatting of user messages from sample file."""
    with open(sample, 'r', encoding='utf-8') as f:
        for line in f:
            entry = json.loads(line.strip())
            format_entry(entry)

def test_jsonl_tail_basic():
    """Test basic JSONL tail functionality with sample file."""
    runner = CliRunner()

    result = runner.invoke(agent, ['--no-follow', sample])
    print(result.output)
    assert result.exit_code == 0, f"Command failed: {result.output}"
    assert len(result.output) > 0

