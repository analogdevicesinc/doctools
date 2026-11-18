"""Usage: setup_skills.py <clone dir> <settings.json>

Clones PI_SKILLS entries and adds them to settings.json skills.
"""

import json
import re
import shlex
import subprocess
import sys
from fnmatch import fnmatchcase
from os import environ, path


def split_remote(remote):
    # The ref follows the first '@' after any 'scheme://host/' or 'user@host:'.
    m = re.match(r"[a-z][\w+.-]*://[^/]*/|[^/:]+@[^/:]+:", remote, re.I)
    prefix = m.group(0) if m else "https://github.com/"
    repo, _, ref = remote[len(m.group(0)) if m else 0:].partition("@")
    return prefix + repo, ref


clone_dir, settings_file = sys.argv[1:]
clones = {}
paths = []
for line in environ.get("PI_SKILLS", "").splitlines():
    fields = dict(t.partition("=")[::2] for t in shlex.split(line, comments=True))
    if not fields:
        continue
    keys = fields.keys()
    if {"remote", "skill"} - keys or {k for k in keys if not k.startswith("if_")} - {"remote", "skill"}:
        sys.exit(f"::error ::setup_skills: expected remote, skill and if_* keys: {line}")
    if not all(fnmatchcase(environ.get(k[3:], ""), v)
               for k, v in fields.items() if k.startswith("if_")):
        print(f"skip {line}")
        continue

    url, ref = split_remote(fields["remote"])
    if (url, ref) not in clones:
        clones[url, ref] = path.join(clone_dir, str(len(clones)))
        subprocess.run(["git", "clone", "--depth=1", "--filter=blob:none", "--sparse",
                        *(["--branch", ref] if ref else []), url, clones[url, ref]],
                       check=True)
    subprocess.run(["git", "-C", clones[url, ref], "sparse-checkout", "add", fields["skill"]],
                   check=True)
    paths.append(path.abspath(path.join(clones[url, ref], fields["skill"])))
    print(f"add {fields['skill']}: {paths[-1]} -> {settings_file}")

with open(settings_file) as f:
    settings = json.load(f)
settings["skills"] = settings.get("skills", []) + paths
with open(settings_file, "w") as f:
    json.dump(settings, f, indent=4)
