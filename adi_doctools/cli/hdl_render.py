import os
import click

from ..parser.hdl import parse_hdl_component
from ..writer.hdl_component import hdl_component


@click.command()
@click.option(
    '--input',
    '-i',
    'input_',
    is_flag=False,
    type=click.Path(exists=True),
    default=None,
    required=True,
    help="Path to the library folder."
)
@click.option(
    '--output',
    '-o',
    is_flag=False,
    type=click.Path(exists=False),
    default="",
    help="Output path, defaults to --input_."
)
@click.option(
    '--open',
    '-x',
    'open_',
    is_flag=True,
    default=False,
    help="Open after generation (xdg-open)."
)
def hdl_render(input_, output, open_):
    """
    Creates a SVG component diagram of an IP.
    Requires the component.xml to be generated first.
    """
    input_ = os.path.abspath(input_)
    if output == "":
        output = input_

    file = os.path.join(input_, "component.xml")
    out_file = os.path.join(output, "component.svg")

    lib_name = os.path.basename(input_)
    if not os.path.isfile(file):
        click.echo(f"Component {file} not found!")
        if open_:
            tree = hdl_component.render_placeholder(file)
        else:
            return
    else:
        lib = parse_hdl_component(file, os.path.getctime(file))
        tree = hdl_component.render(lib_name, lib)

    if not os.path.exists(output):
        os.makedirs(output)
    tree.write(out_file)

    if open_:
        import subprocess

        subprocess.call(f"xdg-open {out_file}", shell=True)
