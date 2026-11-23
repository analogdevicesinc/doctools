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


class PublishedPages(unittest.TestCase):
    """With only some folders built, the inventory of the published pages of
    the repository is merged into what the project has."""

    def docs(self, sparse=('docs/guide',), conf="project = 'x'\nrepository = 'doctools'\n"):
        folder = tempfile.TemporaryDirectory()
        self.addCleanup(folder.cleanup)
        root = Path(folder.name)
        (root / 'guide').mkdir()
        (root / 'conf.py').write_text(conf)
        docs = Docs(root / 'guide' / 'page.rst', log=lambda line: None)
        docs.problem = None
        docs.url = 'http://127.0.0.1:8080'
        docs.srcdir = str(root)
        docs.sparse = list(sparse)
        self.asked = []
        local = {'guide/page': 'Page', 'index': 'Index'}
        remote = {'guide/page': 'Page', 'install': 'Install', 'other/deep': 'Deep'}
        base = 'https://example.com/doctools/'

        def request(message, timeout=20):
            self.asked.append(message)
            completion = message.get('completion')
            if completion == 'inventory':
                return {'list': [{'name': 'doctools'}, {'name': 'hdl'}]}
            if completion == 'local_types':
                return {'list': [{'name': 'doc', 'count': 2}, {'name': 'ref', 'count': 5}]}
            if completion == 'inventory_types':
                return {'list': [{'name': 'doc', 'count': 3}, {'name': 'term', 'count': 4}]}
            if completion == 'local_targets':
                if message['role'] != 'doc':
                    return {'error': 'No targets found'}
                return {'list': [{'name': name, 'display': title, 'uri': name} for name, title in local.items()]}
            if completion == 'inventory_targets':
                if message['role'] != 'doc':
                    return {'list': [{'name': 'a term', 'display': None, 'uri': base + 'glossary.html#term-a'}]}
                return {'list': [{'name': name, 'display': title, 'uri': base + name + '.html'}
                                 for name, title in remote.items()]}
            role, target = message['role'], message['target']
            if role == 'doc':
                return {'target': target, 'title': local[target]} if target in local else {'error': 'not found'}
            if role == 'external+doctools:doc':
                if target in remote:
                    return {'target': base + target + '.html', 'title': remote[target]}
                return {'error': 'not found'}
            return {'target': 'https://github.com/x', 'title': None}
        docs.request = request
        return docs

    def test_the_repository_is_read_from_the_conf(self):
        self.assertEqual(self.docs().published(), 'doctools')
        self.assertIsNone(self.docs(sparse=()).published())
        self.assertIsNone(self.docs(conf="project = 'x'\n").published())
        self.assertEqual(self.docs(conf='repository = "hdl"  # the name\n').published(), 'hdl')

    def test_a_reference_that_is_not_built_is_found_in_the_published_pages(self):
        docs = self.docs()
        # A page is asked for from the root, or from the folder of the file
        self.assertEqual(docs.ask({'role': 'doc', 'target': '/index'}), {'target': 'index', 'title': 'Index'})
        self.assertEqual(docs.ask({'role': 'doc', 'target': 'page'}), {'target': 'guide/page', 'title': 'Page'})
        self.assertEqual(docs.ask({'role': 'doc', 'target': '../index'}), {'target': 'index', 'title': 'Index'})
        self.assertEqual(docs.ask({'role': 'doc', 'target': '/install'}),
                         {'target': 'https://example.com/doctools/install.html', 'title': 'Install', 'inventory': 'doctools'})
        self.assertEqual(docs.ask({'role': 'doc', 'target': '../other/deep'})['title'], 'Deep')
        self.assertEqual(docs.ask({'role': 'doc', 'target': '/nowhere'}), {'error': 'not found'})
        # A role that makes an address, and one of another documentation, are as they are
        self.assertEqual(docs.ask({'role': 'git-doctools', 'target': 'x'})['target'], 'https://github.com/x')
        self.assertEqual(docs.ask({'role': 'external+doctools:doc', 'target': 'nowhere'}), {'error': 'not found'})

    def test_all_of_it_is_asked_as_before_when_all_is_built(self):
        docs = self.docs(sparse=())
        self.assertEqual(docs.ask({'role': 'doc', 'target': '/install'}), {'error': 'not found'})
        self.assertEqual(docs.ask({'role': 'doc', 'target': '/index'}), {'target': 'index', 'title': 'Index'})
        self.assertEqual(len(docs.ask({'completion': 'inventory'})['list']), 2)
        self.assertEqual(len(docs.ask({'completion': 'local_targets', 'role': 'doc'})['list']), 2)

    def test_the_published_pages_are_merged_into_the_references(self):
        docs = self.docs()
        # Not another documentation
        self.assertEqual(docs.ask({'completion': 'inventory'}), {'list': [{'name': 'hdl'}]})
        self.assertEqual(docs.ask({'completion': 'local_types'}), {'list': [
            {'name': 'doc', 'count': 3}, {'name': 'ref', 'count': 5}, {'name': 'term', 'count': 4}]})
        targets = docs.ask({'completion': 'local_targets', 'role': 'doc'})['list']
        # What is built is the one of the project
        self.assertEqual([(item['name'], item['uri']) for item in targets], [
            ('guide/page', 'guide/page'), ('index', 'index'),
            ('install', 'https://example.com/doctools/install.html'),
            ('other/deep', 'https://example.com/doctools/other/deep.html')])
        # A type that only the published pages have
        self.assertEqual([item['name'] for item in docs.ask({'completion': 'local_targets', 'role': 'term'})['list']],
                         ['a term'])
        # The inventory is asked once
        docs.ask({'completion': 'local_targets', 'role': 'doc'})
        self.assertEqual(sum(1 for m in self.asked if m.get('completion') == 'inventory_targets' and m['role'] == 'doc'), 1)

    def test_the_preview_of_what_is_not_built_reads_the_published_page(self):
        docs = self.docs()
        read = []
        docs._previews.of = lambda url, version=None: read.append(url) or {'title': 'Install', 'text': 'How to.', 'page': 'Install'}
        answer = docs.preview({'role': 'doc', 'target': '/install'})
        self.assertEqual(read, ['https://example.com/doctools/install.html'])
        self.assertEqual((answer['title'], answer['text'], answer['external']), ('Install', 'How to.', False))
