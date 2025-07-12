.. _role:

Custom roles
============

Custom Sphinx roles to allow better linking, such as git links, and formatting,
like font coloring.

.. note::

   Link-like roles use the :code:`:role:\`text <link>\`` synthax, like external
   links, but without the undescore in the end.


Color
~~~~~

To print text in red or green, use :code:`:red:\`text\`` and :code:`:green:\`text\``.

Link
~~~~

The link roles are a group of roles defined by ``adi_links.py``.

The ``validate_links`` global option is used to validate each link during build.
These links are not managed, that means, only links from changed files are checked.
You can run a build with it set to False, then touch the desired files to check
the links of only these files.

.. _role git:

Git
+++

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

DownGit
+++++++

Same as the :ref:`role git` but wrapping the address with the :git-DownGit:`+`
fork.

ADI
+++

The adi role creates links for a webpage to the Analog Devices Inc. website.

The role syntax is :code:`:adi:\`text <webpage>\``, for example,
:code:`:adi:\`AD7175-2 <ad7175-2>\``.
Since links are case insensitive, you can also reduce it to
:code:`:adi:\`AD7175-2\``, when *webpage* is the same as *text* and will render
as :adi:`AD7175-2`.

.. _role dokuwiki:

Dokuwiki
++++++++

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

EngineerZone
++++++++++++

The ez role creates links to the Analog Devices Inc. EngineerZone support website.
The role syntax is :code:`:ez:\`community\``, for example, :code:`:ez:\`fpga\``
gets rendered as :ez:`fpga`.

For Linux Software Drivers, it is :code:`:ez:\`linux-software-drivers\``.

For Microcontroller no-OS Drivers it is :code:`:ez:\`microcontroller-no-os-drivers\``.

Vendor
++++++

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

Supplier
++++++++

The supplier role creates links to a vendor's website search.
The role syntax is :code:`:vendor:\`text <path>\``, for example,
:code:`:digikey:\`AD9081-FMCA-EBZ\``
gets rendered
:digikey:`AD9081-FMCA-EBZ`.

The text parameter is optional.

Supported vendors are: ``digikey`` (Digikey), ``mouser`` (Mouser) and
``arrow`` (Arrow).


