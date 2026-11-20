"""What git knows of the files of the documentation, by running git.

The page shows the branch, which files changed, the lines of the open file
that changed since the last commit, and commits a file.
"""

from __future__ import annotations

import shutil
import subprocess
from pathlib import Path

TIMEOUT = 15

# The letters of 'git status --porcelain', as what happened to the file
STATES = {'M': 'modified', 'T': 'modified', 'A': 'added', 'R': 'renamed', 'C': 'added', 'D': 'deleted', 'U': 'conflict'}


def git(cwd: Path, *args: str, check: bool = True) -> str | None:
    """The output of git, None when it fails or there is no git."""
    if shutil.which('git') is None:
        return None
    try:
        done = subprocess.run(['git', '-C', str(cwd), *args], capture_output=True, text=True, encoding='utf-8',
                              errors='replace', timeout=TIMEOUT, stdin=subprocess.DEVNULL)
    except (OSError, subprocess.TimeoutExpired):
        return None
    if check and done.returncode != 0:
        return None
    return done.stdout


def parse_diff(text: str) -> list[dict]:
    """The files of a unified diff: [{ path, header, hunks: [{ header, lines }] }].
    header: the lines before the first hunk, to apply a hunk alone."""
    files: list[dict] = []
    current = None
    hunk = None
    for line in text.split('\n'):
        if line.startswith('diff --git '):
            current = {'path': None, 'header': [line], 'hunks': [], 'binary': False}
            files.append(current)
            hunk = None
            continue
        if current is None:
            continue
        if hunk is None and not line.startswith('@@'):
            current['header'].append(line)
            if line.startswith('+++ '):
                target = line[4:]
                current['path'] = target[2:] if target.startswith('b/') else None
            elif line.startswith('--- ') and current['path'] is None:
                source = line[4:]
                if source.startswith('a/'):
                    current['path'] = source[2:]
            elif line.startswith('Binary files'):
                current['binary'] = True
            continue
        if line.startswith('@@'):
            hunk = {'header': line, 'lines': []}
            current['hunks'].append(hunk)
            continue
        if line[:1] in (' ', '+', '-', '\\'):
            hunk['lines'].append(line)
    # A deleted file has /dev/null as its new name
    for file in files:
        if file['path'] is None:
            for line in file['header']:
                if line.startswith('--- a/'):
                    file['path'] = line[6:]
    return files


class Git:
    """The repository of the files of the editor. root: the folder of the files"""

    def __init__(self, root: Path):
        self.root = root
        top = git(root, 'rev-parse', '--show-toplevel')
        self.top = Path(top.strip()).resolve() if top else None

    @property
    def available(self) -> bool:
        return self.top is not None

    def _relative(self, file: Path) -> str:
        return file.resolve().relative_to(self.top).as_posix()

    def status(self) -> dict:
        """{ branch, files: { path from the root: state } }"""
        if not self.top:
            return {'branch': None, 'files': {}}
        branch = git(self.top, 'rev-parse', '--abbrev-ref', 'HEAD')
        if branch is not None and branch.strip() == 'HEAD':
            short = git(self.top, 'rev-parse', '--short', 'HEAD')
            branch = f'detached at {short.strip()}' if short else 'detached'
        out = git(self.top, 'status', '--porcelain=v1', '-z', '--untracked-files=all', '--', str(self.root)) or ''
        files = {}
        entries = out.split('\0')
        i = 0
        while i < len(entries):
            entry = entries[i]
            i += 1
            if len(entry) < 4:
                continue
            code, path = entry[:2], entry[3:]
            # A rename gives the old path after the new one
            if 'R' in code or 'C' in code:
                i += 1
            if code == '??':
                state = 'untracked'
            else:
                letter = code[1] if code[1] != ' ' else code[0]
                state = STATES.get(letter, 'modified')
            try:
                relative = (self.top / path).resolve().relative_to(self.root.resolve()).as_posix()
            except ValueError:
                continue
            files[relative] = state
        return {'branch': branch.strip() if branch else None, 'files': files, 'staged': self.staged()}

    def _diff(self, staged: bool) -> list[dict]:
        args = ['diff', '--no-color', '--no-ext-diff', '-U3', '--src-prefix=a/', '--dst-prefix=b/']
        if staged:
            args.append('--cached')
        out = git(self.top, *args, '--', str(self.root)) or ''
        return parse_diff(out)

    def _from_root(self, path: str) -> str | None:
        try:
            return (self.top / path).resolve().relative_to(self.root.resolve()).as_posix()
        except ValueError:
            return None

    def changes(self) -> dict:
        """What is not staged and what is staged: { unstaged, staged, untracked },
        unstaged and staged: [{ path, hunks: [{ header, lines }] }], path from the root"""
        if not self.top:
            return {'unstaged': [], 'staged': [], 'untracked': []}
        def files(staged):
            out = []
            for file in self._diff(staged):
                path = self._from_root(file['path']) if file['path'] else None
                if path is None:
                    continue
                out.append({'path': path, 'binary': file['binary'],
                            'hunks': [{'header': h['header'], 'lines': h['lines']} for h in file['hunks']]})
            return out
        untracked = [path for path, state in self.status()['files'].items() if state == 'untracked']
        return {'unstaged': files(False), 'staged': files(True), 'untracked': untracked}

    def stage(self, path: str, hunk: int | None, staged: bool, header: str | None = None) -> dict:
        """Stage a hunk of the changes of a file (unstage it when staged),
        all of them when hunk is None. header: the one the page saw, the hunk
        is not applied if it changed meanwhile."""
        if not self.top:
            return {'error': 'not a git repository'}
        file = (self.root / path).resolve()
        if self.root.resolve() not in file.parents:
            return {'error': 'the file is not in the documentation'}
        try:
            relative = self._relative(file)
        except ValueError:
            return {'error': 'the file is not in the repository'}
        if hunk is None:
            args = ['restore', '--staged', '--', relative] if staged else ['add', '--', relative]
            done = subprocess.run(['git', '-C', str(self.top), *args], capture_output=True, text=True,
                                  timeout=TIMEOUT, stdin=subprocess.DEVNULL)
            if done.returncode != 0 and staged:
                # Before the first commit there is nothing to restore from
                done = subprocess.run(['git', '-C', str(self.top), 'rm', '--cached', '-q', '--', relative],
                                      capture_output=True, text=True, timeout=TIMEOUT, stdin=subprocess.DEVNULL)
            return {'error': done.stderr.strip()} if done.returncode != 0 else {'output': 'done'}

        diff = next((f for f in self._diff(staged) if f['path'] == relative), None)
        if diff is None or not isinstance(hunk, int) or not 0 <= hunk < len(diff['hunks']):
            return {'error': 'the change is not there anymore'}
        chosen = diff['hunks'][hunk]
        if header is not None and chosen['header'] != header:
            return {'error': 'the change is not there anymore'}
        patch = '\n'.join([*diff['header'], chosen['header'], *chosen['lines']]) + '\n'
        args = ['git', '-C', str(self.top), 'apply', '--cached', '--recount', '--whitespace=nowarn']
        if staged:
            args.append('-R')
        done = subprocess.run([*args, '-'], input=patch, capture_output=True, text=True, timeout=TIMEOUT)
        if done.returncode != 0:
            return {'error': done.stderr.strip() or 'git apply failed'}
        return {'output': 'done'}

    def discard(self, path: str, hunk, header: str | None = None) -> dict:
        """Throw away a change that is not staged: the file goes back to what
        is staged, or committed, for that change."""
        if not self.top:
            return {'error': 'not a git repository'}
        file = (self.root / path).resolve()
        if self.root.resolve() not in file.parents:
            return {'error': 'the file is not in the documentation'}
        try:
            relative = self._relative(file)
        except ValueError:
            return {'error': 'the file is not in the repository'}
        diff = next((f for f in self._diff(False) if f['path'] == relative), None)
        if diff is None or not isinstance(hunk, int) or not 0 <= hunk < len(diff['hunks']):
            return {'error': 'the change is not there anymore'}
        chosen = diff['hunks'][hunk]
        if header is not None and chosen['header'] != header:
            return {'error': 'the change is not there anymore'}
        patch = '\n'.join([*diff['header'], chosen['header'], *chosen['lines']]) + '\n'
        done = subprocess.run(['git', '-C', str(self.top), 'apply', '-R', '--recount', '--whitespace=nowarn', '-'],
                              input=patch, capture_output=True, text=True, timeout=TIMEOUT)
        if done.returncode != 0:
            return {'error': done.stderr.strip() or 'git apply failed'}
        return {'output': 'done'}

    def head(self, file: Path) -> str | None:
        """The text of the file in the last commit, None when it is not in it."""
        if not self.top:
            return None
        try:
            relative = self._relative(file)
        except ValueError:
            return None
        return git(self.top, 'show', f'HEAD:{relative}')

    def staged(self) -> bool:
        """Whether something is staged"""
        if not self.top:
            return False
        done = subprocess.run(['git', '-C', str(self.top), 'diff', '--cached', '--quiet'], capture_output=True,
                              timeout=TIMEOUT, stdin=subprocess.DEVNULL)
        return done.returncode == 1

    def commit(self, message: str, signoff: bool = False) -> dict:
        """Commit what is staged, with the message; signoff: with a
        Signed-off-by line (git commit -s). { output } or { error }"""
        if not self.top:
            return {'error': 'not a git repository'}
        if not isinstance(message, str) or not message.strip():
            return {'error': 'the message is empty'}
        if not self.staged():
            return {'error': 'nothing is staged'}
        args = ['git', '-C', str(self.top), 'commit', '-q', *(['-s'] if signoff else []), '-m', message.strip()]
        done = subprocess.run(args, capture_output=True, text=True, timeout=60, stdin=subprocess.DEVNULL)
        if done.returncode != 0:
            return {'error': (done.stderr or done.stdout).strip() or 'git commit failed'}
        short = git(self.top, 'log', '-1', '--format=%h %s')
        return {'output': short.strip() if short else 'committed'}
