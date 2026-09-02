from __future__ import annotations

from datetime import datetime, timezone
from os import path
from typing import TYPE_CHECKING
from xml.sax.saxutils import escape

from packaging.version import Version
from sphinx import __version__ as __sphinx_version__
from sphinx.util import logging

if TYPE_CHECKING:
    from sphinx.application import Sphinx
    from sphinx.util.typing import ExtensionMetadata

logger = logging.getLogger(__name__)

sitemap_ns = "http://www.sitemaps.org/schemas/sitemap/0.9"


def build_finished_sitemap(app: Sphinx, exc: Exception | None) -> None:
    """
    Write sitemap.xml with the URL of every document of the build.

    'loc' entries are paths relative to the site root (e.g. 'ci/', not
    'https://.../ci/'). The deploy action must patch to an absolute URL,
    including the version <tag>/ and other paths like 'pull/<ci>/'.

    Based on: https://github.com/jdillard/sphinx-sitemap
    """
    if exc or app.builder.name not in ("html", "dirhtml"):
        return

    entries = []

    for docname in sorted(app.env.found_docs):
        if docname not in app.env.all_docs:
            continue

        loc = app.builder.get_target_uri(docname)

        lastmod = None
        mtime = app.env.all_docs.get(docname)
        if mtime:
            if Version(__sphinx_version__) >= Version("7.1.0"):
                mtime = mtime / 1_000_000
            lastmod = datetime.fromtimestamp(mtime, tz=timezone.utc).strftime("%Y-%m-%d")

        entries.append((loc, lastmod))

    out_file = path.join(app.builder.outdir, "sitemap.xml")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write("<?xml version='1.0' encoding='utf-8'?>\n")
        f.write(f'<urlset xmlns="{sitemap_ns}">')
        for loc, lastmod in entries:
            f.write(f"<url><loc>{escape(loc)}</loc>")
            if lastmod:
                f.write(f"<lastmod>{lastmod}</lastmod>")
            f.write("</url>")
        f.write("</urlset>")
    logger.debug(f"adi_doctools: generated sitemap.xml with {len(entries)} urls")


def setup(app: Sphinx) -> ExtensionMetadata:
    app.connect("build-finished", build_finished_sitemap)

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
