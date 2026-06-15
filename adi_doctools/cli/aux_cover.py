"""
SVG/PDF Cover
Generates wave background
"""
import math
import hashlib
import re


def _wave_data(seed: str, is_volume: bool = False):
    seed = int(hashlib.md5(seed.encode()).hexdigest()[:8], 16)

    if is_volume:
        base_color = [255, 255, 255]
        waves = [
            {"amp": 15, "freq": 0.02, "phase": (seed % 100) / 100 * 20,
             "color": "rgba(180, 180, 200, 0.2)", "fill": "rgba(180, 180, 200, 0.05)"},
            {"amp": 20, "freq": 0.015, "phase": (seed % 80) / 80 * 15,
             "color": "rgba(160, 160, 180, 0.3)", "fill": "rgba(160, 160, 180, 0.07)"},
            {"amp": 25, "freq": 0.012, "phase": (seed % 60) / 60 * 10,
             "color": "rgba(140, 140, 160, 0.4)", "fill": "rgba(140, 140, 160, 0.08)"},
            {"amp": 35, "freq": 0.008, "phase": (seed % 40) / 40 * 8,
             "color": "rgba(120, 120, 140, 0.5)", "fill": "rgba(120, 120, 140, 0.1)"},
        ]
    else:
        base_color = [0, 103, 185]
        waves = [
            {"amp": 15, "freq": 0.02, "phase": (seed % 100) / 100 * 20,
             "color": "rgba(212, 173, 240, 0.25)", "fill": "rgba(212, 173, 240, 0.05)"},
            {"amp": 20, "freq": 0.015, "phase": (seed % 80) / 80 * 15,
             "color": "rgba(180, 180, 230, 0.35)", "fill": "rgba(180, 180, 230, 0.08)"},
            {"amp": 25, "freq": 0.012, "phase": (seed % 60) / 60 * 10,
             "color": "rgba(130, 185, 225, 0.45)", "fill": "rgba(130, 185, 225, 0.12)"},
            {"amp": 35, "freq": 0.008, "phase": (seed % 40) / 40 * 8,
             "color": "rgba(110, 190, 220, 0.5)", "fill": "rgba(110, 190, 220, 0.15)"},
        ]

    return seed, base_color, waves


def _wave_points(wave, width, height, is_volume, num_points=200):
    """
    Compute the (x, svg_y) points for a single wave path.
    """
    points = []
    for i in range(-5, num_points + 5):
        x = (i / num_points) * width
        clamper = (x + width * 0.5) / (width * 1.5) if not is_volume else 1
        base_y = height * 0.88
        wave_y = math.sin(x * wave["freq"] + wave["phase"]) * wave["amp"]
        y = base_y + wave_y * clamper
        points.append((x, y))
    return points


def _parse_rgba(s):
    m = re.match(r'rgba\((\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\)', s)
    return (int(m.group(1)) / 255, int(m.group(2)) / 255,
            int(m.group(3)) / 255, float(m.group(4)))


def generate_wave_cover(seed: str, width: int = 595, height: int = 842,
                        is_volume: bool = False):
    """
    Generate an SVG cover with layered sine waves.
    """
    _, base_color, waves = _wave_data(seed, is_volume)

    svg_paths = []
    for wave in waves:
        points = _wave_points(wave, width, height, is_volume)
        coords = " L ".join(f"{x:.2f},{y:.2f}" for x, y in points)
        path_data = f"M 0,{height + 5} L {coords} L {width + 5},{height + 5} Z"

        svg_paths.append(
            f'<path d="{path_data}" '
            f'fill="{wave["fill"]}" '
            f'stroke="{wave["color"]}" '
            f'stroke-width="1.5" '
            f'opacity="0.9"/>'
        )

    bg_color = f"rgb({base_color[0]}, {base_color[1]}, {base_color[2]})"

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg"
         width="{width}" height="{height}"
         viewBox="0 0 {width} {height}"
         preserveAspectRatio="none">
    <rect width="{width}" height="{height}" fill="{bg_color}"/>
    {''.join(svg_paths)}
</svg>'''

    return svg


def _generate_cover_pdf(seed, width=595, height=842):
    """
    Generate a PDF cover with layered sine waves (no external dependencies).

    Returns the raw PDF bytes.
    """
    _, base_color, waves = _wave_data(seed, is_volume=False)
    opacity = 0.9

    # Build PDF content stream
    stream_parts = []

    # Background rectangle
    r, g, b = base_color[0] / 255, base_color[1] / 255, base_color[2] / 255
    stream_parts.append(f'{r:.4f} {g:.4f} {b:.4f} rg')
    stream_parts.append(f'0 0 {width} {height} re f')

    # Build ExtGState objects for fill/stroke alpha
    gs_names = []
    gs_objects = []
    obj_offset = 5  # objects 1-4 are catalog/pages/page/stream

    for i, wave in enumerate(waves):
        fc = _parse_rgba(wave["fill"])
        sc = _parse_rgba(wave["color"])
        gs_names.append(f'GS{i}')
        gs_objects.append(
            f'<< /Type /ExtGState '
            f'/ca {fc[3] * opacity:.4f} /CA {sc[3] * opacity:.4f} >>'
        )

    # Draw each wave path
    for i, wave in enumerate(waves):
        fc = _parse_rgba(wave["fill"])
        sc = _parse_rgba(wave["color"])

        stream_parts.append(f'/{gs_names[i]} gs')
        stream_parts.append(f'{fc[0]:.4f} {fc[1]:.4f} {fc[2]:.4f} rg')
        stream_parts.append(f'{sc[0]:.4f} {sc[1]:.4f} {sc[2]:.4f} RG')
        stream_parts.append('1.5 w')

        points = _wave_points(wave, width, height, is_volume=False)

        bottom = -5
        stream_parts.append(f'0 {bottom:.2f} m')
        for x, svg_y in points:
            stream_parts.append(f'{x:.2f} {height - svg_y:.2f} l')
        stream_parts.append(f'{width + 5} {bottom:.2f} l')
        stream_parts.append('h B')  # close, fill and stroke

    stream_data = '\n'.join(stream_parts)
    stream_bytes = stream_data.encode('latin-1')
    stream_len = len(stream_bytes)

    # Build ExtGState resource entries
    gs_resource = ' '.join(
        f'/{gs_names[i]} {obj_offset + i} 0 R'
        for i in range(len(gs_names))
    )

    # Assemble PDF objects
    objects = [
        '<< /Type /Catalog /Pages 2 0 R >>',
        '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
        (f'<< /Type /Page /Parent 2 0 R '
         f'/MediaBox [0 0 {width} {height}] '
         f'/Contents 4 0 R '
         f'/Resources << /ExtGState << {gs_resource} >> >> >>'),
        None,  # stream object, handled specially below
    ] + gs_objects

    # Build the raw PDF
    pdf_parts = []
    pdf_parts.append(b'%PDF-1.4\n')

    offsets = []
    for i, obj in enumerate(objects):
        obj_num = i + 1
        offsets.append(sum(len(p) for p in pdf_parts))
        if obj is None:
            header = (f'{obj_num} 0 obj\n'
                      f'<< /Length {stream_len} >>\n'
                      f'stream\n').encode('latin-1')
            footer = b'\nendstream\nendobj\n'
            pdf_parts.append(header)
            pdf_parts.append(stream_bytes)
            pdf_parts.append(footer)
        else:
            pdf_parts.append(
                f'{obj_num} 0 obj\n{obj}\nendobj\n'.encode('latin-1')
            )

    # Cross-reference table
    xref_offset = sum(len(p) for p in pdf_parts)
    num_objects = len(objects) + 1  # +1 for the free entry
    xref = [f'xref\n0 {num_objects}\n', '0000000000 65535 f \n']
    for off in offsets:
        xref.append(f'{off:010d} 00000 n \n')

    pdf_parts.append(''.join(xref).encode('latin-1'))
    pdf_parts.append(
        (f'trailer\n'
         f'<< /Size {num_objects} /Root 1 0 R >>\n'
         f'startxref\n'
         f'{xref_offset}\n'
         f'%%EOF\n').encode('latin-1')
    )

    return b''.join(pdf_parts)


def generate_latex_cover(outdir: str, title: str, author: str, version: str) -> str:
    """
    Generate a PDF cover for xelatex builds.

    Writes ``_cover.pdf`` to *outdir* and returns a LaTeX string
    suitable for use as ``latex_elements['maketitle']``.
    """
    import os

    cover_pdf = os.path.join(outdir, '_cover.pdf')
    pdf_bytes = _generate_cover_pdf(title)
    with open(cover_pdf, 'wb') as f:
        f.write(pdf_bytes)

    def _tex_escape(s):
        for char in ('\\', '&', '%', '$', '#', '_', '{', '}', '~', '^'):
            s = s.replace(char, '\\' + char)
        return s

    t = _tex_escape(title)
    a = _tex_escape(author)
    v = _tex_escape(version)

    maketitle = (
        '\n'
        '\\begin{titlepage}\n'
        '  \\thispagestyle{empty}\n'
        '  \\AddToShipoutPictureBG*{%\n'
        '    \\includegraphics[width=\\paperwidth,height=\\paperheight]{_cover}%\n'
        '  }\n'
        '  \\vspace*{\\fill}\n'
        '  \\begin{flushright}\n'
        '    {\\color{white}\\fontsize{36}{44}\\selectfont\\sffamily\\bfseries ' + t + '\\par}\n'
        '    \\vspace{0.5cm}\n'
        '    {\\color{white}\\Large\\sffamily ' + a + '\\par}\n'
        '    \\vspace{0.3cm}\n'
        '    {\\color{white}\\large\\sffamily ' + v + '\\par}\n'
        '  \\end{flushright}\n'
        '  \\vspace{2cm}\n'
        '\\end{titlepage}\n'
        '\\setcounter{footnote}{0}\n'
    )

    return maketitle
