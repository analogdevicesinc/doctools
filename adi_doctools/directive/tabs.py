from docutils.parsers.rst import Directive
from docutils import nodes
from hashlib import sha1

from .node import node_div, node_input, node_label

class directive_tab_set(Directive):
    """
    Generate a selectable tabs, uses CSS3 selectors for display/hide + flex
    order trick.
    """
    # HTML format:
    # <div class="tab-set docutils">
    #  <input checked="checked" id="tab-item-0" name="tab-set-0" type="radio">
    #  <label class="tab-label" for="tab-item-0">TITLE</label>
    #  <div class="tab-content docutils">...</div>
    #  ... repeat for the other tab item
    # </div>

    has_content = True

    def run(self):
        self.assert_has_content()

        _id = sha1("".join(self.content).encode('utf-8')).hexdigest()
        tab_set_name = "tab-set-" + _id

        outer_div = node_div(classes=['tab-set', 'docutils'])

        temp_container = nodes.container()
        temp_container.document = self.state.document
        self.state.nested_parse(self.content, self.content_offset, temp_container)

        tab_index = 0
        for node in temp_container.children:
            if isinstance(node, nodes.container) and 'tab-item' in node.get('classes', []):
                title = node.get('tab-title', '')

                tab_id = f"tab-item-{_id}-{tab_index}"
                input_attrs = {
                    'type': 'radio',
                    'name': tab_set_name,
                    'ids': [tab_id]
                }
                if tab_index == 0:
                    input_attrs['checked'] = 'checked'

                input_node = node_input(**input_attrs)
                outer_div += input_node

                label_node = node_label(classes=['tab-label'])
                label_node['for'] = tab_id
                label_node += nodes.Text(title)
                outer_div += label_node

                content_div = node_div(classes=['tab-content', 'docutils'])
                content_div.extend(node.children)
                outer_div += content_div

                tab_index += 1

        return [outer_div]

class directive_tab_item(Directive):
    has_content = True
    required_arguments = 1
    final_argument_whitespace = True

    def run(self):
        self.assert_has_content()

        title = self.arguments[0].strip()

        container = nodes.container(classes=['tab-item'])
        container['tab-title'] = title

        self.state.nested_parse(self.content, self.content_offset, container)

        return [container]


def tabs_setup(app):
    app.add_directive('tab-set', directive_tab_set)
    app.add_directive('tab-item', directive_tab_item)
