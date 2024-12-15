from os import path, listdir, remove, mkdir
from os import pardir, killpg, getpgid
from os import environ
from os import chdir, getcwd
from shutil import copy
import click
import importlib

from sphinx.application import Sphinx

log = {
    'no_mk': "File Makefile not found, is {} a docs folder?",
    'inv_mk': "Failed parse Makefile, is {} a docs folder?",
    'inv_f': "Could not find {}, check rollup output.",
    'inv_bdir': "Could not find BUILDDIR {}.",
    'inv_srcdir': "Could not find SOURCEDIR {}.",
    'no_selenium': "Package 'selenium' is not installed.",
    'rollup': "Couldn't find {}, ensure this a symbolic install.",
    'node': "Couldn't find {}, please install the npm tools locally.",
    'comp': "Couldn't find the minified web files ",
    'no_npm': "and the npm tools are not installed.",
    'with_npm': "run with the --just-regen flag (npm detected).",
    'fetch': "Do you want to fetch from the release?",
    'builder': "Unknown builder '{}', valid options are: html, pdf.",
    'no_weasyprint': "Package 'weasyprint' required for PDF generation is not installed.",
}

# Hall of shame of poorly managed artifacts
unmanaged = []
# Avoid
first_run = True

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

    source_files = {'app.umd.js', 'app.umd.js.map', 'style.min.css',
                    'style.min.css.map'}
    cwd_ = getcwd()

    def signal_handler(sig, frame):
        if builder == 'html':
            click.echo("Shutting down server")
            with lock:
                http.shutdown()
                http.server_close()
            http_thread._stop()
        if dev:
            killpg(getpgid(rollup_p.pid), signal.SIGTERM)
        click.echo("Terminated")
        sys.exit()

    cosmic_static = path.join('adi_doctools', 'theme', 'cosmic', 'static')
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
            src = path.join(dist, d, cosmic_static, f)
            dest = path.join(path_, cosmic_static, f)
            copy(src, dest)
        rmtree(dist)
        click.echo("Success fetching the pre-compiled files!")

    src_dir = path.abspath(path.join(path.dirname(__file__), pardir))
    par_dir = path.abspath(path.join(src_dir, pardir))
    rollup_bin = path.join(par_dir, 'node_modules', '.bin', 'rollup')
    rollup_conf = path.join(par_dir, 'ci', 'rollup.config.app.mjs')
    if dev:
        if symbolic_assert(rollup_conf, log['rollup'].format(rollup_conf)):
            return
        if symbolic_assert(rollup_bin, log['node'].format(rollup_bin)):
            return
    else:
        compiled = path.join(src_dir, 'theme', 'cosmic', 'static')
        compiled = path.abspath(path.join(compiled, 'app.umd.js'))
        if not path.isfile(compiled):
            if symbolic_assert(rollup_bin, log['comp'] + log['no_npm']):
                pass
            else:
                click.echo(log['comp'] + log['with_npm'])
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
    makefile = path.join(directory, 'Makefile')
    if symbolic_assert(makefile, log['no_mk']):
        return

    # Get builddir and sourcedir, to ensure working with any doc
    with open(makefile, 'r') as f:
        data = f.read()

    builddir_ = re.search(r'^BUILDDIR\s*=\s*(.*)$', data, re.MULTILINE)
    sourcedir_ = re.search(r'^SOURCEDIR\s*=\s*(.*)$', data, re.MULTILINE)
    builddir_ = builddir_.group(1).strip() if builddir_ else None
    sourcedir_ = sourcedir_.group(1).strip() if sourcedir_ else None
    if builddir_ is None or sourcedir_ is None:
        click.echo(log['inv_mk'].format(directory))
        return
    builddir = path.join(directory, builddir_, builder)
    doctreedir = path.join(builddir_, "doctrees")
    sourcedir = path.join(directory, sourcedir_)
    if dir_assert(sourcedir, log['inv_srcdir']):
        return

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
        cosmic = path.join('adi_doctools', 'theme', 'cosmic')
        css = CSS(path.join(src_dir, cosmic, 'static', 'style.min.css'),
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
            f_ = path.abspath(path.join(src_dir, 'theme',
                                        'cosmic', 'static', f))
            w_files.append(f_)
            if not path.isfile(w_files[-1]):
                rollup_cache = False
        if not rollup_cache:
            subprocess.call(f"{rollup_bin} -c {rollup_conf}",
                            shell=True, cwd=par_dir)
        for f in w_files:
            if symbolic_assert(f, log['inv_f']):
                return

        # Build doc the first time
        app.build()
        for f, s in zip(w_files, source_files):
            watch_file_src[f] = path.getctime(f)
        if not once:
            # Run rollup in watch mode
            cmd = f"{rollup_bin} -c {rollup_conf} --watch"
            rollup_p = subprocess.Popen(cmd, shell=True, cwd=par_dir,
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

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            global builddir
            super().__init__(*args, directory=builddir, **kwargs)

        def log_message(self, format, *args):
            return

    if builder == "html":
        try:
            http = socketserver.TCPServer(("", port), Handler)
            lock = threading.Lock()
            http_thread = threading.Thread(target=http.serve_forever)
            http_thread.daemon = True
            http_thread.start()
        except Exception:
            click.echo(f"Could not start server on http://0.0.0.0:{port}")
            if dev:
                killpg(getpgid(rollup_p.pid), signal.SIGTERM)
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
        types = ['*.rst', '*.svg', '*.txt', '*.png', '*.jpg', '*.jpeg', '*.py']
        files = []
        ctime = []
        for typ in types:
            glob_ = path.join(sourcedir, typ)
            _files = glob.glob(glob_)
            __files = [path.abspath(f) for f in _files]
            files.extend(__files)
            for f in __files:
                ctime.append(path.getctime(f))
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
                    ctime_ = path.getctime(f)
                    ctime.append(ctime_)
                    files.append(f)
        return (files, ctime)


    def check_files(scheduler):
        global first_run
        update_sphinx = False
        update_page = False
        for file, ctime in zip(*get_doc_sources()):
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
            ctime = path.getctime(file)
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
                subprocess.call(f"make {builder}", shell=True, cwd=directory)
            else:
                app.build()
        if update_page:
            for f, s in zip(w_files, source_files):
                copy(f, path.join(builddir, '_static', s))
        if update_sphinx or update_page:
            if with_selenium:
                try:
                    driver.execute_script("location.reload();")
                except Exception:
                    click.echo("Browser disconnected")
                    if dev:
                        killpg(getpgid(rollup_p.pid), signal.SIGTERM)
                    with lock:
                        http.shutdown()
                        http.server_close()
                    http_thread._stop()
                    return
            elif builder == "html":
                update_dev_pool()
            elif builder == 'singlehtml':
                update_pdf()

        scheduler.enter(1, 1, check_files, (scheduler,))

    scheduler = sched.scheduler(time.time, time.sleep)
    scheduler.enter(1, 1, check_files, (scheduler,))
    scheduler.run()

@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=True),
    default='.'
)
def author_mode(directory):
    # DEPRECATED
    click.echo("Deprecated: To match other live-editing tools, this command was renamed to 'serve'.")
