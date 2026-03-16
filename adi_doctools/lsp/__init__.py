import logging as logging_

import sys
import json

from sphinx.util.nodes import clean_astext

from .logging import set_logging
from ..role.common import git_role
from ..role.common import adi_resolve

from ..cli.serve import Serve

logger = logging_.getLogger(__name__)

def handle_xfer(app, typ, target) -> dict | None:
    if typ == 'ref':
        std_domain = app.env.domains.standard_domain
        docname, labelid, sectname = std_domain.labels.get(target, ('', '', ''))
        if docname == '':
            return (None, None, f"Reference '{target}' not found")

        title = sectname
        target = f"{docname}#{labelid}"
        return (target, title, None)
    elif typ == 'doc':
        if target not in app.env.titles:
            return (None, None, f"Docame '{target}' not found")
        title = clean_astext(app.env.titles[target])
        return (target, title, None)

    return (None, None)

def handle_external_xfer(app, inv, typ, target) -> dict | None:
    if not hasattr(app.env, 'intersphinx_named_inventory'):
        return (None, None, 'Intersphinx not enabled')

    named_inv = app.env.intersphinx_named_inventory.get(inv)
    if not named_inv:
        return (None, None, f"Intesphinx inventory '{inv}' not found")

    obj_type = f'std:{typ}'
    if obj_type not in named_inv or target not in named_inv[obj_type]:
        return (None, None, f"Target '{target}' in '{typ}' at inventory '{inv}' not found")

    item = named_inv[obj_type][target]
    return (item.uri, item.display_name if item.display_name != '-' else None, None)

def handle_cmd(cmd: dict) -> dict:

    if 'role' in cmd and 'target' in cmd:
        role = cmd['role']
        target = cmd['target']
        title = cmd.get('title', None)

        app = Serve.get_sphinx_app()
        error = None
        if not app:
            return {'error': 'Serve not running'}

        if (role.startswith('downgit-') or role.startswith('downgit+') or
            role.startswith('git-') or role.startswith('git+')):
            target, title = git_role.resolve(app.config, app.lut['repos'], role, title, target, role.startswith('downgit'))
        elif role == 'adi':
            target, title = adi_resolve(app.config, title, target)
        elif role.startswith('external+') and ':' in role:
            role_ = role.split('+')[1].split(':')
            target, title, error = handle_external_xfer(app, role_[0], role_[1], target)
        elif role in ['ref', 'doc']:
            target, title, error = handle_xfer(app, role, target)

        if error:
            return {'error': error}
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
