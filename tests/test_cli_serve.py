from pathlib import Path

from adi_doctools.cli.serve import serve


def test_cli_serve(monkeypatch):
    docs_dir = (Path(__file__).parent / '..' / 'docs').resolve()
    monkeypatch.setattr('sys.argv', ['pytest', '--once', '--directory', str(docs_dir)])

    try:
        serve()
        exit_code = 0
    except SystemExit as e:
        exit_code = e.code if e.code is not None else 0

    assert exit_code == 0
