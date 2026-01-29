import logging as logging_

from .logging import set_logging
from .argument_parser import get_command, show_help

logger = logging_.getLogger(__name__)

def main_serve():
    from .serve import serve

    serve()

def main_hdl_render():
    from .hdl_render import hdl_render

    hdl_render()

def main_hdl_gen():
    from .hdl_gen import hdl_gen

    hdl_gen()

def main_aggregate():
    from .aggregate import aggregate

    aggregate()

def main_custom_doc():
    from .custom_doc import custom_doc

    custom_doc()

def main_search():
    from .search import search

    search()


def main_llm():
    from .llm import llm

    llm()


def entry_point():
    set_logging()
    cmd = get_command()

    if cmd == 'serve':
        main_serve()
    elif cmd == 'hdl-render':
        main_hdl_render()
    elif cmd == 'hdl-gen':
        main_hdl_gen()
    elif cmd == 'aggregate':
        main_aggregate()
    elif cmd == 'custom-doc':
        main_custom_doc()
    elif cmd == 'search':
        main_search()
    elif cmd == 'llm':
        main_llm()
    elif cmd == 'help':
        show_help()
    else:
        logger.error(f"Unrecognized command: {cmd}")
