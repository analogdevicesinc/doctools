from os import path

from click.testing import CliRunner
from adi_doctools.cli import serve

def test_cli_serve():

    runner = CliRunner()
    result = runner.invoke(serve, ['--once', '--directory', path.join('..', 'docs')])

    assert result.exit_code == 0
