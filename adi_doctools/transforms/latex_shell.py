from docutils import nodes
from sphinx.transforms.post_transforms import SphinxPostTransform
from sphinx.util import logging
from ..directive.node import node_div

logger = logging.getLogger(__name__)


class latex_format_shell(SphinxPostTransform):
    """
    Merge consecutive literal_block nodes within shell directive containers
    into a single literal_block.
    """
    default_priority = 400
    formats = ('latex',)

    def run(self, **kwargs) -> None:
        """Process the document tree and merge shell literal blocks."""
        for node in self.document.findall(node_div):
            if 'code-shell' not in node.get('classes', []):
                continue

            self.merge_literal_blocks(node)

    def merge_literal_blocks(self, container):
        if not container.children:
            return

        merged_lines = []
        merged_language = None
        indices_to_remove = []

        for idx, child in enumerate(container.children):
            if not isinstance(child, node_div):
                continue

            prompt_text = None
            code_text = None

            for subchild in child.children:
                if not isinstance(subchild, nodes.literal_block):
                    continue

                text = subchild.astext()
                classes = subchild.get('classes', [])

                if 'float-left' in classes:
                    prompt_text = text
                else:
                    code_text = text
                    if 'no-select' not in classes and merged_language is None:
                        merged_language = subchild.get('language', 'bash')

            if prompt_text is not None and code_text is not None:
                merged_lines.append(prompt_text + ' ' + code_text)
            elif code_text is not None:
                merged_lines.append(code_text)
            elif prompt_text is not None:
                merged_lines.append(prompt_text)

            if idx > 0:
                indices_to_remove.append(idx)

        if not merged_lines:
            return

        merged_text = '\n'.join(merged_lines)
        new_literal = nodes.literal_block(merged_text, merged_text)
        if merged_language:
            new_literal['language'] = merged_language

        container[0] = new_literal

        for idx in reversed(indices_to_remove):
            del container[idx]


def setup(app):
    app.add_post_transform(latex_format_shell)

    return {
        "parallel_read_safe": True,
        "parallel_write_safe": True,
    }
