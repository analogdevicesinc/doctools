import logging as logging_

import sys
import json

from .logging import set_logging
from ..role.common import GitRole
from ..role.common import adi_resolve

from ..cli.serve import Serve

logger = logging_.getLogger(__name__)

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
    elif 'server' in cmd:
        if cmd['server'] == 'start':
            Serve.start(jsonrpc=True)

            return { 'return': 'success' }
        elif cmd['server'] == 'stop':

            Serve.stop()
            return { 'return': 'success' }

    return {'error': 'Unknown command'}

set_logging()

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
