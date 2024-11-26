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
    'branch': 'main'
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

template_index = """
ADI Doc
=======
"""

toctree_template = """
.. toctree::
   :caption: {caption}
   :maxdepth: 2

"""

template_config = """
from os import path
# -- Project information -----------------------------------------------------

repository = 'custom'
project = 'Custom'
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

def prepare_doc(doc, repos_dir, doc_dir):
    if path.isdir(doc_dir):
        pr.run(f"rm -r {doc_dir}")
    pr.mkdir(doc_dir)

    index_file = path.join(doc_dir, 'index.rst')
    with open(index_file, "w") as f:
        f.write(template_index)

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

    conf_file = path.join(doc_dir, 'conf.py')
    config_f = template_config
    for e in ['extensions', 'interref_repos']:
        e_ = ''.join([f"\n    '{e}'," for e in doc[e]]) + '\n'
        config_f = config_f.replace(f"${e}$", e_)
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

    # Swap with external references
    for e in sphinx_warnings.ref_ref:
        r = path.relpath(e[0], doc_dir).split(SEP)[0]
        p = path.join(doc_patch_dir, path.relpath(e[0], doc_dir))

        pattern = r':ref:`([^`<]+(?:<[^`]+>)?)`'
        replacement = rf':external+{r}:ref:`\1`'
        with open(p, "r") as f:
            data = f.readlines()
            data[int(e[1])-1] = re.sub(pattern, replacement, data[int(e[1])-1])
        with open(p, "w") as f:
            f.write(''.join(data))

    # Grab missing images
    # Since the Sphinx warning does not provide the lineno,
    # copy instead of looking for the correct img directive.
    for e in sphinx_warnings.image_not_readable:
        f__ = SEP.join(e[1].split(SEP)[1:])
        r = path.relpath(e[0], doc_dir).split(SEP)[0]
        src_doc_dir = path.join(repos_dir, r, doc['dirs'][r][1])
        dst_doc_dir = path.join(doc_patch_dir, r)
        pr.run(f"cp --parents {f__} {dst_doc_dir}", src_doc_dir)

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
    for src, lineno, doc in sphinx_warnings.toc_not_readable:
        src = path.relpath(src, doc_dir)
        doc = path.relpath(doc, path.dirname(src))
        if src not in toc_:
            toc_[src] = {}
        if lineno not in toc_[src]:
            toc_[src][lineno] = []
        toc_[src][lineno].append(doc)

    for src in toc_:
        data_filter = []
        with open(path.join(doc_dir, src), "r") as f:
            data = f.readlines()
        for lineno in toc_[src]:
            d = data[int(lineno):]
            for i in range(0, len(d)):
                if d[i] != '\n' and not d[i].startswith('   '):
                    break
                for doc in toc_[src][lineno]:
                    if d[i].strip('\n') == f"   {doc}" or f"<{doc}>" in d[i]:
                        data_filter.append(d[i])

        for d in data_filter:
            data.remove(d)
        with open(path.join(doc_patch_dir, src), "w") as f:
            f.write(''.join(data))


    index = template_index
    for t in tocs:
        index += toctree_template.format(caption=t)
        index += ''.join([f"   {e[:-4]}\n" for e in tocs[t]])

    with open(index_file, "w") as f:
        f.write(index)

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


#def gen_monolithic_doc(repo_dir):
#    def add_pyadi_iio_to_path():
#        """
#        To allow importing adi.<module> for autodoc.
#        """
#        name = path.join(repo_dir, 'pyadi-iio')
#        if 'PYTHONPATH' in os.environ:
#            os.environ['PYTHONPATH'] += pathsep + name
#        else:
#            os.environ['PYTHONPATH'] = name
#    add_pyadi_iio_to_path()
#
#    d_ = path.abspath(path.join(repo_dir, os.pardir))
#    docs_dir = path.join(d_, 'docs')
#    indexfile = path.join(docs_dir, 'index.rst')
#    if path.isdir(docs_dir):
#        pr.run(f"rm -r {docs_dir}")
#    pr.mkdir(docs_dir)
#
#    mk = {}
#    for r in repos:
#        cwd = path.join(repo_dir, f"{r}/{repos[r]['doc_folder']}")
#        mk[r] = get_sphinx_dirs(cwd)
#        if mk[r][0]:
#            continue
#        pr.mkdir(path.join(docs_dir, r))
#        cp_cmd = f"""\
#        for dir in */; do
#            dir="${{dir%/}}"
#            if [ "$dir" != "_build" ] && [ "$dir" != "extensions" ]; then
#                cp -r $dir {d_}/docs/{r}
#            fi
#        done
#        for file in *.rst; do
#            cp $file {d_}/docs/{r}
#        done\
#        """
#        cwd = mk[r][2]
#        pr.run(cp_cmd, cwd)
#
#        # Prefixes references with repo name, except already external
#        # references :ref:`repo:str`
#        cwd = f"{d_}/docs/{r}"
#        patch_cmd = """\
#        # Patch :ref:`str` into :ref:`{r} str`
#        find . -type f -exec sed -i -E \
#            "s/(:ref:\\`)([^<>:]+)(\\`)/\\1{r} \\2\\3/g" {{}} \\;
#        # Patch:ref:`Title <str>` into :ref:`Title <{r} str>`
#        find . -type f -exec sed -i -E \
#            "s/(:ref:\\`)([^<]+)( <)([^:>]+)(>)/\\1\\2\\3{r} \\4\\5/g" {{}} \\;
#        # Patch ^.. _str:$ into .. _{r} str:
#        find . -type f -exec sed -i -E \
#            "s/^(.. _)([^:]+)(:)\\$/\\1{r} \\2\\3/g" {{}} \\;\
#        """.format(r=r)
#        pr.run(patch_cmd, cwd)
#
#        # Patch includes outside the docs source,
#        # e.g. no-OS include README.rst
#        depth = '../' * (2 + repos[r]['doc_folder'].count('/'))
#        include_cmd = """
#        find . -type f -exec sed -i -E \
#        "s|^(.. include:: )({depth})(.*)|\\1../../../repos/{r}/\\3|g" {{}} \\;\
#        """.format(r=r, depth=depth)
#        pr.run(include_cmd, cwd)
#
#    # Convert documentation into top-level
#    cwd = f"{docs_dir}/documentation"
#    pr.run(f"mv {cwd}/* {docs_dir} ; rmdir {cwd}")
#    pr.run(f"cp -r {mk['documentation'][2]}/conf.py {docs_dir}")
#    pr.run(f"echo monolithic = True >> {docs_dir}/conf.py")
#
#    for r in repos:
#        if r != 'documentation':
#            patch_index(r, docs_dir, indexfile)
#
#    # Convert external references into local prefixed
#    cwd = docs_dir
#    for r in repos:
#        ref_cmd = """\
#        find . -type f -exec sed -i "s|ref:\\`{r}:|ref:\\`{r} |g" {{}} \\;\
#        """.format(r=r)
#        pr.run(ref_cmd, cwd)
#    ref_cmd = """\
#    find . -type f -exec sed -i "s|<|<|g" {} \\;
#    """
#    pr.run(ref_cmd, cwd)
#
#    pr.run("sphinx-build . _build", docs_dir)
#
#    cwd = d_


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
