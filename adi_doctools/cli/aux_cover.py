"""
SVG Cover
Generates wave background
"""
import math
import hashlib


def generate_wave_cover(seed: str, width: int = 595, height: int = 842,
                        is_volume: bool = False):
    """
    Generate an SVG cover with layered sine waves.

    Returns:
        SVG string
    """
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

    svg_paths = []

    for wave in waves:
        points = []
        num_points = 200

        for i in range(-5, num_points + 5):
            x = (i / num_points) * width

            clamper = (x + width * 0.5) / (width * 1.5) if not is_volume else 1

            base_y = height * 0.88
            wave_y = math.sin(x * wave["freq"] + wave["phase"]) * wave["amp"]

            y = base_y + (wave_y) * clamper
            points.append(f"{x:.2f},{y:.2f}")

        path_data = f"M 0,{height + 5} L " + " L ".join(points) + f" L {width + 5},{height + 5} Z"

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

