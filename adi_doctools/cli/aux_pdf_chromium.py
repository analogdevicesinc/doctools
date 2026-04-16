"""
PDF generation using chromium in headless mode.
"""

import base64
import json
import logging
import subprocess
import time
import urllib.request
from os import path
from shutil import which

import websocket

logger = logging.getLogger(__name__)


def find_chromium():
    sys_chrome = ("chromium", "google-chrome")
    flatpak_chrome = ("com.google.Chrome", "com.google.Chrome")

    for name in sys_chrome:
        if which(name):
            return name, [], None

    if which("flatpak"):
        for pack in flatpak_chrome:
            result = subprocess.run(
                ["flatpak", "info", pack],
                capture_output=True
            )
            if result.returncode == 0:
                return ["flatpak", pack, None]

def _cdp_send(ws, method, params=None, _counter=[0]):
    _counter[0] += 1
    msg = {"id": _counter[0], "method": method}
    if params:
        msg["params"] = params
    ws.send(json.dumps(msg))
    return _counter[0]


def _cdp_recv(ws, msg_id=None, console_match=None):
    """Wait for a specific message id or a console log containing a string."""
    while True:
        data = json.loads(ws.recv())
        if msg_id and data.get("id") == msg_id:
            return data
        if console_match and data.get("method") == "Runtime.consoleAPICalled":
            for a in data["params"].get("args", []):
                if console_match in str(a.get("value", "")):
                    return data
    return None


def generate_pdf_from_html(html_file, output_pdf):
    exe, extra_args, err = find_chromium()
    if err is not None:
        raise RuntimeError(err)

    port = 9222
    file_url = f"file://{path.abspath(html_file)}"
    pdf_path = path.abspath(output_pdf)

    logger.info(f"Running: {exe}")
    proc = subprocess.Popen(
        [exe] + extra_args + [
            "--headless",
            f"--remote-debugging-port={port}",
            "--no-first-run", "--disable-gpu",
            "--disable-extensions", "--remote-allow-origins=*",
        ],
        stderr=subprocess.PIPE,
    )

    try:
        # Wait for debugger to be ready
        for _ in range(20):
            time.sleep(0.5)
            try:
                urllib.request.urlopen(f"http://127.0.0.1:{port}/json/version")
                break
            except Exception:
                continue
        else:
            raise RuntimeError("Chromium did not start in time")

        # Connect to page target
        targets = json.loads(
            urllib.request.urlopen(f"http://127.0.0.1:{port}/json/list").read())
        page = next((t for t in targets if t["type"] == "page"), None)
        if page is None:
            page = json.loads(
                urllib.request.urlopen(
                    f"http://127.0.0.1:{port}/json/new?about:blank").read())

        ws = websocket.create_connection(page["webSocketDebuggerUrl"])

        _cdp_send(ws, "Runtime.enable")
        _cdp_send(ws, "Page.enable")
        _cdp_recv(ws, msg_id=2)

        _cdp_send(ws, "Page.navigate", {"url": file_url})

        logger.info("waiting for paged.js to render...")
        _cdp_recv(ws, console_match="PAGEDJS_DONE")

        pid = _cdp_send(ws, "Page.printToPDF", {
            "printBackground": True,
            "preferCSSPageSize": True,
            "displayHeaderFooter": False,
        })
        resp = _cdp_recv(ws, msg_id=pid)
        if resp is None or "result" not in resp:
            raise RuntimeError(f"Page.printToPDF failed: {resp}")

        with open(pdf_path, "wb") as f:
            f.write(base64.b64decode(resp["result"]["data"]))

        ws.close()
    finally:
        proc.terminate()
        proc.wait()
