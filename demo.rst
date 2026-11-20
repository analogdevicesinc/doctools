Doctools for dummies
====================

This is a *plain* paragraph with **strong** **strong** text, ``literal`` text, a
:ref:`role <target>` and a `link <https://example.com>`_.

Tables
-----

=====  =====  =======
A      B      A and B
=====  =====  =======
False  False  False
True   False  False
False  True   False
True   True   True
=====  =====  =======

+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | ...        | ...      |          |
+------------------------+------------+----------+----------+


.. list-table:: Frozen Delights!
   :widths: 15 10 30
   :header-rows: 1

   * - Treat
     - Quantity
     - Description
   * - Albatross
     - 2.99
     - On a stick!
   * - Crunchy Frog
     - 1.49
     - If we took the bones out, it wouldn't be
       crunchy, now would it?
   * - | Gannet
       | Ripple
     - 1.99
     - On a stick!


Lists
-----

* First item
* Second item with a
  continuation line

  * Nested item

#. Step one
#. Step two

Directives
----------

.. note::

   Notes are shown as a box, their content is edited like the rest.

   * Also with lists

.. code-block:: bash
   :linenos:

   echo "code is shown as-is"
     ls -la

.. image:: figure.svg
   :width: 50%
   

A literal block::

   literal
   block

.. _a-label:

.. a comment

term
   definition
