"""
SVG/PDF Cover
Generates a pixel-field background
"""
import hashlib
import math

PALETTE = ["#627eea", "#6e8ef2", "#64a9ee", "#62c5dd", "#8bd7cf", "#c1b4ef"]

RIPPLE_SPEED = 250
RIPPLE_DECAY = 1.9
RIPPLE_WIDTH = 150


def clamp(value, lo=0.0, hi=1.0):
    return min(hi, max(lo, value))


def mix(a, b, amount):
    return a + (b - a) * amount


def fade(value):
    return value * value * (3 - 2 * value)


def hash2(x, y):
    value = math.sin(x * 127.1 + y * 311.7) * 43758.5453123
    return value - math.floor(value)


def noise(x, y):
    x0 = math.floor(x)
    y0 = math.floor(y)
    tx = fade(x - x0)
    ty = fade(y - y0)
    top = mix(hash2(x0, y0), hash2(x0 + 1, y0), tx)
    bottom = mix(hash2(x0, y0 + 1), hash2(x0 + 1, y0 + 1), tx)
    return mix(top, bottom, ty)


def js_round(value):
    """Math.round semantics (half rounds towards +inf)."""
    return math.floor(value + 0.5)


def fmt(value):
    return f"{value:.2f}".rstrip("0").rstrip(".")


def build_ripples(specs):
    """specs: list of (x, y, strength, age_seconds)."""
    ripples = []
    for x, y, strength, age in specs:
        age = max(0.0, age)
        amplitude = strength * math.exp(-age * RIPPLE_DECAY)
        if amplitude < 0.02:
            continue
        ripples.append((x, y, amplitude, age * RIPPLE_SPEED))
    return ripples


def pixels(width, height, time=0.0, ripples=(), cell=None, gap=None):
    """Yield (x, y, size, color, alpha) for every square, like hero.js draw()."""
    if cell is None:
        cell = 14 if width < 640 else 17
    if gap is None:
        gap = 3 if width < 640 else 4

    columns = math.ceil(width / cell) + 1
    rows = math.ceil(height / cell) + 1
    offset_x = js_round((width - columns * cell) * 0.5)
    offset_y = js_round((height - rows * cell) * 0.5)
    max_size = cell - gap
    min_size = max(1, cell * 0.16)

    for row in range(rows):
        center_y = offset_y + (row + 0.5) * cell
        v = center_y / max(height, 1)

        for column in range(columns):
            center_x = offset_x + (column + 0.5) * cell
            u = center_x / max(width, 1)

            broad_wave = math.sin(u * 8.5 + v * 5.2 - time * 1.25)
            cross_wave = math.sin(u * -3.8 + v * 10.5 + time * 0.82)
            fine_wave = math.sin((u + v) * 18 - time * 1.8)
            turbulence = noise(u * 5.2 + time * 0.11, v * 5.2 - time * 0.08)

            h = 0.5
            h += broad_wave * 0.23
            h += cross_wave * 0.13
            h += fine_wave * 0.05
            h += (turbulence - 0.5) * 0.36

            for rx, ry, amplitude, radius in ripples:
                front = math.hypot(center_x - rx, center_y - ry) - radius
                if front > RIPPLE_WIDTH or front < -RIPPLE_WIDTH:
                    continue
                h += (math.cos(front * 0.055)
                      * math.exp(-abs(front) / 70)
                      * amplitude * 0.42)

            intensity = clamp(h)
            crest = intensity ** 1.55
            alpha = mix(0.08, 0.72, crest)
            index = min(len(PALETTE) - 1, math.floor(intensity * len(PALETTE)))
            size = mix(min_size, max_size, crest)
            half = size * 0.5

            yield center_x - half, center_y - half, size, PALETTE[index], alpha



def _cover_pixels(seed, width, height, theme='light'):
    """Use the landing-page field with a stable, title-specific frame."""
    frame = int(hashlib.md5(seed.encode()).hexdigest()[:8], 16) / 0xffffffff * 8
    for x, y, size, color, alpha in pixels(width, height, time=frame):
        # Fade toward the lower title area; blend opacity against the dark base.
        alpha *= 1 - fade(clamp((y / height - 0.45) / 0.5)) * 0.85
        rgb = tuple(int(color[i:i + 2], 16) / 255 for i in (1, 3, 5))
        base = (1, 1, 1) if theme == 'light' else (13 / 255, 17 / 255, 23 / 255)
        color = tuple(b + (c - b) * alpha for b, c in zip(base, rgb))
        yield x, y, size, color


def generate_wave_cover(seed: str, width: int = 595, height: int = 842,
                        is_volume: bool = False, theme: str = 'light'):
    """Generate the landing-page pixel field (legacy public function name).

    Volume covers retain their light background for dark overlaid text.
    """
    if theme not in ('light', 'dark'):
        raise ValueError("cover theme must be 'light' or 'dark'")
    if is_volume:
        theme = 'light'
    rects = []
    for x, y, size, rgb in _cover_pixels(seed, width, height, theme):
        color = "#" + "".join(f"{round(c * 255):02x}" for c in rgb)
        rects.append(
            f'<rect x="{x:.2f}" y="{y:.2f}" width="{size:.2f}" '
            f'height="{size:.2f}" fill="{color}"/>'
        )
    background = "#ffffff" if theme == "light" else "#0d1117"
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{width}" '
        f'height="{height}" viewBox="0 0 {width} {height}" '
        f'preserveAspectRatio="none">'
        f'<rect width="{width}" height="{height}" fill="{background}"/>'
        + "".join(rects) + "</svg>"
    )


def _generate_cover_pdf(seed, width=595, height=842, theme='light'):
    """Generate a vector pixel-field PDF without external dependencies."""
    if theme not in ("light", "dark"):
        raise ValueError("cover theme must be 'light' or 'dark'")
    stream_parts = [
        "1 1 1 rg" if theme == "light" else "0.05098 0.06667 0.09020 rg",
        f"0 0 {width} {height} re f",
    ]
    for x, y, size, (r, g, b) in _cover_pixels(seed, width, height, theme):
        stream_parts.append(f"{r:.5f} {g:.5f} {b:.5f} rg")
        stream_parts.append(
            f"{x:.2f} {height - y - size:.2f} {size:.2f} {size:.2f} re f"
        )
    gs_names = []
    gs_objects = []
    obj_offset = 5

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


def generate_latex_cover(outdir: str, title: str, description: str, author: str,
                         version: str, theme: str = 'light') -> str:
    """
    Generate a PDF cover for xelatex builds.

    Writes ``_cover.pdf`` to *outdir* and returns a LaTeX string
    suitable for use as ``latex_elements['maketitle']``.
    """
    import os

    cover_pdf = os.path.join(outdir, '_cover.pdf')
    pdf_bytes = _generate_cover_pdf(title, theme=theme)
    with open(cover_pdf, 'wb') as f:
        f.write(pdf_bytes)

    def _tex_escape(s):
        for char in ('\\', '&', '%', '$', '#', '_', '{', '}', '~', '^'):
            s = s.replace(char, '\\' + char)
        return s

    t = _tex_escape(title)
    a = _tex_escape(author)
    v = _tex_escape(version)
    d = ''
    if description:
        d = ('    {\\color{white}\\fontsize{20}{24}\\selectfont\\sffamily '
             + _tex_escape(description) + '\\par}\n'
             '    \\vspace{0.5cm}\n')

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
        + d +
        '    {\\color{white}\\Large\\sffamily ' + a + '\\par}\n'
        '    \\vspace{0.3cm}\n'
        '    {\\color{white}\\large\\sffamily ' + v + '\\par}\n'
        '  \\end{flushright}\n'
        '  \\vspace{2cm}\n'
        '\\end{titlepage}\n'
        '\\setcounter{footnote}{0}\n'
    )

    if theme == 'light':
        maketitle = maketitle.replace(r'\color{white}', r'\color[HTML]{212836}')
    return maketitle
