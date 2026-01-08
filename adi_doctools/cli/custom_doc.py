from typing import Tuple, List
from collections import defaultdict

from os import path, listdir, pardir, chdir, getcwd, mkdir, walk
from os import environ, cpu_count
from glob import glob
from shutil import copy2
import importlib.util
import importlib.machinery
import subprocess
import click
import yaml
import sys
import re

from sphinx.util.osutil import SEP
from sphinx.application import Sphinx
from adi_doctools import __version__

from ..lut import get_lut, remote_doc
from .aux_git import is_git_lfs_installed, get_lfs_sha

no_parallel = True
lut = get_lut()
repos = lut['repos']

default_config = {
    'repository': None,
    'branch': 'main',
    'extra': False,
}

BLUE = '\033[94m'
FAIL = '\033[91m'
NC = '\033[0m'


class pr:
    @staticmethod
    def popen(cmd, p: List, cwd: [str, None] = None, env=None):
        global no_parallel
        p__ = subprocess.Popen(cmd, cwd=cwd, env=env)
        p__.wait() if no_parallel else p.append(p__)
        return p

    @staticmethod
    def run(cmd, cwd=None):
        global no_parallel
        subprocess.run(cmd, shell=True, cwd=cwd)

    @staticmethod
    def wait(p):
        for p_ in p:
            p_.wait()
            if p_.returncode != 0:
                return p_.returncode
        return 0


def get_sphinx_dirs(cwd) -> Tuple[bool, str, str]:
    conf_py = path.join(cwd, 'conf.py')
    if not path.isfile(conf_py):
        click.echo(click.style(f"{conf_py} does not exist, skipped!", fg='red'))
        return (True, '')

    builddir = path.join(cwd, "_build")

    return (False, builddir)


def do_extra_steps(repo_dir, doc):
    global no_parallel
    for l_ in doc['config']:
        if doc['config'][l_]['extra'] is False:
            continue

        if l_ not in repos:
            click.echo(f"Requested extra steps for unmapped repo '{l_}'.")
            continue

        if 'extra' not in repos[l_]:
            click.echo(f"Requested extra steps for repo '{l_}',"
                       "but there aren't any.")
            continue

        cwd, cmd, no_p = repos[l_]['extra']
        cwd = path.join(repo_dir, l_, cwd)
        nproc = 1 if no_parallel or no_p else 4
        if cmd[0] == 'make':
            pr.run(f"{' '.join(cmd)} -j{nproc}", cwd)
        else:
            # Unknown cmd, do not append nproc
            pr.run(f"{' '.join(cmd)}", cwd)


class SphinxWarnings:
    orphan: List = []  # srcfile
    ref_ref: List = []  # docname lineno label
    ref_doc: List = []  # docname lineno label
    toc_not_readable: List = []  # docname lineno srcfile
    toc_glob: List = []  # docname lineno srcfile
    image_not_readable: List = []  # docname srcfile
    include: List = []  # docname lineno srcfile


class SphinxStatuses:
    images: List = []  # repo srcfile

sphinx_warnings = SphinxWarnings()
sphinx_statuses = SphinxStatuses()

template_config = """
# -- Path setup --------------------------------------------------------------
from os import path
from sys import path as sys_path

$sys_path_insert$

# -- Project information -----------------------------------------------------

repository = 'custom'
project = '$project$'
copyright = '2024, Analog Devices, Inc.'
author = 'Analog Devices, Inc.'

# -- General configuration ---------------------------------------------------

show_warning_types = True # default for > v8.0.0

extensions = [$extensions$]

needs_extensions = {
    'adi_doctools': '0.3'
}

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
source_suffix = '.rst'

# -- MystParser configuration -------------------------------------------------

myst_enable_extensions = [
$myst_enable_extensions$
]

# -- Custom extensions configuration ------------------------------------------

monolithic = True

# -- Options for HTML output --------------------------------------------------

html_theme = 'harmonic'
html_theme_options = {}
html_title = '$project$: $description$'

# -- External docs configuration ----------------------------------------------

intersphinx_mapping = {
$intersphinx_mapping$
}
"""

template_yaml = f"""\
# Custom doc builder template
# ---------------------------
# Generated with adi_doctools {__version__}

project: "EVAL-XXXX-XXXX"
description: "Evaluating the ADXXXX/ADXXXX ... SAR ADCs"

# Dirs and files to include
# First level is repository name
include:
  - documentation/solutions/reference-designs/ad4052-ardz
  - documentation/software/libiio/cli.rst
  - documentation/linux/drivers/iio-adc/ad4052
  - hdl_my_label_0/projects/ad4630_fmc
  - hdl_my_label_1/projects/ad4052_ardz
  - no-OS/drivers/adc/ad405x.rst
  - no-OS/projects/adc/ad405x.rst

# Custom pages
# Are copied over preserving the path
custom:
  - custom-pages/intro.rst

# Create toctree for entry point page
# Pages without a explicit entry point will be searched and globed
# until the root of the source doc is reached, which may include
# undesired additional pages/sections.
entry-point:
  - caption:
    files:
      - custom-pages/intro.rst
  - caption: Evaluation board
    files:
      - documentation/solutions/reference-designs/ad4052-ardz/index.rst
  - caption: Linux IIO driver
    files:
      - documentation/linux/drivers/iio-adc/ad4052/index.rst
  - caption: no-OS driver&project
    files:
      - no-OS/projects/adc/ad405x.rst
      - no-OS/drivers/adc/ad405x.rst
  - caption: HDL design
    files:
      - hdl_my_label_0/projects/ad4630_fmc/index.rst
      - hdl_my_label_1/projects/ad4052_ardz/index.rst

# Per repository configuration
# extra: do steps that require extra software (e.g. vendor sdk)
# branch: clone from a specific branch, overwrites "main"
config:
    hdl_my_label_0:
      repository: "hdl"
      branch: "hdl_2023_r2"
    hdl_my_label_1:
      repository: "hdl"
      branch: "main"
    no-OS:
      extra: true

# Include extra extensions
extensions:
   - sphinx.ext.duration
"""

def get_includes(sourcedir, dstdir, doc):
    """
    Get includes/images that are under the doc_dir depth.
    """
    cwd = dstdir

    patterns = {
        e: re.compile(rf'^[ \t]*\.\. {e}::\s+(.*)')
        for e in ['include', 'image', 'figure']
    }

    for root, _, files in walk(cwd):
        for fname in files:
            fpath = path.join(root, fname)
            relpath = path.relpath(fpath, cwd).strip()

            try:
                with open(fpath, encoding="utf-8") as f:
                    lines = f.readlines()
            except (UnicodeDecodeError, OSError):
                continue

            for lineno, line in enumerate(lines, start=1):
                for e, rx in patterns.items():
                    m = rx.match(line)
                    if not m:
                        continue

                    target = m.group(1).strip()

                    # Inside namespace: copy over
                    if relpath.count(SEP) >= target.count('..' + SEP):
                        d = path.join(path.dirname(relpath), target)
                        pr.run(f"cp -r --parents {d} {dstdir}", sourcedir)
                    # Outside namespace: update path
                    else:
                        with open(path.join(dstdir, relpath), "r") as f:
                            data = f.readlines()

                        p_ = path.join(sourcedir, path.dirname(relpath), target)
                        m_patched = path.abspath(p_)
                        p_ = path.join(dstdir, path.dirname(relpath))
                        m_patched = path.relpath(m_patched, p_)

                        data[lineno - 1] = data[lineno - 1].replace(target, m_patched)

                        with open(path.join(dstdir, relpath), "w") as f:
                            f.write(''.join(data))

def namespace_ref(doc_dir, path_, r):
    """
    Add repository identifier to every label/reference, e.g:
    .. _spi_engine:         -> .. _hdl:spi_engine:

    Pending xfer are patched internally (transforms/aggregate.py@namespace_pending_xfer)
    """
    # Sphinx formats
    # 1. Prefixes references with repo name to create namespace
    # Patch ^.. _str:$         into .. _{r}+str:
    cwd = path.join(doc_dir, path_)
    patch_cmd = """\
    find . -type f -name '*.rst' -exec sed -i -E \
        "s/^([ \t]*.. _)([^:]+)(:)\\$/\\1{r}:\\2\\3/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

    # MystParser formats
    # https://myst-parser.readthedocs.io/en/latest/syntax/cross-referencing.html

    # Prefixes references with repo name to create namespace

    # 1. Patch (target)= explicit annotations -> ({r}+target)=
    patch_cmd = """\
    find . -type f -name '*.md' -exec sed -i -E \
        "s/^\\(([^)]+)\\)=/\\({r}+\\1\\)=/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

    # 2. Patch {#str}          into {#{r}+str}
    #          {#str .class}   into {#{r}+str .class}
    patch_cmd = """\
    find . -type f -name '*.md' -exec sed -i -E \
        "s/\\{{#([^ }}]+)/{{#{r}+\\1/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

    # 4. Patch :name:         into :name: {r}+target
    patch_cmd = """\
    find . -type f -name '*.md' -exec sed -i -E \
        "s/^:name:[ \\t]+([^ \\t]+)/:name: {r}+\\1/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

def _patch_index(toc_file, repo):
    with open(toc_file, "r") as f:
        data = f.readlines()
        if ".. toctree::\n" not in data:
            return
        data_ = data.copy()

        toctrees = []
        while ".. toctree::\n" in data:
            data = data[data.index(".. toctree::\n")+1:]
            toctrees.append([[], [], False])

            for i in range(0, len(data)):
                if data[i] != '\n' and not data[i].rstrip().startswith('   '):
                    break
                elif data[i].startswith('   :'):
                    # Ignore maxdepth to generate proper table of contents
                    if not data[i].startswith('   :maxdepth:'):
                        toctrees[-1][0].append(data[i])
                    if data[i].startswith('   :caption:'):
                        toctrees[-1][2] = True
                elif data[i][0:3] == '   ' and data[i][0:4] != '   :':
                    pos = data[i].find('<')
                    if pos == -1:
                        str_ = f"   {repo}/{data[i][3:]}"
                    else:
                        str_ = f"   {data[i][:pos+1]}{repo}/{data[i][pos+1:]}"
                    toctrees[-1][1].append(str_)
                    data[i] = str_

        # Remove empty toctrees
        to_remove = []
        for t in toctrees:
            if len(t[1]) == 0:
                to_remove.append(t)
        for t in to_remove:
            toctrees.remove(t)

    # Add orphan flag to indexes, since toctree is expanded at /index.rst
    with open(toc_file, 'w') as f:
        f.write(':orphan:\n\n')
        for line in data_:
            f.write(line)

    return toctrees

def _len(t):
    return -4 if t.endswith('.rst') else -3

def patch_index(doc, tocs, index_file):
    toctrees = []
    orphan_toc = {}

    for t in tocs:
        to_remove = []
        for e in tocs[t]:
            for t_ in doc['entry-point']:
                if e in t_['files']:
                    to_remove.append(e)
        for r in to_remove:
            tocs[t].remove(r)

    toctrees.append([])
    for t in doc['entry-point']:
        if t['caption'] is None:
            toc_ = [[], [], False]
        else:
            toc_ = [[f"   :caption: {t['caption']}\n"], [], True]
        toc_[1] = [f"   {t_[:_len(t_)]}\n" for t_ in t['files']]
        toctrees[-1].append(toc_)

    for k in tocs:
        toctrees.append([])
        # may be custom-pages
        if k in doc['config']:
            r = doc['config'][k]['repository']
        else:
            r = k
        for k_ in tocs[k]:
            if f"{k}{SEP}index.rst" == k_:
                toctrees[-1] += _patch_index(path.join(path.dirname(index_file), k, "index.rst"), k)
                if not toctrees[-1][0][2]:
                    toctrees[-1][0][0].append(f"   :caption: {repos[r]['name']}\n")
                    toctrees[-1][0][2] = True
            else:
                # Fallback, just add somewhere
                if k not in orphan_toc:
                    orphan_toc[k] = []
                orphan_toc[k].append(f"   {k_[:_len(k_)]}\n")
        if k in orphan_toc:
            toctrees[-1] += [[[], orphan_toc[k], False]]

    data = []

    resolve_glob(toctrees, index_file)

    for t in toctrees:
        first = True

        for options, docs, has_caption in t:
            if len(docs) == 0:
                continue

            data.append(".. toctree::\n")
            if not has_caption:
                if first:
                    first = False
            data.extend(options)
            data.append('\n')
            data.extend(docs)
            data.append('\n')

    index = doc['project'] + '\n'
    index += '"'*len(doc['project']) + '\n'
    index += ''.join(data)
    with open(index_file, "w") as f:
        f.write(index)


def resolve_glob(toctrees, index_file):
    """
    Expand glob rules, then remove entries already included in other toctrees.
    """
    dir_name = path.dirname(index_file)

    # Expand globs
    for t in toctrees:
        for t_ in t:
            if '   :glob:\n' in t_[0]:
                t_[0].remove('   :glob:\n')
                n_docs = []
                for d in t_[1]:
                    d1 = path.join(dir_name, d.strip()+'.rst')
                    d2 = path.join(dir_name, d.strip()+'.md')
                    d1_ = ['   '+path.relpath(d__, dir_name)[:-4]+'\n' for d__ in glob(d1)]
                    d2_ = ['   '+path.relpath(d__, dir_name)[:-3]+'\n' for d__ in glob(d2)]
                    n_docs.extend(d1_)
                    n_docs.extend(d2_)
                t_[1] = n_docs

    # Remove duplicated entries
    f_ = set()
    for t in toctrees:
        for _, docs, _ in t:
            for d in docs:
                to_remove = []
                if d in f_:
                    to_remove.append(d)
                for d__ in to_remove:
                    docs.remove(d__)
            f_.update(docs)


def prepare_doc(doc, repos_dir, doc_dir, drop_ext):
    if path.isdir(doc_dir):
        pr.run(f"rm -r {doc_dir}")
    mkdir(doc_dir)

    # Some repos prefer rst2pdf, but this cli uses weasyprint
    exclude_extensions = ["rst2pdf.pdfbuilder", "ext_pyadi_jif"]

    index_file = path.join(doc_dir, 'index.rst')
    index = doc['project'] + '\n'
    index += '"'*len(doc['project']) + '\n'
    with open(index_file, "w") as f:
        f.write(index)

    # Extract filenames from explicit toctrees
    entry_points = []
    for t in doc['entry-point']:
        entry_points.extend(t['files'])
    entry_points = [e[:_len(e)] for e in entry_points]

    missing_ext = []
    sys_path_og = list(sys.path)
    sys_path_ = set()
    for path_ in doc['include']:
        r = doc['config'][path_]['repository'] if doc['config'][path_]['repository'] else path_
        if r not in repos:
            click.echo(f"Unknown repo '{r}', skipped")
            continue

        sourcedir = path.join(repos_dir, path_, repos[r]['pathname'])
        dstdir = path.join(doc_dir, path_)
        not_valid, builddir = get_sphinx_dirs(sourcedir)
        if not_valid:
            continue
        doc['sourcedir'][path_] = sourcedir
        doc['builddir'][path_] = builddir
        if not path.isdir(dstdir):
            mkdir(dstdir)

        # Get configs
        finder = importlib.machinery.PathFinder
        # Needs to change directory in order to resolve sys.path.insert correctly.
        cwd_ = getcwd()
        chdir(sourcedir)
        spec = importlib.util.spec_from_file_location("sphinx_conf", path.join(sourcedir, "conf.py"))
        __c = importlib.util.module_from_spec(spec)
        sys.modules["sphinx_conf"] = __c
        spec.loader.exec_module(__c)
        _c = []
        if hasattr(__c, 'extensions'):
            for ext in __c.extensions:
                ext_miss = False
                if ext in exclude_extensions:
                    continue
                try:
                    if hasattr(__c, 'sys'):
                        if finder.find_spec(ext, __c.sys.path):
                            pass
                        elif importlib.util.find_spec(ext):
                            pass
                        else:
                            ext_miss = True
                    else:
                        if not importlib.util.find_spec(ext):
                            ext_miss = True
                except ModuleNotFoundError:
                    ext_miss = True
                if ext_miss:
                    missing_ext.append((path_, ext))
                    if not drop_ext:
                        _c.append(ext)
                else:
                    _c.append(ext)

            doc['extensions'].update(_c)
        doc['extensions'].add('sphinx.ext.intersphinx')
        if hasattr(__c, 'interref_repos'):
            doc['interref_repos'].update(__c.interref_repos)
        doc['interref_repos'].add(r)
        if hasattr(__c, 'myst_enable_extensions'):
            doc['sphinx-conf']['myst_enable_extensions'].extend(__c.myst_enable_extensions)

        # Get sys_paths inserted and restore
        sys_path_.update([p for p in sys.path if p not in sys_path_og])
        # sourcedir : /path/to/hdl/docs
        # dstdir : doc/hdl
        for d in doc['include'][path_]:
            d__ = path.abspath(path.join(sourcedir, d))
            if path.isfile(d__) or path.isdir(d__):
                pr.run(f"cp -r --parents {d} {dstdir}", sourcedir)
            else:
                click.echo(f"{path_}: source file/dir '{d}' does not exist, skipped.")

        # Infeer toctree entries
        toc_resolve = []
        for d in doc['include'][path_]:
            if path.isdir(d):
                index_ = path.join(d, 'index.rst')
                if path.isfile(index_):
                    d = index_
                else:
                    click.echo(f"{path_}: source dir '{d}' does not contain index.rst, "
                               "won't try to resolve toctree for this folder.")
                    continue
            elif not path.isfile(d):
                continue

            d = d[:_len(d)]
            toc_resolve.append(d)

        def is_orphan_or_explicit_entry(d):
            if path.join(path_, d) in entry_points:
                return True
            with open(d+".rst", "r") as f:
                if f.readline()[:-1].strip() == ":orphan:":
                    # Handle sphinx trick for sidebar "volumes"
                    if d.count(SEP) == 1:
                        also_include.append("index.rst")
                    return True
            return False

        i = 1
        also_include = []
        for d in toc_resolve:
            d_ = d.split(SEP)
            found = is_orphan_or_explicit_entry(d)

            while not found:
                d_right = SEP.join(d_[-i:])
                d_left = SEP.join(d_[:-i])
                if d_left == '':
                    d_left = '.'
                rst_f = []
                for f in listdir(d_left):
                    if path.isfile(path.join(d_left, f)) and f.endswith('.rst'):
                        rst_f.append(path.join(d_left, f))

                for f in rst_f:
                    if found:
                        break

                    if SEP.join(d_) == f[:_len(f)]:
                        # skip self
                        continue

                    data = open(f, "r").readlines()
                    while '.. toctree::\n' in data:
                        if found:
                            break

                        data = data[data.index('.. toctree::\n')+1:]
                        for j in range(0, len(data)):
                            if data[j].strip('\n') == f"   {d_right}" or f"<{d_right}>" in data[j]:
                                also_include.append(f)
                                found = True
                                break
                            elif data[j].startswith('   ') and '*' in data[j]:
                                # Try glob rules like */index
                                # the/path/to/page
                                # at the/path/to/index -> *
                                # at the/path/index -> */page or */*
                                # at the/index -> path/*/page or */*/page or */to/page or */*/*
                                # at index -> the/path/*/page or the/*/*/page or ...
                                s1 = data[j].strip().split('/')
                                s2 = d_right.split('/')
                                if len(s1) == len(s2):
                                    found = True
                                    for s1_, s2_ in zip(s1, s2):
                                        if s1_ != s2_ and s1_ != '*':
                                            found = False
                                            break
                                    if found:
                                        also_include.append(f)
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
                    d_ = also_include[-1][:_len(also_include[-1])].split(SEP)
                    if d_[0] == '.':
                        d_.pop(0)

                    if len(d_) == 1 and d_[0] == "index":
                        # Reached main index
                        break

                    i = 1
                    found = is_orphan_or_explicit_entry(SEP.join(d_))

        chdir(cwd_)
        for f_ in also_include:
            pr.run(f"cp --parents {f_} {dstdir}", sourcedir)

        get_includes(sourcedir, dstdir, doc)
        namespace_ref(doc_dir, path_, r)

    if len(missing_ext) > 0:
        ext = defaultdict(list)
        [ext[r].append(ext_) for r, ext_ in missing_ext]
        click.echo(f"Some inferred extensions are {FAIL}not installed{NC}: "
                   f"{dict(ext)}")
        if not drop_ext:
            click.echo("If they are not necessary, use "
                       f"{BLUE}--drop-missing-extensions{NC} to remove them.")
            sys.exit(1)
        else:
            click.echo("And will not be added to the configuration file.")

    # Copy over custom pages
    for c in doc['custom']:
        if path.isfile(c) or path.isdir(c):
            pr.run(f"cp -r --parents {c} {doc_dir}", repos_dir)
        else:
            click.echo(f"custom source file/dir '{c}' does not exist, skipped.")

    conf_file = path.join(doc_dir, 'conf.py')
    config_f = template_config

    e_ = ''.join([f"\n    '{e}'," for e in doc['extensions']]) + '\n'
    config_f = config_f.replace("$extensions$", e_)

    sys_path_insert = ""
    for sp in sys_path_:
        sys_path_insert += f"sys_path.insert(0, '{sp}')\n"
    config_f = config_f.replace("$sys_path_insert$", sys_path_insert)

    # Add local alternative inventory
    # Allows to edit the set of repos and test locally and then publish together,
    # trying the local inventory file first, to check references before publication
    str_inter= ""
    for interref in doc['interref_repos']:
        url = remote_doc + interref
        str_inter += f"    '{interref}':\n"
        str_inter += f"        ('{url}',"
        if interref in doc['builddir']:
            url = path.abspath(path.join(doc['builddir'][interref], "html", "objects.inv"))
            str_inter += f"\n         ('{url}', None)),\n"
        else:
            str_inter += " None),\n"
    config_f = config_f.replace("$intersphinx_mapping$", str_inter)

    config_f = config_f.replace("$project$", doc['project'])
    config_f = config_f.replace("$description$", doc['description'])

    e_ = ''.join([f"\n    '{e}'," for e in doc['sphinx-conf']['myst_enable_extensions']]) + '\n'
    config_f = config_f.replace("$myst_enable_extensions$", e_)
    with open(conf_file, "w") as f:
        f.write(config_f)

    # First run, parse warnings
    chdir(doc_dir)
    warnfile = path.join('..', 'warnings.txt')
    statusfile = path.join('..', 'status.txt')
    warning = open(warnfile, "w")
    status = open(statusfile, "w")
    builddir = path.join("..", "build", "html_pre")
    doctreedir = path.join(builddir, ".doctrees")

    # Build with html to build orphanaged docs
    app = Sphinx('.', '.',  builddir, doctreedir, "html",
                 warning=warning, status=status, verbosity=1,
                 parallel=1 if no_parallel else cpu_count())
    app.build()
    chdir(cwd_)


def parse_warnings(doc_dir):
    warnfile = path.join(doc_dir, '..', 'warnings.txt')

    re_orphan = r"^(.*?): WARNING: document isn't included in any toctree"
    re_ref_ref = r"^(.*?):(\d+): .* '(.*)' \[ref\.ref\]"
    re_ref_doc = r"^(.*?):(\d+): .* '(.*)' \[ref\.doc\]"
    re_toctree = r"^(.*?):(\d+): .* '(.*)' \[toc\.not_readable\]"
    re_image = r"^(.*?):: .* (.*) \[image\.not_readable\]"
    re_include0 = r"^(.*?):(\d+): CRITICAL: Problems with \"include\" directive path:"
    re_include1 = r"^InputError: \[Errno 2\] .* '(.*)'\. \[docutils\]"
    re_toc_glob = r"^(.*?):(\d+): WARNING: toctree glob pattern '(.*)' didn't match any documents"
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

        m = re.match(re_ref_doc, e)
        if m:
            sphinx_warnings.ref_doc.append([m.group(1), m.group(2), m.group(3)])
            continue

        m = re.match(re_toctree, e)
        if m:
            sphinx_warnings.toc_not_readable.append([m.group(1), m.group(2), m.group(3)])
            continue

        m = re.match(re_toc_glob, e)
        if m:
            sphinx_warnings.toc_glob.append([m.group(1), m.group(2), m.group(3)])
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


def parse_status(doc_dir):
    statusfile = path.join(doc_dir, '..', 'status.txt')

    re_images = r"^copying images\.\.\.\s+\[\s+?\d+%\]\s(.*)$"
    status = open(statusfile, "r")
    for e in status:
        e = e.replace("[33m", "").replace("[39;49;00m", "").replace("[01m", "")

        m = re.match(re_images, e)
        if m:
            repo = m.group(1)[:m.group(1).index('/')]
            file = m.group(1)[m.group(1).index('/')+1:]
            sphinx_statuses.images.append([repo, file])
            continue


suppress_warnings = """
suppress_warnings = [
    'app.add_node',
    'app.add_directive',
    'app.add_role',
    'app.add_generic_role',
]
"""


def post_prepare_doc(doc_dir):
    """
    Due to improper sphinx globals
    """
    with open(path.join(doc_dir, 'conf.py'), "a") as f:
        f.write(suppress_warnings)


def patch_doc(doc, repos_dir, doc_dir, git_lfs, sphinx_builder):
    """
    Patches warnings obtained from the first run.

    Sphinx warning line number generally point to the beginning of the
    paragraph/block/directive, therefore, it is necessary to do a
    loop looking for the exact match and have a little of faith.
    """

    # Orphan pages
    # Add to root index
    tocs = {}
    for e in sphinx_warnings.orphan:
        p = path.relpath(e[0], doc_dir).split(SEP)
        if p[0] not in tocs:
            tocs[p[0]] = []
        tocs[p[0]].append(SEP.join(p))

    # Grab missing images
    for e in sphinx_warnings.image_not_readable:
        # Nothing to do for now, since get_includes should have solved all already.
        continue

    # Resolve git-lfs artifacts
    if git_lfs:
        for s in sphinx_statuses.images:
            r = doc['config'][s[0]]['repository'] if doc['config'][s[0]]['repository'] else s[0]
            lfs_f_s=path.join(repos[r]['pathname'], s[1])
            path_=path.join(repos_dir, s[0], lfs_f_s)
            if get_lfs_sha(path_):
                subprocess.run(f"git lfs pull -I {lfs_f_s}",
                               shell=True, cwd=path.join(repos_dir, s[0]))
                copy2(path_, path.join(doc_dir, s[0], s[1]))

    # Update include paths
    for e in sphinx_warnings.include:
        p = path.relpath(e[0], doc_dir).split(SEP)
        r = p[0]
        p = SEP.join(p[1:])
        idx = int(e[1])-1
        p_ = path.join(doc_dir, r, p)

        with open(p_, "r") as f:
            data = f.readlines()
        inc_file = data[idx].replace(".. include::", "").strip()
        abs_inc_file = path.abspath(path.join(repos_dir, r, doc['sourcedir'][r], path.dirname(p), inc_file))
        data[idx] = data[idx].replace(inc_file, path.relpath(abs_inc_file, path.dirname(p_)))
        with open(p_, "w") as f:
            f.write(''.join(data))

    # Remove from toctree
    # lineno points to the toctree directive, not the exact linenumber
    toc_ = {}
    for src, lineno, doc_ in (sphinx_warnings.toc_not_readable + sphinx_warnings.toc_glob):
        src = path.relpath(src, doc_dir)
        if '*' not in doc_:
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
                d_ = d[i].strip()
                if '<' in d_:
                    d_ = d_[d_.index('<')+1:-1]
                if d_.startswith('./'):
                    d_ = d_[2:]
                for doc_ in toc_[src][lineno]:
                    if d_ == doc_:
                        data_filter.append(d[i])

        for d in data_filter:
            data.remove(d)
        with open(path.join(doc_dir, src), "w") as f:
            f.write(''.join(data))

    index_file = path.join(doc_dir, 'index.rst')
    patch_index(doc, tocs, index_file)

    # Second run
    warnfile = 'warnings_patched.txt'
    warning = open(warnfile, "w")
    builddir = path.join("build", "html")
    doctreedir = path.join(builddir, "doctrees")
    app = Sphinx(doc_dir, doc_dir,  builddir, doctreedir, sphinx_builder,
                 warning=warning)
    app.build()
    with open(warnfile, "r") as f:
        click.echo(f.read())


def gen_pdf(index_file):
    # TODO consider replacing with
    # flatpak run org.chromium.Chromium --print-to-pdf=/home/me/output.pdf "file:///home/me/pdf/build/html/index.html" --headless -no-pdf-header-footer
    # + paged.js
    # Drawbacks: needs to detect user chromium and, if flatpak, not all paths are in the container (e.g. /tmp).
    from weasyprint import HTML, CSS
    from weasyprint.text.fonts import FontConfiguration
    from .aux_print import sanitize_singlehtml

    html_ = sanitize_singlehtml(index_file)

    click.echo("preparing pdf styles...")

    font_config = FontConfiguration()
    src_dir = path.abspath(path.join(path.dirname(__file__), pardir, pardir))
    harmonic = path.join('adi_doctools', 'theme', 'harmonic')
    base_url = path.dirname(index_file)
    css = CSS(path.join(src_dir, harmonic, 'static_common', 'app.min.css'),
              font_config=font_config, base_url=(path.join(base_url, '_static')))
    css_extra = CSS(path.join(src_dir, harmonic, 'style', 'weasyprint.css'),
                    font_config=font_config)

    click.echo("rendering pdf content...")
    html = HTML(string=html_, base_url=base_url)

    document = html.render(stylesheets=[css, css_extra])

    click.echo("writing pdf...")
    document.write_pdf(path.abspath(path.join(path.dirname(index_file), '..', 'output.pdf')))


def organize_include(doc):
    include = {}
    for i in doc['include']:
        i_ = i.split(SEP)
        if i_[0] not in include:
            include[i_[0]] = []
        include[i_[0]].append(SEP.join(i_[1:]))
    doc['include'] = include


@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=False),
    default='.',
    required=True,
    help="Path to host custom doc, contain the repositories and doc (workdir)."
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
    '--open',
    '-x',
    'open_',
    is_flag=True,
    default=False,
    help="Open after generation (xdg-open)."
)
@click.option(
    '--builder',
    '-b',
    is_flag=False,
    default="html",
    help="Builder to use, valid options are: html, pdf (WeasyPrint) (default: html)."
)
@click.option(
    '--ssh',
    '-s',
    is_flag=True,
    default=False,
    help="Clone repositories with SSH instead of HTTPS."
)
@click.option(
    '--drop-missing-extensions',
    'drop_ext',
    is_flag=True,
    default=False,
    help="Drop extensions not installed, useful when the pages don't use them anyway."
)
def custom_doc(directory, extra, no_parallel_, open_, builder, ssh, drop_ext):
    """
    Creates an aggregated documentation out the repos
    in the doc.yaml file.
    The tool runs Sphinx twice to resolve interrepo-references,
    watching for warnings and patching accordingly.
    """
    global no_parallel
    no_parallel = no_parallel_
    directory = path.abspath(directory)

    doc_yaml = path.join(directory, 'doc.yaml')
    doc_dir = path.join(directory, 'sources')
    if not path.isdir(directory):
        mkdir(directory)
    if not path.isfile(doc_yaml):
        click.echo(f"Configuration file doc.yaml {FAIL}not found{NC}, created template at:\n"
                   f"{BLUE}{doc_yaml}{NC}\n"
                   "Update it with the desired sources and rerun the tool.")
        with open(doc_yaml, "w") as f:
            f.write(template_yaml)
        return

    with open(doc_yaml) as f:
        doc = yaml.safe_load(f)
        if 'include' not in doc:
            click.echo("Invalid yaml file, no 'include' entry.")
            return

    if builder not in ['html', 'pdf']:
        click.echo(f"Unknown builder '{builder}', valid options are: html, pdf.")

    if builder == 'pdf':
        if not importlib.util.find_spec("weasyprint"):
            click.echo("Package 'weasyprint' required for PDF generation is not "
                       "installed.")
            return
        sphinx_builder = 'singlehtml'
    else:
        sphinx_builder = 'html'

    git_lfs = is_git_lfs_installed()
    if not git_lfs:
        click.echo(f"{FAIL}git-lfs not installed{NC}, lfs pointers won't be resolved.")

    # Fill gaps
    organize_include(doc)
    if 'config' not in doc:
        doc['config'] = {}
    if 'sourcedir' not in doc:
        doc['sourcedir'] = {}
    if 'builddir' not in doc:
        doc['builddir'] = {}
    if 'entry-point' not in doc:
        doc['entry-point'] = {}
    if 'custom' not in doc:
        doc['custom'] = []
    for e in ['extensions', 'interref_repos']:
        if e not in doc:
            doc[e] = []
        doc[e] = set(doc[e])
    if 'project' not in doc:
        doc['project'] = 'Custom doc'
    if 'description' not in doc:
        doc['description'] = ''
    if 'sphinx-conf' not in doc:
        doc['sphinx-conf'] = {}
    if 'myst_enable_extensions' not in doc['sphinx-conf']:
        doc['sphinx-conf']['myst_enable_extensions'] = []
    for path_ in doc['include']:
        if path_ not in doc['config'] or doc['config'][path_] is None:
            doc['config'][path_] = {}
        doc['config'][path_] = {**default_config, **doc['config'][path_]}

    for k in doc['config']:
        repo = doc['config'][k]['repository']
        if repo:
            if not k.startswith(repo + '_'):
                click.echo(f"Label '{k}' does {FAIL}not{NC} start with '{repo}_' (repository + '_'), "
                           "this is required due to the cross-references.")
                return
        else:
            doc['config'][k]['repository'] = k

    missing_ext = []
    for ext in doc['extensions']:
        try:
            if not importlib.util.find_spec(ext):
                missing_ext.append(ext)
        except ModuleNotFoundError:
            missing_ext.append(ext)
    if len(missing_ext) > 0:
        click.echo(f"Missing requested extension(s): {missing_ext}")
        return

    p = []
    remote = lut['remote_https'] if not ssh else lut['remote_ssh']
    for path_ in doc['include']:
        r = doc['config'][path_]['repository'] if doc['config'][path_]['repository'] else path_
        cwd = path.join(directory, path_)
        if not path.isdir(cwd):
            git_cmd = ["git", "clone", remote.format(r), "--depth=1", "-b",
                       doc['config'][path_]['branch'], '--', cwd]
            pr.popen(git_cmd, p)
    if pr.wait(p) != 0:
        click.echo("Failed to clone one or more repositories (hint: --ssh flag).")

    environ["ADOC_CUSTOM_DOC"] = ""
    environ["ADOC_NO_COLLECTIONS"] = ""
    if builder == "pdf":
        environ["ADOC_MEDIA_PRINT"] = ""

    do_extra_steps(directory, doc)

    # Messing with WeasyPrint?
    # Comment the four lines below to skip Sphinx generation
    prepare_doc(doc, directory, doc_dir, drop_ext)
    parse_warnings(doc_dir)
    parse_status(doc_dir)
    post_prepare_doc(doc_dir)
    while True:
        # TODO here we could run n-times or until no warning is remaining (e.g. nested includes)
        patch_doc(doc, directory, doc_dir, git_lfs, sphinx_builder)
        break

    if builder == "pdf":
        singlehtml = path.join(directory, "build", "html", "index.html")
        gen_pdf(singlehtml)
        f__ = "output.pdf"
    else:
        f__ = f"html{SEP}index.html"

    click.echo(f"Done, {builder} documentation written to {directory}{SEP}build{SEP}{f__}")

    if open_:
        subprocess.call(f"xdg-open {directory}{SEP}build{SEP}{f__}", shell=True)
