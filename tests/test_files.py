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
