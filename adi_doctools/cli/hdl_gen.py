import click
import subprocess
import re
from os import path, walk, pardir
from glob import glob

from ..typings.hdl import vendors, Library, Carrier
from ..parser.hdl import parse_hdl_regmap
from ..parser.hdl import resolve_hdl_regmap
from ..parser.hdl import expand_hdl_regmap
from ..parser.hdl import parse_hdl_vendor
from ..parser.hdl import parse_hdl_library
from ..parser.hdl import resolve_hdl_library
from ..parser.hdl import parse_hdl_interfaces
from ..writer.hdl import write_hdl_regmap
from ..writer.hdl import write_hdl_library_makefile

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
    carrier = Carrier()
    path_ = path.join(hdldir, 'projects', 'scripts')
    for v in vendors:
        file_ = path.join(path_, f"adi_project_{v}.tcl")
        carrier[v], msg = parse_hdl_vendor(file_)
        for m in msg:
            click.echo(f"{file_}: {m}")

    # TODO do something with the parsed carriers, like get/validate library and
    # project dicts

    # Generate HDL Library dictionary
    types = ['*_ip.tcl', '*_hw.tcl']
    files = {}
    library = {}
    interfaces_ip_files = []
    for v in vendors:
        files[v] = []
    for typ, v in zip(types, vendors):
        glob_ = path.join(hdldir, 'library', '**', typ)
        files[v].extend(glob(glob_, recursive=True))

    for v in files:
        for f in files[v]:
            if 'interfaces_ip.tcl' in f:
                files[v].remove(f)
                interfaces_ip_files.append(f)

    # Generate the HDL interfaces dictionary
    interfaces_ip = {}
    for f in interfaces_ip_files:
        interfaces_ip[path.dirname(f)], msg = parse_hdl_interfaces(f)
        for m in msg:
            click.echo(f"{f}: {m}")

    intf_key_file = {}
    for f in interfaces_ip:
        for k in interfaces_ip[f]:
            intf_key_file[k['name']] = f

    for typ, v in zip(types, files):
        for f in files[v]:
            key = path.dirname(f)
            lib = path.basename(key)
            lib2 = path.basename(f)[:-len(typ)+1]
            if lib != lib2:
                click.echo(f"{f}: path basename '{lib}' does not match "
                           f"filename '{lib2}'")
            lib_, msg = parse_hdl_library(path.join(hdldir, 'library'), f, lib2)
            for m in msg:
                click.echo(f"{f}: {m}")
            if lib_:
                if key not in library:
                    library[key] = Library(
                        name=lib2,
                        vendor={},
                        generic={}
                    )
                library[key]['vendor'][v] = lib_

    for key in library:
        resolve_hdl_library(library, library[key], intf_key_file, hdldir, key)

    for key in library:
        write_hdl_library_makefile(key, hdldir, library[key])

    # Generate HDL Project dictionary
    files = []
    glob_ = path.join(hdldir, 'projects', '**', 'system_project.tcl')
    files.extend(glob(glob_, recursive=True))
    # TODO parse HDL Project, write Project Makefile

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
