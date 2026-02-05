import sys
import argparse
import logging

logger = logging.getLogger(__name__)


def get_command():
    if len(sys.argv) == 1 or sys.argv[1] == '-h' or sys.argv[1] == '--help':
        return 'help'
    elif sys.argv[1].startswith('-'):
        return 'help'

    cmd = sys.argv[1]
    aliases = {
        "author-mode": "serve",
        "server": "serve",
    }
    if cmd in aliases:
        original_cmd = cmd
        cmd = aliases[cmd]
        logger.info(f"Redirected command '{original_cmd}' to '{cmd}'", file=sys.stderr)

    sys.argv.remove(sys.argv[1])
    return cmd


def show_help():
    print("""
usage: adoc COMMAND [ARGS]...

  CLI to provide entry points to adi_doctools methods.

Commands:
    serve        Watch the docs and source code to rebuild it on edit.
    hdl-render   Creates a SVG component diagram of an IP.
    hdl-gen      Generate HDL auxiliary files.
    aggregate    Creates a symbolic-aggregated documentation out of every repo documentation.
    custom-doc   Creates an aggregated documentation out the repos in the doc.yaml file.
    search       Search Sphinx documentation.

'adoc COMMAND --help' list available subcommands
""")


def get_arguments_serve():
    parser = argparse.ArgumentParser(
        prog='adoc serve',
        description='Watch the docs and source code to rebuild it on edit. Two html live update strategies are available: Pooling and Selenium.')
    parser.add_argument('-d', '--directory', default='.',
                        help="Path to the docs folder with the Makefile (default: .)")
    parser.add_argument('-p', '--port', type=int, default=8000,
                        help="Port to host the docs (default: 8000)")
    parser.add_argument('-r', '--dev', action='store_true', default=False,
                        help="Watch web source code (requires symbolic install)")
    parser.add_argument('--selenium', action='store_true', default=False,
                        help="Use selenium/Firefox instead of pooling method (html builder only)")
    parser.add_argument('-o', '--once', action='store_true', default=False,
                        help="Generate the build and exit")
    parser.add_argument('-b', '--builder', default='html',
                        help="Builder to use, valid options are: html, pdf (WeasyPrint) (default: html)")

    args = parser.parse_args()
    return args


def get_arguments_hdl_render():
    """Parse arguments for the hdl-render command."""
    parser = argparse.ArgumentParser(
        prog='adoc hdl-render',
        description="Creates a SVG component diagram of an IP. Requires the component.xml to be generated first.")
    parser.add_argument('-i', '--input', required=True,
                        help="Path to the library folder")
    parser.add_argument('-o', '--output', default="",
                        help="Output path, defaults to --input")
    parser.add_argument('-x', '--open', action='store_true', default=False,
                        help="Open after generation (xdg-open)")

    args = parser.parse_args()
    return args


def get_arguments_hdl_gen():
    """Parse arguments for the hdl-gen command."""
    parser = argparse.ArgumentParser(
        prog='adoc hdl-gen',
        description='Generate HDL auxiliary files. These files are: Library and projects makefiles, SystemVerilog Register Map classes. Run from any path at hdl, including hdl/testbenches.')
    parser.add_argument('-i', '--input', default='.',
                        help="Path to any folder in the HDL repo (default: .)")
    parser.add_argument('--no-regmap', action='store_true', default=False,
                        help="Disable SystemVerilog RegisterMap generation, also disables RegMap parsing")
    parser.add_argument('--no-makefile', action='store_true', default=False,
                        help="Disable Makefile generation, also disables Library, Project and Carrier parsing")
    parser.add_argument('--no-write', action='store_true', default=False,
                        help="Disable file generation, useful to run only the parsing")

    args = parser.parse_args()
    return args


def get_arguments_aggregate():
    """Parse arguments for the aggregate command."""
    parser = argparse.ArgumentParser(
        prog='adoc aggregate',
        description='Creates a symbolic-aggregated documentation out of every repo documentation. To resolve interrepo-references, run the tool twice.')
    parser.add_argument('-d', '--directory', default='.', required=True,
                        help="Path to create aggregated output")
    parser.add_argument('-e', '--extra', action='store_true', default=False,
                        help="Compile extra features")
    parser.add_argument('-t', '--no-parallel', action='store_true', default=False,
                        help="Run all steps in sequence")
    parser.add_argument('-n', '--dry-run', action='store_true', default=False,
                        help="Don't actually run; just print them")
    parser.add_argument('-x', '--open', action='store_true', default=False,
                        help="Open after generation (xdg-open)")
    parser.add_argument('-s', '--ssh', action='store_true', default=False,
                        help="Clone repositories with SSH instead of HTTPS")

    args = parser.parse_args()
    return args


def get_arguments_custom_doc():
    """Parse arguments for the custom-doc command."""
    parser = argparse.ArgumentParser(
        prog='adoc custom-doc',
        description='Creates an aggregated documentation out the repos in the doc.yaml file. The tool runs Sphinx twice to resolve interrepo-references, watching for warnings and patching accordingly.')
    parser.add_argument('-d', '--directory', default='.', required=False,
                        help="Path to host custom doc, contain the repositories and doc (workdir)")
    parser.add_argument('-e', '--extra', action='store_true', default=False,
                        help="Compile extra features")
    parser.add_argument('-t', '--no-parallel', action='store_true', default=False,
                        help="Run all steps in sequence")
    parser.add_argument('-x', '--open', action='store_true', default=False,
                        help="Open after generation (xdg-open)")
    parser.add_argument('-b', '--builder', default='html',
                        help="Builder to use, valid options are: html, pdf (WeasyPrint) (default: html)")
    parser.add_argument('-s', '--ssh', action='store_true', default=False,
                        help="Clone repositories with SSH instead of HTTPS")
    parser.add_argument('--drop-missing-extensions', action='store_true', default=False,
                        help="Drop extensions not installed, useful when the pages don't use them anyway")

    args = parser.parse_args()
    return args


def get_arguments_search():
    """Parse arguments for the search command."""
    parser = argparse.ArgumentParser(
        prog='adoc search',
        description='Search Sphinx documentation. Fetches the search index from a Sphinx-generated documentation site and searches for the given query terms.')
    parser.add_argument('query', nargs='*',
                        help="Search query terms")
    parser.add_argument('--url',
                        help='Explicit url to documentation (searchindex.js)')
    parser.add_argument('--repo',
                        help='Repository name(s), comma-separated (e.g., "documentation,hdl,no-OS"), "all" searches all repositories')
    parser.add_argument('--limit', type=int, default=None,
                        help='Maximum number of results to show')
    parser.add_argument('-v', '--verbose', action='store_true',
                        help='Show result scores')
    parser.add_argument('-f', '--fetch', default=None,
                        help='Fetch file by index from previous search results, or provide a full url')
    parser.add_argument('--format', choices=['html', 'src', 'md'], default='md',
                        help='Format for fetched content: html (page html), src (source .rst/.md file), md (converted to markdown, default)')

    args = parser.parse_args()
    return args
