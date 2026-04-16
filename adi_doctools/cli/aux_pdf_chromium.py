"""
PDF generation using chromium in headless mode.
"""

import logging
import subprocess
from os import path
from shutil import which

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

    err_msg =("No Chromium browser found. "
              f"Searched for: {' '.join(sys_chrome)} {' '.join(flatpak_chrome)}")

    return None, None, err_msg


def generate_pdf_from_html(html_file, output_pdf):
    exe, extra_args, err = find_chromium()
    if err is not None:
        raise RuntimeError(err)

    html_path = path.abspath(html_file)
    pdf_path  = path.abspath(output_pdf)
    file_url  = f"file://{html_path}"

    cmd = [exe] + extra_args + [
        f"--print-to-pdf={pdf_path}",
        "--headless",
        "--no-pdf-header-footer",
        "--run-all-compositor-stages-before-draw",
        "--virtual-time-budget=5000",
        file_url,
    ]

    logger.debug(' '.join(cmd))
    result = subprocess.run(cmd, capture_output=True, text=True)
    if result.returncode != 0:
        raise RuntimeError(f"{exe} exited with {result.returncode}:\n{result.stderr}")
