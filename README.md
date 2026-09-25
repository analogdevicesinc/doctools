# doctools-docling

Converts PDFs published on [analog.com](https://www.analog.com) into Markdown
with [docling](https://github.com/docling-project/docling), so the text can be
indexed/searched together with the rest of the documentation tooling.

The Markdown output is committed to this repository under
`media/en/.../<name>.md`, mirroring the URL path of the source PDF. PDFs
themselves are *not* committed (`*.pdf` is ignored); they are deleted right
after a successful conversion.

## Requirements

- Python 3.10+ with `docling` and `curl_cffi` installed (a local `.venv` is the
  usual setup).
- `wget` in `$PATH`.

## Usage

```sh
python sitemap_to_md.py            # fetch PDFs with wget
python sitemap_to_md.py --browser  # fetch PDFs with a browser
```

### How it works

1. `en-pdf-sitemap.xml` is downloaded from
   `https://www.analog.com/media/en/en-pdf-sitemap.xml` if it is not present
   locally (delete the file to force a refresh).
2. Every `<url>` entry is filtered by:
   - `cutoff_date` — `lastmod` older than this is ignored,
   - `include_paths` — the URL must contain one of these path fragments
     (e.g. `/data-sheets/`),
   - `blacklist` — file names that are known to break conversion,
   - `allowlist` — when non-empty, *only* those file names are processed.
3. Documents whose `.md` already exists and whose first line
   (`<!-- lastmod YYYY-MM-DD -->`) matches the sitemap `lastmod` are skipped;
   everything else is (re)downloaded and converted.
4. Conversion tries the docling backends in order (`dlparse_v4`, `dlparse_v1`,
   `pypdfium2`) and keeps the first successful result.

## Performance

docling is very CPU heavy (minutes per document; tune `max_docling_workers`). A
GPU is much faster and is used automatically if PyTorch sees one, but getting a
matching PyTorch/CUDA-or-ROCm/driver stack working is often more trouble than
letting the CPU run overnight.

## Converting PDFs that are not in the sitemap yet

`en-pdf-sitemap.xml` on analog.com is only regenerated about once a month, so
freshly published documents cannot be discovered by the script. To convert them
before the sitemap catches up, temporarily patch the two inputs locally.

1. Add the document(s) to the local `en-pdf-sitemap.xml`, just before the
   closing `</urlset>`. Use the real URL and the document's revision/release
   date as `lastmod` (any ISO date newer than `cutoff_date` works; using the
   real date avoids a pointless reconversion later):

   ```xml
     <url>
       <loc>https://www.analog.com/media/en/technical-documentation/data-sheets/adsp-2184x-adsp-sc84x.pdf</loc>
       <lastmod>2026-06-16</lastmod>
     </url>
     <url>
       <loc>https://www.analog.com/media/en/dsp-documentation/processor-manuals/adsp-2184x-adsp-sc84x-hrm.pdf</loc>
       <lastmod>2026-06-16</lastmod>
     </url>
   ```

2. In `sitemap_to_md.py`, make sure the URL path is covered by `include_paths`
   and restrict the run to the new files via `allowlist`:

   ```python
   include_paths = ["/data-sheets/", "/dsp-documentation/processor-manuals/"]

   allowlist = [
       "adsp-2184x-adsp-sc84x.pdf",
       "adsp-2184x-adsp-sc84x-hrm.pdf",
   ]
   ```

   The `allowlist` is only a convenience, but without it the script will also
   pick up every other document that is out-of-date, which takes hours.

3. Run the conversion (add `--browser` if the download is blocked):

   ```sh
   python sitemap_to_md.py --browser
   ```

4. Commit **only** the generated Markdown files. Revert the local edits to
   `en-pdf-sitemap.xml` and `sitemap_to_md.py` — the sitemap is replaced wholesale
   on the next refresh, and a leftover `allowlist` silently disables normal runs:

   ```sh
   git add media
   git checkout -- en-pdf-sitemap.xml sitemap_to_md.py
   ```

   The committed `.md` already carries the `lastmod` comment, so once the
   document appears in the official sitemap with the same date, it is treated as
   up-to-date and is not converted again.
