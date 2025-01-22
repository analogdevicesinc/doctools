from lxml import etree

font_size = 16
margin = 18
line_length = 16
text_vertical_margin = 8
color_main = '#0067b9'
color_bg1 = '#c4e5ff'
color_bg2 = '#ebf6ff'
stroke_width = 3


class hdl_component():
    @staticmethod
    def get_name(lib_name):
        return f"{lib_name.replace('/','-')}.svg"

    @staticmethod
    def render(lib_name, item):
        def make_style(parent):
            etree.SubElement(parent, 'style').text = """
                a {
                    text-decoration: none;
                }
                """

        def make_gradient(parent):
            defs = etree.SubElement(parent, 'defs')
            gradient = etree.SubElement(defs, 'linearGradient', attrib={
                'id': 'ip_background',
                'x1': '0', 'x2': '1', 'y1': '0', 'y2': '1'
                })
            etree.SubElement(gradient, 'stop', attrib={'offset': '0%', 'stop-color': color_bg1})
            etree.SubElement(gradient, 'stop', attrib={'offset': '100%', 'stop-color': color_bg2})

        def symbol_bus(parent):
            rect_height = font_size
            one_fifth_x = line_length/5
            one_fifth_y = rect_height/5
            x = 0
            y = 0
            pattern = [[0, 1, 0, 1, 0], [0, 0, 0, 0, 0], [0, 1, 0, 1, 0],
                       [0, 0, 0, 0, 0], [0, 1, 0, 1, 0]]
            etree.SubElement(parent, "rect", attrib={
                'x': '0', 'y': '0',
                'width': str(line_length), 'height': str(font_size),
                'fill': color_bg1,
            })
            for i in pattern:
                for j in i:
                    if j:
                        etree.SubElement(parent, "rect", attrib={
                            'x': str(x), 'y': str(y),
                            'width': str(one_fifth_x), 'height': str(one_fifth_y),
                            'fill': color_main,
                        })
                    x = x+one_fifth_x
                x = 0
                y = y+one_fifth_y

        def symbol_port(parent):
            etree.SubElement(parent, "line", attrib={
                'stroke': 'white',
                'stroke-width': str(stroke_width*2),
                'x1': '0', 'y1': str(font_size/2),
                'x2': str(line_length+stroke_width), 'y2': str(font_size/2)
                })
            etree.SubElement(parent, "line", attrib={
                'stroke': 'black',
                'stroke-width': str(stroke_width),
                'x1': '0', 'y1': str(font_size/2),
                'x2': str(line_length), 'y2': str(font_size/2)
                })

        def create_text(items, side):
            y_pos = margin*3
            if side.startswith('out'):
                text_anchor = 'end'
                x_pos = margin*3 + aux_width
                x_pos_group = x_pos+margin
                scale_group = 'scale(1,1)'
            else:
                text_anchor = 'start'
                x_pos = margin*2
                x_pos_group = x_pos-margin
                scale_group = 'scale(-1,1)'

            for elem in items:
                if elem[1] == 'bus':
                    link_anchor = f"#bus-interface-{elem[0]}"
                else:
                    link_anchor = "#ports"
                link = etree.SubElement(root, "a", attrib={
                    'href': link_anchor,
                    })
                etree.SubElement(link, "text", attrib={
                    'style': f"font: {font_size}px sans-serif",
                    'text-anchor': text_anchor,
                    'dominant-baseline': 'middle',
                    'x': str(x_pos), 'y': str(y_pos)
                    }).text = elem[0]
                group = etree.SubElement(root, "g", attrib={
                    'transform': f"translate({x_pos_group},{y_pos-font_size/2}) {scale_group}"}
                    )
                if elem[1] == 'bus':
                    symbol_bus(group)
                else:
                    symbol_port(group)
                y_pos += font_size+text_vertical_margin

        ins = []
        outs = []
        for key in item['bus_interface']:
            if item['bus_interface'][key]['role'] == 'master':
                outs.append((key, 'bus'))
            else:
                ins.append((key, 'bus'))
        for key in item['ports']:
            if item['ports'][key]['direction'].startswith('out'):
                outs.append((key, 'port'))
            else:
                ins.append((key, 'port'))

        max_len_in = 0
        for elem in ins:
            if len(elem[0]) > max_len_in:
                max_len_in = len(elem[0])

        max_len_out = 0
        for elem in outs:
            if len(elem[0]) > max_len_out:
                max_len_out = len(elem[0])

        aux_width = (max_len_in+max_len_out)*font_size*.6

        num_outs = len(outs)
        num_ins = len(ins)
        max_num = max(num_outs, num_ins)

        root = etree.Element('svg', xmlns="http://www.w3.org/2000/svg")

        make_style(root)
        make_gradient(root)

        ip_width = aux_width + margin*3
        ip_height = max_num*(font_size+text_vertical_margin) + margin*2
        etree.SubElement(root, "rect", attrib={
            'x': str(margin), 'y': str(margin),
            'width': str(ip_width), 'height': str(ip_height),
            'rx': str(margin),
            'fill': 'url(#ip_background)'
        })

        create_text(ins, 'in')
        create_text(outs, 'out')

        viewbox_x = margin*5 + aux_width
        viewbox_y = margin*5 + max_num*(font_size+text_vertical_margin)
        root.set('viewBox', f"0 0 {viewbox_x} {viewbox_y}")
        root.set('width', str(viewbox_x))
        root.set('class', 'no-background')

        etree.SubElement(root, "rect", attrib={
            'x': str(margin), 'y': str(margin),
            'width': str(ip_width), 'height': str(ip_height),
            'rx': str(margin),
            'fill': 'none',
            'stroke': color_main,
            'stroke-width': str(stroke_width)
        })

        ipname_y = viewbox_y-font_size
        ipname_x = viewbox_x/2
        etree.SubElement(root, "text", attrib={
            'style': f"font: {font_size}px sans-serif",
            'fill': color_main,
            'text-anchor': 'middle',
            'dominant-baseline': 'middle',
            'x': str(ipname_x), 'y': str(ipname_y)
            }).text = lib_name[lib_name.rfind('/')+1:]

        return etree.ElementTree(root)

    @staticmethod
    def render_placeholder(lib_name):
        root = etree.Element('svg', xmlns="http://www.w3.org/2000/svg")

        def text_element(text, fs, x, y, font='sans-serif'):
            etree.SubElement(root, "text", attrib={
                'style': f"font: {font_size*fs}px {font}",
                'fill': '#666',
                'text-anchor': 'middle',
                'dominant-baseline': 'middle',
                'x': str(x), 'y': str(y)
                }).text = text

        ip_width = font_size*30
        ip_height = font_size*15
        etree.SubElement(root, "rect", attrib={
            'x': str(margin), 'y': str(margin),
            'width': str(ip_width), 'height': str(ip_height),
            'rx': str(margin),
            'stroke': '#666',
            'fill': 'none',
            'stroke-width': str(stroke_width),
            'stroke-dasharray': '8 16',
            'stroke-linecap': 'round'
        })

        viewbox_x = ip_width + margin*2
        viewbox_y = ip_height + margin*2
        root.set('viewBox', f"0 0 {viewbox_x} {viewbox_y}")
        root.set('width', str(viewbox_x))
        root.set('class', 'no-background')

        text_y = viewbox_y/2.5
        text_x = viewbox_x/2
        text_element("?", 4, text_x, text_y-text_vertical_margin*2)
        text_element(f"{lib_name[lib_name.rfind('/')+1:]} IP-XACT not found.",
                     1, text_x, text_y+font_size*2+text_vertical_margin)
        text_element("Generate it and the documentation:",
                     .75, text_x, text_y+font_size*3+text_vertical_margin*2.5)
        text_element(f"(cd {lib_name}; make)",
                     .75, text_x, text_y+font_size*4+text_vertical_margin*3,
                     'monospace')
        text_element("(cd docs; make html)",
                     .75, text_x, text_y+font_size*5+text_vertical_margin*3.5,
                     'monospace')

        return etree.ElementTree(root)
