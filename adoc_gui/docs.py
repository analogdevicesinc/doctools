"""The Doctools backend: the documentation server, its warnings and the
answers about the roles and the directives of the project.

It is the process of the editors, ``python -m adi_doctools.lsp``: a JSON
message per line, requests matched by id and notifications of the build.
"""

from __future__ import annotations

import importlib.util
import json
import os
import posixpath
import re
import signal
import socket
import subprocess
import sys
import threading
import time
from pathlib import Path
from urllib.parse import urlsplit

from .preview import Previews

CONF_CANDIDATES = [
    'conf.py',
    'docs/conf.py',
    'doc/conf.py',
    'docs/source/conf.py',
    'doc/source/conf.py',
    'doc/sphinx/source/conf.py',
    'docs/sphinx/source/conf.py',
    'source/conf.py',
]

ANSI = re.compile(r'\x1b\[[0-9;]*[a-zA-Z]|\[9\dm|\[39;49;00m')
WARNING = re.compile(r'^(.+?):(?:docstring of [^:]+:)?(\d+):\s*(WARNING|ERROR|CRITICAL|SEVERE):\s*(.+)$')
WARNING_NO_LINE = re.compile(r'^(.+?):\s*(WARNING|ERROR|CRITICAL|SEVERE):\s*(.+)$')

# Time for the server to start watching the files, in seconds
REREAD_DELAY = 2.0

# A documentation of more pages is large: all of it takes long to build, the
# folders to build are chosen first
LARGE = 150

# The package of LanguageTool, for the check of the grammar on this machine
GRAMMAR_PACKAGE = 'language_tool_python'

# What the page may ask
ALLOWED = {'role', 'target', 'title', 'completion', 'inventory'}


def has_conf(directory: Path) -> bool:
    return any((directory / candidate).is_file() for candidate in CONF_CANDIDATES)


def find_workspace(file: Path) -> Path | None:
    """The folder to build from: the repository of the file, or the closest
    folder above it, that has a conf.py at a common location."""
    for parent in file.parents:
        if (parent / '.git').exists():
            if has_conf(parent):
                return parent
            break
    for parent in file.parents:
        if has_conf(parent):
            return parent
    return None


REPOSITORY = re.compile(r'''^repository\s*=\s*(['"])([\w.-]+)\1''', re.MULTILINE)


def repository_of(srcdir: str | None) -> str | None:
    """The repository of a documentation, from its conf.py: the name of the
    inventory of its published pages."""
    if not srcdir:
        return None
    try:
        found = REPOSITORY.search((Path(srcdir) / 'conf.py').read_text(encoding='utf-8'))
    except OSError:
        return None
    return found.group(2) if found else None


def parse_warning(line: str) -> dict | None:
    cleaned = ANSI.sub('', line).strip()
    match = WARNING.match(cleaned)
    if match:
        file, lineno, level, message = match.groups()
        return {'file': file, 'line': int(lineno), 'message': message,
                'severity': 'warning' if level == 'WARNING' else 'error'}
    match = WARNING_NO_LINE.match(cleaned)
    if match:
        file, level, message = match.groups()
        return {'file': file, 'line': 1, 'message': message,
                'severity': 'warning' if level == 'WARNING' else 'error'}
    return None


def free_port(first: int) -> int:
    for port in range(first, first + 20):
        with socket.socket() as sock:
            try:
                sock.bind(('', port))
                return port
            except OSError:
                continue
    return first


def docname_path(docname: str) -> str:
    """The path of the page of a document on the documentation server."""
    if docname == 'index':
        return '/'
    if docname.endswith('/index'):
        return f'/{docname[:-len("index")]}'
    return f'/{docname}/'


def page_path(srcdir: str | None, file: Path) -> str | None:
    """The path of the page of a source file on the documentation server."""
    if not srcdir:
        return None
    try:
        relative = Path(os.path.realpath(file)).relative_to(os.path.realpath(srcdir))
    except ValueError:
        return None
    return docname_path(relative.with_suffix('').as_posix())


class Docs:
    """The state of the build. file: the file that is edited, its warnings
    are the ones given to the page."""

    def __init__(self, file: Path, port: int = 8080, log=lambda line: print(line, flush=True)):
        self.file = file
        self.sparse: list[str] = []
        self.port = port
        self.log = log
        self.workspace = find_workspace(file)
        self.problem = None
        self.build = 'off'
        self.url = None
        self.srcdir = None
        # The pages of the documentation, and whether its build waits for the
        # folders to build to be chosen: see hold
        self.pages = 0
        self.held = False
        self.revision = 0
        self.diagnostics: dict[str, list] = {}
        self._pending: dict[str, list] = {}
        self._mode = 'subprocess'
        self._published = 0.0
        self._process = None
        self._lock = threading.Lock()
        self._next_id = 1
        self._waiting: dict[int, tuple[threading.Event, list]] = {}
        self._previews = Previews()
        # What was asked to the inventory of the published pages: see _published_ask
        self._remote: dict[str, dict] = {}

        if importlib.util.find_spec('adi_doctools') is None:
            self.problem = 'adi-doctools is not installed'
        elif self.workspace is None:
            self.problem = 'no conf.py found for this file'

    # Process -----------------------------------------------------------------

    def _spawn(self) -> bool:
        if self._process and self._process.poll() is None:
            return True
        if self.problem:
            return False
        self._process = subprocess.Popen(
            [sys.executable, '-m', 'adi_doctools.lsp'],
            cwd=self.workspace,
            stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
            text=True, encoding='utf-8', bufsize=1,
            env={**os.environ, 'PYTHONUNBUFFERED': '1'},
            # In a session of its own: Ctrl+C in the terminal goes to adoc-gui
            # only, which stops it in order, see close
            start_new_session=True,
        )
        threading.Thread(target=self._read, args=(self._process,), daemon=True).start()
        threading.Thread(target=self._read_errors, args=(self._process,), daemon=True).start()
        return True

    def _read(self, process):
        for line in process.stdout:
            line = line.strip()
            if not line:
                continue
            try:
                message = json.loads(line)
            except json.JSONDecodeError:
                self.log(ANSI.sub('', line))
                continue
            if not isinstance(message, dict):
                continue
            if isinstance(message.get('method'), str):
                self._notified(message['method'], message.get('params') or {})
                continue
            waiting = self._waiting.pop(message.get('id'), None)
            if waiting:
                waiting[1].append(message)
                waiting[0].set()

        # The process is gone
        if self._process is process:
            with self._lock:
                self.build = 'off'
                self.url = None
                self.revision += 1
            for event, _ in list(self._waiting.values()):
                event.set()
            self._waiting.clear()

    def _read_errors(self, process):
        for line in process.stderr:
            line = line.strip()
            if not line or "'adi_doctools.lsp' is a package and cannot be directly executed" in line:
                continue
            try:
                entry = json.loads(line)
                self.log(f"[{entry.get('level', 'LOG')}] {entry.get('message')}")
            except (json.JSONDecodeError, AttributeError):
                self.log(ANSI.sub('', line))

    def request(self, message: dict, timeout: float = 20) -> dict:
        if not self._spawn():
            return {'error': self.problem}
        event = threading.Event()
        answer: list = []
        with self._lock:
            ident = self._next_id
            self._next_id += 1
            self._waiting[ident] = (event, answer)
            try:
                self._process.stdin.write(json.dumps({'id': ident, **message}) + '\n')
                self._process.stdin.flush()
            except (OSError, ValueError):
                self._waiting.pop(ident, None)
                return {'error': 'the backend is not running'}
        if not event.wait(timeout) or not answer:
            self._waiting.pop(ident, None)
            return {'error': 'the backend did not answer'}
        return answer[0]

    # Notifications -------------------------------------------------------------

    def _notified(self, method: str, params: dict):
        with self._lock:
            if method == 'window/logMessage':
                self.log(ANSI.sub('', str(params.get('message'))))
            elif method == 'build/started':
                self._mode = 'incremental' if params.get('mode') == 'incremental' else 'subprocess'
                self._pending = {}
                self.build = 'building'
                self.revision += 1
                self.log(f'-- Building -- ({self._mode})')
            elif method == 'build/output':
                line = str(params.get('line'))
                self.log(line)
                warning = parse_warning(line)
                if warning:
                    self._pending.setdefault(self._resolve(warning['file']), []).append(warning)
            elif method == 'build/completed':
                self._publish()
                if self.url:
                    self.build = 'ready'
                self.revision += 1
                self.log('---- Done ----')
            elif method == 'server/started':
                self.url = params.get('url')
                self.srcdir = params.get('srcdir')
                self.build = 'ready'
                self.revision += 1
                self.log(f'Documentation at {self.url}')
                if os.path.realpath(self.file) not in self.diagnostics:
                    threading.Timer(REREAD_DELAY, self._reread).start()
            elif method == 'server/stopped':
                self.url = None
                self.build = 'off'
                self.revision += 1

    def _reread(self):
        """A build that reuses the previous one does not read the file, and so
        does not warn about it. Mark the file as changed, once the server
        watches the files, to have it read again."""
        try:
            os.utime(self.file)
        except OSError:
            pass

    def _resolve(self, file: str) -> str:
        path = Path(file)
        if not path.is_absolute():
            path = Path(self.srcdir or self.workspace) / path
        return os.path.realpath(path)

    def _publish(self):
        """An incremental build only reads the changed files again, the
        warnings of the others are kept."""
        if self._mode == 'subprocess':
            self.diagnostics = self._pending
        else:
            for path in list(self.diagnostics):
                try:
                    modified = os.stat(path).st_mtime > self._published
                except OSError:
                    modified = True
                if modified and path not in self._pending:
                    del self.diagnostics[path]
            self.diagnostics.update(self._pending)
        self._pending = {}
        self._published = time.time()

    # For the page ----------------------------------------------------------------

    def state(self, file: Path | None = None) -> dict:
        with self._lock:
            if file is not None:
                self.file = file
            return {
                'problem': self.problem,
                'build': self.build,
                'url': self.url,
                'page': page_path(self.srcdir, self.file) if self.url else None,
                'srcdir': self.srcdir if self.url else None,
                'sparse': self.sparse,
                'pages': self.pages,
                'large': self.large,
                'held': self.held,
                'revision': self.revision,
                'diagnostics': self.diagnostics.get(os.path.realpath(self.file), []),
            }

    @property
    def large(self) -> bool:
        return self.pages > LARGE

    def hold(self) -> bool:
        """Whether the build that was asked for when the editor started waits:
        a large documentation is not built whole without it being asked for.
        It is built with the folders that the browser kept, see set_sparse,
        or from the page."""
        self.held = self.large and not self.sparse and not self.problem
        return self.held

    def set_sparse(self, paths: list, restored: bool = False) -> dict:
        """Build only these folders, relative to the workspace. All when empty.
        restored: they are the ones chosen before, that the browser kept."""
        paths = sorted({str(path).strip('/') for path in paths if isinstance(path, str) and path.strip('/')})
        with self._lock:
            changed = paths != self.sparse
            self.sparse = paths
            running = self.url is not None
            # The folders that were chosen before, kept by the browser: the
            # build that waited for them starts. The ones that are being
            # chosen are built when it is asked for.
            waited = self.held and restored and bool(paths)
            if waited:
                self.held = False
            if changed:
                self.revision += 1
        if waited and not running:
            return self.start()
        if changed and running:
            return self.request({'server': 'update_sparse', 'sparse': paths or None}, timeout=60)
        return {'return': 'success'}

    def start(self) -> dict:
        if self.problem:
            return {'error': self.problem}
        if self.url:
            return {'return': 'already_running'}
        self.held = False
        answer = self.request(
            {'server': 'start', 'sparse': self.sparse or None, 'port': free_port(self.port)}, timeout=60)
        if answer.get('return') == 'success':
            with self._lock:
                if not self.url:
                    self.build = 'building'
                    self.revision += 1
        return answer

    def stop(self) -> dict:
        if not self._process or self._process.poll() is not None:
            return {'return': 'success'}
        answer = self.request({'server': 'stop'}, timeout=30)
        with self._lock:
            self._remote = {}
            self.url = None
            self.build = 'off'
            self.diagnostics = {}
            self.revision += 1
        return answer

    def ask(self, message: dict) -> dict:
        """A question of the page about a role or a completion."""
        if not isinstance(message, dict) or not set(message) <= ALLOWED:
            return {'error': 'not allowed'}
        if not self.url:
            return {'error': 'the documentation server is not running'}
        if message.get('role') == 'doc' and isinstance(message.get('target'), str):
            message = {**message, 'target': self._docname(message['target'])}
        answer = self.request(message)
        if message.get('completion') == 'roles':
            answer = self._with_domain_roles(answer)
        own = self.published()
        return self._with_published(message, answer, own) if own else answer

    def _with_domain_roles(self, answer: dict) -> dict:
        """The backend gives the roles of the standard domain and of docutils
        only, not py:func, rst:dir, ...: they come from the local types."""
        if not isinstance(answer.get('list'), list):
            return answer
        types = self.request({'completion': 'local_types'}).get('list')
        if not isinstance(types, list):
            return answer
        roles = list(answer['list'])
        names = {item.get('name') for item in roles}
        for item in types:
            name = item.get('name')
            if isinstance(name, str) and ':' in name and name not in names:
                roles.append({'name': name, 'partial': False})
                names.add(name)
        return {**answer, 'list': roles}

    def _docname(self, target: str) -> str:
        """The page a doc role names, as the backend knows it: from the
        root of the documentation, or from the folder of the file."""
        if target.startswith('/'):
            return target.lstrip('/')
        try:
            folder = Path(os.path.realpath(self.file)).relative_to(os.path.realpath(self.srcdir or '')).parent.as_posix()
        except ValueError:
            return target
        return posixpath.normpath(posixpath.join(folder, target))

    # With only some folders built, what is in the others is missing: the
    # references to it are not found, and are not offered. The build finds
    # them in the inventory of the published pages of the repository, which
    # Doctools adds for it. So does the editor: it is merged into what the
    # project has, as if all of it was built.

    def published(self) -> str | None:
        """The name of the inventory of the published pages of the
        repository, when only some folders are built."""
        return repository_of(self.srcdir) if self.sparse else None

    def _published_ask(self, message: dict) -> dict:
        """An answer of the inventory of the published pages: it does not
        change while the server runs."""
        key = json.dumps(message, sort_keys=True)
        answer = self._remote.get(key)
        if answer is None:
            answer = self.request(message)
            if not answer.get('error'):
                self._remote[key] = answer
        return answer

    def _with_published(self, message: dict, answer: dict, own: str) -> dict:
        completion = message.get('completion')
        if completion == 'inventory':
            # It is the project: not another documentation
            if isinstance(answer.get('list'), list):
                return {**answer, 'list': [item for item in answer['list'] if item.get('name') != own]}
            return answer
        if completion == 'local_types':
            more = self._published_ask({'completion': 'inventory_types', 'inventory': own}).get('list')
            if not isinstance(more, list):
                return answer
            types = [dict(item) for item in answer.get('list') or []]
            by_name = {item.get('name'): item for item in types}
            for item in more:
                known = by_name.get(item.get('name'))
                if known is None:
                    types.append(item)
                else:
                    known['count'] = max(known.get('count') or 0, item.get('count') or 0)
            return {'list': types}
        if completion == 'local_targets':
            more = self._published_ask(
                {'completion': 'inventory_targets', 'inventory': own, 'role': message.get('role')}).get('list')
            if not isinstance(more, list):
                return answer
            targets = list(answer.get('list') or [])
            names = {item.get('name') for item in targets}
            targets += [item for item in more if item.get('name') not in names]
            return {'list': targets} if targets else answer
        role = message.get('role')
        if completion or not isinstance(role, str) or not answer.get('error') or role.startswith('external+'):
            return answer
        # Not found in what is built
        found = self.request({**message, 'role': f'external+{own}:{role}'})
        if not found.get('error') and isinstance(found.get('target'), str):
            return {**found, 'inventory': own}
        return answer

    def preview(self, message: dict) -> dict:
        """What a reference points to: { title, target, text, page, external }.
        The reference is resolved by the backend, and only the page it gives
        is read: one of the project, or of an inventory of the project."""
        if (not isinstance(message, dict) or not set(message) <= {'role', 'target', 'title'}
                or not isinstance(message.get('role'), str) or not isinstance(message.get('target'), str)):
            return {'error': 'not allowed'}
        answer = self.ask(message)
        target = answer.get('target')
        if answer.get('error') or not isinstance(target, str):
            return {'error': answer.get('error') or 'not found'}
        external = message['role'].startswith('external+')
        if external or answer.get('inventory'):
            # Of another documentation, or of the published pages of this one
            url, version = target, None
        elif '://' in target or not self.url:
            # A role that makes an address: there is no page of a documentation to read
            return {'title': answer.get('title'), 'target': target}
        else:
            docname, _, anchor = target.partition('#')
            server = urlsplit(self.url)
            url = f'{server.scheme}://{server.netloc}{docname_path(docname)}' + (f'#{anchor}' if anchor else '')
            version = self.revision
        found = self._previews.of(url, version)
        return {
            'title': answer.get('title') or found.get('title'), 'target': target, 'external': external,
            'heading': found.get('title'), 'text': found.get('text'), 'page': found.get('page'),
        }

    def grammar(self, text: str, mode: str = 'local') -> dict:
        """The grammar mistakes of a text, by LanguageTool: on this machine
        (local, the first check starts it, which takes a while) or by its
        public service (cloud)."""
        if not isinstance(text, str) or len(text) > 20000 or mode not in ('local', 'cloud'):
            return {'error': 'not allowed'}
        return self.request({'languageTool': 'check', 'text': text, 'mode': 'api' if mode == 'cloud' else 'local',
                             'language': 'en-US'}, timeout=120)

    def install_grammar(self, start: bool = False, run=subprocess.run) -> dict:
        """Install LanguageTool for the check on this machine, with pip, in
        the environment of adoc-gui: { state, message }, state: 'idle',
        'installing', 'done' or 'failed'. start: install it now, else only
        say how far it is. The backend finds it at its next check."""
        with self._lock:
            state = getattr(self, '_install', {'state': 'idle', 'message': ''})
            if not start or state['state'] == 'installing':
                return dict(state)
            self._install = {'state': 'installing', 'message': ''}

        def install():
            try:
                done = run([sys.executable, '-m', 'pip', 'install', '--disable-pip-version-check', GRAMMAR_PACKAGE],
                           capture_output=True, text=True, timeout=900)
                lines = [line for line in (done.stderr or done.stdout or '').strip().splitlines() if line.strip()]
                result = ({'state': 'done', 'message': ''} if done.returncode == 0
                          else {'state': 'failed', 'message': ANSI.sub('', lines[-1]) if lines else 'pip failed'})
            except (OSError, subprocess.SubprocessError) as err:
                result = {'state': 'failed', 'message': str(err) or type(err).__name__}
            with self._lock:
                self._install = result
            self.log(f"LanguageTool: {'installed' if result['state'] == 'done' else result['message']}")

        threading.Thread(target=install, daemon=True).start()
        return {'state': 'installing', 'message': ''}

    def close(self, wait: float = 5):
        """Stop the backend, and the programs it started (the build, LanguageTool)."""
        # What it says while it stops is not of interest
        self.log = lambda line: None
        process = self._process
        if not process or process.poll() is not None:
            return
        try:
            # It stops when its input ends
            process.stdin.close()
            process.wait(timeout=wait)
        except (OSError, subprocess.TimeoutExpired, KeyboardInterrupt):
            pass
        self.kill()

    def kill(self):
        """Stop what is left of the backend and of what it started, now."""
        process = self._process
        if not process:
            return
        if not hasattr(os, 'killpg'):
            process.terminate()
            return
        for sig in (signal.SIGTERM, signal.SIGKILL):
            try:
                os.killpg(process.pid, sig)
            except (ProcessLookupError, PermissionError, OSError):
                return
            try:
                process.wait(timeout=2)
            except (subprocess.TimeoutExpired, KeyboardInterrupt):
                continue
            # The others of its session, if any
            time.sleep(0.2)
