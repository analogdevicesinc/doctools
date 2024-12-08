from typing import Tuple, List
from collections import defaultdict

from os import path, listdir, pardir, chdir, getcwd, mkdir
from os import environ
from io import StringIO
import importlib.util
import subprocess
import click
import yaml
import sys
import re

from sphinx.util.osutil import SEP
from sphinx.application import Sphinx

from ..lut import get_lut

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
    builddir = path.join(cwd, builddir_)
    sourcedir = path.join(cwd, sourcedir_)
    if not path.isdir(sourcedir):
        click.echo(click.style(f"Parsed {sourcedir} does not exist, skipped!",
                               fg='red'))
        return (True, '', '')

    return [False, builddir, sourcedir]


def do_extra_steps(repo_dir, doc):
    global no_parallel
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


class SphinxWarnings:
    orphan: List = [] # srcfile
    ref_ref: List = [] # docname lineno label
    ref_doc: List = [] # docname lineno label
    toc_not_readable: List = [] # docname lineno srcfile
    image_not_readable: List = [] # docname srcfile
    include: List = [] # docname lineno srcfile

sphinx_warnings = SphinxWarnings()

template_config = """
from os import path
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

template_yaml = """\
# Custom doc builder template
# ---------------------------

# Add dirs and files to include per repo
doc:
  hdl:
    - user_guide
    - projects/ad3552r_evb
    - projects/ad4110
    - library/spi_engine

  no-OS:
    - contributing.rst
    - projects/eval-adis1657x.rst

  documentation:
    - linux/kuiper

# Per repo configuration
# extra: do steps that require extra software (e.g. vendor sdk)
# branch: clone from a specific branch, overwrites "main"
config:
    hdl:
      branch: "my-branch"
    no-OS:
      extra: true

# Include extra extensions
extensions:
    - sphinx.ext.duration

project: "Custom user guide"
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
    .. _spi_engine:         -> .. _hdl+spi_engine:
    :ref:`spi_engine`       -> :ref:`hdl+spi_engine`
    :ref:`Alt <spi_engine>` -> :ref:`Alt <hdl+spi_engine>`

    For external references, convert to local also, e.g.
    :external+hdl:`spi_engine`       -> :ref:`hdl+spi_engine`
    :external+hdl:`Alt <spi_engine>` -> :ref:`Alt <hdl+spi_engine>`

    After the first sphinx run, the unresolved references are converted (back)
    into external refereces.
    """
    # Prefixes references with repo name to create namespace
    # 1. Patch :ref:`str`         into :ref:`{r}+str`
    # 2. Patch :ref:`Title <str>` into :ref:`Title <{r}+str>`
    # 3. Patch ^.. _str:$         into .. _{r}+str:
    cwd = path.join(doc_dir, r)
    patch_cmd = """\
    find . -type f -exec sed -i -E \
        "s/(\s|^|\()(:ref:\\`)([^<>:]+)(\\`)/\\1\\2{r}+\\3\\4/g" {{}} \\;
    find . -type f -exec sed -i -E \
        "s/(\s|^|\()(:ref:\\`)([^<]+)( <)([^:>]+)(>)/\\1\\2\\3\\4{r}+\\5\\6/g" {{}} \\;
    find . -type f -exec sed -i -E \
        "s/^(.. _)([^:]+)(:)\\$/\\1{r}+\\2\\3/g" {{}} \\;\
    """.format(r=r)
    pr.run(patch_cmd, cwd)

    # Convert external references (ref&doc) into local
    # 1. Patch :external+r:ref:`str`         into :ref:`r+str`
    #          :external+r:ref:`Title <str>` into :ref:`Title <r+str>`
    # 2. Patch :external+r:doc:`str`         into :doc:`r/str`
    #          :external+r:doc:`Title <str>` into :doc:`Title <r/str>`
    patch_cmd = """\
    find . -type f -exec sed -i -E \
        -e "s/(\s|^|\()(:external\+)([^:]+):ref:\\`([^<]+)( <)([^:>]+)(>)/\\1:ref:\\`\\4\\5\\3+\\6\\7/g" \
        -e "s/(\s|^|\()(:external\+)([^:]+):doc:\\`([^<]+)( <)([^:>]+)(>)/\\1:doc:\\`\\4\\5\\3\/\\6\\7/g" {} \\;\
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
            toctrees.append([[], [], False])

            for i in range(0, len(data)):
                if data[i] != '\n' and not data[i].startswith('   '):
                    break
                elif data[i].startswith('   :'):
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

    # Add orphan flag to indexes, since toctree is expanded at /index.rst
    with open(toc_file, 'w') as f:
        f.write(':orphan:\n\n')
        for line in data_:
            f.write(line)

    return toctrees


def patch_index(doc, tocs, index_file):
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
            toctrees[k] += [[[], orphan_toc[k], False]]

    data = []
    for k in toctrees:
        first = True

        for options, docs, has_caption in toctrees[k]:
            if len(docs) == 0:
                continue

            data.append(".. toctree::\n")
            if not has_caption:
                if first:
                    data.append(f"   :caption: {repos[k]['name']}\n")
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


def prepare_doc(doc, repos_dir, doc_dir):
    if path.isdir(doc_dir):
        pr.run(f"rm -r {doc_dir}")
    mkdir(doc_dir)

    index_file = path.join(doc_dir, 'index.rst')
    index = doc['project'] + '\n'
    index += '"'*len(doc['project']) + '\n'
    with open(index_file, "w") as f:
        f.write(index)

    missing_ext = []
    for r in doc['doc']:
        src_doc_dir = path.join(repos_dir, r, repos[r]['doc_folder'])
        dst_doc_dir = path.join(doc_dir, r)
        not_valid, _, src_doc_dic = get_sphinx_dirs(src_doc_dir)
        if not_valid:
            continue
        doc['sourcedir'][r] = src_doc_dir
        if not path.isdir(dst_doc_dir):
            mkdir(dst_doc_dir)

        # Get configs
        spec = importlib.util.spec_from_file_location("sphinx_conf", path.join(src_doc_dir, "conf.py"))
        __c = importlib.util.module_from_spec(spec)
        sys.modules["sphinx_conf"] = __c
        spec.loader.exec_module(__c)
        if hasattr(__c, 'extensions'):
            for ext in __c.extensions:
                if not importlib.util.find_spec(ext):
                    missing_ext.append((r, ext))
            doc['extensions'].update(__c.extensions)
        if hasattr(__c, 'interref_repos'):
            doc['interref_repos'].update(__c.interref_repos)
        doc['interref_repos'].add(r)

        # src_doc_dir : /path/to/hdl/docs
        # dst_doc_dir : doc/hdl
        for d in doc['doc'][r]:
            d__ = path.abspath(path.join(src_doc_dir, d))
            if path.isfile(d__) or path.isdir(d__):
                pr.run(f"cp -r --parents {d} {dst_doc_dir}", src_doc_dir)
            else:
                click.echo(f"{r}: source file/dir '{d}' does not exist, skipped.")

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
            elif not path.isfile(d):
                    continue

            d = d[:-4]
            toc_resolve.append(d)

        def is_orphan(d):
            with open(d+".rst", "r") as f:
                if f.readline()[:-1].strip() == ":orphan:":
                    # Handle sphinx trick for sidebar "volumes"
                    if d.count(SEP) == 1:
                        also_include.append(f"index.rst")
                    return True
            return False

        i = 1
        also_include = []
        for d in toc_resolve:
            d_ = d.split(SEP)
            rst_f = []
            found = is_orphan(d)

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
                    found = is_orphan(SEP.join(d_))

        chdir(cwd_)
        for f_ in also_include:
            pr.run(f"cp --parents {f_} {dst_doc_dir}", src_doc_dir)

        get_includes(src_doc_dir, dst_doc_dir, doc)
        namespace_ref(doc_dir, r)

    if len(missing_ext) > 0:
        ext = defaultdict(list)
        [ext[r].append(ext_) for r, ext_ in missing_ext]
        click.echo(f"Missing inferred extensions: {dict(ext)}")
        sys.exit()

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
    builddir = "html"
    doctreedir = path.join(builddir, "doctrees")

    # Build with html to build orphanaged docs
    app = Sphinx('.', '.',  builddir, doctreedir, "html",
                 warning=warning)

    app.build()
    chdir(cwd_)

def parse_warnings(doc_dir):
    warnfile = path.join(doc_dir, '..', 'warnings.txt')

    re_orphan   = r"^(.*?): WARNING: document isn't included in any toctree"
    re_ref_ref  = r"^(.*?):(\d+): .* '(.*)' \[ref\.ref\]"
    re_ref_doc  = r"^(.*?):(\d+): .* '(.*)' \[ref\.doc\]"
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

        m = re.match(re_ref_doc, e)
        if m:
            sphinx_warnings.ref_doc.append([m.group(1), m.group(2), m.group(3)])
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

def patch_doc(doc, repos_dir, doc_dir, doc_patch_dir, sphinx_builder):
    """
    Patches warnings obtained from the first run.

    Sphinx warning line number generally point to the beginning of the
    paragraph/block/directive, therefore, it is necessary to do a
    loop looking for the exact match and have a little of faith.
    """
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
    for src, i, label in sphinx_warnings.ref_ref:
        i = int(i)-1
        r = path.relpath(src, doc_dir).split(SEP)[0]
        p = path.join(doc_patch_dir, path.relpath(src, doc_dir))

        pattern1 = r'(^|\s|\():ref:`([^+]+)\+([^`]+)`'
        replacement1 = r'\1:external+\2:ref:`\3`'
        pattern2 = r'(^|\s|\():ref:`([^`]+)<([^+]+)\+([^>]+)>`'
        replacement2 = r'\1:external+\3:ref:`\2<\4>`'
        with open(p, "r") as f:
            data = f.readlines()
        while i < len(data) and label not in data[i]:
            i += 1
        if i == len(data):
            click.echo(f"{src}: Failed to find '{label}'. "
                       "Nested parse limitation?")
            continue
        data[i] = re.sub(pattern2, replacement2, data[i])
        data[i] = re.sub(pattern1, replacement1, data[i])
        with open(p, "w") as f:
            f.write(''.join(data))

    # Swap with explicit external documents
    pattern3 = r'(^|\s|\():doc:`([^/]+)\/([^`]+)`'
    replacement3 = r'\1:external+\2:doc:`\3`'
    pattern4 = r'(^|\s|\():doc:`([^<]+)<([^/]+)\/([^>]+)>`'
    replacement4 = r'\1:external+\3:doc:`\2<\4>`'
    for src, i, label in sphinx_warnings.ref_doc:
        i = int(i)-1
        r = path.relpath(src, doc_dir).split(SEP)[0]
        p = path.join(doc_patch_dir, path.relpath(src, doc_dir))

        with open(p, "r") as f:
            data = f.readlines()
        while i < len(data) and label not in data[i]:
            i += 1
        if i == len(data):
            click.echo(f"{src}: Failed to find '{label}'. "
                       "Nested parse limitation?")
            continue
        data[i] = re.sub(pattern4, replacement4, data[i])
        data[i] = re.sub(pattern3, replacement3, data[i])
        with open(p, "w") as f:
            f.write(''.join(data))

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
        abs_inc_file = path.abspath(path.join(repos_dir, r, doc['sourcedir'][r], path.dirname(p), inc_file))
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
    builddir = "html"
    doctreedir = path.join(builddir, "doctrees")
    app = Sphinx('.', '.',  builddir, doctreedir, sphinx_builder,
                 warning=warning)
    app.build()
    with open(warnfile, "r") as f:
        click.echo(f.read())
    chdir(cwd_)


def gen_pdf(index_file):
    from weasyprint import HTML, CSS
    from weasyprint.text.fonts import FontConfiguration
    from .aux_print import sanitize_singlehtml

    html_ = sanitize_singlehtml(index_file)

    click.echo("preparing pdf styles...")

    font_config = FontConfiguration()
    src_dir = path.abspath(path.join(path.dirname(__file__), pardir, pardir))
    cosmic = path.join('adi_doctools', 'theme', 'cosmic')
    # TODO create slimmer version just for print (maybe?)
    css = CSS(path.join(src_dir, cosmic, 'static', 'style.min.css'),
              font_config=font_config)
    css_extra = CSS(path.join(src_dir, cosmic, 'style', 'weasyprint.css'),
                    font_config=font_config)

    click.echo("rendering pdf content...")
    html = HTML(string=html_, base_url=path.dirname(index_file))

    document = html.render(stylesheets=[css, css_extra])

    click.echo("writing pdf...")
    document.write_pdf(path.abspath(path.join(path.dirname(index_file), '..', 'output.pdf')))

@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=False),
    default=None,
    required=True,
    help="Path to host custom doc, contain the repositories and doc (_build)."
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
    '--https',
    '-h',
    is_flag=True,
    default=False,
    help="Clone repositories with HTTPS instead of SSH."
)
def custom_doc(directory, extra, no_parallel_, open_, builder, https):
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
    doc_dir = path.join(directory, '_build_pre')
    doc_patch_dir = path.join(directory, '_build')
    if not path.isdir(directory):
        mkdir(directory)
    if not path.isfile(doc_yaml):
        click.echo("Configuration file doc.yaml not found, created template at:\n"
                   f"{doc_yaml}\n"
                   "Update it with the desired sources and rerun the tool.")
        with open(doc_yaml, "w") as f:
            f.write(template_yaml)
        return

    with open(doc_yaml) as f:
        doc = yaml.safe_load(f)
        if 'doc' not in doc:
            click.echo("Invalid yaml file, no 'doc' entry.")
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

    # Fill gaps
    if 'config' not in doc:
        doc['config'] = {}
    if 'sourcedir' not in doc:
        doc['sourcedir'] = {}
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

    missing_ext = []
    for ext in doc['extensions']:
        if not importlib.util.find_spec(ext):
            missing_ext.append(ext)
    if len(missing_ext) > 0:
        click.echo(f"Missing requested extension(s): {missing_ext}")
        return

    p = []
    remote = lut['remote_https'] if https else lut['remote_ssh']
    for r in doc['doc']:
        cwd = path.join(directory, r)
        if not path.isdir(cwd):
            git_cmd = ["git", "clone", remote.format(r), "--depth=1", "-b",
                       doc['config'][repo]['branch'], '--', cwd]
            pr.popen(git_cmd, p)
    if pr.wait(p) != 0:
        click.echo("Failed to clone one or more repositories (hint: --https flag).")

    if builder == "pdf":
        environ["ADOC_MEDIA_PRINT"] = ""

    do_extra_steps(directory, doc)

    # Messing with WeasyPrint?
    # Comment the three lines below to skip Sphinx generation
    prepare_doc(doc, directory, doc_dir)
    parse_warnings(doc_dir)
    patch_doc(doc, directory, doc_dir, doc_patch_dir, sphinx_builder)

    if builder == "pdf":
        singlehtml = path.join(doc_patch_dir, "html", "index.html")
        gen_pdf(singlehtml)
        f__ = "output.pdf"
    else:
        f__ = f"html{SEP}index.html"

    click.echo(f"Done, {builder} documentation written to {doc_patch_dir}{SEP}{f__}")

    if open_:
        subprocess.call(f"xdg-open {doc_patch_dir}{SEP}_build{SEP}{f__}", shell=True)
