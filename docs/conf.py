from os import path

# -- Project information -----------------------------------------------------

repository = 'doctools'
project = 'Doctools'
copyright = '2024, Analog Devices, Inc.'
author = 'Analog Devices, Inc.'

# -- General configuration ---------------------------------------------------

extensions = [
    "adi_doctools",
]

needs_extensions = {
    'adi_doctools': '0.3'
}

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
source_suffix = '.rst'

# -- Custom extensions configuration ------------------------------------------

doctools_export_metadata = True

# -- Options for HTML output --------------------------------------------------

html_theme = 'cosmic'

html_theme_options = {
    "no_index": True
}

html_favicon = path.join("sources", "icon.svg")
