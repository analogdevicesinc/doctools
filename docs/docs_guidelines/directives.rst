Custom directives
===============================================================================

Container
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

To allow disposing content in a tabular manner but still respecting the multiple
screen sizes and both HTML and PDF output, two container directives are available,
``flex`` and ``grid``.

.. _directive flex:

Flex
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

The grid directive implements a subset of
`CSS Flex <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>`__.
And is used to dipose elements without worrying about number of columns and sizes,
while still obtaining a fairly good result.

.. code:: rst

   .. flex::

.. _directive grid:

Grid
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


Clear content
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

Shell
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

SVG
~~~~~~~~~~~~~

The SVG directive embeds a SVG image directly onto the page, having it share
the same DOM sandbox as the page.

This allows the SVG image to contain links and interactive content, such as
hover effects.

The syntax is:

.. code:: rst

   .. svg:: <file>
      :align: [left,center,right]

      <caption>

At it's core, for the HTML builder, it is somewhat equivalent to:

.. code:: rst

   .. raw:: html
      :file: path

But have the proper hooks for future implementation for other outputs (LaTeX, etc.).

Collapsible
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

Video
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

ESD warning
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The ESD warning directive creates a ESD warning, for example:

.. code:: rst

   .. esd-warning::

Renders as:

.. esd-warning::

HDL directives
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The directives in this section target the :git-hdl:`/` documentation.

.. _hdl build-status-directive:

HDL build status
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

HDL parameters
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

HDL interface
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

HDL component diagram
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

HDL regmap
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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

Global options for directives
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Set ``hide_collapsible_content`` to ``True`` to hide the *collapsibles* by default.

Set ``monolithic`` to ``True`` prefix paths with *<repo>*.
This is meant for the :ref:`custom-doc` custom documents only.


