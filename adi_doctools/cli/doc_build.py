from typing import Tuple, List
from sphinx.util.osutil import SEP

import os
import sys
from os import path, listdir, chdir, getcwd
import click
import subprocess
import re
import yaml
import importlib.util

from sphinx.application import Sphinx

from ..lut import get_lut

dry_run = True
no_parallel = True
lut = get_lut()
repos = lut['repos']

default_config = {
    'extra': False,
    'branch': 'main',
}

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
            os.mkdir(d)
        else:
            click.echo(f"mkdir {d}")


def get_sphinx_dirs(cwd) -> Tuple[bool, str, str]:
    mk = path.join(cwd, 'Makefile')
    if not path.isfile(mk):
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
    builddir = path.join(cwd, f"{builddir_}/html")
    sourcedir = path.join(cwd, sourcedir_)
    if not path.isdir(sourcedir):
        click.echo(click.style(f"Parsed {sourcedir} does not exist, skipped!",
                               fg='red'))
        return (True, '', '')

    return [False, builddir, sourcedir]


def do_extra_steps(repo_dir, doc):
    global dry_run, no_parallel
    for l_ in doc['config']:
        if doc['config'][l_]['extra'] is False:
            continue

        if l_ not in repos:
               click.echo(f"Requested extra steps for unmapped repo '{l_}'.")
               continue

        if 'extra' not in repos[l_]:
               click.echo(f"Requested extra steps for repo '{l_}', but there aren't any.")
               continue

        cwd, cmd, no_p = repos[l_]['extra']
        cwd = path.join(repo_dir, l_, cwd)
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
        cwd = path.join(repo_dir, f"{r}/{repos[r]['doc_folder']}")
        click.echo(f"Starting sphinx for {r}")
        mk.append(get_sphinx_dirs(cwd))
        if mk[-1][0]:
            continue

        env = os.environ.copy()
        env["ADOC_INTERREF_URI"] = path.abspath(path.join(repo_dir, "..", "html")) + SEP
        pr.popen(['make', 'html'], p, cwd, env=env)
    pr.wait(p)

    d_ = path.abspath(path.join(repo_dir, os.pardir))

    out = path.join(d_, 'html')
    if path.isdir(out):
      pr.run(f"rm -r {out}")
    pr.mkdir(out)
    for r, m in zip(repos, mk):
        if m[0]:
            continue
        d_ = path.join(out, r)
        pr.popen(['cp', '-r', m[1], d_], p)
    pr.wait(p)

class SphinxWarnings:
    orphan: List = [] # srcfile
    ref_ref: List = [] # docname lineno label
    toc_not_readable: List = [] # docname lineno srcfile
    image_not_readable: List = [] # docname srcfile
    include: List = [] # docname lineno srcfile

sphinx_warnings = SphinxWarnings()

toctree_template = """
.. toctree::
   :caption: {caption}
   :maxdepth: 2

"""

template_config = """
from os import path
# -- Project information -----------------------------------------------------

repository = 'custom'
project = '$project$'
copyright = '2024, Analog Devices, Inc.'
author = 'Analog Devices, Inc.'

# -- General configuration ---------------------------------------------------

extensions = [$extensions$]

needs_extensions = {
    'adi_doctools': '0.3'
}

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
source_suffix = '.rst'

# -- Custom extensions configuration ------------------------------------------

export_metadata = True
monolithic = True

# -- Options for HTML output --------------------------------------------------

html_theme = 'cosmic'
html_theme_options = {}
html_favicon = path.join("sources", "icon.svg")

# -- External docs configuration ----------------------------------------------

interref_repos = [$interref_repos$]
"""

def get_includes(src_doc_dir, dst_doc_dir, doc):
    """
    Get includes/images that are under the doc_dir depth.
    """
    cwd = dst_doc_dir
    # Run include first to solve image for missing included files also
    for e in ['include', 'image', 'figure']:
        patch_cmd = "grep -rn '^.. {e}:: '".format(e=e)
        p = subprocess.Popen(patch_cmd, shell=True, cwd=cwd,
                             stdout=subprocess.PIPE)

        for line in p.stdout:
            m = line.decode("utf-8").split('.. {e}:: '.format(e=e))
            m.append(m[0][m[0].index(':')+1:])
            m[2] = int(m[2][:m[2].index(':')])
            m[0] = m[0][:m[0].index(':')].strip()
            m[1] = m[1].strip()
            # Inside namespace: copy over
            if m[0].count(SEP) >= m[1].count('..'+SEP):
                d = path.join(path.dirname(m[0]), m[1])
                pr.run(f"cp -r --parents {d} {dst_doc_dir}", src_doc_dir)
            # Outside namespace: update path
            else:
                with open(path.join(dst_doc_dir, m[0]), "r") as f:
                    data = f.readlines()
                m_patched = path.abspath(path.join(src_doc_dir, path.dirname(m[0]), m[1]))
                m_patched = path.relpath(m_patched, path.join(dst_doc_dir, path.dirname(m[0])))
                data[m[2]-1] = data[m[2]-1].replace(m[1], m_patched)
                with open(path.join(dst_doc_dir, m[0]), "w") as f:
                    f.write(''.join(data))


def namespace_ref(doc_dir, r):
    """
    Add repository idenfier to every label/reference, e.g:
    .. _spi_engine:         -> .. _hdl:spi_engine:
    :ref:`spi_engine`       -> :ref:`hdl:spi_engine`
    :ref:`Alt <spi_engine>` -> :ref:`Alt <hdl:spi_engine>`

    For external references, convert to version with precedence also, e.g.
    :external+hdl:`spi_engine`       -> :ref:`hdl:spi_engine`
    :external+hdl:`Alt <spi_engine>` -> :ref:`Alt <hdl:spi_engine>`
    """
    # Prefixes references with repo name to create namespace
    # 1. Patch :ref:`str` into :ref:`{r}:str`
    # 2. Patch :ref:`Title <str>` into :ref:`Title <{r}:str>`
    # 3. Patch ^.. _str:$ into .. _{r}:str:
    cwd = path.join(doc_dir, r)
    patch_cmd = """\
    find . -type f -exec sed -i -E \
        "s/(\s|^|\()(:ref:\\`)([^<>:]+)(\\`)/\\1\\2{r}:\\3\\4/g" {{}} \\;
    find . -type f -exec sed -i -E \
        "s/(\s|^|\()(:ref:\\`)([^<]+)( <)([^:>]+)(>)/\\1\\2\\3\\4{r}:\\5\\6/g" {{}} \\;
    find . -type f -exec sed -i -E \
        "s/^(.. _)([^:]+)(:)\\$/\\1{r}:\\2\\3/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

    # Convert external references into local prefixed with precedence
    # 1. Patch :external+r:ref:`str` into :ref:`r:str`
    # 2. Patch :external+r:ref:`Title <str>` into :ref:`Title <r:str>`
    patch_cmd = """\
    find . -type f -exec sed -i -E \
        -e "s/(\s|^|\()(:external\+)([^:]+)(:ref:\\`|:doc:\\`)([^<]+)( <)([^:>]+)(>)/\\1\\4\\5\\6\\3:\\7\\8/g" {} \\;\
    """
    pr.run(patch_cmd, cwd)


def _patch_index(toc_file, repo):
    with open(toc_file, "r") as f:
        data = f.readlines()
        if ".. toctree::\n" not in data:
            return
        data_ = data.copy()

        toctrees = []
        while ".. toctree::\n" in data:
            data  = data[data.index(".. toctree::\n")+1:]
            toctrees.append([[],[]])

            for i in range(0, len(data)):
                if data[i] != '\n' and not data[i].startswith('   '):
                    break
                elif data[i][0:4] == '   :':
                    toctrees[-1][0].append(data[i])
                elif data[i][0:3] == '   ' and data[i][0:4] != '   :':
                    pos = data[i].find('<')
                    if pos == -1:
                        str_ = f"   {repo}/{data[i][3:]}"
                    else:
                        str_ = f"   {data[i][:pos+1]}{repo}/{data[i][pos+1:]}"
                    toctrees[-1][1].append(str_)
                    data[i] = str_

    # Add orphan flag to indexes, since toctree is expanded at /index.rst
    with open(toc_file, 'w') as f:
        f.write(':orphan:\n\n')
        for line in data_:
            f.write(line)

    return toctrees


def patch_index(doc, tocs, index_file):
    global dry_run

    toctrees = {}
    orphan_toc = {}
    for k in tocs:
        toctrees[k] = []
        for k_ in tocs[k]:
            if f"{k}{SEP}index.rst" == k_:
                toctrees[k] += _patch_index(path.join(path.dirname(index_file), k, "index.rst"), k)
            else:
                # Fallback, just add somewhere
                if k not in orphan_toc:
                    orphan_toc[k] = []
                orphan_toc[k].append(f"   {k_[:-4]}\n")
        if k in orphan_toc:
            toctrees[k] += [[], orphan_toc[k]]

    data = []
    for k in toctrees:
        first = True

        for k_ in toctrees[k]:
            data.append(".. toctree::\n")
            if first:
                data.append(f"   :caption: {repos[k]['name']}\n")
                first = False
            data.extend(k_[0])
            data.append('\n')
            data.extend(k_[1])
            data.append('\n')

    index = doc['project'] + '\n'
    index += '"'*len(doc['project']) + '\n'
    index += ''.join(data)
    with open(index_file, "w") as f:
        f.write(index)


def prepare_doc(doc, repos_dir, doc_dir):
    if path.isdir(doc_dir):
        pr.run(f"rm -r {doc_dir}")
    pr.mkdir(doc_dir)

    index_file = path.join(doc_dir, 'index.rst')
    index = doc['project'] + '\n'
    index += '"'*len(doc['project']) + '\n'
    with open(index_file, "w") as f:
        f.write(index)

    for r in doc['doc']:
        src_doc_dir = path.join(repos_dir, r, repos[r]['doc_folder'])
        dst_doc_dir = path.join(doc_dir, r)
        mk = get_sphinx_dirs(src_doc_dir)
        if mk[0]:
            continue
        doc['dirs'][r] = mk[1:]
        src_doc_dir = mk[2]
        if not path.isdir(dst_doc_dir):
            pr.mkdir(dst_doc_dir)

        # Get configs
        spec = importlib.util.spec_from_file_location("sphinx_conf", path.join(src_doc_dir, "conf.py"))
        __c = importlib.util.module_from_spec(spec)
        sys.modules["sphinx_conf"] = __c
        spec.loader.exec_module(__c)
        if hasattr(__c, 'extensions'):
            doc['extensions'].update(__c.extensions)
        if hasattr(__c, 'interref_repos'):
            doc['interref_repos'].update(__c.interref_repos)
        doc['interref_repos'].add(r)

        # src_doc_dir : /path/to/hdl/docs
        # dst_doc_dir : doc/hdl
        for d in doc['doc'][r]:
            pr.run(f"cp -r --parents {d} {dst_doc_dir}", src_doc_dir)

        # Obtain toctree entries
        cwd_ = getcwd()
        chdir(src_doc_dir)
        toc_resolve = []
        for d in doc['doc'][r]:
            if path.isdir(d):
                index_ = path.join(d, 'index.rst')
                if path.isfile(index_):
                    d = index_
                else:
                    click.echo(f"{r}: source dir '{d}' does not contain index.rst, "
                               "won't try to resolve toctree for this folder.")
                    continue
            d = d[:-4]
            toc_resolve.append(d)

        i = 1
        also_include = []
        for d in toc_resolve:
            d_ = d.split(SEP)
            found = False
            rst_f = []
            while not found:
                d_right = SEP.join(d_[-i:])
                d_left = SEP.join(d_[:-i])
                if d_left == '':
                    d_left = '.'
                for f in listdir(d_left):
                    if path.isfile(path.join(d_left, f)) and f.endswith('.rst'):
                        rst_f.append(path.join(d_left, f))

                for f in rst_f:
                    if found:
                        break

                    data = open(f, "r").readlines()
                    while '.. toctree::\n' in data:
                        if found:
                            break

                        data = data[data.index('.. toctree::\n')+1:]
                        for j in range(0, len(data)):
                            # TODO Improve toctree search, e.g. support for markdown
                            if data[j].strip('\n') == f"   {d_right}" or f"<{d_right}>" in data[j]:
                                also_include.append(f)
                                found = True
                                break
                            elif data[j] != '\n' and not data[j].startswith('   '):
                                break

                if not found:
                    i += 1
                    if i > len(d_):
                        click.echo(f"Unable to resolve {SEP.join(d_)}")
                        break
                else:
                    # Now look for the parent
                    d_ = also_include[-1][:-4].split(SEP)
                    if d_[0] == '.':
                        d_.pop(0)

                    if len(d_) == 1 and d_[0] == "index":
                        # Reached main index
                        break

                    i = 1
                    found = False

        chdir(cwd_)
        for f_ in also_include:
            pr.run(f"cp --parents {f_} {dst_doc_dir}", src_doc_dir)

        get_includes(src_doc_dir, dst_doc_dir, doc)
        namespace_ref(doc_dir, r)

    conf_file = path.join(doc_dir, 'conf.py')
    config_f = template_config
    for e in ['extensions', 'interref_repos']:
        e_ = ''.join([f"\n    '{e}'," for e in doc[e]]) + '\n'
        config_f = config_f.replace(f"${e}$", e_)
    config_f = config_f.replace(f"$project$", doc['project'])
    with open(conf_file, "w") as f:
        f.write(config_f)

    # First run, parse warnings
    chdir(doc_dir)
    warnfile = path.join('..', 'warnings.txt')
    warning = open(warnfile, "w")
    builddir = "_build"
    doctreedir = path.join(builddir, "doctrees")
    app = Sphinx('.', '.',  builddir, doctreedir, "html",
                 warning=warning)

    app.build()
    chdir(cwd_)

def parse_warnings(doc_dir):
    warnfile = path.join(doc_dir, '..', 'warnings.txt')

    re_orphan   = r"^(.*?): WARNING: document isn't included in any toctree"
    re_ref_ref  = r"^(.*?):(\d+): .* '(.*)' \[ref\.ref\]"
    re_toctree  = r"^(.*?):(\d+): .* '(.*)' \[toc\.not_readable\]"
    re_image    = r"^(.*?):: .* (.*) \[image\.not_readable\]"
    re_include0 = r"^(.*?):(\d+): CRITICAL: Problems with \"include\" directive path:"
    re_include1 = r"^InputError: \[Errno 2\] .* '(.*)'\. \[docutils\]"
    warning = open(warnfile, "r")
    for e in warning:
        e = e.replace("[91m", "").replace("[39;49;00m", "")

        m = re.match(re_orphan, e)
        if m:
            sphinx_warnings.orphan.append([m.group(1)])
            continue

        m = re.match(re_ref_ref, e)
        if m:
            sphinx_warnings.ref_ref.append([m.group(1), m.group(2), m.group(3)])
            continue

        m = re.match(re_toctree, e)
        if m:
            sphinx_warnings.toc_not_readable.append([m.group(1), m.group(2), m.group(3)])
            continue

        m = re.match(re_image, e)
        if m:
            sphinx_warnings.image_not_readable.append([m.group(1), m.group(2)])
            continue

        m = re.match(re_include0, e)
        if m:
            sphinx_warnings.include.append([m.group(1), m.group(2), None])
            continue

        m = re.match(re_include1, e)
        if m:
            sphinx_warnings.include[-1][2] = m.group(1)
            continue

suppress_warnings = """
suppress_warnings = [
    'app.add_node',
    'app.add_directive',
    'app.add_role',
    'app.add_generic_role',
]
"""

def patch_doc(doc, repos_dir, doc_dir, doc_patch_dir):
    if path.isdir(doc_patch_dir):
        pr.run(f"rm -r {doc_patch_dir}")
    pr.run(f"cp -r {doc_dir} {doc_patch_dir}")
    index_file = path.join(doc_patch_dir, 'index.rst')
    with open(path.join(doc_patch_dir, 'conf.py'), "a") as f:
        # Due to improper sphinx globals
        f.write(suppress_warnings)

    # Orphan pages
    # Add to root index
    tocs = {}
    for e in sphinx_warnings.orphan:
        p = path.relpath(e[0], doc_dir).split(SEP)
        if p[0] not in tocs:
            tocs[p[0]] = []
        tocs[p[0]].append(SEP.join(p))

    # Swap with explicit external references
    for e in sphinx_warnings.ref_ref:
        # Nothing to do for now, since is patched with precedence ref already.
        continue

    # Grab missing images
    for e in sphinx_warnings.image_not_readable:
        # Nothing to do for now, since get_includes should have solved all already.
        continue

    # Update include paths
    for e in sphinx_warnings.include:
        p = path.relpath(e[0], doc_dir).split(SEP)
        r = p[0]
        p = SEP.join(p[1:])
        idx = int(e[1])-1
        p_ = path.join(doc_patch_dir, r, p)

        with open(p_, "r") as f:
            data = f.readlines()
        inc_file = data[idx].replace(".. include::", "").strip()
        abs_inc_file = path.abspath(path.join(repos_dir, r, doc['dirs'][r][1], path.dirname(p), inc_file))
        data[idx] = data[idx].replace(inc_file, path.relpath(abs_inc_file, path.dirname(p_)))
        with open(p_, "w") as f:
            f.write(''.join(data))

    # Remove from toctree
    # lineno points to the toctree directive, not the exact linenumber
    toc_ = {}
    for src, lineno, doc_ in sphinx_warnings.toc_not_readable:
        src = path.relpath(src, doc_dir)
        doc_ = path.relpath(doc_, path.dirname(src))
        if src not in toc_:
            toc_[src] = {}
        if lineno not in toc_[src]:
            toc_[src][lineno] = []
        toc_[src][lineno].append(doc_)

    for src in toc_:
        data_filter = []
        with open(path.join(doc_dir, src), "r") as f:
            data = f.readlines()
        for lineno in toc_[src]:
            d = data[int(lineno):]
            for i in range(0, len(d)):
                if d[i] != '\n' and not d[i].startswith('   '):
                    break
                for doc_ in toc_[src][lineno]:
                    if d[i].strip('\n') == f"   {doc_}" or f"<{doc_}>" in d[i]:
                        data_filter.append(d[i])

        for d in data_filter:
            data.remove(d)
        with open(path.join(doc_patch_dir, src), "w") as f:
            f.write(''.join(data))

    patch_index(doc, tocs, index_file)

    # Second run
    cwd_ = getcwd()
    chdir(doc_patch_dir)
    warnfile = path.join('..', 'warnings_patched.txt')
    warning = open(warnfile, "w")
    builddir = "_build"
    doctreedir = path.join(builddir, "doctrees")
    app = Sphinx('.', '.',  builddir, doctreedir, "html",
                 warning=warning)
    app.build()
    with open(warnfile, "r") as f:
        click.echo(f.read())
    chdir(cwd_)


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
def doc_build(directory, extra, no_parallel_, dry_run_, open_):
    """
    Creates an aggregated documentation out the repos
    int the doc.yaml file.
    The tool runs Sphinx twice to resolve interrepo-refereces,
    watching for warnings and patching accordingly.
    """
    global dry_run, no_parallel
    no_parallel = no_parallel_
    dry_run = dry_run_
    directory = path.abspath(directory)

    repos_dir = path.join(directory, 'repos')
    doc_dir = path.join(directory, 'doc')
    doc_yaml = path.join(directory, 'doc.yaml')
    if not dry_run:
        if not path.isdir(directory):
            pr.mkdir(directory)
        if not path.isdir(repos_dir):
            pr.mkdir(repos_dir)
        if not path.isfile(doc_yaml):
            click.echo("Metafile doc.yaml not found, created template. "
                       "Please, update it and rerun the tool.")
            # TODO
            return

    with open(doc_yaml) as f:
        doc = yaml.safe_load(f)
        if 'doc' not in doc:
            click.echo("Invalid yaml file, no 'doc' entry.")
            return

    # Fill gaps
    if 'config' not in doc:
        doc['config'] = {}
    if 'dirs' not in doc:
        doc['dirs'] = {}
    for e in ['extensions', 'interref_repos']:
        if e not in doc:
            doc[e] = []
        doc[e] = set(doc[e])
    if 'project' not in doc:
        doc['project'] = 'Custom doc'
    for repo in doc['doc']:
        if repo not in doc['config'] or doc['config'][repo] is None:
            doc['config'][repo] = {}
        doc['config'][repo] = {**default_config, **doc['config'][repo]}

    p = []
    for r in doc['doc']:
        cwd = path.join(repos_dir, r)
        if not path.isdir(cwd):
            git_cmd = ["git", "clone", lut['remote'].format(r), "--depth=1", "-b",
                       doc['config'][repo]['branch'], '--', cwd]
            pr.popen(git_cmd, p)
    pr.wait(p)

    prepare_doc(doc, repos_dir, doc_dir)
    parse_warnings(doc_dir)

    doc_patch_dir = path.join(directory, 'doc_patch')
    patch_doc(doc, repos_dir, doc_dir, doc_patch_dir)

    do_extra_steps(repos_dir, doc)

    return
    gen_monolithic_doc(repos_dir)

    type_ = "monolithic" if monolithic else "symbolic"
    out_ = "docs/_build" if monolithic else "html"
    click.echo(f"Done, {type_} documentation written to {directory}/{out_}")

    if open_ and not dry_run:
        subprocess.call(f"xdg-open {directory}/{out_}/index.html", shell=True)
