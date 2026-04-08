"""
Vectorize Sphinx documentation for browser-based vector search.

For each HTML page in the docs directory, extracts Sphinx <section> elements,
embeds them with all-MiniLM-L6-v2 (384-dim), and compresses with TurboQuant.

  adoc doc2vector --docs <root> --version <ver> [--output <path>]
  adoc doc2vector --docs /data/repos/documentation/gh-pages --version . \
                  --output demo/data
"""

import importlib
import ctypes
import json
import logging
import os
import struct
import sys
from concurrent.futures import ProcessPoolExecutor, as_completed
from pathlib import Path

import numpy as np

from .argument_parser import get_arguments_doc2vector
from .aux_html2chunk import HTMLToChunks

logger = logging.getLogger(__name__)

DIM = 384
SEED = 42
BATCH_SIZE = 32


def detect_versions(root):
    versions = Path(root).rglob('objects.inv')
    versions = [Path.relative_to(p, root).parents[0] for p in versions]

    logger.info(f"got {len(versions)} versions")

    return versions


def find_html_files(directory, version, ignore_paths):
    pages = (directory / version).rglob('*.html')
    i_ = str(directory / version)

    ignore_paths = [ str(directory / i) for i in ignore_paths ]
    include_pages = []
    for p in pages:
        ignore = False
        if p.name.startswith('_'):
            ignore = True
        elif any(str(p).startswith(i) and i.startswith(i_) for i in ignore_paths):
            ignore = True
        if not ignore:
            include_pages.append(p)

    logger.info("got %d pages", len(include_pages))
    return include_pages


def _extract_chunks_worker(args):
    html_path, docs_root = args
    return html_path, HTMLToChunks(html_path, docs_root,
                                     max_text_chars=1000) # ~250 tokens

class TurboQuant:
    def __init__(self, wasm_path, dim, seed):
        import wasmtime

        self.dim = dim
        self.seed = seed

        self._engine = wasmtime.Engine()
        self._store = wasmtime.Store(self._engine)
        module = wasmtime.Module.from_file(self._engine, str(wasm_path))
        self._instance = wasmtime.Instance(self._store, module, [])

        ex = self._instance.exports(self._store)
        self._mem = ex["memory"]
        self._create = ex["tq_engine_create"]
        self._destroy = ex["tq_engine_destroy"]
        self._encode = ex["tq_encode"]
        self._free = ex["tq_free"]
        self._alloc = ex["tq_alloc"]

        self._handle = self._create(self._store, dim, seed)
        if self._handle < 0:
            raise RuntimeError(f"Failed to create engine (dim={dim}, seed={seed})")

        self._vec_ptr = self._alloc(self._store, dim * 4)
        self._out_len_ptr = self._alloc(self._store, 4)
        if not self._vec_ptr or not self._out_len_ptr:
            raise RuntimeError("WASM alloc failed")

    def _get_mem(self):
        ptr = self._mem.data_ptr(self._store)
        length = self._mem.data_len(self._store)
        return (ctypes.c_ubyte * length).from_address(
            ctypes.addressof(ptr.contents)
        )

    def encode(self, vector):
        if len(vector) != self.dim:
            raise ValueError(f"Expected {self.dim} dims, got {len(vector)}")

        vec_bytes = np.asarray(vector, dtype=np.float32).tobytes()
        mem = self._get_mem()
        mem[self._vec_ptr:self._vec_ptr + len(vec_bytes)] = vec_bytes

        result_ptr = self._encode(
            self._store, self._handle, self._vec_ptr, self.dim, self._out_len_ptr
        )
        if not result_ptr:
            raise RuntimeError("TurboQuant: encode failed")

        mem = self._get_mem()
        out_len = struct.unpack("<I", bytes(mem[self._out_len_ptr:self._out_len_ptr + 4]))[0]
        compressed = bytes(mem[result_ptr:result_ptr + out_len])

        self._free(self._store, result_ptr, out_len)
        return compressed

    def destroy(self):
        if self._handle >= 0:
            self._free(self._store, self._vec_ptr, self.dim * 4)
            self._free(self._store, self._out_len_ptr, 4)
            self._destroy(self._store, self._handle)
            self._handle = -1


def write_tqv(output_path, blobs, num_vectors, bytes_per_vector):
    header = bytearray(17)
    header[0:4] = b"TQV\x00"
    header[4] = 1  # version
    struct.pack_into("<I", header, 5, num_vectors)
    struct.pack_into("<H", header, 9, DIM)
    struct.pack_into("<I", header, 11, SEED)
    struct.pack_into("<H", header, 15, bytes_per_vector)

    body = bytearray(num_vectors * bytes_per_vector)
    for i, blob in enumerate(blobs):
        offset = i * bytes_per_vector
        body[offset:offset + len(blob)] = blob

    with open(output_path, "wb") as f:
        f.write(header)
        f.write(body)


def embed_chunks(chunks, model):
    texts = [c["chunk"] for c in chunks]
    vectors = []

    for i in range(0, len(texts), BATCH_SIZE):
        batch = texts[i:i + BATCH_SIZE]
        embeddings = model.encode(batch, normalize_embeddings=True, show_progress_bar=False)
        for emb in embeddings:
            vectors.append(np.asarray(emb, dtype=np.float32))

        done = min(i + BATCH_SIZE, len(texts))
        print(f"\r  {done}/{len(texts)}", end="", flush=True)

    print()
    return vectors


def doc2vector():
    args = get_arguments_doc2vector()

    if not importlib.util.find_spec("sentence_transformers"):
        logger.error("Package 'sentence_transformers' required.")
        return

    if not importlib.util.find_spec("wasmtime"):
        logger.error("Package 'wasmtime' required.")
        return

    wasm_path = Path(args.wasm)
    if not wasm_path.exists():
        logger.error("File 'turboquant.wasm' does not exist.")
        return

    from sentence_transformers import SentenceTransformer

    root = Path(args.docs).resolve()
    version = Path(args.version)

    all_versions = detect_versions(root)
    if not all_versions:
        logger.error("No objects.inv found under %s", root)
        sys.exit(1)

    if version not in all_versions:
        logger.error("Version '%s' not found", version)
        sys.exit(1)

    docs_root = root / version

    ignore_paths = all_versions
    ignore_paths.remove(version)

    output_dir = Path(args.output).resolve()

    script_dir = Path(__file__).resolve().parents[0].parent.parent

    logger.info("root:      %s", root)
    logger.info("version:   %s", version)
    logger.info("output:    %s", output_dir)

    html_files = find_html_files(root, version, ignore_paths)

    chunks = []
    work_items = [(f, docs_root) for f in html_files]

    with ProcessPoolExecutor(max_workers=args.workers) as pool:
        futures = {pool.submit(_extract_chunks_worker, item): item for item in work_items}
        for future in as_completed(futures):
            html_path, page_chunks = future.result()
            chunks.extend(page_chunks)

    logger.info("got %d chunks", len(chunks))

    if not chunks:
        sys.exit(1)

    model_cache = script_dir / "model"
    if model_cache.is_dir():
        logger.info("loading transformer from cache")
        model = SentenceTransformer(str(model_cache))
    else:
        logger.info("downloading transformer")
        model = SentenceTransformer("all-MiniLM-L6-v2")
        model.save(str(model_cache))
    vectors = embed_chunks(chunks, model)

    logger.info("start wasm turboquant")
    tq = TurboQuant(wasm_path, dim=DIM, seed=SEED)

    first_blob = tq.encode(vectors[0])
    bytes_per_vector = len(first_blob)
    compression_ratio = (DIM * 4) / bytes_per_vector
    logger.info("compress %d vectors (%d bytes each, %.1fx compression)",
                len(chunks), bytes_per_vector, compression_ratio)

    blobs = [first_blob]
    for i in range(1, len(vectors)):
        blobs.append(tq.encode(vectors[i]))
        print(f"\r  {i + 1}/{len(vectors)}", end="", flush=True)
    print()
    tq.destroy()

    os.makedirs(output_dir, exist_ok=True)

    tqv_path = os.path.join(output_dir, "embeddings-minilml6-dim384.bin")
    write_tqv(tqv_path, blobs, len(chunks), bytes_per_vector)

    passages_path = os.path.join(output_dir, "passages.json")
    passages = {
        "text": [c["text"] for c in chunks],
        "url": [c["url"] for c in chunks],
        "hierarchy": [[*c["breadcrumb"], *c["headings"]] for c in chunks],
    }
    with open(passages_path, "w", encoding="utf-8") as f:
        json.dump(passages, f, indent=2)

    raw_mb = (len(chunks) * DIM * 4) / 1e6
    comp_mb = (17 + len(chunks) * bytes_per_vector) / 1e6
    logger.info("raw:         %.2f MB", raw_mb)
    logger.info("compressed:  %.2f MB (%.1fx)", comp_mb, compression_ratio)

