import sys
import json

from ..role.common import GitRole
from ..role.common import adi_resolve

def handle_cmd(cmd: dict) -> dict:
    if 'role' in cmd and 'title' in cmd and 'target' in cmd:
        role = cmd['role']
        title = cmd['title']
        target = cmd['target']

        if role.startswith('downgit-') or role.startswith('git-'):
            target, title = GitRole.resolve(role, title, target, role.startswith('downgit-'))
        elif role == 'adi':
            target, title = adi_resolve(title, target)

        return { 'target': target, 'title': title }

    return {'error': 'Unknown command'}

for line in sys.stdin:
    line = line.strip()
    if not line:
        continue

    try:
        cmd = json.loads(line)
        response = handle_cmd(cmd)
        print(json.dumps(response), flush=True)
    except json.JSONDecodeError:
        print(json.dumps({'error': 'Invalid JSON'}), flush=True)
