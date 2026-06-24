latex_elements = {
    'papersize': 'letterpaper',
    'pointsize': '10pt',

    'fontpkg': r'''
\usepackage{fontspec}
\defaultfontfeatures{Scale=MatchLowercase}
\setmainfont{Inter}
\setsansfont{Barlow}
\setmonofont{JetBrains Mono}[Scale=0.75]
''',

    'preamble': r'''

\usepackage{enumitem}
\setlistdepth{9}
\renewlist{itemize}{itemize}{9}
\setlist[itemize,1]{label=\textbullet}
\setlist[itemize,2]{label=--}
\setlist[itemize,3]{label=\textasteriskcentered}
\setlist[itemize,4]{label=\textperiodcentered}
\setlist[itemize,5]{label=\textbullet}
\setlist[itemize,6]{label=--}
\setlist[itemize,7]{label=\textasteriskcentered}
\setlist[itemize,8]{label=\textperiodcentered}
\setlist[itemize,9]{label=\textbullet}

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

% If a rendered image is taller than the remaining page space,
% break to a new page first.
\makeatletter
\let\adi@orig@sphinxincludegraphics\sphinxincludegraphics
\renewcommand{\sphinxincludegraphics}[2][]{%
  \setbox0=\hbox{\adi@orig@sphinxincludegraphics[#1]{#2}}%
  \ifdim\ht0>\dimexpr\pagegoal-\pagetotal-\baselineskip\relax
    \clearpage
  \fi
  \box0\relax
}
\makeatother
''',

    'sphinxsetup': '''
        verbatimwithframe=true,
        verbatimwrapslines=true,
        verbatimhintsturnover=true,
        VerbatimColor={RGB}{255,255,255},
        VerbatimBorderColor={RGB}{220,220,220},
        InnerLinkColor={RGB}{0,102,204},
        OuterLinkColor={RGB}{153,51,153},
        noteBorderColor={RGB}{192,192,255},
        hintBorderColor={RGB}{192,255,192},
        importantBorderColor={RGB}{255,192,192},
        tipBorderColor={RGB}{192,255,255},
        div.note_border-radius=3pt,
        div.hint_border-radius=3pt,
        div.important_border-radius=3pt,
        div.tip_border-radius=3pt,
        div.caution_border-radius=3pt,
        div.warning_border-radius=3pt,
        div.danger_border-radius=3pt,
        div.attention_border-radius=3pt,
        div.error_border-radius=3pt,
        div.seealso_border-radius=3pt,
        div.todo_border-radius=3pt,
        div.note_background-TeXcolor=white,
        div.hint_background-TeXcolor=white,
        div.important_background-TeXcolor=white,
        div.tip_background-TeXcolor=white,
        div.caution_background-TeXcolor=white,
        div.warning_background-TeXcolor=white,
        div.danger_background-TeXcolor=white,
        div.attention_background-TeXcolor=white,
        div.error_background-TeXcolor=white,
        div.seealso_background-TeXcolor=white,
        div.todo_background-TeXcolor=white,
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


