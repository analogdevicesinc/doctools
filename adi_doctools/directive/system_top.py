from docutils import nodes
from docutils.parsers.rst import directives

from .common import directive_base
from .node import node_div, node_icon
from .string import string_system_top


class directive_esd_warning(directive_base):
    option_spec = {'path': directives.unchanged}
    required_arguments = 0
    optional_arguments = 0

    def run(self):
        node = node_div()
        container = nodes.container(
            "",
            is_div=True,
            classes=['esd-warning']
        )
        icon = node_icon(
            classes=['icon']
        )
        container += icon
        container += nodes.paragraph(text=string_system_top.esd_warning)
        node += container

        return [node]


def system_top_setup(app):
    app.add_directive('esd-warning', directive_esd_warning)
