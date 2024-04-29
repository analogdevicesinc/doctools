.. _docs_guidelines:

Documentation guidelines
================================================================================

A brief set-of-rules for the documentation.

.. note::
   The old wiki uses `dokuwiki <https://www.dokuwiki.org/dokuwiki>`_. When
   importing text from there, consider the automated options that are provided
   in this page to convert it to reST.

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
types of documentation (eval-boards, university program, Linux drivers, etc.);
and it uses the ``topic`` field at ``lut.py`` to keep track of
each.

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

If both environment variable and ``version`` on ``conf.py`` are unset, it defaults
to an empty string.

References
--------------------------------------------------------------------------------

References have the format ``library/project context``, e.g.
:code:`:ref:\`vivado block-diagrams\`` renders as :ref:`vivado block-diagrams`.
Notice how neither *library* nor *project* are present in the label, since there is no
naming collision between libraries or projects (no project will ever be named
*axi_dmac*).

Also, for project, libraries and IPs, the names should be exactly the
name of its folders, e.g. ``axi_pwm_gen`` and not ``axi-pwm-gen`` or ``AXI_PWM_GEN``,
this helps avoid broken references.

.. attention::

   Do not break reference role between lines!
   Even though Sphinx allows breaking line inside the reference role,
   it makes pattern matching really hard.

For resources without a particular source code file/folder, prefer hyphen ``-``
separation, for example, ``spi_engine control-interface`` instead of
``spi_engine control_interface``.

.. _in-org-ref:

In organization references
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For references to Sphinx docs inside the organization (repos listed in the repotoc),
the ``ref`` role is extended with the syntax
:code:`:ref-<external>:\`label\`` where ``external`` is a mapped source,
for example, :code:`:ref-hdl:\`spi_engine control-interface\``.
It is also possible to customize the text, e.g.
:code:`:ref-hdl:\`Custom text <spi_engine control-interface>\``.

A warning is thrown when a reference is not found.

Repository mappings are enabled to the `conf.py` file with the following format:

.. code:: python

   interref_repos = [external...]

For example:

.. code:: python

   interref_repos = ['hdl', 'no-OS']

Version handling is done with the ``ADOC_INTERREF_TAGGED`` and
``ADOC_INTERREF_RELEASE`` environment variables values, where:

* ``ADOC_INTERREF_TAG``: adds the tag as a suffix to the uri, e.g. ``main``,
  ``v2.1.0``, set to enable.
* ``ADOC_INTERREF_RELEASE``: unset to use the default branch (e.g. ``main``)
  or set to use the latest release (e.g. ``v3.0.0``) as the tag.

Links are absolute if  version handling is disabled and symbolic if enabled,
for example
``www.analogdevicesinc.github.io/repo_b/other_topic/sub_topic/index.html#anchor``
and
``../../../repo_b/v3.7/other_topic/sub_topic/index.html#anchor``, respectively.

The default branch is obtained from :git-doctools:`adi_doctools/lut.py`, and the
latest release from ``tags.json`` at the root of the hosted version, e.g.
``www/hdl/tags.json``.
If not found, it will fallback to the default branch.
Resolved the path, the mappings are obtained from the InterSphinx mapping file.

To show all links of an InterSphinx mapping file, use the built-in tool:

.. code:: bash

   python3 -m sphinx.ext.intersphinx https://analogdevicesinc.github.io/hdl/objects.inv

The previous syntax applies only for references/label links (domain ``ref``/``label``),
for every other domain, set it explicitly,
e.g. :code:`:ref-hdl:doc:\`user_guide/docs_guidelines\``.
The domains are also listed in the ``sphinx.ext.intersphinx`` output.

Others options:

* ``ADOC_INTERREF_URI``: uri for the inventory and links, default is
  ``https://analogdevicesinc.github.io/``; it can be a local path, e.g.
  ``/path/to/www``, in this case, the rendered href is always relative and
  expects the builds to be stored in the same path, e.g ``/path/to/www``.



Outside organization Sphinx references
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To create references to other Sphinx documentations, ``sphinx.ext.intersphinx``
can be added to the ``conf.py`` extension list.
The syntax is :code:`:external+<external>:<domain>:\`label\``, where ``external``
is a mapped source and the domain is the reference type,
for example, :code:`:external+sphinx:doc:\`development/theming\``.
It is also possible to customize the text, e.g.
:code:`:external+sphinx:ref:\`Custom text <examples>\``.

A warning is thrown when a reference is not found.

Mappings are included to the `conf.py` file with the following format:

.. code:: python

   intersphinx_mapping = {
       '<name>': ('<path/to/external>', None)
   }

For example:

.. code:: python

   intersphinx_mapping = {
       'sphinx': ('https://www.sphinx-doc.org/en/master', None)
   }

And new mappings can be included as needed.

To show all links of an InterSphinx mapping file, use the built-in tool:

.. code:: bash

   python3 -m sphinx.ext.intersphinx https://www.sphinx-doc.org/en/master/objects.inv


Text width
--------------------------------------------------------------------------------

Each line must be less than 80 columns wide.
You can use the :code:`fold` command to break the lines of the imported text
while respecting word-breaks:

.. code:: bash

   cat imported.txt | fold -sw 80 > imported.rst

Or use :code:`pandoc`:

.. code:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 -s -o imported.rst


Tables
--------------------------------------------------------------------------------

Prefer
`list-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#list-table>`_
and imported
`csv-tables <https://docutils.sourceforge.io/docs/ref/rst/directives.html#csv-table-1>`_
(using the file option), because they are faster to create, easier to maintain
and the 80 column-width rule can be respected with list-tables.

You can use the following command:

.. code:: bash

   pandoc imported.txt -f dokuwiki -t rst --columns=80 -s -o imported.rst --list-tables

The :code:`list-tables` parameter requires *pandoc-types* >= 1.23, included in any
recent `pandoc release <https://github.com/jgm/pandoc/releases>`_;
if it is not an option, you shall remove it and export in the *grid* table format.

Now you only have to adjust the widths and give the final touches, like using
the correct directives and roles.

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

.. _vivado block-diagrams:

Vivado block-diagrams
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Vivado block-diagrams can be exported as PDF and then converted to SVG with
Inkscape.

Vivado waveform data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

There is no way to export Vivado waveform data as vectors.
Therefore, the recommended method is to take a PNG screenshot and use
`GIMP <gimp.org>`_ to export as **8bpc RGB** with all metadata options
disabled.

.. note::

   Always use the *Export As..* ``Ctrl+Shift+E`` option.

To reduce even further the size, you can use *Color > Dither..* to reduce the
number of colors in the PNG.
Saving as greyscale also reduces the PNG size, but might reduce readability and
it is not recommended.

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

Git role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The Git role allows to create links to the Git repository with a shorter syntax.
The role syntax is :code:`:git-repo:\`text <branch:path>\``, for example:

* :code:`:git-hdl:\`main:docs/user_guide/docs_guidelines.rst\``
  renders as :git-hdl:`main:docs/user_guide/docs_guidelines.rst`.
* :code:`:git-hdl:\`Guidelines <docs/user_guide/docs_guidelines.rst>\``
  renders as :git-hdl:`Guidelines <docs/user_guide/docs_guidelines.rst>`.

.. important::

   The repository name is case sensitive.

When the branch field is not present, it will be filled with the current branch.
It is recommended to not provide this field when it is a link to its own repository,
because it is useful to auto-fill it for documentation releases
(e.g. ``hdl_2023_r2``).
A scenario where it is recommended to provide the branch is when linking others
repositories.

The text field is optional and will be filled with the full path.

Finally, you can do :code:`:git-repo:\`/\`` for a link to the root of the
repository with pretty naming, for example, :code:`:git-hdl:\`/\`` is rendered
as :git-hdl:`/`.

ADI role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The adi role creates links for a webpage to the Analog Devices Inc. website.

The role syntax is :code:`:adi:\`text <webpage>\``, for example,
:code:`:adi:\`AD7175-2 <ad7175-2>\``.
Since links are case insensitive, you can also reduce it to
:code:`:adi:\`AD7175-2\``, when *webpage* is the same as *text* and will render
as :adi:`AD7175-2`.

Dokuwiki role
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The dokuwiki role creates links to the Analog Devices Inc. wiki website.
The role syntax is :code:`:dokuwiki:\`text <path>\``, for example,
:code:`:dokuwiki:\`pulsar-adc-pmods <resources/eval/user-guides/circuits-from-the-lab/pulsar-adc-pmods>\``
gets rendered as
:dokuwiki:`pulsar-adc-pmods <resources/eval/user-guides/circuits-from-the-lab/pulsar-adc-pmods>`.

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

For example:

.. code:: rst

   .. video:: http://ftp.fau.de/fosdem/2015/devroom-software_defined_radio/iiosdr.mp4

Renders as:

.. video:: http://ftp.fau.de/fosdem/2015/devroom-software_defined_radio/iiosdr.mp4

And:

.. code:: rst

   .. video:: https://www.youtube.com/watch?v=p_VntEwUe24

Renders as:

.. video:: https://www.youtube.com/watch?v=p_VntEwUe24

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

Set ``validate_links`` to ``True`` to validate each link during build.
These links are not managed, that means, only links from changed files are checked.
You can run a build with it set to False, then touch the desired files to check
the links of only these files.

Set ``monolithic`` to ``True`` prefix paths with *repos/<repo>*.
This is meant for the System Top Documentation repository only.

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

For example the navigation bar at the top, is updated using the ``repotoc`` entry
in ``doctools/metadata.json``.

These ``*.json`` files are generated when ``doctools_export_metadata`` is true
in the ``conf.py``.
From the JavaScript side, it fetches from
``{content_root}[../versioned]/../doctools/[versioned]/metadata.json``.

.. note::

   path ``version`` is present and set if ``latest`` exists at
   ``{content_root}/../doctools`` and the stored version can be extracted.
