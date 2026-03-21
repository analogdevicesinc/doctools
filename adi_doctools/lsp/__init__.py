import logging as logging_

import sys
import json

from sphinx.util.nodes import clean_astext

from .logging import set_logging
from ..role.common import git_role
from ..role.common import adi_resolve, dokuwiki_resolve, ez_resolve
from ..role.common import vendor_resolve, supplier_resolve, vendors, suppliers

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
        return (None, None, f"Target '{target}' for type '{role}' in inventory '{inv}' not found")

    item = named_inv[obj_type][target]
    return (item.uri, item.display_name if item.display_name != '-' else None, None)

# From sphinx/domains/std/__init__.py
OBJTYPE_TO_ROLE = {
    'label': 'ref',
    'term': 'term',
    'token': 'token',
    'doc': 'doc',
    'confval': 'confval',
    'envvar': 'envvar',
    'cmdoption': 'option',
    'function': 'func',
    'exception': 'exc',
    'attribute': 'attr',
    'method': 'meth',
    'module': 'mod',
}

ROLE_TO_OBJTYPE = {v: k for k, v in OBJTYPE_TO_ROLE.items()}

def objtype_to_role(objtype: str) -> str | None:
    domain, objtype = objtype.split(':', 1)
    role = OBJTYPE_TO_ROLE.get(objtype, objtype)
    return role if domain == 'std' else f"{domain}:{role}"

def role_to_objtype(role: str, inv: dict) -> str | None:
    # Domain 'std' with higher precedence if not explicit
    domain = 'std'
    if ':' in role:
        domain, role = role.split(':', 1)
    role = ROLE_TO_OBJTYPE.get(role, role)
    objtype = f"{domain}:{role}"

    if objtype in inv.keys():
        return objtype

    # Sphinx will match any domain, do the same if 'std:<role>' fails
    for objtype_ in inv.keys():
        if objtype_.endswith(f":{role}"):
            return objtype_

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

def completion_inventory_types(app, inv: str) -> tuple:
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
            role_name = role
            roles[role] = {
                'name': role_name,
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

def completion_directives(app) -> tuple:
    from docutils.parsers.rst import directives as docutils_directives

    result = []
    seen = set()

    # Std domain directives (toctree, etc.)
    std_domain = app.env.domains.standard_domain
    for directive_name in std_domain.directives.keys():
        if directive_name not in seen:
            result.append({'name': directive_name})
            seen.add(directive_name)

    # Custom directives (app.add_directive)
    for directive_name in docutils_directives._directives.keys():
        if directive_name not in seen:
            result.append({'name': directive_name})
            seen.add(directive_name)

    # Sphinx domains (py, c, cpp, etc.)
    for domain_name, domain in app.env.domains.items():
        for directive_name in domain.directives.keys():
            full_name = f"{domain_name}:{directive_name}" if domain_name != 'std' else directive_name
            if full_name not in seen:
                result.append({'name': full_name, 'domain': domain_name})
                seen.add(full_name)

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
        elif role == 'dokuwiki' or role == 'dokuwiki+deprecated':
            target, title = dokuwiki_resolve(app.config, title, target)
        elif role == 'ez':
            target, title = ez_resolve(app.config, title, target)
        elif role in vendors:
            target, title = vendor_resolve(app.config, role, title, target)
        elif role in suppliers:
            target, title = supplier_resolve(app.config, role, title, target)
        elif role.startswith('external+') and ':' in role:
            role_ = role.split('+')[1].split(':', 1)
            target, title, error = handle_external_xfer(app, role_[0], role_[1], target)
        elif role in ['ref', 'doc']:
            target, title, error = handle_xfer(app, role, target)
        else:
            return {} # May exist, but unhandled

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
            list_, error = completion_inventory_types(app, inv)
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
        elif completion == 'directives':
            list_, error = completion_directives(app)
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
