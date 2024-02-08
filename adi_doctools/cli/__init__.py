import click

from .author_mode import author_mode
from .hdl_render import hdl_render
from .aggregate import aggregate

@click.group()
def entry_point():
    """
    CLI to provide entry points to adi_doctools methods.
    """
    pass

commands = [
    author_mode,
    hdl_render,
    aggregate
]

for cmd in commands:
    entry_point.add_command(cmd)
