import { test } from 'node:test'
import assert from 'node:assert/strict'
import { SLIDES } from '../adoc_gui/web/tutorial.js'

test('the panels of the guide have a title, a text and a drawing', () => {
  assert.ok(SLIDES.length >= 5 && SLIDES.length <= 8)
  for (const slide of SLIDES) {
    assert.ok(slide.title && slide.title.length <= 48, slide.title)
    assert.ok(slide.text.length >= 1 && slide.text.length <= 2)
    // Short enough to be read at a glance, and its code is closed
    for (const text of slide.text) {
      assert.ok(text.length <= 230, `${slide.title}: ${text.length}`)
      assert.equal(text.split('`').length % 2, 1, text)
    }
    assert.ok(slide.icon.includes('<rect'))
    // Three colours and their tints, no other
    assert.equal(/fill=|stroke=|style=/.test(slide.icon), false)
  }
  assert.equal(new Set(SLIDES.map(slide => slide.title)).size, SLIDES.length)
})
