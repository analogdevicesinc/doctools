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


class InstallGrammar(unittest.TestCase):
    def docs(self):
        folder = tempfile.TemporaryDirectory()
        self.addCleanup(folder.cleanup)
        return Docs(Path(folder.name) / 'index.rst', log=lambda line: None)

    def wait(self, docs):
        import time
        for _ in range(200):
            state = docs.install_grammar()
            if state['state'] != 'installing':
                return state
            time.sleep(0.01)
        return state

    def test_it_is_installed_with_pip_in_this_environment(self):
        from types import SimpleNamespace
        calls = []

        def run(command, **options):
            calls.append(command)
            return SimpleNamespace(returncode=0, stdout='Successfully installed', stderr='')
        docs = self.docs()
        self.assertEqual(docs.install_grammar()['state'], 'idle')
        self.assertEqual(docs.install_grammar(start=True, run=run)['state'], 'installing')
        self.assertEqual(self.wait(docs), {'state': 'done', 'message': ''})
        self.assertEqual(calls[0][:4], [sys.executable, '-m', 'pip', 'install'])
        self.assertEqual(calls[0][-1], 'language_tool_python')

    def test_what_pip_says_when_it_fails(self):
        from types import SimpleNamespace
        docs = self.docs()
        docs.install_grammar(start=True, run=lambda command, **options: SimpleNamespace(
            returncode=1, stdout='', stderr='line one\nerror: externally-managed-environment\n'))
        self.assertEqual(self.wait(docs), {'state': 'failed', 'message': 'error: externally-managed-environment'})

        def missing(command, **options):
            raise OSError('no pip')
        docs.install_grammar(start=True, run=missing)
        self.assertEqual(self.wait(docs), {'state': 'failed', 'message': 'no pip'})
