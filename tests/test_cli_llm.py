from pathlib import Path
import json

from adi_doctools.cli.llm import format_entry, llm


def test_format(monkeypatch):
    """Test formatting of user messages from sample file."""
    monkeypatch.chdir(Path(__file__).parent)
    with open(str(Path("asset/sample.jsonl")), 'r', encoding='utf-8') as f:
        for line in f:
            entry = json.loads(line.strip())
            format_entry(entry)

def test_jsonl_tail_basic(monkeypatch, capsys):
    """Test basic JSONL tail functionality with sample file."""
    monkeypatch.chdir(Path(__file__).parent)
    monkeypatch.setattr('sys.argv', ['pytest', '--no-follow', str(Path("asset/sample.jsonl"))])

    try:
        llm()
        exit_code = 0
    except SystemExit as e:
        exit_code = e.code if e.code is not None else 0

    captured = capsys.readouterr()
    assert exit_code == 0, f"Command failed with exit code {exit_code}"
    assert len(captured.out) > 0

