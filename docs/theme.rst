.. _theme:

Sphinx theme
============

A Sphinx themed called *harmonic* (old *cosmic*) is available and
is deeply based on ADI's *harmonic* design language.

Shortcuts
---------

.. tip::

   Depending on your browser and operating system shortcuts, some shortcuts may
   collide with existing ones, due to this, the script provides many alternatives.

``Alt+Shift+ArrowLeft`` goes to the previous page and ``Alt+Shift+ArrowRight``
to the next page. Or ``Alt+Shift+A`` and ``Alt+Shift+D``.
``Ctrl+Alt+Shift+ArrowLeft/Right`` preserves the current page anchor, for example,
if the current section is *project_0.html#details*, ``Ctrl+Alt+Shift+ArrowRight``
goes to *project_1.html#details*, even if *details* does not exist
(same for ``A`` and ``D`` variants).
This feature is useful for batch reviewing sections common to many pages,
e.g. "Supported Devices".

The ``/``, ``Ctrl+K``, ``Alt+K`` key triggers the search bar. In search, Use
``Ctrl+`` incrementing values (1,2,3..B,C...,Z) to select the search locations.
The script skips ``A`` because is a common shortcut to select all text. Double tab
from the focused search box focuses on the first result. ``esc`` exits the search.

.. _theme options:

Theme options
-------------

As other Sphinx themes, you set doctools theme customization through the *conf.py*.
You add to the ``html_theme_options`` dictionary:

.. code:: python

   html_theme_options = {
       "light_logo": path.join("path", "to", "logo_light.svg"),
       "dark_logo": path.join("path", "to", "logo_dark.svg"),
       "no_index": False,
       "standalone": False,
   }

For logos in the sidebar, provide a dark and light variant:
If there is no dark variant, provide only ``light_logo``.

To not index the doc in search engines, set ``no_index`` as ``True``, a per-page
option is available using :ref:`theme metadata` as well.

If you desire to disable cross-repository integration, set ``standalone`` as
``True``. This option is not recommended in most cases, since the internal
logic already manages the features on a context/deployment basis, while this
flag will permanently disable the features for a build.

.. _theme metadata:

Metadata
--------

:external+sphinx:ref:`metadata` are field lists at the top of the file, that
Sphinx parses into document metadata.

Beyond Sphinx special metadata fields, doctools converts some metadata into HTML
meta tags.
The values and their effects are:

* ``no-index``: Appends an
  `"noindex" meta tag <https://developers.google.com/search/docs/crawling-indexing/block-indexing>`__
  to the page, alternative to the :ref:`theme option <theme options>` ``no_index``.
* ``stub``: Marks the page as a temporary or incomplete page that serves as a
  placeholder for future content.
* ``body-class``: Add classes to the body HTML tag, scoping the whole webpage.
  Useful for customizing the header, sidebars.

When visiting a page with the ``stub`` metadata, the scripts searches for the
suggested alternative to redirect to. Useful for then the content is in under
review in a pull request or different tag. The suggested alternative is the
value and is for example ``:stub: pull/1234``.
