import os.path

path = os.path.abspath(os.path.dirname(__file__))

def adi_common_setup(app):
    app.add_html_theme("adi-common", os.path.join(path, "adi-common"))
