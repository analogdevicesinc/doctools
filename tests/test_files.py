"""python3 -m unittest discover -s tests"""

import sys
import tempfile
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from adoc_gui.files import FileError, delete_file, move_file, new_file  # noqa: E402


class Files(unittest.TestCase):
    def setUp(self):
        self.folder = tempfile.TemporaryDirectory()
        self.addCleanup(self.folder.cleanup)
        self.root = Path(self.folder.name).resolve()
        (self.root / 'index.rst').write_text('Index\n=====\n', encoding='utf-8')

    def test_a_new_file_has_a_title_and_its_folders(self):
        file = new_file(self.root, 'guide/first-steps.rst')
        self.assertEqual(file, self.root / 'guide' / 'first-steps.rst')
        self.assertEqual(file.read_text(encoding='utf-8'), 'First steps\n===========\n')
        with self.assertRaises(FileError):
            new_file(self.root, 'guide/first-steps.rst')

    def test_a_file_is_renamed_and_moved(self):
        new_file(self.root, 'guide/a.rst')
        self.assertEqual(move_file(self.root, 'guide/a.rst', 'guide/b.rst'), self.root / 'guide' / 'b.rst')
        move_file(self.root, 'guide/b.rst', 'other/deep/b.rst')
        self.assertTrue((self.root / 'other' / 'deep' / 'b.rst').is_file())
        # The folder it left empty is gone
        self.assertFalse((self.root / 'guide').exists())
        with self.assertRaises(FileError):
            move_file(self.root, 'other/deep/b.rst', 'index.rst')
        with self.assertRaises(FileError):
            move_file(self.root, 'missing.rst', 'a.rst')
        self.assertEqual((self.root / 'index.rst').read_text(encoding='utf-8'), 'Index\n=====\n')

    def test_a_file_is_deleted(self):
        new_file(self.root, 'guide/a.rst')
        (self.root / 'guide' / 'image.png').write_bytes(b'')
        delete_file(self.root, 'guide/a.rst')
        self.assertFalse((self.root / 'guide' / 'a.rst').exists())
        # A folder that still holds something stays
        self.assertTrue((self.root / 'guide').is_dir())
        with self.assertRaises(FileError):
            delete_file(self.root, 'guide/a.rst')

    def test_only_rst_files_of_the_documentation(self):
        outside = self.root.parent / 'outside.rst'
        for name in ('../outside.rst', '/etc/x.rst', 'a.txt', '.rst', '', None, '.hidden/a.rst', '_build/a.rst',
                     'a/../../outside.rst', 'guide/ .rst', str(outside)):
            with self.assertRaises(FileError, msg=name):
                new_file(self.root, name)
        self.assertFalse(outside.exists())
        with self.assertRaises(FileError):
            delete_file(self.root, 'guide')

    def test_not_through_a_link_out_of_the_documentation(self):
        with tempfile.TemporaryDirectory() as elsewhere:
            try:
                (self.root / 'link').symlink_to(elsewhere, target_is_directory=True)
            except OSError:
                self.skipTest('no links here')
            with self.assertRaises(FileError):
                new_file(self.root, 'link/a.rst')


if __name__ == '__main__':
    unittest.main()


class TrailingSpaces(unittest.TestCase):
    def test_a_text_is_saved_without_the_spaces_at_the_end_of_its_lines(self):
        from adoc_gui.files import sanitize
        self.assertEqual(sanitize('One  \n\n   \n* - \n  -\t\nlast '), 'One\n\n\n* -\n  -\nlast')
        self.assertEqual(sanitize('  indented\n   code  x\n'), '  indented\n   code  x\n')

    def test_a_file_loses_them(self):
        from adoc_gui.files import sanitize_file
        with tempfile.TemporaryDirectory() as folder:
            file = Path(folder) / 'a.rst'
            file.write_text('One \nTwo\n', encoding='utf-8')
            self.assertTrue(sanitize_file(file))
            self.assertEqual(file.read_text(encoding='utf-8'), 'One\nTwo\n')
            self.assertFalse(sanitize_file(file))
            binary = Path(folder) / 'b.png'
            binary.write_bytes(b'\xff\xfe \n')
            self.assertFalse(sanitize_file(binary))
            self.assertEqual(binary.read_bytes(), b'\xff\xfe \n')

    def test_the_log_has_the_commits_with_their_messages(self):
        import shutil
        import subprocess
        from adoc_gui.git import Git
        if not shutil.which('git'):
            self.skipTest('no git here')
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder).resolve()
            run = lambda *args: subprocess.run(['git', '-C', str(root), *args], capture_output=True, text=True, check=True)  # noqa: E731
            run('init', '-q')
            run('config', 'user.email', 'a@b.c')
            run('config', 'user.name', 'T')
            self.assertEqual(Git(root).log(), [])
            (root / 'a.rst').write_text('One\n', encoding='utf-8')
            run('add', 'a.rst')
            run('commit', '-q', '-m', 'first')
            (root / 'a.rst').write_text('Two\n', encoding='utf-8')
            run('commit', '-q', '-a', '-m', 'second: the summary\n\nThe body,\nin two lines.')
            log = Git(root).log()
            self.assertEqual([c['subject'] for c in log], ['second: the summary', 'first'])
            self.assertEqual(log[0]['body'], 'The body,\nin two lines.')
            self.assertEqual(log[1]['body'], '')
            self.assertEqual(log[0]['author'], 'T')
            self.assertTrue(log[0]['hash'].startswith(log[0]['short']))

    def test_they_are_not_staged(self):
        import shutil
        import subprocess
        from adoc_gui.git import Git
        if not shutil.which('git'):
            self.skipTest('no git here')
        with tempfile.TemporaryDirectory() as folder:
            root = Path(folder).resolve()
            run = lambda *args: subprocess.run(['git', '-C', str(root), *args], capture_output=True, text=True, check=True)  # noqa: E731
            run('init', '-q')
            run('config', 'user.email', 'a@b.c')
            run('config', 'user.name', 'T')
            file = root / 'a.rst'
            file.write_text('One\nTwo\n', encoding='utf-8')
            run('add', 'a.rst')
            run('commit', '-q', '-m', 'first')
            file.write_text('One \nTwo  \nThree\t\n', encoding='utf-8')
            repo = Git(root)
            self.assertEqual(repo.stage('a.rst', None, False), {'output': 'done'})
            self.assertEqual(run('show', ':a.rst').stdout, 'One\nTwo\nThree\n')
            self.assertEqual(file.read_text(encoding='utf-8'), 'One\nTwo\nThree\n')
            self.assertEqual(run('diff', '--cached', '--check').stdout, '')


class ImagePaths(unittest.TestCase):
    def setUp(self):
        from adoc_gui.files import image_entries
        self.entries = image_entries
        folder = tempfile.TemporaryDirectory()
        self.addCleanup(folder.cleanup)
        self.root = Path(folder.name).resolve()
        for name in ['docs/conf.py', 'docs/guide/page.rst', 'docs/guide/a.png', 'docs/guide/b.svg', 'docs/guide/notes.txt',
                     'docs/images/logo.PNG', 'docs/images/deep/x.svg', 'docs/.hidden/y.png', 'docs/node_modules/z.png']:
            (self.root / name).parent.mkdir(parents=True, exist_ok=True)
            (self.root / name).write_text('')
        self.page = self.root / 'docs/guide'
        self.top = self.root / 'docs'

    def ask(self, typed, suffixes=('.png', '.svg')):
        return self.entries(self.root, self.page, self.top, typed, set(suffixes))

    def test_the_folder_of_the_file_and_the_ones_above(self):
        self.assertEqual(self.ask(''), {'dirs': [], 'files': ['a.png', 'b.svg'], 'up': True})
        self.assertEqual(self.ask('../'), {'dirs': ['guide', 'images'], 'files': [], 'up': True})
        self.assertEqual(self.ask('../images/'), {'dirs': ['deep'], 'files': ['logo.PNG'], 'up': True})
        # What is typed of the name is the menu's to match
        self.assertEqual(self.ask('../images/lo'), self.ask('../images/'))
        # Of a kind: an svg directive takes svg files
        self.assertEqual(self.ask('', ('.svg',))['files'], ['b.svg'])

    def test_from_the_folder_of_the_conf(self):
        self.assertEqual(self.ask('/'), {'dirs': ['guide', 'images'], 'files': [], 'up': False})
        self.assertEqual(self.ask('/images/deep/')['files'], ['x.svg'])

    def test_nothing_out_of_the_root(self):
        self.assertEqual(self.ask('../../'), {'dirs': ['docs'], 'files': [], 'up': False})
        self.assertEqual(self.ask('../../../'), {'dirs': [], 'files': [], 'up': False})
        self.assertEqual(self.ask('/../../'), {'dirs': [], 'files': [], 'up': False})
        self.assertEqual(self.ask('nowhere/'), {'dirs': [], 'files': [], 'up': False})
