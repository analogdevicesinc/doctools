import os
import logging
import subprocess

from .argument_parser import get_arguments_hdl_render
from ..parser.hdl import parse_hdl_component
from ..writer.hdl_component import hdl_component

logger = logging.getLogger(__name__)

def hdl_render():
    """
    Creates a SVG component diagram of an IP.
    Requires the component.xml to be generated first.
    """
    args = get_arguments_hdl_render()

    input_ = os.path.abspath(args.input)
    if args.output == "":
        output = input_
    else:
        output = args.output

    file = os.path.join(input_, "component.xml")
    out_file = os.path.join(output, "component.svg")

    lib_name = os.path.basename(input_)
    if not os.path.isfile(file):
        logger.error(f"Component {file} not found!")
        if args.open:
            tree = hdl_component.render_placeholder(file)
        else:
            return
    else:
        lib = parse_hdl_component(file, os.path.getctime(file))
        tree = hdl_component.render(lib_name, lib)

    if not os.path.exists(output):
        os.makedirs(output)
    tree.write(out_file)

    if args.open:
        subprocess.call(f"xdg-open {out_file}", shell=True)
