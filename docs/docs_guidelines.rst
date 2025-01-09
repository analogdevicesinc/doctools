.. _docs_guidelines:

Documentation guidelines
================================================================================

A brief set-of-rules for the documentation.

.. note::
   The old wiki uses `dokuwiki <https://www.dokuwiki.org/dokuwiki>`_. When
   importing text from there, consider the automated options that are provided
   in this page to convert it to reST.

Importing from DokuWiki to Sphinx
--------------------------------------------------------------------------------

Use the following command to import a DokuWiki page (old *wiki.analog.com*):

.. code:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 -s -o imported.rst --list-tables

The :code:`list-tables` parameter requires *pandoc-types* >= 1.23, included in any
recent `pandoc release <https://github.com/jgm/pandoc/releases>`__;
if it is not an option, you shall remove it and export in the *grid* table
format (see :ref:`tables` for more information).

After converting, update it to better conform with the guidelines below, and
make sure to use our directives and roles, for example, the :ref:`role git`.

To speed thing up, combine with wget:

.. code:: bash

   wikifile=resources/eval/user-guides/adrv9009/adrv9009
   outfile=output.rst

   wget -O - https://wiki.analog.com/$wikifile?do=export_raw --no-verbose | \
     pandoc -f dokuwiki -t rst --columns=80 -s -o $outfile --list-tables

Also, consider recording macros in your favorite text editor to automate
repetitive steps.

There is also the
`DokuWiki to Sphinx (bash.sh) <https://gist.github.com/gastmaier/9d9c8281dc3c8551991a857cdb2692cc>`__
to further help importing.

Indentation
--------------------------------------------------------------------------------

Directives are indented with 3 space, which is Sphinx's default.
At code directives, the code keeps its original indentation (e.g. 2 spaces for
Verilog code), but is offset by 3 spaces at the beginning of every line, to
instruct Sphinx the beginning and end of the code directive.

Table of contents
--------------------------------------------------------------------------------

The relation between pages are created with the ``toctree`` directive,
which allows to generate the table of contents and navigation bars.

Each page may have only one toctree, since they are the equivalent of the
volumes of a book, and it does not make sense to have multiple "volumes" at
the repository level.

The only exception is the :git-documentation:`/`, which indeed contains various
types of documentation (eval-boards, university program, Linux drivers, etc.).

The ``toctree`` directive has the following format:

.. code:: rst

   .. toctree::
      :maxdepth: <depth>

      Custom title <path/to/page>

For pages with shorter titles, such as libraries, the label is inherited from
the page itself, for example:

.. code:: rst

   .. toctree::

      library/axi_dmac/index
      library/spi_engine/index

And for pages with long titles, such as projects, overwrite the full title with
a custom title, e.g:

.. code:: rst

   .. toctree::

      AD7616-SDZ <projects/ad7616_sdz/index>

This way, only "AD7616-SDZ" will be displayed in the page navigation bar instead
of "AD7616-SDZ HDL project".

Also, it is recommended to wrap the toctree in a "Contents" section:

.. code:: rst

   Contents
   ========

   .. toctree::

      some_page

For extensive documentation with different topics, it makes sense to filter
the toctree based on the current topic/toctree title.
This is possible by setting the environment variable ``ADOC_FILTER_TOCTREE`` to
``1``.
Alternatively, setting ``filter_toctree`` on ``conf.py`` has higher precedence
than ``ADOC_FILTER_TOCTREE``.
And is supposed to be used alongside the ``topic`` field at ``lut.py`` to
preserve high level links for each topic.

Enable this environment variable only on the release build, since writing pages
with it enabled may be obnoxious and confusing prior the final structure/location
of them.

.. _version:

Versioning
--------------------------------------------------------------------------------

To avoid having the version set in multiple places or having to tweak ``conf.py``
to obtain it from somewhere else, continuous integration can set the environment
variable ``ADOC_DOC_VERSION`` to set the version value.

Still, the ``version`` value on ``conf.py`` has higher precedence, and
``ADOC_DOC_VERSION`` will be ignored if the variable is already set.

The CI, in general, should set ``ADOC_DOC_VERSION`` as the current checkout branch
in the pipeline (e.g. ``main``, ``v1.0.0``).

.. tip::

   If creating a branch or PR output, consider using GitHub short reference
   ``${{ github.ref_name }}``.

If both environment variable and ``version`` on ``conf.py`` are unset, it defaults
to an empty string.

Also, set ``ADOC_TARGET_DEPTH`` to match the final destination depth, for example,
if the target directory is:

* *./*: ``0`` or unset
* *./v2.2*: ``1``
* *./prs/1234*: ``2``
* *./staging/user/branch*: ``3``

Exporting to PDF
--------------------------------------------------------------------------------

The whole documentation can be exported to a PDF document for a more compact
format using either rs2pdf or WeasyPrint.
This is done by setting the environment variable called
``ADOC_MEDIA_PRINT`` (the value does not matter) and building the documentation.

For rst2pdf, use:

.. shell::

   ~/some_repository/docs
   sphinx-build -b pdf . _build/pdfbuild

In the output folder, you’ll find a PDF document named after the repository
(e.g. Doctools.pdf). This document includes an auto-generated cover, followed by
the remaining pages. Note that an HTML build of the documentation is not
required for the PDF build.

.. warning::

   The enviroment variable ``ADOC_MEDIA_PRINT`` should be unset when building
   the HTML pages of documentation. If not set, some components of the pages
   may not render properly.

Alternatively, WeasyPrint can be used with :ref:`author-mode` with this command:

.. shell::

   ~/some_repository/docs
   $adoc author-mode --directory . --builder pdf

The advantage of WeasyPrint is that the design styles (CSS stylesheet) is
respected.

Inner working
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Internally, ``ADOC_MEDIA_PRINT`` variable is set to ``app.config.media_print``
and should be used in scenarios where it is explicitly needed to compile the
content in a different manner than for the **hosted** html.
For example, to render content during build that would instead be rendered with
third-party JavaScript libraries in the user browser.

Still, another approach is to patch the generated html, like is done at
:git-doctools:`adi_doctools/cli/aux_print.py` for :ref:`author-mode` and
:ref:`custom-doc` with pdf builders.

.. _local_refs:

Local references
--------------------------------------------------------------------------------

References to labels have the format :code:`:ref:\`context topic\``, e.g.
:code:`:ref:\`role git\`` renders as :ref:`role git`.

Labels are created for any content with the syntax
(dot-dot underscore<label>two-dots):

.. code:: rst

   .. _context topic:

.. hint::

   Add labels to any content that may be linked, locally or
   :ref:`externally <inter-refs>`.

References to docs have the format :code:`:doc:\`path/to/doc\``, e.g.
:code:`:doc:\`docs_guidelines\`` for *docs_guidelines.rst*.

.. attention::

   Do not break reference roles between lines!
   Even though Sphinx allows breaking line inside the reference role,
   it makes pattern matching hard.

Prefer hyphen separation ``-`` over undeline ``_`` for the "title" section,
and always lower case,
for example
``my_code control-interface`` instead of ``MY_CODE Control_Interface``.

Numbered references
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

References can be numbered by using
`numref <https://www.sphinx-doc.org/en/master/usage/referencing.html#role-numref>`__,
for example, "*see Figure 1*".

To use this feature, enable on the *conf.py*:

.. code-block:: python

   numfig = True

To customize the format, set ``numfig_format``:

.. code-block:: python

   numfig_format = {'figure': 'Figure %s',
                    'table': 'Table %s',
                    'code-block': 'Listing %s',
                    'section': 'Section %s'}

.. tip::

   By default enumeration is global, so if the toctree is not
   `numbered <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-option-toctree-numbered>`__ to divide the pages in numbered sections (e.g. *Figure 3.4.4*),
   the numbering will "propagate" across page which may be counter-intuitive.

   To have the numbering reset at every page, add ``numfig_per_doc = True`` to
   *conf.py*.

.. _inter-refs:

External references
--------------------------------------------------------------------------------

External references to other Sphinx documentation are created using the built-in
``sphinx.ext.intersphinx`` extension.

To setup **in-organization** references read the :ref:`section below <in-org-ref>`,
and for **third-party** docs, the section :ref:`that follows <out-org-ref>`.

| For either, to create a reference to a **label**, use:
| :code:`:external+inv:ref:\`label\``, where ``inv`` is a mapped source,
  for example, :code:`:external+hdl:ref:\`spi_engine control-interface\``.

| To create a reference to a **doc**, use:
| :code:`:external+inv:doc:\`label\``, where ``inv`` is a mapped source,
  for example, :code:`:external+hdl:doc:\`library/spi_engine/index\``.

As the other roles, it is possible to customize the text, e.g.
:code:`:external+hdl:ref:\`Custom text <spi_engine control-interface>\``.

.. tip::

    Pay attention to the log output, since
    a warnings is thrown for each reference not found.

External references work with any kind of references, such as
*ref*, *doc*, *envvar*, *token*, *term*, *numref* and *keyword*.

| For references to **labels** it is possible to use the short form:
| :code:`:ref-inv:\`label\`` (equivalent to :code:`:external+inv:ref:\`label\``),
  but is discouraged.

.. note::

   Sphinx 8 allows the syntax :code:`:ref:\`<inv>:label\``,
   which allows local references to have higher precedence than external
   refs, useful for generating custom docs like user guides.
   However, since some users may require Sphinx 7, use the former syntax,
   and let :ref:`adoc <cli>` patch it when necessary.

To show all links of an InterSphinx mapping file, use the built-in tool:

.. code:: bash

   python3 -m sphinx.ext.intersphinx https://analogdevicesinc.github.io/hdl/objects.inv

.. _in-org-ref:

In organization reference
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create references to Sphinx docs inside the organization add the repositories
of interest to the `conf.py` file with the following format:

.. code:: python

   interref_repos = [external...]

For example:

.. code:: python

   interref_repos = ['hdl', 'no-OS', 'pyadi-iio/main']

Notice that in the example ``main`` suffixes ``pyadi-iio``, this means that will
look for the build at path ``main`` of this repo instead of at root.
This can be used to target a specific version, if the target repository stores
multiple, for example, ``v1.1``, more about that :ref:`ci-versioned`.

.. tip::

   For even more freedom, you can setup with an explicit path as
   an :ref:`out-org-ref`.

It is possible to customize the target URL with the ``interref_uri`` config or
``ADOC_INTERREF_URI`` environment variables.
The default value is *https://analogdevicesinc.github.io/* and can be set to a
local path like *../../*.

Beyond the main target dictated by *interref_uri*,
by setting the config ``interref_local`` as true, a secondary target is inferred
foreseeing a local copy of the target external documentation alongside the
current repository:

.. code::

   /data/work
   ├─my-repo-0/doc/sources
   │
   ├─my-repo-1/docs
   │
   └─my-repo-2/doc

The correct relative paths are resolved looking into the ``lut.py``.

.. _out-org-ref:

Outside organization Sphinx reference
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create references to third-party Sphinx documentations, add the mappings to
to the `conf.py` file with the following format:

.. code:: python

   intersphinx_mapping = {
       '<name>': ('<path/to/external>', None)
   }

For example:

.. code:: python

   intersphinx_mapping = {
       'sphinx': ('https://www.sphinx-doc.org/en/master', None)
   }

Text width
--------------------------------------------------------------------------------

Each line must be less than 80 columns wide.
You can use the :code:`fold` command to break the lines of the imported text
while respecting word-breaks:

.. code:: bash

   cat imported.txt | fold -sw 80 > imported.rst

The header divider "``---``" shall be either 80 characters wide or end at the
title character, that means, this is also valid:

.. code::

   My title
   ========

.. _tables:

Tables
--------------------------------------------------------------------------------

Prefer
`list-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table>`__
and imported
`csv-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table-1>`__
(using the file option), because they are faster to create, easier to maintain
and the 80 column-width rule can be respected with list-tables.

Only use
`grid tables <https://www.sphinx-doc.org/en/master/usage/restructuredtext/basics.html#tables>`__
if strictly necessary, since they are hard to update.

To tune styling, the following classes are available:

* *bold-header*: Make the header bold.
* *bold-first-column*: Make the first column bold.

Lists
--------------------------------------------------------------------------------

Unordered lists use ``*`` or ``-`` and ordered lists ``#.``.

Child items must be aligned with the first letter of the parent item, that means,
2 spaces for unordered list and 3 spaces for ordered lists, for example:

.. code-block:: rst

   #. Parent ordered item.

      * Child unordeded item.

        #. Child ordered item.
        #. Child ordered item.

Renders as:

#. Parent numbered item.

   * Child unordered item.

     #. Child ordered item.
     #. Child ordered item.

Code
--------------------------------------------------------------------------------

Prefer
`code-blocks <https://www.sphinx-doc.org/en/master/usage/restructuredtext/directives.html#directive-code-block>`_
to
`code <https://docutils.sourceforge.io/docs/ref/rst/directives.html#code>`_
directives, because code-blocks have more options, such as showing line numbers
and emphasizing lines.

For example,

.. code:: rst

   .. code-block:: python
      :linenos:
      :emphasize-lines: 2

      def hello_world():
          string = "Hello world"
          print(string)

Renders as

.. code-block:: python
   :linenos:
   :emphasize-lines: 2

   def hello_world():
       string = "Hello world"
       print(string)

Images
--------------------------------------------------------------------------------

Prefer the SVG format for images, and save it as *Optimized SVG* in
`inkscape <https://inkscape.org/>`_ to use less space.

Store them in a hierarchically, do not use ``images`` subdirectories.
The idea is to have simpler relative paths, for example, e.g.:

.. code:: rst

   .. image:: ad2234_sdz_schematic.svg


Instead of over complicated paths like:

.. code:: rst

   .. image:: ../../project/images/ad2234_sdz/ad2234_sdz_schematic.svg

In general, this avoids dangling artifacts and keeps the documentation simple.

.. _git-lfs:

Git Large File Storage
--------------------------------------------------------------------------------

Where applicable, Git Large File Storage (LFS) is used to replace large files
with text pointers inside Git, reducing cloning time.

To setup, install from your package manager and init:

.. code:: bash

   apt install git-lfs
   git lfs install

The files that will use Git LFS are tracked at ``.gitattributes``, to add new
files use a pattern at the repo root, for example:

.. code:: bash

   git lfs track *.jpg

Or edit ``.gitattributes`` directly.

Third-party directives and roles
--------------------------------------------------------------------------------

Third-party tools are used to expand Sphinx functionality, if you haven't already,
do:

.. code:: bash

   pip install -r requirements.txt

Custom directives and roles
--------------------------------------------------------------------------------

To expand Sphinx functionality beyond existing tools, custom directives and roles
have been written, which are located in the *docs/extensions* folder.
Extensions are straight forward to create, if some functionality is missing,
consider requesting or creating one.

.. note::

   Link-like roles use the :code:`:role:\`text <link>\`` synthax, like external
   links, but without the undescore in the end.

Color role
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To print text in red or green, use :code:`:red:\`text\`` and :code:`:green:\`text\``.

Link roles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The link roles are a group of roles defined by ``adi_links.py``.

The ``validate_links`` global option is used to validate each link during build.
These links are not managed, that means, only links from changed files are checked.
You can run a build with it set to False, then touch the desired files to check
the links of only these files.

.. _role git:

Git role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The Git role allows to create links to the Git repository with a shorter syntax.
The role syntax is :code:`:git-repo:\`text <type+branch:path>\``, for example:

* :code:`:git-hdl:\`main:docs/user_guide/docs_guidelines.rst\``
  renders as :git-hdl:`main:docs/user_guide/docs_guidelines.rst`.
* :code:`:git-hdl:\`Guidelines <docs/user_guide/docs_guidelines.rst>\``
  renders as :git-hdl:`Guidelines <docs/user_guide/docs_guidelines.rst>`.
* :code:`:git-wiki-scripts:\`raw+linux/build_zynq_kernel_image.sh`\``
  renders as :git-wiki-scripts:`raw+linux/build_zynq_kernel_image.sh`.

.. important::

   The repository name is case sensitive.

When the branch field is not present, it will be filled with the current branch.
It is recommended to not provide this field when it is a link to its own repository,
because it is useful to auto-fill it for documentation releases
(e.g. ``hdl_2023_r2``).
A scenario where it is recommended to provide the branch is when linking others
repositories.

They type field is also optional and the values are:

* *gui*: To view rendered on the Git server web GUI [default].
* *raw*: To download/view as raw.
* *{}*: Any other Git server web GUI link, e.g. :code:`:git-hdl:\`releases+\``.
  The last character must be ``+``, since filenames/path may contain this character
  also.

The text field is optional and will be filled with the full path.

Finally, you can do :code:`:git-repo:\`/\`` for a link to the root of the
repository with pretty naming, for example, :code:`:git-hdl:\`/\`` is rendered
as :git-hdl:`/`.

DownGit role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Same as the :ref:`role git` but wrapping the address with the :git-DownGit:`+`
fork.

ADI role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The adi role creates links for a webpage to the Analog Devices Inc. website.

The role syntax is :code:`:adi:\`text <webpage>\``, for example,
:code:`:adi:\`AD7175-2 <ad7175-2>\``.
Since links are case insensitive, you can also reduce it to
:code:`:adi:\`AD7175-2\``, when *webpage* is the same as *text* and will render
as :adi:`AD7175-2`.

.. _role dokuwiki:

Dokuwiki role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The dokuwiki role creates links to the Analog Devices Inc. wiki website.
The role syntax is :code:`:dokuwiki:\`text <path>\``, for example,
:code:`:dokuwiki:\`pulsar-adc-pmods <resources/eval/user-guides/circuits-from-the-lab/pulsar-adc-pmods>\``
gets rendered as
:dokuwiki:`pulsar-adc-pmods <resources/eval/user-guides/circuits-from-the-lab/pulsar-adc-pmods>`.

For intentional deprecated links, add the ``deprecated`` qualifier, e.g.:
:code:`:dokuwiki+deprecated:\`ADS-B Airplane Tracking Example <resources/tools-software/linux-software/libiio/clients/adsb_example>\``
gets rendered as
:dokuwiki+deprecated:`ADS-B Airplane Tracking Example <resources/tools-software/linux-software/libiio/clients/adsb_example>`.
The sole intend of this qualifier is to distinct pending import pages from won't
import pages.

EngineerZone role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The ez role creates links to the Analog Devices Inc. EngineerZone support website.
The role syntax is :code:`:ez:\`community\``, for example, :code:`:ez:\`fpga\``
gets rendered as :ez:`fpga`.

For Linux Software Drivers, it is :code:`:ez:\`linux-software-drivers\``.

For Microcontroller no-OS Drivers it is :code:`:ez:\`microcontroller-no-os-drivers\``.

Vendor role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The vendor role creates links to the vendor's website.
The role syntax is :code:`:vendor:\`text <path>\``, for example,
:code:`:xilinx:\`Zynq-7000 SoC Overview <support/documentation/data_sheets/ds190-Zynq-7000-Overview.pdf>\``
gets rendered
:xilinx:`Zynq-7000 SoC Overview <support/documentation/data_sheets/ds190-Zynq-7000-Overview.pdf>`.

The text parameter is optional, if absent, the file name will be used as the text,
for example,
:code:`:intel:\`content/www/us/en/docs/programmable/683780/22-4/general-purpose-i-o-overview.html\``
gets rendered
:intel:`content/www/us/en/docs/programmable/683780/22-4/general-purpose-i-o-overview.html`
(not very readable).

Supported vendors are: ``xilinx`` (AMD Xilinx), ``intel`` (Intel Altera) and
``mw`` (MathWorks).

Supplier role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The supplier role creates links to a vendor's website search.
The role syntax is :code:`:vendor:\`text <path>\``, for example,
:code:`:digikey:\`AD9081-FMCA-EBZ\``
gets rendered
:digikey:`AD9081-FMCA-EBZ`.

The text parameter is optional.

Supported vendors are: ``digikey`` (Digikey), ``mouser`` (Mouser) and
``arrow`` (Arrow).

Container directives
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To allow disposing content in a tabular manner but still respecting the multiple
screen sizes and both HTML and PDF output, two container directives are available,
``flex`` and ``grid``.

.. _directive flex:

Flex directive
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The grid directive implements a subset of
`CSS Flex <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>`__.
And is used to dipose elements without worrying about number of columns and sizes,
while still obtaining a fairly good result.

.. code:: rst

   .. flex::

.. _directive grid:

Grid directive
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The grid directive implements a subset of
`CSS Grids <https://css-tricks.com/snippets/css/complete-guide-grid/>`__.
And is used to dipose elements with exact number of columns and width control.

.. code:: rst

   .. grid::
      :widths: 25 25% 150px

The ``widths`` options allow units (``px``, ``%``, etc) and without an explicit
unit it is inferred percentile.
This option is required, since it is not possible to infer the number of
columns in a sane manner.


Clear content directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

A simple directive to
`clear <https://developer.mozilla.org/en-US/docs/Web/CSS/clear>`__
the content, forcing any following content to be moved below any preceding
content.
It is useful when working with images
aligned/`float <https://developer.mozilla.org/en-US/docs/Web/CSS/float>`__
left/right and wants to ensure the next section does not also gets "squashed".

.. code:: rst

   .. clear-content::
      :side: [both,left,right]
      :break:

It can clear content to it's ``left``, ``right`` or ``both`` sides.
By default, it clear ``both`` sides.

With the ``break`` option, it will break the page when generating a PDF
(behaves similar to LaTeX *cleardoublepage*).

Shell directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The shell directive allows to embed shell code in a standard way.

.. code:: rst

   .. shell:: [bash,sh,zsh,ps1]
      :user: <user>
      :group: <group>
      :caption: <caption>
      :show-user:
      :no-path:

      /path_absolute
      ~path_relative_to_home
      $command
       output

That means, each line is prefixed by character to:

* ``$``: bash commands.
* :code:`\ ` (one space): command output.
* ``#``: bash comments
* ``/``: set absolute working directory (cygpath-formatted for ps1).
* ``~``: set relative to "home" working directory (cygpath-formatted for ps1).

Anything that does not match the previous characters will default to output print,
but please be careful, since you may accidentally mark a working directory or
command, if not identing the output by one space.

The bash type defaults to ``bash``, user to ``user``, group to ``analog``
and the working directory as "doesn't matter" (hidden), so, for
example:

.. code:: rst

   .. shell::
      :caption: iio_reg help

      $iio_reg -h
       Usage:

       iio_reg <device> <register> [<value>]

Renders as:

.. shell::
   :caption: iio_reg help
   :show-user:

   $iio_reg -h
    Usage:

    iio_reg <device> <register> [<value>]

.. admonition:: Insight
   :class: caution

   To make it super easy for the user to copy only the command,
   the current directory and output cannot be selected.

To show the user and user group, add the ``:show-user:`` flag.

For Windows, set bash type as ``ps1`` (PowerShell), for example:

.. code:: rst

   .. shell:: ps1
      :user: Analog

      /e/MyData
      $cd ~/Documents
      $ls
       Mode  LastWriteTime      Name
       ----  -------------      ----
       d---- 6/14/2024 10:30 AM ImportantFiles
       d---- 6/14/2024 10:30 AM LessImportantFiles
      $cd ..\Other\Folder
      $echo HelloWindows
       HelloWindows

Renders as:

.. shell:: ps1
   :user: Analog

   /e/MyData
   $cd ~/Documents
   $ls
    Mode  LastWriteTime      Name
    ----  -------------      ----
    d---- 6/14/2024 10:30 AM ImportantFiles
    d---- 6/14/2024 10:30 AM LessImportantFiles
   $cd ..\Other\Folder
   $echo HelloWindows
    HelloWindows

To make things more interesting, basic ``$cd`` commands change the working
directory accordingly, for example:

.. code:: rst

   .. shell::

      $cd /sys/bus/iio/devices/
      $ls
       iio:device0  iio:device3  iio:device2  iio:device3  iio:device4  iio:device5  iio:device6
      $cd iio:device3
      $ls -al
       total 0
       drwxr-xr-x 3 root root     0 May 16 14:21 .
       -rw-rw-rw- 1 root root  4096 May 16 14:22 calibrate
       -rw-rw-rw- 1 root root  4096 May 16 14:22 calibrate_frm_en

Renders as:

.. shell::

   $cd /sys/bus/iio/devices/
   $ls
    iio:device0  iio:device3  iio:device2  iio:device3  iio:device4  iio:device5  iio:device6
   $cd iio:device3
   $ls -al
    total 0
    drwxr-xr-x 3 root root     0 May 16 14:21 .
    -rw-rw-rw- 1 root root  4096 May 16 14:22 calibrate
    -rw-rw-rw- 1 root root  4096 May 16 14:22 calibrate_frm_en

Finally, be mindful of the command legibility, break long commands and sugar coat
with indent:


.. code:: rst

   .. shell::

      # Write the file to the storage devices
      $time sudo dd \
      $  if=2021-07-28-ADI-Kuiper-full.img \
      $  of=/dev/mmcblk0 \
      $  bs=4194304
       [sudo] password for user:
       0+60640 records in 0+60640 records out 7948206080 bytes (7.9 GB) copied, 571.766 s, 13.9 MB/s
       real 7m54.11s user 0.29s sys 8.94s

Renders to:

.. shell::

   # Write the file to the storage device
   $time sudo dd \
   $  if=2021-07-28-ADI-Kuiper-full.img \
   $  of=/dev/mmcblk0 \
   $  bs=4194304
    [sudo] password for user:
    0+60640 records in 0+60640 records out 7948206080 bytes (7.9 GB) copied, 571.766 s, 13.9 MB/s
    real 7m54.11s user 0.29s sys 8.94s

.. _svg-directive:

SVG directive
~~~~~~~~~~~~~

The SVG directive embeds a SVG image directly onto the page, having it share
the same DOM sandbox as the page.

This allows the SVG image to contain links and interactive content, such as
hover effects.

The syntax is:

.. code:: rst

   .. svg: <file>
      :align: [left,center,right]

      <caption>

At it's core, for the HTML builder, it is somewhat equivalent to:

.. code:: rst

   .. raw: html
      :file: path

But have the proper hooks for future implementation for other outputs (LaTeX, etc.).

.. _hdl build-status-directive:

HDL build status directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HDL build status directive gets information from a markdown formatted status
table (*output.md*) and generates a table with the build statuses.

The directive syntax is:

.. code:: rst

   .. hdl-build-status::
      :file: <build_status_file>

The ``:path:`` option is optional, in the sense that if it's not provided, no table
is generated.
If provided, but the build status file does not exist, an error is
thrown.

.. note::

   The ``:path:`` option is meant to be "filled" during a CI procedure.

HDL parameters directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HDL parameters directive gets information parsed from IP-XACT (*component.xml*)
library and generates a table with the IP parameters.

.. note::

   The IP-XACT files are generated by Vivado during the library build and not by
   the documentation tooling.

The directive syntax is:

.. code:: rst

   .. hdl-parameters::
      :path: <ip_path>

      * - <parameter>
        - <description>

For example:

.. code:: rst

   .. hdl-parameters::
      :path: library/spi_engine/spi_engine_interconnect

      * - DATA_WIDTH
        - Data width of the parallel SDI/SDO data interfaces.
      * - NUM_OF_SDI
        - Number of SDI lines on the physical SPI interface.

Descriptions in the directive have higher precedence than in the *component.xml*
file.

The ``:path:`` option is optional, and should **not** be included if the
documentation file path matches the *component.xml* hierarchically.

HDL interface directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HDL interfaces directive gets information parsed from *component.xml* library
and generates tables with the IP interfaces, both buses and ports.

.. note::

   The *component.xml* files are generated by Vivado during the library build
   and not by the documentation tooling.

The directive syntax is:

.. code:: rst

   .. hdl-interfaces::
      :path: <ip_path>

      * - <port/bus>
        - <description>

For example:

.. code:: rst

   .. hdl-interfaces::
      :path: library/spi_engine/spi_engine_interconnect

Descriptions in the directive have higher precedence than in the *component.xml*
file.
You can provide description to a port or a bus, but not for a bus port.
Ports/buses that are consecutive are squashed into a single instance
to avoid repetition, for example:

.. code-block::

   {data_tx_12_p, data_tx_23_p} -> data_tx_*_p
   {data_tx_12, data_tx_23} -> data_tx_*
   {adc_data_i0, adc_data_i0} -> adc_data_i*
   {adc_data_q0, adc_data_q0} -> adc_data_q*
   {rx_phy2, rx_phy4} -> rx_phy*

To provide a description to the squashed signals/buses, write, for example,
``data_tx_*`` once instead of the original name of all.

.. warning::

   Do not create new IP with signals named as ``_phy*``, it was added for
   legacy puporses, instead suffix with ``_*``, e.g. ``mysignal_phy_4``.

The ``:path:`` option is optional, and should **not** be included if the
documentation file path matches the *component.xml* hierarchically.

HDL component diagram directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HDL component diagram directive gets information parsed from *component.xml*
library and generates a component diagram for the IP with buses and ports
information.

.. note::

   The *component.xml* files are generated by Vivado during the library build
   and not by the documentation tooling.

The directive syntax is:

.. code:: rst

   .. hdl-component-diagram::
      :path: <ip_path>

For example:

.. code:: rst

   .. hdl-component-diagram::
      :path: library/spi_engine/spi_engine_interconnect

The ``:path:`` option is optional, and should **not** be included if the
documentation file path matches the *component.xml* hierarchically.

.. note::

   This directive replaces the deprecated ``symbolator`` directive.

HDL regmap directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The HDL regmap directive gets information from *docs/regmap/adi_regmap_\*.txt* files
and generates tables with the register maps.

The directive syntax is:

.. code:: rst

   .. hdl-regmap::
      :name: <regmap_name>
      :no-type-info:

For example:

.. code:: rst

   .. hdl-regmap::
      :name: DMAC

.. note::

  The register map name is the title-tool, the value above ``ENDTITLE`` in the
  source file.

This directive does not support content for descriptions, since the source file
already have proper descriptions.

The ``:name:`` option is **required**, because the title tool does not match
the IP name and one single *docs/regmap/adi_regmap_\*.txt* file can have more than
one register map.
The ``:no-type-info:`` option is optional, and should **not** be included if it is
in the main IP documentation page. It appends an auxiliary table explaining the
register access types.

Collapsible directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The collapsible directive creates a collapsible/dropdown/"HTML details".

The directive syntax is:

.. code:: rst

   .. collapsible:: <label>

      <content>

For example:

.. code:: rst

   .. collapsible:: Python code example.

      .. code:: python

         print("Hello World!")

Renders as:

.. collapsible:: Python code example.

   .. code:: python

      print("Hello World!")

Notice how you can use any Sphinx syntax, even nest other directives.

Video directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The video directive creates a embedded video.
Currently, direct MP4 and youtube embed links  are supported, but could be easily
expanded to support third-party services.

The directive syntax is:

.. code:: rst

   .. video:: <url>
      :align: [left,center,right]

      <caption>

Always add a caption to the video, since a PDF output won't contain the embed
video, but a link to it.

For example:

.. code:: rst

   .. video:: http://ftp.fau.de/fosdem/2015/devroom-software_defined_radio/iiosdr.mp4

      **Linux Industrial IO framework** - Lars-Peter Clausen, Analog Devices Inc

Renders as:

.. video:: http://ftp.fau.de/fosdem/2015/devroom-software_defined_radio/iiosdr.mp4

   **Linux Industrial IO framework** - Lars-Peter Clausen, Analog Devices Inc

And:

.. code:: rst

   .. video:: https://www.youtube.com/watch?v=p_VntEwUe24

      **LibIIO - A Library for Interfacing with Linux IIO Devices** - Dan Nechita, Analog Devices Inc

Renders as:

.. video:: https://www.youtube.com/watch?v=p_VntEwUe24

   **LibIIO - A Library for Interfacing with Linux IIO Devices** - Dan Nechita, Analog Devices Inc

ESD warning directive
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ESD warning directive creates a ESD warning, for example:

.. code:: rst

   .. esd-warning::

Renders as:

.. esd-warning::

Global options for directives
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set ``hide_collapsible_content`` to ``True`` to hide the *collapsibles* by default.

Set ``monolithic`` to ``True`` prefix paths with *<repo>*.
This is meant for the :ref:`custom-doc` custom documents only.

Common sections
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

HDL common sections
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The **More information** and **Support** sections that are present in
the HDL project documentation, are actually separate pages inserted as links.
They're located at *hdl/projects/common/more_information.rst* and */support.rst*,
and cannot be referenced here because they don't have an ID at the beginning
of the page, so not to have warnings when the documentation is rendered that
they're not included in any toctree.

They are inserted like this:

.. code-block::

   .. include:: ../common/more_information.rst

   .. include:: ../common/support.rst

And will be rendered as sections of the page.

Dynamic elements
--------------------------------------------------------------------------------

Dynamic elements refer to sections of the generated webpage that updates when
loaded online from a source of truth, in general, ``doctools/*.json`` files;
it uses a concept similar to "react components".

These ``*.json`` files are generated when ``export_metadata`` is true in the
``conf.py``.
From the JavaScript side, it fetches from
``{content_root}[../versioned]/../doctools/[versioned]/metadata.json``.

.. note::

   path ``version`` is present and set if ``latest`` exists at
   ``{content_root}/../doctools`` and the stored version can be extracted.

The dynamic elements are:

* The navigation bar at the top is updated using the ``repotoc`` entry
  in ``doctools/metadata.json``.
* A banner at the top is present/updated when the ``banner`` entry
  in ``doctools/metadata.json`` exists.
