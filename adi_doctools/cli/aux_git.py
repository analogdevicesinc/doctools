import subprocess
from click import echo


def get_git_top_level(path_):
    """
    Return absolute path of git repository, or None on failure.
    """
    p_ = subprocess.run("git rev-parse --show-toplevel", shell=True,
                        capture_output=True, cwd=path_)
    if p_.returncode != 0:
        echo(p_.stderr)
        return None

    return p_.stdout.decode("utf-8").strip()


def is_git_lfs_installed():
    """
    Check if git lfs is installed.
    """
    p_ = subprocess.run(["which", "git-lfs"],
                        capture_output=True)
    if p_.returncode != 0:
        return False

    return True

