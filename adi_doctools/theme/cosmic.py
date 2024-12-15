import os.path

path = os.path.abspath(os.path.dirname(__file__))


def cosmic_setup(app):
    app.add_html_theme("cosmic", os.path.join(path, "cosmic"))
    app.add_html_theme("harmonic", os.path.join(path, "cosmic"))
