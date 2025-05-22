from os import path, listdir, remove, mkdir
from os import pardir, killpg, getpgid
from os import environ, stat, utime
from os import chdir, getcwd
from shutil import copy2, which, move
import click
import importlib

from sphinx.application import Sphinx

from .aux_git import get_git_top_level, is_git_lfs_installed, get_lfs_sha

log = {
    'no_lfs': "File .gitattributes contains lfs rules, but git-lfs is not installed.",
    'lfs_skip_smudge': "GIT_LFS_SKIP_SMUDGE=1 is set, GET requests won't smudge files, only touching the source!",
    'no_conf_py': "File conf.py not found, is {} a docs folder?",
    'inv_f': "Could not find {}, check rollup output.",
    'inv_srcdir': "Could not find SOURCEDIR {}.",
    'no_selenium': "Package 'selenium' is not installed.",
    'rollup': "Couldn't find {}, ensure this a symbolic install.",
    'node': "Couldn't find the node executable, please install nodejs.",
    'node_alt': "And the node executable is not installed.",
    'node_': """Couldn't find {}, please install the node_modules at doctools repo root, e.g.:
    npm install rollup \\
        @rollup/plugin-terser \\
        sass \\
        --save-dev""",
    'comp': "Couldn't find the minified web files.",
    'no_node_modules': "The node_modules tools are not installed to generate them.",
    'with_node_modules': "node_modules tools are installed, run with the --dev --once flags to generate them.",
    'fetch': "Do you want to fetch from the release?",
    'builder': "Unknown builder '{}', valid options are: html, pdf.",
    'no_weasyprint': "Package 'weasyprint' required for PDF generation is not installed.",
}

# Hall of shame of poorly managed artifacts
unmanaged = []
# Avoid
first_run = True

theme_path = path.join('adi_doctools', 'theme', 'cosmic')
style_path = path.join(theme_path, 'style')
static_path = path.join(theme_path, 'static')

BLUE = '\033[94m'
FAIL = '\033[91m'
NC = '\033[0m'

@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=True),
    default='.',
    help="Path to the docs folder with the Makefile."
)
@click.option(
    '--port',
    '-p',
    is_flag=False,
    type=int,
    default=8000,
    help="Port to host the docs."
)
@click.option(
    '--dev',
    '-r',
    is_flag=True,
    default=False,
    help="Watch web source code (requires symbolic install)."
)
@click.option(
    '--selenium',
    is_flag=True,
    default=False,
    help="Use selenium/Firefox instead of pooling method (html builder only)."
)
@click.option(
    '--once',
    '-o',
    is_flag=True,
    default=False,
    help="Generate the build and exit."
)
@click.option(
    '--builder',
    '-b',
    is_flag=False,
    default="html",
    help="Builder to use, valid options are: html, pdf (WeasyPrint) (default: html)."
)
def serve(directory, port, dev, selenium, once, builder):
    """
    Watch the docs and source code to rebuild it on edit.
    Two html live update strategies are available:
    Pooling: The webpage pools timestamp changes on the .dev-pool file.
    Selenium: Page reloads through Firefox's API.
    """

    import glob
    import re
    import sched
    import time
    import threading
    import signal
    import http.server
    import socketserver
    import subprocess
    import sys

    global builddir

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

    if builder not in ['html', 'pdf']:
        click.echo(log['builder'].format(builder))
        return
    if builder == 'pdf':
        environ["ADOC_MEDIA_PRINT"] = ""
        if not importlib.util.find_spec("weasyprint"):
            click.echo(log['no_weasyprint'])
            return
        from weasyprint import HTML, CSS
        from weasyprint.text.fonts import FontConfiguration
        builder = 'singlehtml'

    source_files = {'app.umd.js', 'app.umd.js.map',
                    'app.min.css', 'app.min.css.map',
                    'extra.umd.js', 'extra.umd.js.map',
                    'extra.min.css', 'extra.min.css.map'}

    def signal_handler(sig, frame):
        if builder == 'html':
            click.echo("Shutting down server")
            with lock:
                http.shutdown()
                http.server_close()
        if dev:
            killpg(getpgid(rollup_p.pid), signal.SIGTERM)
            killpg(getpgid(sass_p.pid), signal.SIGTERM)
        click.echo("Terminated")
        sys.exit()

    def fetch_compiled(path_):
        req = path.join(path_, 'docs', 'requirements.txt')
        dist = path.join(path_, '.dist')
        file = "adi_doctools.tar.gz"

        f = open(req, 'r')
        for line in f:
            if 'adi-doctools' in line:
                break
        f.close()

        from urllib.request import urlretrieve
        from shutil import rmtree
        if not path.isdir(dist):
            mkdir(dist)
        urlretrieve(line, path.join(dist, file))
        subprocess.call(f"tar -xf {file}",
                        shell=True, cwd=dist)
        remove(path.join(dist, file))
        for d in listdir(dist):
            break
        for f in source_files:
            src = path.join(dist, d, static_path, f)
            dest = path.join(path_, static_path, f)
            copy2(src, dest)
        rmtree(dist)
        click.echo("Success fetching the pre-compiled files!")

    src_dir = path.abspath(path.join(path.dirname(__file__), pardir))
    par_dir = path.abspath(path.join(src_dir, pardir))
    rollup_bin = path.join(par_dir, 'node_modules', '.bin', 'rollup')
    rollup_conf = path.join(par_dir, 'ci', 'rollup.config.app.mjs')
    sass_bin = path.join(par_dir, 'node_modules', '.bin', 'sass')

    sass_conf_1 = path.join(style_path, 'app.bundle.scss') + ':' + path.join(static_path, 'app.min.css')
    sass_conf_2 = path.join(style_path, 'extra.bundle.scss') + ':' + path.join(static_path, 'extra.min.css')
    sass_conf = sass_conf_1 + ' ' +  sass_conf_2
    if dev:
        if which("node") is None:
            click.echo(log['node'])
            return
        if symbolic_assert(rollup_conf, log['rollup'].format(rollup_conf)):
            return
        if symbolic_assert(rollup_bin, log['node_'].format(rollup_bin)):
            return
    else:
        with_sources = True
        for s in source_files:
            comp_ = path.abspath(path.join(par_dir, static_path, s))
            if not path.isfile(comp_):
                with_sources = False

        if not with_sources:
            click.echo(log['comp'])
            if which("node") is None:
                click.echo(log['node_alt'])
            elif symbolic_assert(rollup_bin, log['no_node_modules']):
                pass
            else:
                click.echo(log['with_node_modules'])
                return
            if click.confirm(log['fetch']):
                if fetch_compiled(par_dir):
                    return
            else:
                return

    if directory is None:
        click.echo("Please provide a --directory.")
        return

    with_selenium = False
    if selenium and builder == 'html':
        if importlib.util.find_spec("selenium"):
            with_selenium = True
        else:
            click.echo(log['no_selenium'])
            return

    directory = path.abspath(directory)
    conf_py = path.join(directory, 'conf.py')
    if symbolic_assert(conf_py, log['no_conf_py']):
        return

    builddir_ = "_build"
    builddir = path.join(directory, builddir_, builder)
    doctreedir = path.join(builddir_, "doctrees")
    sourcedir = directory
    if dir_assert(sourcedir, log['inv_srcdir']):
        return

    types_lfs = []
    if git_top_level := get_git_top_level(directory):
        git_attr = path.join(git_top_level, ".gitattributes")
        if path.isfile(git_attr):
            with open(git_attr, "r") as f:
                for line in f:
                    line = line.strip()
                    if line and not line.startswith("#") and 'filter=lfs' in line:
                        match = re.match(r"\*\.([a-zA-Z0-9]+)", line)
                        if match:
                            types_lfs.append('.'+match.group(1))
            if len(types_lfs) > 0:
                if not is_git_lfs_installed():
                    click.echo(log['no_lfs'])
                    types_lfs = []
                elif ("GIT_LFS_SKIP_SMUDGE" in environ and
                      environ["GIT_LFS_SKIP_SMUDGE"] == "1"):
                    click.echo(f"{FAIL}{log['lfs_skip_smudge']}{NC}")

    # Define PDF generation
    def generate_toctree(bookmarks, indent=0):
        """
        Generate table of contents
        from: https://github.com/Kozea/WeasyPrint/issues/23#issuecomment-312447974
        """
        outline_str = ""
        for i, (label, (page, _, _), children, _) in enumerate(bookmarks, 1):
            outline_str += ('<p>%s %s <span class="page">%d</span></p>' % (
                ' ' * indent, label.lstrip('0123456789. ').rstrip('¶# '), page))
            outline_str += generate_toctree(children, indent + 2)
        return outline_str


    if builder == 'singlehtml':
        singlehtml_file = path.join(builddir, 'index.html')
        font_config = FontConfiguration()
        from .aux_print import sanitize_singlehtml

    def update_pdf():
        html_ = sanitize_singlehtml(singlehtml_file)

        click.echo("preparing pdf styles...")

        font_config = FontConfiguration()
        src_dir = path.abspath(path.join(path.dirname(__file__), pardir, pardir))
        css = CSS(path.join(src_dir, cosmic, 'static', 'app.min.css'),
                  font_config=font_config)
        css_extra = CSS(path.join(src_dir, cosmic, 'style', 'weasyprint.css'),
                        font_config=font_config)

        click.echo("rendering pdf content...")
        html = HTML(string=html_, base_url=path.dirname(singlehtml_file))

        document = html.render(stylesheets=[css, css_extra])

        click.echo("writing pdf...")
        document.write_pdf(path.join(builddir, '..', 'output.pdf'))

    if not with_selenium and builder == 'html':
        environ["ADOC_DEVPOOL"] = ""

    app = Sphinx(directory, directory,  builddir, doctreedir, builder)

    watch_file_src = {}
    watch_file_rst = {}
    if dev:
        source_files.add('icons.svg')
        w_files = []
        # Check if minified files exists, if not, run rollup once
        rollup_cache = True
        for f in source_files:
            if not path.isfile(f):
                rollup_cache = False
        if not rollup_cache:
            subprocess.call(f"{rollup_bin} -c {rollup_conf}",
                            shell=True, cwd=par_dir)
            subprocess.call(f"{sass_bin} --style compressed {sass_conf}",
                            shell=True, cwd=par_dir)
        for t in ['*.umd.js*', '*.min.css*']:
            f = glob.glob(path.join(src_dir, 'theme', 'cosmic', 'static', t))
            w_files.extend(f)
        for f in w_files:
            if symbolic_assert(f, log['inv_f']):
                return

        # Build doc the first time
        app.build()
        for f in w_files:
            watch_file_src[f] = stat(f).st_mtime
        if not once:
            # Run rollup and sass in watch mode
            cmd_rollup = f"{rollup_bin} -c {rollup_conf} --watch"
            cmd_sass = f"{sass_bin} --style compressed --watch {sass_conf}"
            rollup_p = subprocess.Popen(cmd_rollup, shell=True, cwd=par_dir,
                                        stdout=subprocess.DEVNULL)
            sass_p = subprocess.Popen(cmd_sass, shell=True, cwd=par_dir,
                                      stdout=subprocess.DEVNULL)
        elif builder == "singlehtml":
            update_pdf()
    else:
        # Build doc the first time
        app.build()
        if builder == "singlehtml":
            update_pdf()

    if once:
        return

    def get_source_lfs_file(path_, ext):
        """
        Check if _build binary file is a git lfs pointer,
        and if so, search and return the source file path.
        If any step fails, returns None
        """
        if sha := get_lfs_sha(path_):
            pattern = path.join(directory, '**', f'*{ext}')
            files = []
            for file_path in glob.glob(pattern, recursive=True):
                if '_build' not in path.normpath(file_path):
                    files.append(file_path)

            for file in files:
                try:
                    with open(file, 'rb') as f:
                        f.seek(54)
                        sha_ = f.read(64)
                        if sha == sha_:
                            return file
                except Exception as e:
                    pass

            return None
        else:
            return None

    builddir = path.join(directory, builddir_, builder)

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            global builddir
            super().__init__(*args, directory=builddir, **kwargs)

        def do_GET(self):
            for ext in types_lfs:
                if self.path.endswith(ext):
                    path_ = path.join(builddir, self.path[1:])

                    lfs_f = get_source_lfs_file(path_, ext)
                    if lfs_f is not None:
                        tmp_f = path.join(directory, builddir_, path.basename(lfs_f))
                        stat_ = stat(lfs_f)
                        lfs_f_ = path.relpath(lfs_f, git_top_level)
                        click.echo(f"git lfs smudging file {lfs_f_}")
                        subprocess.call(f"git lfs smudge < {path_} > {tmp_f}",
                                        shell=True, cwd=directory)
                        utime(tmp_f, (stat_.st_atime, stat_.st_mtime))
                        copy2(tmp_f, lfs_f)
                        move(tmp_f, path_)

            super().do_GET()

        def log_message(self, format, *args):
            return

    if builder == "html":
        try:
            http = socketserver.TCPServer(("", port), Handler)
            lock = threading.Lock()
            http_thread = threading.Thread(target=http.serve_forever)
            http_thread.daemon = True
            http_thread.start()
            click.echo(f"\n{BLUE}Running server on http://0.0.0.0:{port}{NC}\n")
        except Exception:
            click.echo(f"{FAIL}Could not start server on http://0.0.0.0:{port}{NC}")
            if dev:
                killpg(getpgid(rollup_p.pid), signal.SIGTERM)
                killpg(getpgid(sass_p.pid), signal.SIGTERM)
            return
    signal.signal(signal.SIGINT, signal_handler)

    dev_pool = path.join(builddir, '.dev-pool')

    def update_dev_pool():
        dev_f = open(dev_pool, 'w')
        dev_f.write(str(time.time()))
        dev_f.close()

    if with_selenium:
        from selenium import webdriver

        # Remove pooling method flag
        if path.isfile(dev_pool):
            remove(dev_pool)

        driver = webdriver.Firefox()

        driver.get(f"http://0.0.0.0:{port}")
    elif builder == "html":
        update_dev_pool()

    def get_doc_sources():
        types = ['*.rst', '*.md', '*.svg', '*.txt', '*.png', '*.jpg', '*.jpeg', '*.py']
        files = []
        ctime = []
        for typ in types:
            glob_ = path.join(sourcedir, typ)
            _files = glob.glob(glob_)
            __files = [path.abspath(f) for f in _files]
            files.extend(__files)
            for f in __files:
                ctime.append(stat(f).st_mtime)
        dirs = [d for d in listdir(sourcedir)
                if path.isdir(path.join(sourcedir, d))]
        if builddir_ in dirs:
            dirs.remove(builddir_)
        for d in dirs:
            for typ in types:
                glob_ = path.join(sourcedir, d, '**', typ)
                _files = glob.glob(glob_, recursive=True)
                __files = [path.abspath(f) for f in _files]
                for f in __files:
                    if not path.isfile(f):
                        continue
                    ctime_ = stat(f).st_mtime
                    ctime.append(ctime_)
                    files.append(f)
        return (files, ctime)


    def check_files(scheduler):
        global first_run
        update_sphinx = False
        update_page = False
        git_lfs_pull = []
        for file, ctime in zip(*get_doc_sources()):
            if file in watch_file_rst and ctime > watch_file_rst[file]:
                _, ext_= path.splitext(file)
                if ext_ in types_lfs and get_lfs_sha(file):
                    # User touched lfs symbolic link, probably wants to pull it
                    git_lfs_pull.append(file)

            if file not in watch_file_rst or ctime > watch_file_rst[file]:
                update_sphinx = True
                watch_file_rst[file] = ctime
                for u in unmanaged:
                    if u in file:
                        watch_file_rst[file] = sys.float_info.max
                        update_sphinx = False
                        break
        for file in watch_file_src:
            if not path.isfile(file):
                continue
            ctime = stat(file).st_mtime
            if ctime > watch_file_src[file]:
                update_page = True
                watch_file_src[file] = ctime

        if not path.isdir(builddir):
            # User did make clean
            update_sphinx = True

        if first_run is True:
            first_run = False
            update_page = False
            update_sphinx = False

        if len(git_lfs_pull) > 0:
            git_lfs_pull = [path.relpath(gf, git_top_level) for gf in git_lfs_pull]
            lfs_f_s = ' -I '.join(git_lfs_pull)
            click.echo(f"git lfs smudging file(s): {' '.join(git_lfs_pull)}")
            subprocess.call(f"git lfs pull -I {lfs_f_s}",
                            shell=True, cwd=git_top_level)

        if update_sphinx:
            if dev:
                # Uses subprocess because creating a new Sphinx class:
                # * Do not re-eval the roles/directives, but
                # * Trigger a full rebuild due to env changes
                # so it is no use for developing purposes.
                #
                # Maybe importlib.reload() + monkey patch could be an alternative,
                # but not triggering full env reload would be tricky, so this is good
                # enough.
                subprocess.call(f"sphinx-build -M {builder} '.' '{builddir_}'", shell=True, cwd=directory)
            else:
                app.build()
        if update_page:
            for f in w_files:
                copy2(f, path.join(builddir, '_static', path.basename(f)))
        if update_sphinx or update_page:
            if with_selenium:
                try:
                    driver.execute_script("location.reload();")
                except Exception:
                    click.echo("Browser disconnected")
                    if dev:
                        killpg(getpgid(rollup_p.pid), signal.SIGTERM)
                        killpg(getpgid(sass_p.pid), signal.SIGTERM)
                    with lock:
                        http.shutdown()
                        http.server_close()
                    return
            elif builder == "html":
                update_dev_pool()
            elif builder == 'singlehtml':
                update_pdf()

        scheduler.enter(1, 1, check_files, (scheduler,))

    scheduler = sched.scheduler(time.time, time.sleep)
    scheduler.enter(1, 1, check_files, (scheduler,))
    scheduler.run()

