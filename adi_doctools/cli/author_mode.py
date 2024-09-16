from os import path, listdir, remove, mkdir
from os import pardir, killpg, getpgid
from shutil import copy
import click
import importlib

log = {
    'no_mk': "File Makefile not found, is {} a docs folder?",
    'inv_mk': "Failed parse Makefile, is {} a docs folder?",
    'inv_f': "Could not find {}, check rollup output.",
    'inv_bdir': "Could not find BUILDDIR {}.",
    'inv_srcdir': "Could not find SOURCEDIR {}.",
    'no_selenium': "Package 'selenium' is not installed, pooling enabled.",
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


@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=True),
    default=None,
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
    '--no-selenium',
    is_flag=True,
    default=False,
    help="Force pooling method instead of selenium/Firefox (html builder only)."
)
@click.option(
    '--just-regen',
    '-g',
    is_flag=True,
    default=False,
    help="Just regenerate the web minified files and exit."
)
@click.option(
    '--builder',
    '-b',
    is_flag=False,
    default="html",
    help="Builder to use, valid options are: html, pdf (WeasyPrint) (default: html)."
)
def author_mode(directory, port, dev, no_selenium, just_regen, builder):
    """
    Watch the docs and source code to rebuild it on edit.
    Two html live update strategies are available:
    Selenium: Page reloads through Firefox's API.
    Pooling: The webpage pools timestamp changes on the .dev-pool file.
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
        if not importlib.util.find_spec("weasyprint"):
            click.echo(log['no_weasyprint'])
            return
        from weasyprint import HTML, CSS
        from weasyprint.text.fonts import FontConfiguration
        builder = 'singlehtml'

    source_files = {'app.umd.js', 'app.umd.js.map', 'style.min.css',
                    'style.min.css.map'}

    def signal_handler(sig, frame):
        if builder == 'html':
            with lock:
                http.shutdown()
                http.server_close()
            http_thread._stop()
        if dev:
            killpg(getpgid(rollup_p.pid), signal.SIGTERM)
        click.echo("Terminated")
        return

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
    if just_regen or dev:
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

    if just_regen:
        subprocess.call(f"{rollup_bin} -c {rollup_conf}",
                        shell=True, cwd=par_dir)
        return

    if directory is None:
        click.echo("Please provide a --directory.")
        return

    with_selenium = False
    if not no_selenium and dev and builder == 'html':
        if importlib.util.find_spec("selenium"):
            with_selenium = True
        else:
            click.echo(log['no_selenium'])

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
    sourcedir = path.join(directory, sourcedir_)
    if dir_assert(sourcedir, log['inv_srcdir']):
        return

    if not with_selenium and dev and builder == 'html':
        devpool_js = "ADOC_DEVPOOL= "
    else:
        devpool_js = ""
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
        subprocess.call(f"{devpool_js} make {builder}", shell=True, cwd=directory)
        for f, s in zip(w_files, source_files):
            watch_file_src[f] = path.getctime(f)
        # Run rollup in watch mode
        cmd = f"{rollup_bin} -c {rollup_conf} --watch"
        rollup_p = subprocess.Popen(cmd, shell=True, cwd=par_dir,
                                    stdout=subprocess.DEVNULL)
    else:
        # Build doc the first time
        subprocess.call(f"{devpool_js} make {builder}", shell=True, cwd=directory)

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
            signal.signal(signal.SIGINT, signal_handler)
        except Exception:
            click.echo(f"Could not start server on http://0.0.0.0:{port}")
            if dev:
                killpg(getpgid(rollup_p.pid), signal.SIGTERM)
            return

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
                files.extend(__files)
                for f in __files:
                    ctime.append(path.getctime(f))
        return (files, ctime)

    if builder == 'singlehtml':
        font_config = FontConfiguration()
        singlehtml_file = path.join(builddir, 'index.html')
    def update_pdf():
        document = HTML(filename=singlehtml_file)
        document.write_pdf(path.join(builddir, '..', 'raw.pdf'),
                           font_config=font_config)


    def check_files(scheduler):
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

        if update_sphinx:
            subprocess.call(f"{devpool_js} make {builder}",
                            shell=True, cwd=directory)
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
