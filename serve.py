#!/usr/bin/env python3
"""Doctools GUI: edit a reStructuredText file in the browser.

    python3 serve.py path/to/file.rst [--port 8300] [--no-open]

Serves the page of ./web and gives it one file to read and write.
"""

import argparse
import json
import mimetypes
import os
import sys
import webbrowser
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

WEB = Path(__file__).resolve().parent / 'web'
MAX_SIZE = 16 * 1024 * 1024

mimetypes.add_type('application/wasm', '.wasm')
mimetypes.add_type('text/javascript', '.js')


def make_handler(file: Path):
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

        def file_info(self, with_text=True):
            stat = file.stat()
            info = {'path': str(file), 'name': file.name, 'mtime': stat.st_mtime_ns}
            if with_text:
                info['text'] = file.read_text(encoding='utf-8')
            return info

        def do_GET(self):
            path = self.path.split('?')[0]
            if path == '/api/file':
                # Only the page may read the file, not other sites
                if self.headers.get('X-Doctools') != '1':
                    return self.reply(403, b'Forbidden')
                return self.reply_json(200, self.file_info())

            relative = 'index.html' if path == '/' else path.lstrip('/')
            target = (WEB / relative).resolve()
            if WEB not in target.parents or not target.is_file():
                return self.reply(404, b'Not found')
            content_type = mimetypes.guess_type(target.name)[0] or 'application/octet-stream'
            self.reply(200, target.read_bytes(), content_type)

        def do_PUT(self):
            if self.path.split('?')[0] != '/api/file':
                return self.reply(404, b'Not found')
            if self.headers.get('X-Doctools') != '1':
                return self.reply(403, b'Forbidden')
            length = int(self.headers.get('Content-Length') or 0)
            if length > MAX_SIZE:
                return self.reply(413, b'Too large')
            text = self.rfile.read(length).decode('utf-8')
            temporary = file.with_name(f'.{file.name}.doctools-tmp')
            temporary.write_text(text, encoding='utf-8')
            os.replace(temporary, file)
            self.reply_json(200, self.file_info(with_text=False))

        def log_message(self, format, *args):
            pass

    return Handler


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument('file', type=Path, help='the .rst file to edit')
    parser.add_argument('--port', type=int, default=8300)
    parser.add_argument('--no-open', action='store_true', help='do not open the browser')
    args = parser.parse_args()

    file = args.file.resolve()
    if not file.is_file():
        sys.exit(f'{file} is not a file')
    if not (WEB / 'vendor' / 'tree-sitter-rst.wasm').is_file():
        sys.exit("The parser is missing, run 'make vendor' first")

    server = ThreadingHTTPServer(('127.0.0.1', args.port), make_handler(file))
    url = f'http://127.0.0.1:{server.server_address[1]}/'
    print(f'Editing {file}\n{url}', flush=True)
    if not args.no_open:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
