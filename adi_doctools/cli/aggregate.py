import os
import click
import subprocess
import re

remote = "git@github.com:analogdevicesinc/{}.git"

lut = {
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
        'doc_folder': 'doc/sphinx',
        'name': 'no-OS',
        'branch': 'main'
    },
    'documentation': {
        'doc_folder': 'docs',
        'name': 'System Level',
        'branch': 'main'
    },
    'doctools': {
        'doc_folder': 'docs',
        'name': 'Doc Tools',
        'branch': 'main'
    }
}


def patch_index(name, sourcedir, indexfile, dry_run):
    file = os.path.join(sourcedir, 'index.rst')
    toctree = []

    with open(file, "r") as f:
        data = f.readlines()
        if ".. toctree::\n" not in data:
            return
        in_toc = False
        for i in range(0, len(data)):
            if in_toc:
                if data[i][0:12] == '   :caption:':
                    data[i] = ""
                    continue

                if data[i][0:3] == '   ' and data[i][0:4] != '   :':
                    pos = data[i].find('<')
                    if pos == -1:
                        data[i] = f"   {name}/{data[i][3:]}"
                    else:
                        data[i] = f"{data[i][:pos+1]}{name}/{data[i][pos+1:]}"

                if data[i][0:3] != '   ' and data[i] != '\n':
                    toctree[-1] = [toctree[-1][0], i - 1]
                    if data[i] == ".. toctree::\n":
                        toctree.append([i, i])
                    else:
                        in_toc = False
                    continue
            else:
                if data[i] == ".. toctree::\n":
                    toctree.append([i, i])
                    in_toc = True

    if dry_run:
        return

    with open(indexfile, "r") as f:
        data_ = f.readlines()
        # Find end of toctree
        if ".. toctree::\n" in data_:
            i = data_.index(".. toctree::\n")
            for i in range(i + 1, len(data_)):
                if data_[i][0:3] != '   ' and data_[i] != '\n':
                    break
        else:
            i = len(data_)

        header = data_[:i]
        body = data_[i:]

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


def get_sphinx_dirs(cwd) -> tuple[bool, str, str]:
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


def do_extra_steps(repo_dir, no_parallel, dry_run):
    for l_ in lut:
        if 'extra' in lut[l_]:
            cwd, cmd, no_p = lut[l_]['extra']
            cwd = os.path.join(repo_dir, f"{l_}/{cwd}")
            nproc = 1 if no_parallel or no_p else 4
            if not dry_run:
                if cmd[0] == 'make':
                    subprocess.call(f"cd {cwd}; {' '.join(cmd)} -j{nproc}",
                                    shell=True)
                else:
                    # Unknown cmd, do not append nproc
                    subprocess.call(f"cd {cwd}; {' '.join(cmd)}",
                                    shell=True)
            else:
                if cmd[0] == 'make':
                    click.echo(f"cd {cwd}; {' '.join(cmd)} -j{nproc}")
                else:
                    click.echo(f"cd {cwd}; {' '.join(cmd)}")


def gen_symbolic_doc(repo_dir, no_parallel, dry_run):
    p = []
    mk = []
    for r in lut:
        sphinx_cmd = ["make", "html"]
        cwd = os.path.join(repo_dir, f"{r}/{lut[r]['doc_folder']}")
        mk.append(get_sphinx_dirs(cwd))
        if mk[-1][0]:
            continue
        if not dry_run:
            p__ = subprocess.Popen(sphinx_cmd, cwd=cwd)
            p__.wait() if no_parallel else p.append(p__)
        else:
            click.echo(f"cd {cwd}; {' '.join(sphinx_cmd)}")
    for p_ in p:
        p_.wait()

    d_ = os.path.abspath(os.path.join(repo_dir, os.pardir))
    out = os.path.join(d_, 'html')
    if not dry_run:
        os.mkdir(out)
    else:
        click.echo(f"mkdir {out}")
    for r, m in zip(lut, mk):
        if m[0]:
            continue
        d_ = os.path.join(out, r)
        cp_cmd = ["cp", "-r", m[1], d_]
        if not dry_run:
            p__ = subprocess.Popen(cp_cmd)
            p__.wait()
        else:
            click.echo(' '.join(cp_cmd))


def gen_monolithic_doc(repo_dir, no_parallel, dry_run):
    d_ = os.path.abspath(os.path.join(repo_dir, os.pardir))
    docs_dir = os.path.join(d_, 'docs')
    indexfile = os.path.join(docs_dir, 'index.rst')
    if os.path.isdir(docs_dir):
        cmd = f"rm -r {docs_dir}"
        if not dry_run:
            subprocess.call(cmd, shell=True)
        else:
            click.echo(cmd)
    # Copy template
    src_dir = os.path.abspath(os.path.join(os.path.dirname(__file__),
                              os.pardir))
    sphinx_template = os.path.join(src_dir, 'miscellaneous/sphinx-template')
    cp_cmd = f"cp -r {sphinx_template} {docs_dir}"
    if not dry_run:
        subprocess.run(cp_cmd, shell=True)
    else:
        click.echo(cp_cmd)

    mk = []
    for r in lut:
        cwd = os.path.join(repo_dir, f"{r}/{lut[r]['doc_folder']}")
        mk.append(get_sphinx_dirs(cwd))
        if mk[-1][0]:
            continue
        if not dry_run:
            os.mkdir(os.path.join(docs_dir, r))
        else:
            click.echo(f"mkdir {os.path.join(docs_dir, r)}")
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
        cwd = mk[-1][2]
        if not dry_run:
            subprocess.run(cp_cmd, shell=True, cwd=cwd)
        else:
            click.echo(f"cd {cwd}; {cp_cmd}")

        # Prefixes references with repo name, expect already external
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
        if not dry_run:
            subprocess.run(patch_cmd, shell=True, cwd=cwd)
        else:
            click.echo(f"cd {cwd}; {patch_cmd}")

        # Patch includes outside the docs source,
        # e.g. no-OS include README.rst
        depth = '../' * (3 + lut[r]['doc_folder'].count('/'))
        include_cmd = """
        find . -type f -exec sed -i -E \
        "s|^(.. include:: )({depth})(.*)|\\1../../../repos/{r}/\\3|g" {{}} \\;\
        """.format(r=r, depth=depth)
        if not dry_run:
            subprocess.run(include_cmd, shell=True, cwd=cwd)
        else:
            click.echo(f"cd {cwd}; {include_cmd}")

        patch_index(r, mk[-1][2], indexfile, dry_run)

    # Convert external references into local prefixed
    cwd = docs_dir
    for r in lut:
        ref_cmd = """\
        find . -type f -exec sed -i "s|ref:\\`{r}:|ref:\\`{r} |g" {{}} \\;\
        """.format(r=r)
        if not dry_run:
            subprocess.run(ref_cmd, shell=True, cwd=cwd)
        else:
            click.echo(f"cd {cwd}; {ref_cmd}")
    ref_cmd = """\
    find . -type f -exec sed -i "s|<|<|g" {} \\;
    """
    if not dry_run:
        subprocess.run(ref_cmd, shell=True, cwd=cwd)
    else:
        click.echo(f"cd {cwd}; {ref_cmd}")

    sphinx_cmd = ["make", "html"]
    cwd = docs_dir
    if not dry_run:
        subprocess.run(sphinx_cmd, cwd=cwd)
    else:
        click.echo(f"cd {cwd}; {' '.join(sphinx_cmd)}")

    cp_cmd = ["cp", "-r", '_build/html', '../html_mono']
    if not dry_run:
        p__ = subprocess.Popen(cp_cmd, cwd=cwd)
        p__.wait()
    else:
        click.echo(f"cd {cwd}; {' '.join(cp_cmd)}")


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
    is_flag=True,
    default=False,
    help="Run all steps in sequence."
)
@click.option(
    '--dry-run',
    '-n',
    is_flag=True,
    default=False,
    help="Don't actually run; just print them."
)
def aggregate(directory, symbolic, extra, no_parallel, dry_run):
    """
    Creates an aggregated documentation out of every repo documentation,
    by default, will conjoin/patch each into a single Sphinx build.
    """
    directory = os.path.abspath(directory)

    if not extra:
        click.echo("Extra features disabled, use --extra to enable.")

    repos_dir = os.path.join(directory, 'repos')
    if not dry_run:
        if not os.path.isdir(directory):
            os.mkdir(directory)
        if not os.path.isdir(repos_dir):
            os.mkdir(repos_dir)

    d = 'html' if symbolic else 'html_mono'
    d__ = os.path.join(directory, d)
    if os.path.isdir(d__):
        cmd = f"rm -r {d__}"
        if not dry_run:
            subprocess.call(cmd, shell=True)
        else:
            click.echo(cmd)

    p = []
    for r in lut:
        r_ = remote.format(r)
        cwd = os.path.join(repos_dir, r)
        if not os.path.isdir(cwd):
            git_cmd = ["git", "clone", r_, "--depth=1", "-b",
                       lut[r]['branch'], '--', cwd]
            if not dry_run:
                p__ = subprocess.Popen(git_cmd)
                p__.wait() if no_parallel else p.append(p__)
            else:
                click.echo(' '.join(git_cmd))
        else:
            git_cmd = ["git", "pull"]
            if not dry_run:
                p__ = subprocess.Popen(git_cmd, cwd=cwd)
                p__.wait() if no_parallel else p.append(p__)
            else:
                click.echo(f"cd {cwd}; {' '.join(git_cmd)}")
    for p_ in p:
        p_.wait()

    if extra:
        do_extra_steps(repos_dir, no_parallel, dry_run)

    if symbolic:
        gen_symbolic_doc(repos_dir, no_parallel, dry_run)
    else:
        gen_monolithic_doc(repos_dir, no_parallel, dry_run)

    type_ = "symbolic" if symbolic else "monolithic"
    out_ = "html" if symbolic else "html_mono"
    click.echo(f"Done, {type_} documentation written to {directory}/{out_}")
