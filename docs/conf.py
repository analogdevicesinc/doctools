# -- Project information -----------------------------------------------------

project = 'ADI Doc Tools'
copyright = '2024, Analog Devices Inc.'
author = 'Analog Devices Inc.'
release = 'v0.1'

# -- General configuration ---------------------------------------------------

extensions = [
	"adi_doctools",
]

needs_extensions = {
    'adi_doctools':'0.1'
}

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
source_suffix = '.rst'

# -- Custom extensions configuration -------------------------------------------

# -- Options for HTML output --------------------------------------------------

html_theme = 'furo'
