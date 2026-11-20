"""Doctools GUI: edit a reStructuredText file in the browser.

    adoc-gui [path/to/file.rst] [--port 8300] [--no-open] [--serve]

Serves the page and gives it the .rst files of the documentation of the file
to read and write. Without a file, the index.rst of the documentation in the
current folder is opened.
"""

import argparse
import json
import mimetypes
import os
import sys
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, urlsplit

from .docs import Docs

WEB = Path(__file__).resolve().parent / 'web'
MAX_SIZE = 16 * 1024 * 1024
INDEX_CANDIDATES = ['index.rst', 'docs/index.rst', 'doc/index.rst', 'docs/source/index.rst', 'doc/source/index.rst']

mimetypes.add_type('application/wasm', '.wasm')
mimetypes.add_type('text/javascript', '.js')


IGNORED_FOLDERS = {'node_modules', 'venv', 'env', '__pycache__'}
MAX_DEPTH = 12


def list_tree(directory: Path, relative: str = '', depth: int = 0) -> dict:
    """The folders that hold .rst files, and those files."""
    node = {'name': directory.name, 'path': relative, 'dirs': [], 'files': []}
    try:
        entries = sorted(os.scandir(directory), key=lambda entry: entry.name.lower())
    except OSError:
        return node
    for entry in entries:
        name = entry.name
        if name.startswith(('.', '_')) or name in IGNORED_FOLDERS:
            continue
        path = f'{relative}/{name}' if relative else name
        if entry.is_dir():
            if depth < MAX_DEPTH:
                sub = list_tree(Path(entry.path), path, depth + 1)
                if sub['dirs'] or sub['files']:
                    node['dirs'].append(sub)
        elif name.endswith('.rst'):
            node['files'].append({'name': name, 'path': path})
    return node


def make_handler(first: Path, root: Path, docs: Docs):
    def resolve(relative: str | None) -> Path | None:
        """A .rst file of the root, from its path relative to the root."""
        if not relative:
            return first
        target = (root / relative).resolve()
        if root not in target.parents or target.suffix != '.rst' or not target.is_file():
            return None
        return target

    class Handler(BaseHTTPRequestHandler):
        def reply(self, status, body=b'', content_type='text/plain; charset=utf-8'):
            self.send_response(status)
            self.send_header('Content-Type', content_type)
            self.send_header('Content-Length', str(len(body)))
            self.send_header('Cache-Control', 'no-store')
            self.end_headers()
            self.wfile.write(body)

        def reply_json(self, status, value):
            self.reply(status, json.dumps(value).encode(), 'application/json')

        def file_info(self, file, with_text=True):
            stat = file.stat()
            info = {
                'path': file.relative_to(root).as_posix(),
                'absolute': str(file),
                'name': file.name,
                'mtime': stat.st_mtime_ns,
            }
            if with_text:
                info['text'] = file.read_text(encoding='utf-8')
            return info

        def allowed(self):
            # Only the page may use the API, not other sites
            if self.headers.get('X-Doctools') == '1':
                return True
            self.reply(403, b'Forbidden')
            return False

        def body(self):
            length = int(self.headers.get('Content-Length') or 0)
            if length > MAX_SIZE:
                self.reply(413, b'Too large')
                return None
            return self.rfile.read(length).decode('utf-8')

        def target(self):
            """The file of the request, replies when there is none."""
            query = parse_qs(urlsplit(self.path).query)
            file = resolve(query.get('path', [None])[0])
            if file is None:
                self.reply(404, b'Not a file of the documentation')
            return file

        def do_GET(self):
            path = urlsplit(self.path).path
            if path == '/api/file':
                file = self.allowed() and self.target()
                return file and self.reply_json(200, self.file_info(file))
            if path == '/api/docs':
                file = self.allowed() and self.target()
                if not file:
                    return None
                state = docs.state(file)
                # Where the sources of the pages are, from the root of the files
                srcdir = state.pop('srcdir')
                try:
                    state['sources'] = Path(os.path.realpath(srcdir)).relative_to(root).as_posix() if srcdir else None
                except ValueError:
                    state['sources'] = None
                return self.reply_json(200, state)
            if path == '/api/tree':
                return self.allowed() and self.reply_json(200, {'root': str(root), 'tree': list_tree(root)})

            relative = 'index.html' if path == '/' else path.lstrip('/')
            target = (WEB / relative).resolve()
            if WEB not in target.parents or not target.is_file():
                return self.reply(404, b'Not found')
            content_type = mimetypes.guess_type(target.name)[0] or 'application/octet-stream'
            self.reply(200, target.read_bytes(), content_type)

        def do_PUT(self):
            if urlsplit(self.path).path != '/api/file':
                return self.reply(404, b'Not found')
            file = self.allowed() and self.target()
            if not file:
                return
            text = self.body()
            if text is None:
                return
            temporary = file.with_name(f'.{file.name}.doctools-tmp')
            temporary.write_text(text, encoding='utf-8')
            os.replace(temporary, file)
            self.reply_json(200, self.file_info(file, with_text=False))

        def do_POST(self):
            path = urlsplit(self.path).path
            if path not in ('/api/docs/start', '/api/docs/stop', '/api/docs/ask', '/api/docs/sparse', '/api/grammar'):
                return self.reply(404, b'Not found')
            if not self.allowed():
                return
            text = self.body()
            if text is None:
                return
            if path == '/api/docs/start':
                return self.reply_json(200, docs.start())
            if path == '/api/docs/stop':
                return self.reply_json(200, docs.stop())
            try:
                message = json.loads(text)
            except json.JSONDecodeError:
                return self.reply(400, b'Bad request')
            if path == '/api/docs/sparse':
                paths = message.get('paths') if isinstance(message, dict) else None
                if not isinstance(paths, list):
                    return self.reply(400, b'Bad request')
                return self.reply_json(200, docs.set_sparse(paths))
            if path == '/api/grammar':
                return self.reply_json(200, docs.grammar(message.get('text') if isinstance(message, dict) else None))
            self.reply_json(200, docs.ask(message))

        def log_message(self, format, *args):
            pass

    return Handler


def find_index() -> Path:
    for candidate in INDEX_CANDIDATES:
        if Path(candidate).is_file():
            return Path(candidate)
    sys.exit('No file given and no index.rst found, run: adoc-gui path/to/file.rst')


def main():
    parser = argparse.ArgumentParser(
        prog='adoc-gui', description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('file', type=Path, nargs='?', help='the .rst file to edit')
    parser.add_argument('--port', type=int, default=8300)
    parser.add_argument('--no-open', action='store_true', help='do not open the browser')
    parser.add_argument('--serve', action='store_true', help='start the documentation server')
    args = parser.parse_args()

    file = (args.file or find_index()).resolve()
    if not file.is_file():
        sys.exit(f'{file} is not a file')
    if not (WEB / 'vendor' / 'tree-sitter-rst.wasm').is_file():
        sys.exit(f"The parser is missing in {WEB / 'vendor'}, run 'make vendor' in the source of adoc-gui")

    docs = Docs(file)
    # The files that can be opened: the ones of the documentation, or of the folder
    root = docs.workspace or file.parent
    server = ThreadingHTTPServer(('127.0.0.1', args.port), make_handler(file, root, docs))
    url = f'http://127.0.0.1:{server.server_address[1]}/'
    print(f'Editing {file}\n{url}', flush=True)
    if docs.problem:
        print(f'Documentation server not available: {docs.problem}', flush=True)
    elif args.serve:
        docs.start()
    if not args.no_open:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        docs.close()


if __name__ == '__main__':
    main()
