"""python3 -m unittest discover -s tests"""

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from adoc_gui.docs import LARGE, Docs  # noqa: E402


class LargeDocs(unittest.TestCase):
    def docs(self, pages):
        folder = tempfile.TemporaryDirectory()
        self.addCleanup(folder.cleanup)
        docs = Docs(Path(folder.name) / 'index.rst', log=lambda line: None)
        # As if Doctools and a conf.py were there
        docs.problem = None
        docs.pages = pages
        self.started = 0

        def start():
            self.started += 1
            docs.held = False
            return {'return': 'success'}
        docs.start = start
        return docs

    def test_a_large_documentation_waits_for_its_folders(self):
        docs = self.docs(LARGE + 1)
        self.assertTrue(docs.large)
        self.assertTrue(docs.hold())
        self.assertEqual(docs.state()['held'], True)
        # The folders that are being chosen are built when it is asked for
        docs.set_sparse(['docs/guide'])
        self.assertEqual((self.started, docs.held), (0, True))
        # The ones that the browser kept start the build that waited
        docs.set_sparse(['docs/guide'], restored=True)
        self.assertEqual((self.started, docs.held), (1, False))

    def test_it_does_not_wait_with_folders_nor_when_small(self):
        docs = self.docs(LARGE + 1)
        docs.sparse = ['docs/guide']
        self.assertFalse(docs.hold())
        small = self.docs(LARGE)
        self.assertFalse(small.large)
        self.assertFalse(small.hold())
        small.set_sparse(['a'], restored=True)
        self.assertEqual(self.started, 0)

    def test_it_does_not_wait_for_what_cannot_be_built(self):
        docs = self.docs(LARGE + 1)
        docs.problem = 'no conf.py found for this file'
        self.assertFalse(docs.hold())


if __name__ == '__main__':
    unittest.main()
