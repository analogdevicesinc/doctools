import subprocess
import shutil
from os import path


def get_git_top_level(path_):
    """
    Return absolute path of git repository, or None on failure.
    """
    p_ = subprocess.run("git rev-parse --show-toplevel", shell=True,
                        capture_output=True, cwd=path_)
    if p_.returncode != 0:
        print(p_.stderr)
        return None

    return p_.stdout.decode("utf-8").strip()

def get_git_dir(path_):
    """
    Return absolute path of git directory, with support to worktrees.
    """
    if git_top_level := get_git_top_level(path_):
        git_ = path.join(git_top_level, '.git')
        if path.isfile(git_):
            # Is worktree
            with open(git_) as f:
                line = f.readline().strip()
                if not line.startswith('gitdir: '):
                    return None
                return line[len('gitdir: '):]
        return path.join(git_top_level, '.git')
    return None

def is_git_lfs_installed():
    """
    Check if git lfs is installed.
    """
    return shutil.which("git-lfs") is not None

def get_lfs_sha(path_):
    """
    Check if the file is a git lfs pointer.
    If so, returns the sha, if not, return false.
    """
    if path.isfile(path_):
        with open(path_, 'rb') as f:
            if (f.read(54) == b"version https://git-lfs.github.com/spec/v1\noid sha256:"):
                return f.read(64)
    return False
