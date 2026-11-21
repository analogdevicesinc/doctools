"""python3 -m unittest discover -s tests"""

import sys
import unittest
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

from adoc_gui.preview import MAX_TEXT, Previews, excerpt  # noqa: E402

PAGE = '''<html><head><title>Page — Docs</title></head><body>
<div class="related" role="navigation"><h3>Navigation</h3><ul><li>Other page</li></ul></div>
<nav><p>Menu</p></nav>
<section id="top"><h1>Top<a class="headerlink" href="#top">¶</a></h1><p>Intro &amp; more.</p>
<section id="sub"><span id="label"></span><h2>Sub <code>x</code></h2><pre>code</pre>
<div class="versionadded"><p>Added in 1</p></div><p>First<br>para.</p><ul><li><p>Item</p></li></ul>
<h3>Deeper</h3><p>Not this.</p></section>
<dl><dt id="term-a">Term A</dt><dd><p>Definition.</p></dd><dt id="term-b">B</dt><dd>Other</dd></dl>
<figure id="fig"><img src="x"><figcaption><p>Caption</p></figcaption></figure><p>After</p>
<p id="para">Just a paragraph.</p><h2 id="next">Next</h2><p>Tail</p></section></body></html>'''


class Excerpts(unittest.TestCase):
    def test_a_page_starts_at_its_title(self):
        self.assertEqual(excerpt(PAGE), {'title': 'Top', 'text': 'Intro & more.', 'page': 'Page — Docs'})

    def test_a_section_is_its_heading_and_its_first_text(self):
        for anchor in ('sub', 'label'):
            found = excerpt(PAGE, anchor)
            self.assertEqual((found['title'], found['text']), ('Sub x', 'First para. Item'))
        self.assertEqual(excerpt(PAGE, 'next')['text'], 'Tail')

    def test_a_term_a_figure_a_paragraph(self):
        self.assertEqual(excerpt(PAGE, 'term-a'), {'title': 'Term A', 'text': 'Definition.', 'page': 'Page — Docs'})
        self.assertEqual(excerpt(PAGE, 'fig'), {'title': 'Caption', 'page': 'Page — Docs'})
        self.assertEqual(excerpt(PAGE, 'para'), {'text': 'Just a paragraph.', 'page': 'Page — Docs'})

    def test_what_is_not_there(self):
        self.assertEqual(excerpt(PAGE, 'missing'), {})
        self.assertEqual(excerpt('<p>broken</b><h1>T</h1><p>x'), {'title': 'T', 'text': 'x'})

    def test_the_text_is_short(self):
        text = excerpt(f'<h1>T</h1><p>{"word " * 200}</p>')['text']
        self.assertLessEqual(len(text), MAX_TEXT)
        self.assertTrue(text.endswith('…'))


class Pages(unittest.TestCase):
    def test_a_page_is_read_once_until_it_changes(self):
        read = []
        previews = Previews(read=lambda url: (read.append(url), PAGE)[1])
        self.assertEqual(previews.of('http://docs/a/#sub', 1)['title'], 'Sub x')
        self.assertEqual(previews.of('http://docs/a/#top', 1)['title'], 'Top')
        self.assertEqual(read, ['http://docs/a/'])
        previews.of('http://docs/a/', 2)
        self.assertEqual(len(read), 2)

    def test_only_pages(self):
        def fail(url):
            raise OSError
        self.assertEqual(Previews(read=fail).of('file:///etc/passwd'), {'error': 'no preview'})
        self.assertEqual(Previews(read=fail).of('http://docs/a/'), {'error': 'the page cannot be read'})
        self.assertEqual(Previews(read=lambda url: PAGE).of('http://docs/a/#missing'), {'error': 'not in the page'})


if __name__ == '__main__':
    unittest.main()
