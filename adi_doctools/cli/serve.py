from os import path, listdir, remove, mkdir
from os import pardir
from os import environ, stat, utime
from shutil import copy2, which, move
import logging
import importlib
import tempfile

from sphinx.application import Sphinx

from .aux_os import aux_killpg
from .aux_git import get_git_top_level, get_git_dir, is_git_lfs_installed, get_lfs_sha
from .argument_parser import get_arguments_serve
from .logging import BLUE, FAIL, RED, NC

logger = logging.getLogger(__name__)

log = {
    'no_lfs': "File .gitattributes contains lfs rules, but git-lfs is not installed.",
    'lfs_skip_smudge': "GIT_LFS_SKIP_SMUDGE=1 is set, GET requests won't smudge files, only touching the source!",
    'no_conf_py': "File conf.py not found, is {} a docs folder?",
    'inv_f': "Could not find {}, check rollup output.",
    'inv_srcdir': "Could not find SOURCEDIR {}.",
    'no_dev_pool': "Built docs doesn't have dev-pool.js, discarted.",
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
trigger_rst = ("", "")

theme_path = path.join('adi_doctools', 'theme', 'harmonic')
style_path = path.join(theme_path, 'style')
static_common_path = path.join(theme_path, 'static_common')
static_core_path = path.join(theme_path, 'static_core')
dev_pool_val = b""


def serve():
    """
    Watch the docs and source code to rebuild it on edit.
    The webpage pools timestamp changes and commands on the .dev-pool file.
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

    from uuid import uuid4

    global app, builddir

    args = get_arguments_serve()

    def symbolic_assert(file, msg):
        if not path.isfile(file):
            logger.error(msg.format(file))
            return True
        else:
            return False

    def dir_assert(file, msg):
        if not path.isdir(file):
            logger.error(msg.format(file))
            return True
        else:
            return False

    if args.builder not in ['html', 'pdf']:
        logger.error(log['builder'].format(args.builder))
        return
    if args.builder == 'pdf':
        environ["ADOC_MEDIA_PRINT"] = ""
        if not importlib.util.find_spec("weasyprint"):
            logger.error(log['no_weasyprint'])
            return
        from weasyprint import HTML, CSS
        from weasyprint.text.fonts import FontConfiguration
        args.builder = 'singlehtml'

    source_common_files = {
        'app.umd.js', 'app.umd.js.map',
        'app.min.css', 'app.min.css.map',
    }
    source_core_files = {
        'extra.umd.js', 'extra.umd.js.map',
        'extra.min.css', 'extra.min.css.map',
        'doxygen.min.css', 'doxygen.min.css.map',
        'doxygen.umd.js', 'doxygen.umd.js.map',
    }

    def signal_handler(sig, frame):
        if args.builder == 'html':
            logger.info("Shutting down server")
            with lock:
                shutdown_event.set()
                reload_event.set()
                http.shutdown()
                http.server_close()
            http_thread.join()
        if args.dev:
            aux_killpg(rollup_p)
            aux_killpg(sass_p)
        logger.info("Terminated")
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
        for f in source_common_files:
            src = path.join(dist, d, static_common_path, f)
            dest = path.join(path_, static_common_path, f)
            if not path.isdir(path.join(path_, static_common_path)):
                mkdir(path.join(path_, static_common_path))
            copy2(src, dest)
        for f in source_core_files:
            src = path.join(dist, d, static_core_path, f)
            dest = path.join(path_, static_core_path, f)
            if not path.isdir(path.join(path_, static_core_path)):
                mkdir(path.join(path_, static_core_path))
            copy2(src, dest)
        rmtree(dist)
        logger.info("Success fetching the pre-compiled files!")

    src_dir = path.abspath(path.join(path.dirname(__file__), pardir))
    par_dir = path.abspath(path.join(src_dir, pardir))
    rollup_bin = path.join(par_dir, 'node_modules', '.bin', 'rollup')
    rollup_conf = path.join(par_dir, 'ci', 'rollup.config.app.mjs')
    sass_bin = path.join(par_dir, 'node_modules', '.bin', 'sass')

    sass_conf_1 = path.join(style_path, 'app.bundle.scss') + ':' + path.join(static_common_path, 'app.min.css')
    sass_conf_2 = path.join(style_path, 'extra.bundle.scss') + ':' + path.join(static_core_path, 'extra.min.css')
    sass_conf_3 = path.join(style_path, 'doxygen.bundle.scss') + ':' + path.join(static_core_path, 'doxygen.min.css')
    sass_conf = sass_conf_1 + ' ' +  sass_conf_2 + ' ' + sass_conf_3
    if args.dev:
        if which("node") is None:
            logger.error(log['node'])
            sys.exit(1)
        if symbolic_assert(rollup_conf, log['rollup'].format(rollup_conf)):
            sys.exit(1)
        if symbolic_assert(rollup_bin, log['node_'].format(rollup_bin)):
            sys.exit(1)
    else:
        with_sources = True
        for s in source_common_files:
            comp_ = path.abspath(path.join(par_dir, static_common_path, s))
            if not path.isfile(comp_):
                with_sources = False
        for s in source_core_files:
            comp_ = path.abspath(path.join(par_dir, static_core_path, s))
            if not path.isfile(comp_):
                with_sources = False

        if not with_sources:
            logger.error(log['comp'])
            if which("node") is None:
                logger.error(log['node_alt'])
            elif symbolic_assert(rollup_bin, log['no_node_modules']):
                pass
            else:
                logger.info(log['with_node_modules'])
                return
            fetch_resp = input(log['fetch'] + " (y/n): ").strip().lower()
            if fetch_resp in ['y', 'yes']:
                if fetch_compiled(par_dir):
                    return
            else:
                return

    _directory = path.abspath(args.directory)
    common_paths = [".", "docs", path.join("doc", "source"), path.join("doc", "sphinx", "source")]
    for path_ in common_paths:
        conf_py = path.join(_directory, path_, 'conf.py')
        if path.isfile(conf_py):
            directory = path.join(_directory, path_)
            break

    if not path.isfile(conf_py):
        logger.error(log['no_conf_py'].format(_directory))
        sys.exit(1)

    if path.basename(directory) == "source":
        builddir_ = path.join("..", "build")
    else:
        builddir_ = "_build"
    builddir = path.join(directory, builddir_, args.builder)
    doctreedir = path.join(directory, builddir_, "doctrees")
    sourcedir = directory
    if dir_assert(sourcedir, log['inv_srcdir']):
        sys.exit(1)

    types_lfs = []
    git_dir = get_git_dir(directory)
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
                    logger.info(log['no_lfs'])
                    types_lfs = []
                elif ("GIT_LFS_SKIP_SMUDGE" in environ and
                      environ["GIT_LFS_SKIP_SMUDGE"] == "1"):
                    logger.error(f"{FAIL}{log['lfs_skip_smudge']}{NC}")

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


    if args.builder == 'singlehtml':
        singlehtml_file = path.join(builddir, 'index.html')
        from .aux_print import sanitize_singlehtml

    def update_pdf():
        html_ = sanitize_singlehtml(singlehtml_file)

        logger.info("preparing pdf styles...")

        font_config = FontConfiguration()
        src_dir = path.abspath(path.join(path.dirname(__file__), pardir))
        css = CSS(path.join(src_dir, 'theme', 'harmonic', 'static_common', 'app.min.css'),
                  font_config=font_config)
        css_extra = CSS(path.join(src_dir, 'theme', 'harmonic', 'style', 'weasyprint.css'),
                        font_config=font_config)

        logger.info("rendering pdf content...")
        html = HTML(string=html_, base_url=path.dirname(singlehtml_file))

        document = html.render(stylesheets=[css, css_extra])

        logger.info("writing pdf...")
        document.write_pdf(path.join(builddir, '..', 'output.pdf'))
        if not args.once:
            logger.info("wrote pdf! waiting new user changes...")
        else:
            logger.info("wrote pdf!")

    if args.builder == 'html':
        environ["ADOC_DEVPOOL"] = ""
        if (path.isdir(builddir) and
            not path.isfile(path.join(builddir, '_static', 'dev-pool.js'))):
          # Verify if cached is without dev-pool
          logger.info(log["no_dev_pool"])
          subprocess.call(f"sphinx-build -M clean . {builddir} -j auto",
                          shell=True, cwd=directory)

    if not args.verbose:
        print(f"\nTip: enable full output with {BLUE}--verbose{NC}\n")

    def app_subprocess_build():
        warn_file = tempfile.NamedTemporaryFile(mode='w+', suffix='.log')

        print("-- Building --")
        subprocess.run(f"sphinx-build -b {args.builder} . {builddir} -d {doctreedir} -j auto --warning-file {warn_file.name}",
                       shell=True, cwd=directory, capture_output=not(args.verbose))

        if not(args.verbose) and path.getsize(warn_file.name) > 0:
            with open(warn_file.name, 'r') as f:
                print(RED, f.read(), NC)
        print("---- Done ----")
        warn_file.close()

    watch_file_src = {}
    watch_file_rst = {}
    git_ref = None
    toctree_file = path.join(builddir, '_toctree.html')
    toctree_mtime = None
    toctree_content = None
    if args.dev:
        w_files = []
        # Check if minified files exists, if not, run rollup once
        rollup_cache = True
        for f in source_common_files:
            if not path.isfile(f):
                rollup_cache = False
        for f in source_core_files:
            if not path.isfile(f):
                rollup_cache = False
        if not rollup_cache:
            subprocess.call(f"{rollup_bin} -c {rollup_conf}",
                            shell=True, cwd=par_dir)
            subprocess.call(f"{sass_bin} --style compressed {sass_conf}",
                            shell=True, cwd=par_dir)
        for t in ['*.umd.js*', '*.min.css*']:
            f = glob.glob(path.join(src_dir, 'theme', 'harmonic', 'static_common', t))
            w_files.extend(f)
        for t in ['*.umd.js*', '*.min.css*']:
            f = glob.glob(path.join(src_dir, 'theme', 'harmonic', 'static_core', t))
            w_files.extend(f)
        for f in w_files:
            if symbolic_assert(f, log['inv_f']):
                sys.exit(1)

        # Build doc the first time
        app_subprocess_build()
        for f in w_files:
            watch_file_src[f] = stat(f).st_mtime
        if not args.once:
            # Run rollup and sass in watch mode
            cmd_rollup = f"{rollup_bin} -c {rollup_conf} --watch"
            cmd_sass = f"{sass_bin} --style compressed --watch {sass_conf}"
            rollup_p = subprocess.Popen(cmd_rollup, shell=True, cwd=par_dir,
                                        stdout=subprocess.DEVNULL)
            sass_p = subprocess.Popen(cmd_sass, shell=True, cwd=par_dir,
                                      stdout=subprocess.DEVNULL)
        elif args.builder == "singlehtml":
            update_pdf()
    else:
        # Build doc the first time
        app_subprocess_build()
        if args.builder == "singlehtml":
            update_pdf()

    if args.once:
        return

    # app.build() doesn't handle the cache well in parallel,
    # instead, we call through subprocess if needed
    app = Sphinx(directory, directory, builddir,
                 doctreedir, args.builder, parallel=0,
                 status=sys.stdout if args.verbose else None)

    def get_source_lfs_file(path_, ext):
        """
        Check if _build binary file is a git lfs pointer,
        and if so, search and return the source file path.
        If any step fails, returns None
        """
        if sha := get_lfs_sha(path_):
            name_ = path.basename(path_)
            name_ = re.sub(r'(_?\d+)?\.\w+$', '', name_)
            pattern = path.join(directory, '**', f'*{ext}')
            files = []
            for file_path in glob.glob(pattern, recursive=True):
                if ("/_build/" not in path.normpath(file_path) and
                    "/build/" not in path.normpath(file_path) and
                    name_ in path.basename(file_path)):
                    files.append(file_path)

            for file in files:
                try:
                    with open(file, 'rb') as f:
                        f.seek(54)
                        sha_ = f.read(64)
                        if sha == sha_:
                            return file
                except Exception:
                    pass

            return None
        else:
            return None

    shutdown_event = threading.Event()
    reload_event = threading.Event()
    dev_pool_lock = threading.Lock()
    class Handler(http.server.SimpleHTTPRequestHandler):
        def __init__(self, *args, **kwargs):
            global builddir
            super().__init__(*args, directory=builddir, **kwargs)

        def do_GET(self):
            global dev_pool_val

            if shutdown_event.is_set():
                return

            def send_dev_pool():
                self.send_response(200)
                self.send_header("Content-type", "text/plain")
                self.end_headers()
                with dev_pool_lock:
                    self.wfile.write(dev_pool_val)
                self.end_headers()
                return

            try:
                if self.path == "/.dev-pool":
                    if self.headers.get("no-wait") is not None:
                        send_dev_pool()
                        return
                    if reload_event.wait(timeout=30):
                        reload_event.clear()
                        send_dev_pool()
                    else:
                        with dev_pool_lock:
                            dev_pool_val_ = f"{str(time.time())}\n@timed-out\n"
                            dev_pool_val = bytes(dev_pool_val_, 'utf-8')
                        send_dev_pool()
                    return

                for ext in types_lfs:
                    if self.path.endswith(ext):
                        path_ = path.join(builddir, self.path[1:])

                        lfs_f = get_source_lfs_file(path_, ext)
                        if lfs_f is not None:
                            tmp_f = path.join(directory, builddir_, path.basename(lfs_f))
                            stat_ = stat(lfs_f)
                            lfs_f_ = path.relpath(lfs_f, git_top_level)
                            logger.info(f"git lfs smudging file {lfs_f_}")
                            try:
                                with open(path_, "rb") as fin, open(tmp_f, "wb") as fout:
                                    subprocess.run(["git", "lfs", "smudge"], stdin=fin, stdout=fout, check=True)
                            except Exception as e:
                                if e.returncode == 2:
                                    pass
                                else:
                                    raise
                            copy2(tmp_f, lfs_f)
                            utime(lfs_f, (stat_.st_atime, stat_.st_mtime))
                            move(tmp_f, path_)
                            utime(path_, (stat_.st_atime, stat_.st_mtime))

                            while True:
                                try:
                                    subprocess.run(["git", "update-index", "--", lfs_f],
                                                   capture_output=True, text=True, check=True)
                                except subprocess.CalledProcessError as e:
                                    if e.returncode == 128:
                                        if ".git/index.lock" in e.stderr:
                                            time.sleep(0.1)
                                            continue
                                        else:
                                            raise
                                    else:
                                        raise

                                break

                super().do_GET()
            except (BrokenPipeError, ConnectionResetError):
                return

        def log_message(self, format, *args):
            return

    def wsl2_networking():
        """
        Helps Windows pick-up WSL2 exposed port.
        """
        if shutdown_event.wait(0.5):
            return
        try:
            from urllib.request import urlopen
            urlopen(f"http://0.0.0.0:{args.port}", timeout=0.5)
        except Exception as e:
            logger.debug(str(e))

    if args.builder == "html":
        try:
            socketserver.ThreadingTCPServer.allow_reuse_address = True
            http = socketserver.ThreadingTCPServer(("", args.port), Handler)
            lock = threading.Lock()
            http_thread = threading.Thread(target=http.serve_forever)
            http_thread.daemon = True
            http_thread.start()
            print(f"\nRunning server on http://0.0.0.0:{BLUE}{args.port}{NC}?v={str(uuid4())[:2]}\n")

            if path.isdir("/mnt/wsl"):
                wsl2_thread = threading.Thread(target=wsl2_networking)
                wsl2_thread.daemon = True
                wsl2_thread.start()
        except Exception:
            logger.error(f"Could not start server on http://0.0.0.0:{FAIL}{args.port}{NC}")
            print(f"  {BLUE}Tip{NC}: pass another port with {BLUE}--port{NC}")
            if args.dev:
                aux_killpg(rollup_p)
                aux_killpg(sass_p)
            return
    signal.signal(signal.SIGINT, signal_handler)

    dev_pool = path.join(builddir, '.dev-pool')

    def update_dev_pool(message):
        global dev_pool_val
        dev_pool_val_ = f"{str(time.time())}\n{message}"
        # For XHR
        with dev_pool_lock:
            dev_pool_val = bytes(dev_pool_val_, 'utf-8')
        reload_event.set()
        # For alt servers, e.g. at ../ of {./doctools, ./no-OS}
        if path.isdir(builddir):
            dev_f = open(dev_pool, 'w')
            dev_f.write(dev_pool_val_)
            dev_f.close()

    if args.builder == "html":
        update_dev_pool("")


    def get_doc_sources_included():
        include_ = set()
        for docname in app.env.included:
            include_.update(app.env.included[docname])
        files_ = {item + ".rst" for item in include_}
        files = []
        ctime = []
        for f in files_:
            if not path.isfile(f):
                continue
            ctime_ = stat(f).st_mtime
            ctime.append(ctime_)
            files.append(f)
        return (files, ctime)


    def get_doc_sources():
        types = ['*.rst', '*.md', '*.svg', '*.txt', '*.png', '*.jpg', '*.jpeg', '*.js', '*.css']
        files = []
        ctime = []
        for typ in types:
            glob_ = path.join(sourcedir, typ)
            _files = glob.glob(glob_)
            __files = [path.abspath(f) for f in _files]
            files.extend(__files)
            for f in __files:
                ctime.append(stat(f).st_mtime)
        if path.isfile(conf_py):
            files.append(conf_py)
            ctime.append(stat(conf_py).st_mtime)
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
        files_, ctime_ = get_doc_sources_included()
        files.extend(files_)
        ctime.extend(ctime_)
        return (files, ctime)


    def get_trigger_rst(trigger_rst_, file):
        if trigger_rst_[0] == file:
            return trigger_rst_

        if file.endswith(".rst"):
            c = -4
        elif file.endswith(".md"):
            c = -3
        else:
            return trigger_rst_

        path_ = path.relpath(file, sourcedir)[:c] + ".html"
        if path_.startswith("../"):
            # Outside of source dir, unsupported
            return trigger_rst_
        return (file, path_)


    def check_files(scheduler):
        global app, first_run, trigger_rst
        nonlocal git_ref, toctree_mtime, toctree_content
        update_sphinx = False
        update_dev = False
        git_lfs_pull = []
        for file, ctime in zip(*get_doc_sources()):
            if file in watch_file_rst and ctime > watch_file_rst[file]:
                _, ext_= path.splitext(file)
                if ext_ in types_lfs and get_lfs_sha(file):
                    # User touched lfs symbolic link, probably wants to pull it
                    git_lfs_pull.append(file)

            if file in watch_file_rst and ctime > watch_file_rst[file]:
                trigger_rst = get_trigger_rst(trigger_rst, file)
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
                update_dev = True
                watch_file_src[file] = ctime

        deep_clean = False
        if not path.isdir(builddir):
            # User did make clean
            update_sphinx = True
            deep_clean = True

        if git_dir:
            git_ref_ = stat(path.join(git_dir, 'HEAD')).st_mtime
            if git_ref is not None and git_ref < git_ref_:
                update_sphinx = True
                deep_clean = True
            git_ref = git_ref_

        if first_run is True:
            first_run = False
            update_dev = False
            update_sphinx = False

        if len(git_lfs_pull) > 0:
            git_lfs_pull = [path.relpath(gf, git_top_level) for gf in git_lfs_pull]
            lfs_f_s = ' -I '.join(git_lfs_pull)
            logger.info(f"git lfs smudging file(s): {' '.join(git_lfs_pull)}")
            try:
                subprocess.run(["git", "lfs", "pull", "-I", lfs_f_s], check=True,
                                cwd=git_top_level)
            except Exception as e:
                if e.returncode == 2:
                    pass
                else:
                    raise

        if update_sphinx:
            # dev:
            #   Uses subprocess because creating a new Sphinx class:
            #   * Do not re-eval the roles/directives, but
            #   * Trigger a full rebuild due to env changes
            #   so it is no use for developing purposes.
            #
            #   Maybe importlib.reload() + monkey patch could be an alternative,
            #   but not triggering full env reload would be tricky, so this is
            #   good enough.
            if args.dev:
                app_subprocess_build()
            elif deep_clean:
                from sphinx.testing.util import _clean_up_global_state
                _clean_up_global_state()
                app_subprocess_build()
                app = Sphinx(directory, directory, builddir,
                             doctreedir, args.builder, parallel=0,
                             status=sys.stdout if args.verbose else None)
            else:
                print("-- Building --")
                app.build()
                print("---- Done ----")
        if update_dev:
            for f in w_files:
                copy2(f, path.join(builddir, '_static', path.basename(f)))

        toctree_changed = False
        if update_sphinx and path.isfile(toctree_file):
            new_mtime = stat(toctree_file).st_mtime
            if toctree_mtime is None or new_mtime > toctree_mtime:
                toctree_mtime = new_mtime
                with open(toctree_file, 'r', encoding='utf-8') as f:
                    _toctree_content = f.read()
                if _toctree_content != toctree_content:
                    toctree_changed = True
                toctree_content = _toctree_content

        if args.builder == 'singlehtml':
            if update_sphinx or update_dev:
                update_pdf()
        elif args.builder == "html":
            if update_sphinx:
                message = f"@docname {trigger_rst[1]}\n"
                if toctree_changed:
                    message += "@toctree-changed\n"
                update_dev_pool(message)
            elif update_dev:
                update_dev_pool("@code-changed\n")

        scheduler.enter(1, 1, check_files, (scheduler,))

    scheduler = sched.scheduler(time.time, time.sleep)
    scheduler.enter(1, 1, check_files, (scheduler,))
    scheduler.run()

