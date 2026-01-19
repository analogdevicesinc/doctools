from os import path

# -- Project information -----------------------------------------------------

repository = 'doctools'
project = 'Doctools'
copyright = '2024, Analog Devices, Inc.'
author = 'Analog Devices, Inc.'
version = '0.4'

locale_dirs = ['locales/']  # path is relative to the source directory
language = 'en'

# -- General configuration ---------------------------------------------------

extensions = [
    'adi_doctools',
    'sphinx.ext.intersphinx',
]

needs_extensions = {
    'adi_doctools': '0.3'
}

exclude_patterns = ['_build', 'Thumbs.db', '.DS_Store']
source_suffix = '.rst'

# -- Custom extensions configuration ------------------------------------------

core_repo = True

#  -- Options for PDF output --------------------------------------------------

latex_engine = 'xelatex'

latex_elements = {
    'papersize': 'letterpaper',
    'pointsize': '10pt',

    'fontpkg': r'''
\usepackage{fontspec}
\defaultfontfeatures{Scale=MatchLowercase}
\setmainfont{FreeSerif}
\setsansfont{FreeSans}
\setmonofont{FreeMono}[Scale=0.9]
''',

    'preamble': r'''
% Modern typography
\usepackage{microtype}

% Better tables
\usepackage{booktabs}
\usepackage{longtable}

% Improved spacing
\usepackage{parskip}
\setlength{\parindent}{0pt}
\setlength{\parskip}{6pt plus 2pt minus 1pt}

% Modern colors for links and code
\usepackage{xcolor}
\definecolor{linkcolor}{RGB}{0, 102, 204}
\definecolor{citecolor}{RGB}{0, 128, 0}
\definecolor{urlcolor}{RGB}{153, 51, 153}
\definecolor{codebg}{RGB}{248, 248, 248}
\definecolor{codeborder}{RGB}{220, 220, 220}

% Hyperref customization
\hypersetup{
    colorlinks=true,
    linkcolor=linkcolor,
    citecolor=citecolor,
    urlcolor=urlcolor,
    bookmarksdepth=3,
}

% Modern section headings
\usepackage{titlesec}
\titleformat{\chapter}[display]
  {\normalfont\huge\bfseries\sffamily}{\chaptertitlename\ \thechapter}{20pt}{\Huge}
\titleformat{\section}
  {\normalfont\Large\bfseries\sffamily}{\thesection}{1em}{}
\titleformat{\subsection}
  {\normalfont\large\bfseries\sffamily}{\thesubsection}{1em}{}

% Code block styling
\usepackage{fvextra}
\fvset{
    frame=leftline,
    framesep=3mm,
    rulecolor=\color{codeborder},
    numbersep=3mm,
    fontsize=\small,
}

% Better captions
\usepackage{caption}
\captionsetup{
    font={small,sf},
    labelfont={bf,sf},
    margin=10pt,
}

% Page headers/footers
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE,RO]{\sffamily\thepage}
\fancyhead[LO]{\sffamily\nouppercase{\rightmark}}
\fancyhead[RE]{\sffamily\nouppercase{\leftmark}}
\renewcommand{\headrulewidth}{0.5pt}
\renewcommand{\footrulewidth}{0pt}

% Better spacing in lists
\usepackage{enumitem}
\setlist{itemsep=2pt,parsep=2pt,topsep=4pt}
''',

    'sphinxsetup': '''
        verbatimwithframe=true,
        verbatimwrapslines=true,
        verbatimhintsturnover=true,
        VerbatimColor={RGB}{248,248,248},
        VerbatimBorderColor={RGB}{220,220,220},
        InnerLinkColor={RGB}{0,102,204},
        OuterLinkColor={RGB}{153,51,153},
        noteBorderColor={RGB}{192,192,255},
        hintBorderColor={RGB}{192,255,192},
        importantBorderColor={RGB}{255,192,192},
        tipBorderColor={RGB}{192,255,255},
    ''',

    'maketitle': r'''
\begin{titlepage}
    \begin{center}
        \vspace*{2cm}

        {\Huge\sffamily\bfseries Doctools Documentation}

        \vspace{1cm}

        {\Large\sffamily Version 0.4}

        \vspace{2cm}

        {\large\sffamily Analog Devices, Inc.}

        \vfill

        {\sffamily\today}
    \end{center}
\end{titlepage}
''',
}

latex_documents = [
    ('index', 'doctools.tex', 'Doctools Documentation',
     'Analog Devices, Inc.', 'manual'),
]

latex_show_pagerefs = True

latex_show_urls = 'footnote'

# -- External docs configuration ----------------------------------------------

intersphinx_mapping = {
    'sphinx': ('https://www.sphinx-doc.org/en/master', None)
}

# -- Options for HTML output --------------------------------------------------

html_theme = 'harmonic'

html_theme_options = {}

html_favicon = path.join("sources", "icon.svg")

# -- Linkcheck ----------------------------------------------------------------

linkcheck_sitemaps = [
    "https://wiki.analog.com/doku.php?do=sitemap",
    "https://www.analog.com/media/en/en-pdf-sitemap.xml",
    "https://www.analog.com/media/en/en-pdp-sitemap.xml",
]
linkcheck_timeout = 5
linkcheck_request_headers = {
    "*": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:142.0) Gecko/20100101 Firefox/142.0",
        "Accept-Language": "en-US,en;q=0.5",
    },
}
linkcheck_ignore = [
    r'https://www.digikey.com/',
    r'https://inkscape.org/',
]
