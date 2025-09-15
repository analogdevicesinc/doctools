from typing import Tuple, List
from sphinx.util.osutil import SEP

from os import mkdir, path, pardir, environ
import click
import subprocess

from ..lut import get_lut

dry_run = True
no_parallel = True
lut = get_lut()
repos = lut['repos']


class pr:
    @staticmethod
    def popen(cmd, p: List, cwd: [str, None] = None, env = None):
        global dry_run, no_parallel
        if not dry_run:
            p__ = subprocess.Popen(cmd, cwd=cwd, env=env)
            p__.wait() if no_parallel else p.append(p__)
        elif cwd is not None:
            click.echo(f"cd {cwd}; {' '.join(cmd)}")
        else:
            click.echo(' '.join(cmd))
        return p

    @staticmethod
    def run(cmd, cwd=None):
        global dry_run, no_parallel
        if not dry_run:
            subprocess.run(cmd, shell=True, cwd=cwd)
        elif cwd is not None:
            click.echo(f"cd {cwd}; {cmd}")
        else:
            click.echo(f"{cmd}")

    @staticmethod
    def wait(p):
        for p_ in p:
            p_.wait()

    @staticmethod
    def mkdir(d):
        global dry_run
        if not dry_run:
            mkdir(d)
        else:
            click.echo(f"mkdir {d}")


def patch_index(name, docsdir, indexfile):
    global dry_run
    file = path.join(path.join(docsdir, name), 'index.rst')
    toctree = []

    with open(file, "r") as f:
        data = f.readlines()
        if ".. toctree::\n" not in data:
            return
        data_ = data.copy()
        in_toc = False
        for i in range(0, len(data)):
            if in_toc:
                if data[i][0:12] == '   :caption:':
                    data[i] = ""
                    continue

                if data[i][0:3] == '   ' and data[i][0:4] != '   :':
                    pos = data[i].find('<')
                    if pos == -1:
                        str_ = f"   {name}/{data[i][3:]}"
                    else:
                        str_ = f"   {data[i][:pos+1]}{name}/{data[i][pos+1:]}"
                    data[i] = str_

                if data[i][0:3] != '   ' and data[i] != '\n':
                    toctree[-1] = [toctree[-1][0], i - 1]
                    if data[i] == ".. toctree::\n":
                        toctree.append([i, i])
                    else:
                        in_toc = False
                    continue
                elif i == len(data) - 1 and in_toc:
                    toctree[-1] = [toctree[-1][0], i + 1]
                    in_toc = False
                    break
            else:
                if data[i] == ".. toctree::\n":
                    toctree.append([i, i])
                    in_toc = True

    # Add orphan flag to indexes, since toctree is expanded at /index.rst
    with open(file, 'w') as f:
        f.write(':orphan:\n\n')
        for line in data_:
            f.write(line)

    if dry_run:
        return

    with open(indexfile, "r") as f:
        data_ = f.readlines()
        # Find end of last toctree
        if ".. toctree::\n" in data_:
            i = len(data_) - 1 - data_[::-1].index(".. toctree::\n")
            for i in range(i + 1, len(data_)):
                if data_[i][0:3] != '   ' and data_[i] != '\n':
                    break
        else:
            i = len(data_)

        header = data_[:i+1]
        if i == len(data_)-1:
            header.append('\n')
        body = data_[i+1:]

        if len(toctree) > 1:
            click.echo(click.style(f"Repo {name} containes multiple toctrees!",
                                   fg='red'))
        for tc in toctree:
            header.append(".. toctree::\n")
            header.append(f"   :caption: {repos[name]['name']}\n")
            header.extend(data[tc[0]+1:tc[1]])
            header.append('\n')

        header.extend(body)

    with open(indexfile, "w") as f:
        for line in header:
            f.write(line)


def get_sphinx_dirs(cwd) -> Tuple[bool, str, str]:
    conf_py = path.join(cwd, 'conf.py')
    if not path.isfile(conf_py):
        click.echo(click.style(f"{conf_py} does not exist, skipped!", fg='red'))
        return (True, '')

    builddir = path.join(cwd, "_build/html")

    return (False, builddir)


def do_extra_steps(repo_dir):
    global dry_run, no_parallel
    for l_ in repos:
        if 'extra' in repos[l_]:
            cwd, cmd, no_p = repos[l_]['extra']
            cwd = path.join(repo_dir, f"{l_}/{cwd}")
            nproc = 1 if no_parallel or no_p else 4
            if cmd[0] == 'make':
                pr.run(f"{' '.join(cmd)} -j{nproc}", cwd)
            else:
                # Unknown cmd, do not append nproc
                pr.run(f"{' '.join(cmd)}", cwd)


def gen_symbolic_doc(repo_dir):
    mk = []
    p = []
    for r in repos:
        sourcedir = path.join(repo_dir, r, repos[r]['pathname'])
        not_valid, builddir = get_sphinx_dirs(sourcedir)
        mk.append([not_valid, sourcedir, builddir])
        if not_valid:
            continue

        env = environ.copy()
        env["ADOC_INTERREF_URI"] = path.abspath(path.join(repo_dir, "..", "html")) + SEP
        pr.popen(['sphinx-build', '-M', 'html', sourcedir, builddir], p, sourcedir, env=env)
    pr.wait(p)

    d_ = path.abspath(path.join(repo_dir, pardir))

    out = path.join(d_, 'html')
    if path.isdir(out):
      pr.run(f"rm -r {out}")
    pr.mkdir(out)
    for r, m in zip(repos, mk):
        if m[0]:
            continue
        d_ = path.join(out, r)
        pr.popen(['cp', '-r', path.join(m[2], 'html'), d_], p)
    pr.wait(p)


@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=False),
    default='.',
    required=True,
    help="Path to create aggregated output."
)
@click.option(
    '--extra',
    '-e',
    is_flag=True,
    default=False,
    help="Compile extra features."
)
@click.option(
    '--no-parallel',
    '-t',
    'no_parallel_',
    is_flag=True,
    default=False,
    help="Run all steps in sequence."
)
@click.option(
    '--dry-run',
    '-n',
    'dry_run_',
    is_flag=True,
    default=False,
    help="Don't actually run; just print them."
)
@click.option(
    '--open',
    '-x',
    'open_',
    is_flag=True,
    default=False,
    help="Open after generation (xdg-open)."
)
@click.option(
    '--ssh',
    '-s',
    is_flag=True,
    default=False,
    help="Clone repositories with SSH instead of HTTPS."
)
def aggregate(directory, extra, no_parallel_, dry_run_, open_, ssh):
    """
    Creates a symbolic-aggregated documentation out of every repo
    documentation.
    To resolve interrepo-references, run the tool twice.
    """
    global dry_run, no_parallel
    no_parallel = no_parallel_
    dry_run = dry_run_
    directory = path.abspath(directory)

    if not extra:
        click.echo("Extra features disabled, use --extra to enable.")

    repos_dir = path.join(directory, 'repos')
    if not dry_run:
        if not path.isdir(directory):
            pr.mkdir(directory)
        if not path.isdir(repos_dir):
            pr.mkdir(repos_dir)

    p = []
    remote = lut['remote_https'] if not ssh else lut['remote_ssh']
    for r in repos:
        cwd = path.join(repos_dir, r)
        if not path.isdir(cwd):
            git_cmd = ["git", "clone", remote.format(r), "--depth=1", "-b",
                       repos[r]['branch'], '--', cwd]
            pr.popen(git_cmd, p)
        else:
            git_cmd = ["git", "pull"]
            pr.popen(git_cmd, p, cwd)
    pr.wait(p)

    if extra:
        do_extra_steps(repos_dir)

    gen_symbolic_doc(repos_dir)

    click.echo(f"Done, documentation written to {directory}/html")

    if open_ and not dry_run:
        subprocess.call(f"xdg-open {directory}/html/index.html", shell=True)
