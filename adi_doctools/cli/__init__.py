import click

from .serve import serve
from .hdl_render import hdl_render
from .hdl_gen import hdl_gen
from .aggregate import aggregate
from .custom_doc import custom_doc
from .search import search


class AliasGroup(click.Group):
    def get_command(self, ctx, cmd_name):
        aliases = {
            "author-mode": "serve",
            "server": "serve",
        }
        if cmd_name in aliases:
            cmd_name_ = aliases[cmd_name]
            click.echo("Warning: redirected command"
                       f"'{cmd_name}' to '{cmd_name_}'", err=True)
            cmd_name = cmd_name_

        cmd_name = aliases.get(cmd_name, cmd_name)
        return super().get_command(ctx, cmd_name)


@click.group(cls=AliasGroup)
def entry_point():
    """
    CLI to provide entry points to adi_doctools methods.
    """
    pass


commands = [
    serve,
    hdl_render,
    hdl_gen,
    aggregate,
    custom_doc,
    search,
]

for cmd in commands:
    entry_point.add_command(cmd)
