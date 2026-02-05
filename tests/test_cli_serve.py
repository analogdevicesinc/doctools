from os import path

from adi_doctools.cli.serve import serve


def test_cli_serve(monkeypatch):
    monkeypatch.setattr('sys.argv', ['pytest', '--once', '--directory', path.join('..', 'docs')])

    try:
        serve()
        exit_code = 0
    except SystemExit as e:
        exit_code = e.code if e.code is not None else 0

    assert exit_code == 0
