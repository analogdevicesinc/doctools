import logging as logging_

import sys
import json

from sphinx.util.nodes import clean_astext

from .logging import set_logging
from ..role.common import git_role
from ..role.common import adi_resolve

from ..cli.serve import Serve

logger = logging_.getLogger(__name__)

def handle_xfer(app, typ, target) -> tuple:
    if typ == 'ref':
        std_domain = app.env.domains.standard_domain
        docname, labelid, sectname = std_domain.labels.get(target, ('', '', ''))
        if docname == '':
            return (None, None, f"Reference '{target}' not found")

        title = sectname
        uri = f"{docname}#{labelid}" if labelid else docname
        return (uri, title, None)
    elif typ == 'doc':
        if target not in app.env.titles:
            return (None, None, f"Docname '{target}' not found")
        title = clean_astext(app.env.titles[target])
        return (target, title, None)

    return (None, None, f"Unknown type '{typ}'")

def handle_external_xfer(app, inv, role, target) -> tuple:
    if not hasattr(app.env, 'intersphinx_named_inventory'):
        return (None, None, 'Intersphinx not enabled')

    named_inv = app.env.intersphinx_named_inventory.get(inv)
    if not named_inv:
        return (None, None, f"Intersphinx inventory '{inv}' not found")

    obj_type = role_to_objtype(role, named_inv)
    if not obj_type or obj_type not in named_inv or target not in named_inv[obj_type]:
        return (None, None, f"Target '{target}' for role '{role}' in inventory '{inv}' not found")

    item = named_inv[obj_type][target]
    return (item.uri, item.display_name if item.display_name != '-' else None, None)

# From sphinx/domains/std/__init__.py and other domains
OBJTYPE_TO_ROLE = {
    'std:label': 'ref',
    'std:term': 'term',
    'std:token': 'token',
    'std:doc': 'doc',
    'std:confval': 'confval',
    'std:envvar': 'envvar',
    'std:cmdoption': 'option',
    'py:function': 'func',
    'py:class': 'class',
    'py:method': 'meth',
    'py:attribute': 'attr',
    'py:data': 'data',
    'py:module': 'mod',
    'py:exception': 'exc',
    'c:function': 'func',
    'c:macro': 'macro',
    'c:type': 'type',
    'c:var': 'var',
    'cpp:function': 'func',
    'cpp:class': 'class',
    'cpp:type': 'type',
    'js:function': 'func',
    'js:class': 'class',
    'js:data': 'data',
}

ROLE_TO_OBJTYPE = {v: k for k, v in OBJTYPE_TO_ROLE.items()}

def objtype_to_role(objtype: str) -> str | None:
    if objtype in OBJTYPE_TO_ROLE:
        return OBJTYPE_TO_ROLE[objtype]
    if ':' in objtype:
        return objtype.split(':')[1]
    return None

def role_to_objtype(role: str, inv: dict) -> str | None:
    if role in ROLE_TO_OBJTYPE:
        objtype = ROLE_TO_OBJTYPE[role]
        if objtype in inv:
            return objtype
    for objtype in inv.keys():
        if objtype_to_role(objtype) == role:
            return objtype
    return None

def completion_inventory(app) -> tuple:
    if not hasattr(app.env, 'intersphinx_named_inventory'):
        return (None, "Intersphinx not enabled")

    result = []
    for name, inv in app.env.intersphinx_named_inventory.items():
        project_name = None
        project_version = None
        target_uri = None
        types = list(inv.keys())
        for typ_entries in inv.values():
            for item in typ_entries.values():
                project_name = item.project_name
                project_version = item.project_version
                target_uri = item.uri.rsplit('/', 1)[0] if '/' in item.uri else item.uri
                break
            if project_name:
                break
        result.append({
            'name': name,
            'project': project_name,
            'version': project_version,
            'uri': target_uri,
            'types': types
        })
    return (result, None)

def complention_inventory_types(app, inv: str) -> tuple:
    if not hasattr(app.env, 'intersphinx_named_inventory'):
        return (None, "Intersphinx not enabled")

    named_inv = app.env.intersphinx_named_inventory.get(inv)
    if not named_inv:
        return (None, f"Inventory '{inv}' not found")

    roles = {}
    for objtype in named_inv.keys():
        role = objtype_to_role(objtype)
        if role and role not in roles:
            count = len(named_inv[objtype])
            domain = objtype.split(':')[0] if ':' in objtype else 'std'
            roles[role] = {
                'name': role,
                'objtype': objtype,
                'domain': domain,
                'count': count
            }
    return (list(roles.values()), None)

def completion_local_targets(app, role: str) -> tuple:
    if role == 'ref':
        std_domain = app.env.domains.standard_domain
        result = []
        for target, (docname, labelid, sectname) in std_domain.labels.items():
            result.append({
                'name': target,
                'display': str(sectname) if sectname else None,
                'uri': f"{docname}#{labelid}" if labelid else docname
            })
        return (result, None)
    elif role == 'doc':
        result = []
        for docname, title_node in app.env.titles.items():
            title = clean_astext(title_node)
            result.append({
                'name': docname,
                'display': str(title) if title else None,
                'uri': docname
            })
        return (result, None)
    return (None, f"Unknown role '{role}'")

def completion_inventory_targets(app, inv: str, role: str) -> tuple:
    if not hasattr(app.env, 'intersphinx_named_inventory'):
        return (None, "Intersphinx not enabled")

    named_inv = app.env.intersphinx_named_inventory.get(inv)
    if not named_inv:
        return (None, f"Inventory '{inv}' not found")

    objtype = role_to_objtype(role, named_inv)
    if not objtype or objtype not in named_inv:
        return (None, f"Role '{role}' not found in inventory '{inv}'")

    result = []
    for target, item in named_inv[objtype].items():
        result.append({
            'name': target,
            'display': item.display_name if item.display_name != '-' else None,
            'uri': item.uri
        })
    return (result, None)

def completion_roles(app) -> tuple:
    from docutils.parsers.rst import roles as docutils_roles

    result = []
    seen = set()

    partial_roles = ['external+', 'git+', 'git-', 'downgit+', 'downgit-']
    for r in partial_roles:
        result.append({'name': r, 'partial': True})
        seen.add(r)

    # Std domain (ref, doc, ...)
    std_domain = app.env.domains.standard_domain
    for role_name in std_domain.roles.keys():
        if role_name not in seen:
            result.append({'name': role_name, 'partial': False})
            seen.add(role_name)

    # Custom roles (app.add_role)
    for role_name in docutils_roles._roles.keys():
        if role_name not in seen:
            result.append({'name': role_name, 'partial': False})
            seen.add(role_name)

    return (result, None)

def handle_cmd(cmd: dict) -> dict:

    if 'role' in cmd and 'target' in cmd:
        role = cmd['role']
        target = cmd['target']
        title = cmd.get('title', None)
        error = None

        app = Serve.get_sphinx_app()
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
    elif 'completion' in cmd:
        completion = cmd['completion']
        error = None

        app = Serve.get_sphinx_app()
        if not app:
            return {'error': 'Serve not running'}

        elif completion == 'inventory':
            list_, error = completion_inventory(app)
            if error:
                return {'error': error}
            return {'list': list_}
        elif completion == 'inventory_types':
            inv = cmd.get('inventory')
            if not inv:
                return {'error': 'Missing inventory parameter'}
            list_, error = complention_inventory_types(app, inv)
            if error:
                return {'error': error}
            return {'list': list_}
        elif completion == 'inventory_targets':
            inv = cmd.get('inventory')
            role = cmd.get('role')
            if not inv or not role:
                return {'error': 'Missing inventory or role parameter'}
            list_, error = completion_inventory_targets(app, inv, role)
            if error:
                return {'error': error}
            return {'list': list_}
        elif completion == 'local_targets':
            role = cmd.get('role')
            if not role:
                return {'error': 'Missing role parameter'}
            list_, error = completion_local_targets(app, role)
            if error:
                return {'error': error}
            return {'list': list_}
        elif completion == 'roles':
            list_, error = completion_roles(app)
            if error:
                return {'error': error}
            return {'list': list_}

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
