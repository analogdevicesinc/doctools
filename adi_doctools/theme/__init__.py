from lxml import etree
from lxml import html

from .adi_common import adi_common_setup

setup = [
    adi_common_setup
]

names = ['adi-common']

def navigation_tree(toctree_html):
    """
    Add collapsible sections to the navigation tree.
    Adapted from
    https://github.com/pradyunsg/furo/blob/main/src/furo/navigation.py
    Parse html similar to directive/hdl_parser.py:parse_hdl_component.
    Uses checkbox~label trick, similar to directive/common.py:directive_base:collapsible.
    Add elements, similar to toos/hdl_render.py:hdl_component.py
    """
    if not toctree_html:
        return toctree_html

    parser = etree.HTMLParser()
    root = etree.fromstring(toctree_html, parser)

    lvl = [0]
    def iterate(elem):
        for ul in elem.findall('./ul'):
            lvl[-1] += 1
            tag = '-'.join(map(str,lvl))
            _input = html.Element('input', attrib = {
                'class':'toctree-collapse',
                'type':'checkbox',
                'name':f"toctree-collapse-{tag}",
                'id':f"toctree-collapse-{tag}"
            })
            _class = elem.get("class")
            if _class is not None and 'current' in _class:
                _input.set('checked')
            label = etree.Element("label", attrib = {
                'for':f"toctree-collapse-{tag}"
            })
            label.text = ''
            elem.insert(1, label)
            elem.insert(0, _input)
            lvl.append(0)
            for li in ul.findall('./li[@class]'):
                iterate(li)
            lvl.pop()

    for ul in root.findall('./body/ul'):
        for li in ul.findall('./li[@class]'):
            iterate(li)

    return etree.tostring(root, pretty_print=True, encoding='unicode')
