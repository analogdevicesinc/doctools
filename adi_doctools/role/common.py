import subprocess
from docutils import nodes
from sphinx.util import logging

logger = logging.getLogger(__name__)
validate_links_user_agent = 'Status resolver (Python/Sphinx)'

# Default values
dft_url_dokuwiki = 'https://wiki.analog.com'
dft_url_ez = 'https://ez.analog.com'
dft_url_mw = 'https://www.mathworks.com'
dft_url_git = 'https://github.com/analogdevicesinc'
dft_url_adi = 'https://www.analog.com'
dft_url_xilinx = 'https://www.xilinx.com'
dft_url_intel = 'https://www.intel.com'

dft_validate_links = False

git_repos = [
    # url_path           name
    ['hdl',              "HDL"],
    ['testbenches',      "Testbenches"],
    ['linux',            "Linux"],
    ['no-OS',            "no-OS"],
    ['libiio',           "libiio"],
    ['scopy',            "Scopy"],
    ['iio-oscilloscope', "IIO Oscilloscope"],
    ['doctools',         "Doctools"],
    ['documentation',    "System Level Documentation"],
    ['pyadi-iio',        "PyADI-IIO"]
]
vendors = ['xilinx', 'intel', 'mw']


def get_url_config(name, inliner):
    app = inliner.document.settings.env.app
    return getattr(app.config, "url_"+name)


def get_outer_inner(text):
    """
    Extract 'outer <inner>' fields.
    """
    pos = text.find('<')
    if pos != -1 and text[len(text)-1] == '>':
        return (text[0:pos].strip(), text[pos+1:-1])
    else:
        return (None, text)


def color(class_name):
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        node = nodes.inline(text=text, classes=[class_name])
        return [node], []

    return role


def datasheet():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        # DEPRECATED
        logger.info("The datasheet role has been deprecated, use the adi role "
                    "instead.")
        return [], []

    return role


def dokuwiki():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if text is None:
            text = path[path.rfind('/')+1:]
        url = get_url_config('dokuwiki', inliner) + '/' + path
        node = nodes.reference(rawtext, text, refuri=url, **options)
        add_link(inliner, lineno, url)
        return [node], []

    return role


def ez():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if path == '/':
            path = ''
        url = get_url_config('ez', inliner) + '/' + path
        if text is None:
            text = "EngineerZone"
        node = nodes.reference(rawtext, text, refuri=url,
                               classes=['icon', 'ez'], **options)
        add_link(inliner, lineno, url)
        return [node], []

    return role


def get_active_branch_name():
    try:
        branch = subprocess.run(['git', 'branch',
                                 '--show-current'], capture_output=True)
        return branch.stdout.decode('utf-8').replace('\n', '')
    except Exception:
        # Return placeholder is git is unreachable, e.g. container
        return "<unknown>"


def git(repo, alt_name):
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        url = get_url_config('git', inliner) + '/' + repo
        if text == '/':
            name = "ADI " + alt_name + " repository"
            node = nodes.reference(rawtext, name, refuri=url,
                                   classes=['icon', 'git'], **options)
        else:
            text, path = get_outer_inner(text)
            pos = path.find(':')
            if pos in [0, -1]:
                branch = get_active_branch_name()
            else:
                branch = path[0:pos]
            path = path[pos+1:]
            if path == '/':
                path = ''
            if text is None:
                text = path
            url = url + '/blob/' + branch + '/' + path
            node = nodes.reference(rawtext, text, refuri=url,
                                   classes=['icon', 'git'], **options)
        add_link(inliner, lineno, url)
        return [node], []

    return role


def adi():
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        name, adi_id = get_outer_inner(text)
        if name is None:
            name = adi_id
        url = get_url_config('adi', inliner) + '/' + adi_id
        node = nodes.reference(rawtext, name, refuri=url,
                               classes=['icon', 'adi'], **options)
        add_link(inliner, lineno, url)
        return [node], []

    return role


def vendor(vendor_name):
    def role(name, rawtext, text, lineno, inliner, options={}, content=[]):
        text, path = get_outer_inner(text)
        if text is None:
            text = path[path.rfind('/')+1:]
        url = get_url_config(vendor_name, inliner) + '/' + path
        node = nodes.reference(rawtext, text, refuri=url, **options)
        add_link(inliner, lineno, url)
        return [node], []

    return role


def prepare_validade_links(app, env, docnames):
    # Not managing links, so checking only changed files per build.
    # A user can run a build with validate_links False, touch the
    # desired files then run with validate_links True to check the links
    # from only these files.
    env.links = {}


def validate_links(app, env):
    if not env.config.validate_links:
        logger.info(f"Skipping {len(env.links)} URLs checks-ups. "
                    "Set validate_links to True to enable this feature.")
        return

    global asyncio, aiohttp
    import asyncio
    import aiohttp

    asyncio.run(
        async_validate_links(app, env)
    )


async def validate_link(link, headers):
    session_timeout = aiohttp.ClientTimeout(total=None, sock_connect=10,
                                            sock_read=10)
    try:
        async with aiohttp.ClientSession(timeout=session_timeout) as session:
            async with session.get(link, headers=headers, timeout=10) as resp:
                return link, resp.status
    except aiohttp.ClientError as e:
        return link, e
    except asyncio.TimeoutError as e:
        return link, e


async def async_validate_links(app, env):
    headers = {'User-Agent': validate_links_user_agent}

    fail_count = 0
    total = len(env.links)
    completed = 0
    results = []
    step = 25

    links = list(env.links)
    leng = int(total/step)+1 if total % step != 0 else int(total/step)
    for i in range(0, leng):
        cur = i*step
        end = total if (i+1)*step > total else (i+1)*step
        _links = links[cur:end]
        tasks = []
        for link in _links:
            task = asyncio.create_task(validate_link(link, headers))
            tasks.append(task)

        for task in asyncio.as_completed(tasks):
            results.append(await task)
            completed += 1
            logger.info(f"Validated URL {completed} out of {total}, "
                        "bundle {i+1} of {leng}...", end='\r')
        del tasks

    for link, error in results:
        if isinstance(error, asyncio.TimeoutError):
            error = 'Timeout Error'
        if error != 200:
            fail_count += 1
            if len(env.links[link]) > 1:
                extended_error = (f"Resolved {len(env.links[link])} times, "
                                  "path shown is the first instance.")
            else:
                extended_error = ""
            logger.warning(f"URL {link} returned {error}! {extended_error}",
                           location=env.links[link][0])

    if fail_count:
        c_ = fail_count/(len(env.links))*100
        logger.warning(f"{fail_count} out of {len(env.links)} URLs resolved "
                       f"with an error ({c_:0.2f}%)!")
    else:
        if total == 0:
            extended_info = ("\nAt every build, only the links at files that "
                             "changed are checked, consider touching them to "
                             "re-check.")
        else:
            extended_info = ""
        logger.info(f"All {total} URLs resolved successfully.{extended_info}")


def add_link(inliner, lineno, link):
    links = inliner.document.settings.env.links
    docname = (inliner.document.current_source[:-4], lineno)
    if link not in links:
        links[link] = [docname]
    else:
        links[link].append(docname)


def common_setup(app):
    app.add_role("red",             color('red'))
    app.add_role("green",           color('green'))
    app.add_role("datasheet",       datasheet())
    app.add_role("dokuwiki",        dokuwiki())
    app.add_role("ez",              ez())
    app.add_role("adi",             adi())
    for name in vendors:
        app.add_role(name,          vendor(name))
    for path, name in git_repos:
        app.add_role("git-"+path,   git(path, name))

    app.connect('env-before-read-docs', prepare_validade_links)
    app.connect('env-updated', validate_links)

    app.add_config_value('url_dokuwiki',  dft_url_dokuwiki,  'env')
    app.add_config_value('url_ez',        dft_url_ez,        'env')
    app.add_config_value('url_mw',        dft_url_mw,        'env')
    app.add_config_value('url_git',       dft_url_git,       'env')
    app.add_config_value('url_adi',       dft_url_adi,       'env')
    app.add_config_value('url_xilinx',    dft_url_xilinx,    'env')
    app.add_config_value('url_intel',     dft_url_intel,     'env')

    app.add_config_value('validate_links', dft_validate_links, 'env')
