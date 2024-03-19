.. _fundamentals:

Fundamentals 
================================================================================

Documentation hierarchical structure
--------------------------------------------------------------------------------

Doctools is the central piece to aggregate multiple documentations together,
expanding the documentation standard hierarchical, mono-repo configuration.
The content is organized in three levels:

* repotoc: Listing of repositories in the same organization that contain
  documentations.
  In general, a repository contains only one topic, e.g. the pyadi-iio doc is only
  about the libiio python bindings.
  If a repo stores more than one topic, the ``topic`` attribute is used to split
  each topic on its own repotoc entry, as if they were stored in multiple
  repositories.
  The ``topic`` entry must match the folder name containing the content, e.g.
  if ``topic: {'eval':..., 'university':...}``, then a folder named ``eval`` and
  other named ``university`` must exist in the doc source root.
  In the html output, is displayed on the top header.
* toc: Table of contents of a repository documentation; the displayed depth
  is customizable, but in general a doc page (``.rst``, ``.md``) generates one toc
  entry.
  In the html output, is displayed on the left of the webpage.
* localtoc: Contents on the current doc page/toc entry.
  In the html output, is displayed on the right of the webpage, identified by the
  "On this page" header.

.. note::

   The ``repotoc`` is managed by the :git-doctools:`adi_doctools/lut.py` and is
   not a native Sphinx feature.
   ``toc`` and ``localtoc`` are concepts inherited from Sphinx.

By the concept of ``repotoc``, it is possible to each doc to reference other
repository doc using the :ref:`in-org-ref` role.
