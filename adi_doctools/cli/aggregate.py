from typing import Tuple

import os
import click
import subprocess
import re

remote = "git@github.com:analogdevicesinc/{}.git"

lut = {
    'documentation': {
        'doc_folder': 'docs',
        'name': 'System Level',
        'branch': 'main'
    },
    'hdl': {
        'doc_folder': 'docs',
        'extra': (
            # cwd      # cmd            # no_parallel
            "library", ["make", "all"], False
        ),
        'name': 'HDL',
        'branch': 'mv-doctools'
    },
    'no-os': {
        'doc_folder': 'doc/sphinx/source',
        'name': 'no-OS',
        'branch': 'sphinx-mk'
    },
    'pyadi-iio': {
        'doc_folder': 'doc',
        'name': 'pyadi-iio',
        'branch': 'main'
    },
    'doctools': {
        'doc_folder': 'docs',
        'name': 'Doctools',
        'branch': 'main'
    },
}

dry_run = True
no_parallel = True


class pr:
    @staticmethod
    def popen(cmd, cwd=None):
        global dry_run, no_parallel
        p = []
        if not dry_run:
            p__ = subprocess.Popen(cmd, cwd=cwd)
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
            os.mkdir(d)
        else:
            click.echo(f"mkdir {d}")


def patch_index(name, docsdir, indexfile):
    global dry_run
    file = os.path.join(os.path.join(docsdir, name), 'index.rst')
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
            header.append(f"   :caption: {lut[name]['name']}\n")
            header.extend(data[tc[0]+1:tc[1]])
            header.append('\n')

        header.extend(body)

    with open(indexfile, "w") as f:
        for line in header:
            f.write(line)


def get_sphinx_dirs(cwd) -> Tuple[bool, str, str]:
    mk = os.path.join(cwd, 'Makefile')
    if not os.path.isfile(mk):
        click.echo(click.style(f"{mk} does not exist, skipped!", fg='red'))
        return (True, '', '')

    with open(mk, 'r') as f:
        data = f.read()
    builddir_ = re.search(r'^BUILDDIR\s*=\s*(.*)$', data, re.MULTILINE)
    sourcedir_ = re.search(r'^SOURCEDIR\s*=\s*(.*)$', data, re.MULTILINE)
    builddir_ = builddir_.group(1).strip() if builddir_ else None
    sourcedir_ = sourcedir_.group(1).strip() if sourcedir_ else None
    if builddir_ is None or sourcedir_ is None:
        click.echo(click.style(f"Failed to parse {mk}, skipped!", fg='red'))
        return (True, '', '')
    builddir = os.path.join(cwd, f"{builddir_}/html")
    sourcedir = os.path.join(cwd, sourcedir_)
    if not os.path.isdir(sourcedir):
        click.echo(click.style(f"Parsed {sourcedir} does not exist, skipped!",
                               fg='red'))
        return (True, '', '')

    return [False, builddir, sourcedir]


def do_extra_steps(repo_dir):
    global dry_run, no_parallel
    for l_ in lut:
        if 'extra' in lut[l_]:
            cwd, cmd, no_p = lut[l_]['extra']
            cwd = os.path.join(repo_dir, f"{l_}/{cwd}")
            nproc = 1 if no_parallel or no_p else 4
            if cmd[0] == 'make':
                pr.run(f"{' '.join(cmd)} -j{nproc}", cwd)
            else:
                # Unknown cmd, do not append nproc
                pr.run(f"{' '.join(cmd)}", cwd)


def gen_symbolic_doc(repo_dir):
    mk = []
    for r in lut:
        cwd = os.path.join(repo_dir, f"{r}/{lut[r]['doc_folder']}")
        mk.append(get_sphinx_dirs(cwd))
        if mk[-1][0]:
            continue
        p = pr.popen(['make', 'html'], cwd)
    pr.wait(p)

    d_ = os.path.abspath(os.path.join(repo_dir, os.pardir))
    out = os.path.join(d_, 'html')
    pr.mkdir(out)
    for r, m in zip(lut, mk):
        if m[0]:
            continue
        d_ = os.path.join(out, r)
        p = pr.popen(['ln', '-sf', m[1], d_])
    pr.wait(p)


def gen_monolithic_doc(repo_dir):
    def add_pyadi_iio_to_path():
        """
        To allow importing adi.<module> for autodoc.
        """
        name = os.path.join(repo_dir, 'pyadi-iio')
        if 'PYTHONPATH' in os.environ:
            os.environ['PYTHONPATH'] += os.pathsep + name
        else:
            os.environ['PYTHONPATH'] = name
    add_pyadi_iio_to_path()

    d_ = os.path.abspath(os.path.join(repo_dir, os.pardir))
    docs_dir = os.path.join(d_, 'docs')
    indexfile = os.path.join(docs_dir, 'index.rst')
    if os.path.isdir(docs_dir):
        pr.run(f"rm -r {docs_dir}")
    pr.mkdir(docs_dir)

    mk = {}
    for r in lut:
        cwd = os.path.join(repo_dir, f"{r}/{lut[r]['doc_folder']}")
        mk[r] = get_sphinx_dirs(cwd)
        if mk[r][0]:
            continue
        pr.mkdir(os.path.join(docs_dir, r))
        cp_cmd = f"""\
        for dir in */; do
            dir="${{dir%/}}"
            if [ "$dir" != "_build" ] && [ "$dir" != "extensions" ]; then
                cp -r $dir {d_}/docs/{r}
            fi
        done
        for file in *.rst; do
            cp $file {d_}/docs/{r}
        done\
        """
        cwd = mk[r][2]
        pr.run(cp_cmd, cwd)

        # Prefixes references with repo name, except already external
        # references :ref:`repo:str`
        cwd = f"{d_}/docs/{r}"
        patch_cmd = """\
        # Patch :ref:`str` into :ref:`{r} str`
        find . -type f -exec sed -i -E \
            "s/(:ref:\\`)([^<>:]+)(\\`)/\\1{r} \\2\\3/g" {{}} \\;
        # Patch:ref:`Title <str>` into :ref:`Title <{r} str>`
        find . -type f -exec sed -i -E \
            "s/(:ref:\\`)([^<]+)( <)([^:>]+)(>)/\\1\\2\\3{r} \\4\\5/g" {{}} \\;
        # Patch ^.. _str:$ into .. _{r} str:
        find . -type f -exec sed -i -E \
            "s/^(.. _)([^:]+)(:)\\$/\\1{r} \\2\\3/g" {{}} \\;\
        """.format(r=r)
        pr.run(patch_cmd, cwd)

        # Patch includes outside the docs source,
        # e.g. no-OS include README.rst
        depth = '../' * (2 + lut[r]['doc_folder'].count('/'))
        include_cmd = """
        find . -type f -exec sed -i -E \
        "s|^(.. include:: )({depth})(.*)|\\1../../../repos/{r}/\\3|g" {{}} \\;\
        """.format(r=r, depth=depth)
        pr.run(include_cmd, cwd)

    # Convert documentation into top-level
    cwd = f"{docs_dir}/documentation"
    pr.run(f"mv {cwd}/* {docs_dir} ; rmdir {cwd}")
    pr.run(f"cp -r {mk['documentation'][2]}/conf.py {docs_dir}")
    pr.run(f"echo monolithic = True >> {docs_dir}/conf.py")

    for r in lut:
        if r != 'documentation':
            patch_index(r, docs_dir, indexfile)

    # Convert external references into local prefixed
    cwd = docs_dir
    for r in lut:
        ref_cmd = """\
        find . -type f -exec sed -i "s|ref:\\`{r}:|ref:\\`{r} |g" {{}} \\;\
        """.format(r=r)
        pr.run(ref_cmd, cwd)
    ref_cmd = """\
    find . -type f -exec sed -i "s|<|<|g" {} \\;
    """
    pr.run(ref_cmd, cwd)

    pr.run("sphinx-build . _build", docs_dir)

    cwd = d_
    pr.run("ln -sf docs/_build/html html_mono", cwd)


@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=False),
    default=None,
    required=True,
    help="Path to create aggregated output."
)
@click.option(
    '--symbolic',
    '-s',
    is_flag=True,
    default=False,
    help="Keep each repo doc independent."
)
@click.option(
    '--extra',
    '-t',
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
def aggregate(directory, symbolic, extra, no_parallel_, dry_run_, open_):
    """
    Creates an aggregated documentation out of every repo documentation,
    by default, will conjoin/patch each into a single Sphinx build.
    """
    global dry_run, no_parallel
    no_parallel = no_parallel_
    dry_run = dry_run_
    directory = os.path.abspath(directory)

    if not extra:
        click.echo("Extra features disabled, use --extra to enable.")

    repos_dir = os.path.join(directory, 'repos')
    if not dry_run:
        if not os.path.isdir(directory):
            pr.mkdir(directory)
        if not os.path.isdir(repos_dir):
            pr.mkdir(repos_dir)

    d = 'html' if symbolic else 'html_mono'
    d__ = os.path.join(directory, d)
    if os.path.isdir(d__):
        pr.run(f"rm -r {d__}")

    for r in lut:
        r__ = remote if 'remote' not in lut[r] else lut[r]['remote']
        r_ = r__.format(r)
        cwd = os.path.join(repos_dir, r)
        if not os.path.isdir(cwd):
            git_cmd = ["git", "clone", r_, "--depth=1", "-b",
                       lut[r]['branch'], '--', cwd]
            p = pr.popen(git_cmd)
        else:
            git_cmd = ["git", "pull"]
            p = pr.popen(git_cmd, cwd)
    pr.wait(p)

    if extra:
        do_extra_steps(repos_dir)

    if symbolic:
        gen_symbolic_doc(repos_dir)
    else:
        gen_monolithic_doc(repos_dir)

    type_ = "symbolic" if symbolic else "monolithic"
    out_ = "html" if symbolic else "html_mono"
    click.echo(f"Done, {type_} documentation written to {directory}/{out_}")

    if open_ and not dry_run:
        subprocess.call(f"xdg-open {directory}/{out_}/index.html", shell=True)
