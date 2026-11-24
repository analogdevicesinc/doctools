"""The .rst files of the documentation: make one, rename or move it, delete
it. Only files below the root, by their path relative to it."""

from __future__ import annotations

import os
import re
from pathlib import Path, PurePosixPath


TRAILING = re.compile(r'[ \t]+(?=\n|$)')


def sanitize(text: str) -> str:
    """A text as it is saved: without the spaces at the end of its lines."""
    return TRAILING.sub('', text)


def sanitize_file(file: Path) -> bool:
    """Remove the spaces at the end of the lines of a file, True when it had
    some. Not of what is not text."""
    try:
        text = file.read_text(encoding='utf-8')
    except (OSError, UnicodeDecodeError):
        return False
    clean = sanitize(text)
    if clean == text:
        return False
    temporary = file.with_name(f'.{file.name}.doctools-tmp')
    temporary.write_text(clean, encoding='utf-8')
    os.replace(temporary, file)
    return True


class FileError(Exception):
    """What keeps a file from being made, moved or deleted, for the page."""


def inside(root: Path, relative) -> Path:
    """The path of a .rst file of the root, that is there or not. The files
    and folders whose name starts with '.' or '_' are not shown, and so not
    made."""
    if not isinstance(relative, str) or not relative.strip():
        raise FileError('No name')
    parts = PurePosixPath(relative.strip().replace('\\', '/')).parts
    if not parts or any(part in ('/', '..', '.') or part.startswith(('.', '_')) or part != part.strip()
                        for part in parts):
        raise FileError(f'Not a name for a file: {relative}')
    if not parts[-1].endswith('.rst') or parts[-1] == '.rst':
        raise FileError('The name of a file ends with .rst')
    target = root.joinpath(*parts)
    # Not through a link that leaves the root
    if root != target.parent.resolve() and root not in target.parent.resolve().parents:
        raise FileError(f'Not in the documentation: {relative}')
    return target


def existing(root: Path, relative) -> Path:
    target = inside(root, relative)
    if not target.is_file():
        raise FileError(f'No such file: {relative}')
    return target


def free(root: Path, relative) -> Path:
    target = inside(root, relative)
    if target.exists() or target.is_symlink():
        raise FileError(f'{target.relative_to(root).as_posix()} is already there')
    return target


def tidy(root: Path, folder: Path):
    """Remove the folders that a file left empty."""
    while folder != root and root in folder.parents:
        try:
            folder.rmdir()
        except OSError:
            return
        folder = folder.parent


def title_of(name: str) -> str:
    words = name.removesuffix('.rst').replace('-', ' ').replace('_', ' ').strip()
    return (words[:1].upper() + words[1:]) or 'Title'


def new_file(root: Path, relative) -> Path:
    """A new file, with a title from its name: its folders are made."""
    target = free(root, relative)
    title = title_of(target.name)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        with open(target, 'x', encoding='utf-8') as file:
            file.write(f'{title}\n{"=" * len(title)}\n')
    except OSError as err:
        raise FileError(err.strerror or str(err)) from err
    return target


def move_file(root: Path, relative, to) -> Path:
    """Rename a file, or move it to another folder, which is made."""
    source = existing(root, relative)
    target = free(root, to)
    try:
        target.parent.mkdir(parents=True, exist_ok=True)
        os.rename(source, target)
    except OSError as err:
        raise FileError(err.strerror or str(err)) from err
    tidy(root, source.parent)
    return target


def delete_file(root: Path, relative) -> Path:
    source = existing(root, relative)
    try:
        source.unlink()
    except OSError as err:
        raise FileError(err.strerror or str(err)) from err
    tidy(root, source.parent)
    return source


# What is not listed among the images to choose: the build, the tools
HIDDEN_FOLDERS = {'node_modules', 'venv', 'env', '__pycache__'}
MAX_ENTRIES = 400


def image_entries(root: Path, folder: Path, top: Path, typed: str, suffixes) -> dict:
    """The folders and the images to choose from for an image path being
    typed: in the folder of what is typed, relative to folder, or to top
    when it starts with '/' (the folder of conf.py). { dirs, files, up },
    up: whether '..' is still in root. Nothing out of root."""
    head = typed.rpartition('/')[0]
    base = top if typed.startswith('/') else folder
    where = (base / head.lstrip('/')).resolve()
    none = {'dirs': [], 'files': [], 'up': False}
    if where != root and root not in where.parents:
        return none
    try:
        entries = sorted(os.scandir(where), key=lambda entry: entry.name.lower())
    except OSError:
        return none
    dirs, files = [], []
    for entry in entries:
        name = entry.name
        if name.startswith('.') or name in HIDDEN_FOLDERS:
            continue
        try:
            if entry.is_dir():
                dirs.append(name)
            elif Path(name).suffix.lower() in suffixes:
                files.append(name)
        except OSError:
            continue
        if len(dirs) + len(files) >= MAX_ENTRIES:
            break
    return {'dirs': dirs, 'files': files, 'up': where != root and not typed.startswith('/')}
