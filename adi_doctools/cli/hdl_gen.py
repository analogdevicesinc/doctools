from typing import TypedDict, Dict, List

import click
import subprocess
import re
from os import path, walk
from glob import glob

from ..parser.hdl import parse_hdl_regmap
from ..parser.hdl import resolve_hdl_regmap
from ..parser.hdl import expand_hdl_regmap
from ..parser.hdl import parse_hdl_vendor
from ..parser.hdl import parse_hdl_library
from ..writer.hdl import write_hdl_regmap


log = {
    'hdl_f': "{} not found, are you sure this is the HDL repo?",
    'hdl_tb': "{} not found, tb files will be skipped.",
}


@click.command()
@click.option(
    '--input',
    '-i',
    'input_',
    is_flag=False,
    type=click.Path(exists=True),
    default='.',
    help="Path to any folder in the HDL repo."
)
def hdl_gen(input_):

    global has_tb

    def symbolic_assert(file, msg):
        if not path.isfile(file):
            click.echo(msg.format(file))
            return True
        else:
            return False

    def dir_assert(file, msg):
        if not path.isdir(file):
            click.echo(msg.format(file))
            return True
        else:
            return False

    p_ = subprocess.run("git rev-parse --show-toplevel", shell=True,
                        capture_output=True, cwd=input_)
    if p_.returncode != 0:
        click.echo(p_.stderr)
        return

    hdldir = p_.stdout.decode("utf-8").strip().replace('/testbenches', '')
    f_ = path.join(hdldir, 'LICENSE_ADIJESD204')

    if symbolic_assert(f_, log['hdl_f']):
        return

    tbdir = path.join(hdldir, 'testbenches')
    has_tb = False if dir_assert(tbdir, log['hdl_tb']) else True

    # Generate HDL carrier dictionary
    carrier = {}
    path_ = path.join(hdldir, 'projects', 'scripts')
    glob_ = path.join(path_, "adi_project_*.tcl")
    filenames = glob(glob_)
    for file_ in filenames:
        m = re.search("adi_project_(\\w+)\\.tcl", file_)
        if not bool(m):
            continue

        vendor_name = m.group(1)
        carrier[vendor_name], msg = parse_hdl_vendor(file_)
        for m in msg:
            click.echo(f"{file_}: {m}")

    # TODO do something with the parsed carriers, like get/validate library and
    # project dicts

    # Generate HDL Register Map dictionary
    rm = {}
    regdir = path.join(hdldir, 'docs', 'regmap')
    for (dirpath, dirnames, filenames) in walk(regdir):
        for file in filenames:
            file_ = path.join(dirpath, file)
            m = re.search("adi_regmap_(\\w+)\\.txt", file)
            if not bool(m):
                continue

            reg_name = m.group(1)
            ctime = path.getctime(file_)
            rm[reg_name], msg = parse_hdl_regmap(ctime, file_)
            for m in msg:
                click.echo(f"{file_}: {m}")
    for m in resolve_hdl_regmap(rm):
        click.echo(m)
    for m in expand_hdl_regmap(rm):
        click.echo(m)

    if has_tb:
        f_ = path.join(tbdir, 'common', 'sv')
        for m in rm:
            write_hdl_regmap(f_, rm[m]['subregmap'], m)
