import os
import click
import importlib

@click.command()
@click.option(
    '--directory',
    '-d',
    is_flag=False,
    type=click.Path(exists=True),
    default=None,
    help="Path to the docs folder."
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
    help="Watch source code (requires symbolic install)."
)
@click.option(
    '--no-selenium',
    is_flag=True,
    default=False,
    help="Force alternative pooling method for refresh instead of selenium/Firefox."
)
def author_mode(directory, port, dev, no_selenium):
    """
    Watch the docs and source code to rebuild it on edit.
    Two live update strategies are available:
    Selenium: Page reloads through Firefox's API.
    Pooling: The webpage pools timestamp changes on the .dev-pool file.
    """
    if directory is None:
        click.echo("Please provide a --directory.")
        return
    with_selenium = False
    if not no_selenium:
        if importlib.util.find_spec("selenium"):
            with_selenium = True
        else:
            click.echo("Package 'selenium' is not installed, pooling strategy enabled.")

    import glob
    import sched, time
    import threading
    import signal
    import http.server
    import socketserver
    import subprocess

    def symbolic_assert(file, msg):
        if not os.path.isfile(file):
            click.echo(msg)
            return True
        else:
            return False

    if symbolic_assert(os.path.join(directory, 'conf.py'), f"File conf.py not found, are you sure {os.path.abspath(directory)} is a docs folder?"):
        return

    devpool_js = "ADOC_DEVPOOL= " if not with_selenium else ""
    watch_file_src = {}
    watch_file_rst = {}
    if dev:
        src_dir = os.path.join(os.path.dirname(os.path.abspath(__file__)), os.pardir)
        par_dir = os.path.abspath(os.path.join(src_dir, os.pardir))

        rollup_ci_file = "ci/rollup.config.app.mjs"
        rollup_ci_dir = os.path.join(par_dir, rollup_ci_file)
        rollup_node_file = "node_modules/.bin/rollup"
        rollup_node_dir = os.path.join(par_dir, rollup_node_file)

        if symbolic_assert(rollup_ci_dir, f"Could not find {rollup_ci_dir}, ensure this a symbolic install."):
            return
        if symbolic_assert(rollup_node_dir, f"Could not find {rollup_node_dir}, please you install the npm tools locally."):
            return

        source_files = ['app.umd.js', 'app.umd.js.map', 'style.min.css', 'style.min.css.map', 'icons.svg']
        w_files = []
        # Check if minified files exists, if not, run rollup once
        rollup_cache = True
        for f in source_files:
            f_ = os.path.abspath(os.path.join(src_dir, f"theme/adi-common/static/{f}"))
            w_files.append(f_)
            if not os.path.isfile(w_files[-1]):
                rollup_cache = False
        if not rollup_cache:
            subprocess.call(f"{rollup_node_file} -c {rollup_ci_file}", shell=True, cwd=par_dir)
        for f in w_files:
            if symbolic_assert(f, f"Could not find {f}, check rollup output."):
                return

        # Build doc the first time
        subprocess.call(f"cd {directory} ; {devpool_js} make html", shell=True)
        for f, s in zip(w_files, source_files):
            watch_file_src[f] = os.path.getctime(f)
            # Create symbolic link to build
            subprocess.call(f"ln -sf {f} {directory}/_build/html/_static/{s}", shell=True)
        # Run rollup in watch mode
        rollup_p = subprocess.Popen(f"{rollup_node_file} -c {rollup_ci_file} --watch", shell=True, cwd=par_dir, stdout=subprocess.DEVNULL)
    else:
        # Build doc the first time
        subprocess.call(f"cd {directory} ; {devpool_js} make html", shell=True)

    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            super().__init__(*args, directory=os.path.join(directory, '_build/html'), **kwargs)
        def log_message(self, format, *args):
            return

    try:
        http = socketserver.TCPServer(("", port), Handler)
        lock = threading.Lock()
        http_thread = threading.Thread(target=http.serve_forever)
        http_thread.daemon = True
        http_thread.start()
    except:
        click.echo(f"Could not start server on http://0.0.0.0:{port}");
        if dev:
            os.killpg(os.getpgid(rollup_p.pid), signal.SIGTERM)

        return

    dev_pool = os.path.join(directory, '_build/html/.dev-pool')
    def update_dev_pool():
        dev_f = open(dev_pool, 'w')
        dev_f.write(str(time.time()))
        dev_f.close()

    if with_selenium:
        from selenium import webdriver
        from selenium.webdriver.common.by import By
        from selenium.webdriver.common.keys import Keys

        # Remove pooling method flag
        if os.path.isfile(dev_pool):
            os.remove(dev_pool)

        driver = webdriver.Firefox()

        driver.get(f"http://0.0.0.0:{port}")
    else:
        update_dev_pool()

    def get_doc_sources():
        types = ['*.rst', '*.svg', '*.txt', '*.png', '*.jpg', '*.jpeg', '*.py']
        files = []
        ctime = []
        update = False
        for typ in types:
            _files = glob.glob(f"{directory}/{typ}")
            __files = [os.path.abspath(f) for f in _files]
            files.extend(__files)
            for f in __files:
                ctime.append(os.path.getctime(f))
        dirs = [d for d in os.listdir(directory)
            if os.path.isdir(os.path.join(directory, d))]
        if '_build' in dirs:
            dirs.remove('_build')
        for d in dirs:
            for typ in types:
                _files = glob.glob(f"{directory}/{d}/**/{typ}", recursive=True)
                __files = [os.path.abspath(f) for f in _files]
                files.extend(__files)
                for f in __files:
                    ctime.append(os.path.getctime(f))
        return (files, ctime)

    def check_files(scheduler):
        update_sphinx = False
        update_page = False
        for file, ctime in zip(*get_doc_sources()):
            if file not in watch_file_rst or ctime > watch_file_rst[file]:
                update_sphinx = True
                watch_file_rst[file] = ctime
        for file in watch_file_src:
            if not os.path.isfile(file):
                continue
            ctime = os.path.getctime(file)
            if ctime > watch_file_src[file]:
                update_page = True
                watch_file_src[file] = ctime

        if update_sphinx:
            subprocess.call(f"cd {directory} ; {devpool_js} make html", shell=True)
        if update_sphinx or update_page:
            if with_selenium:
                try:
                    driver.execute_script("location.reload();")
                except:
                    click.echo(f"Browser disconnected");
                    if dev:
                        os.killpg(os.getpgid(rollup_p.pid), signal.SIGTERM)
                    with lock:
                        http.shutdown()
                    http_thread._stop()
                    return
            else:
                update_dev_pool()

        scheduler.enter(1, 1, check_files, (scheduler,))

    scheduler = sched.scheduler(time.time, time.sleep)
    scheduler.enter(1, 1, check_files, (scheduler,))
    scheduler.run()
