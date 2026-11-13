import { test } from 'node:test'
import * as assert from 'node:assert/strict'
import {
  editorToSourceLine,
  sourceLineToEditorTop,
  pagePathToDocnames,
  docnameToPagePath,
  sourceToDocname,
  docnameToSources
} from '../../src/scroll-map'

test('editor top maps to the same source line away from the end', () => {
  assert.equal(editorToSourceLine({ top: 0, visible: 40, lines: 400 }), 1)
  assert.equal(editorToSourceLine({ top: 99, visible: 40, lines: 400 }), 100)
  assert.equal(editorToSourceLine({ top: 320, visible: 40, lines: 400 }), 321)
})

test('editor reaches the last line when its bottom is visible', () => {
  assert.equal(editorToSourceLine({ top: 360, visible: 40, lines: 400 }), 400)
  assert.equal(editorToSourceLine({ top: 390, visible: 40, lines: 400 }), 400)
  const middle = editorToSourceLine({ top: 340, visible: 40, lines: 400 })
  assert.ok(middle > 341 && middle < 400)
})

test('editor mapping is monotonic', () => {
  let last = 0
  for (let top = 0; top <= 400; top++) {
    const line = editorToSourceLine({ top, visible: 37, lines: 400 })
    assert.ok(line >= last, `top ${top}`)
    last = line
  }
})

test('documents shorter than the editor stay at the top', () => {
  assert.equal(editorToSourceLine({ top: 0, visible: 40, lines: 10 }), 1)
  assert.equal(sourceLineToEditorTop(8, { visible: 40, lines: 10 }), 0)
})

test('source line maps back to the editor top', () => {
  const view = { visible: 40, lines: 400 }
  for (const top of [0, 10, 150, 320, 330, 345, 360]) {
    const line = editorToSourceLine({ ...view, top })
    assert.equal(sourceLineToEditorTop(line, view), top, `top ${top}`)
  }
  assert.equal(sourceLineToEditorTop(400, view), 360)
  assert.equal(sourceLineToEditorTop(1000, view), 360)
  assert.equal(sourceLineToEditorTop(-5, view), 0)
})

test('page path to docname candidates', () => {
  assert.deepEqual(pagePathToDocnames('/'), ['index'])
  assert.deepEqual(pagePathToDocnames('/index.html'), ['index'])
  assert.deepEqual(pagePathToDocnames('/guide/'), ['guide', 'guide/index'])
  assert.deepEqual(pagePathToDocnames('/guide/sub/page/?v=1#top'), ['guide/sub/page', 'guide/sub/page/index'])
  assert.deepEqual(pagePathToDocnames('/my%20doc/'), ['my doc', 'my doc/index'])
})

test('docname to page path', () => {
  assert.equal(docnameToPagePath('index'), '/')
  assert.equal(docnameToPagePath('guide/index'), '/guide/')
  assert.equal(docnameToPagePath('guide/sub/page'), '/guide/sub/page/')
  assert.equal(docnameToPagePath('guide\\sub\\page'), '/guide/sub/page/')
})

test('source file to docname', () => {
  assert.equal(sourceToDocname('guide/index.rst'), 'guide/index')
  assert.equal(sourceToDocname('guide\\page.md'), 'guide/page')
  assert.equal(sourceToDocname('../outside.rst'), undefined)
  assert.equal(sourceToDocname('conf.py'), undefined)
  assert.deepEqual(docnameToSources('guide/index'), ['guide/index.rst', 'guide/index.md'])
})
