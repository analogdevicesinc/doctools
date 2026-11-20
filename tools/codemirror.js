// What the editor uses of CodeMirror 6, bundled into one file by
// 'make vendor': adoc_gui/web/vendor/codemirror.js

export { EditorView, keymap, drawSelection, lineNumbers, Decoration, placeholder } from '@codemirror/view'
export { EditorState, Compartment, StateField, StateEffect, Annotation, EditorSelection } from '@codemirror/state'
export { defaultKeymap, indentWithTab } from '@codemirror/commands'
export { StringStream, indentUnit } from '@codemirror/language'

import { shell } from '@codemirror/legacy-modes/mode/shell'
import { python } from '@codemirror/legacy-modes/mode/python'
import { c, cpp, java } from '@codemirror/legacy-modes/mode/clike'
import { yaml } from '@codemirror/legacy-modes/mode/yaml'
import { javascript, json, typescript } from '@codemirror/legacy-modes/mode/javascript'
import { verilog } from '@codemirror/legacy-modes/mode/verilog'
import { tcl } from '@codemirror/legacy-modes/mode/tcl'
import { xml, html } from '@codemirror/legacy-modes/mode/xml'
import { css } from '@codemirror/legacy-modes/mode/css'
import { cmake } from '@codemirror/legacy-modes/mode/cmake'
import { diff } from '@codemirror/legacy-modes/mode/diff'
import { toml } from '@codemirror/legacy-modes/mode/toml'
import { properties } from '@codemirror/legacy-modes/mode/properties'
import { lua } from '@codemirror/legacy-modes/mode/lua'
import { dockerFile } from '@codemirror/legacy-modes/mode/dockerfile'
import { vhdl } from '@codemirror/legacy-modes/mode/vhdl'
import { go } from '@codemirror/legacy-modes/mode/go'
import { rust } from '@codemirror/legacy-modes/mode/rust'
import { standardSQL as sql } from '@codemirror/legacy-modes/mode/sql'
import { perl } from '@codemirror/legacy-modes/mode/perl'

// The modes, by the names used for the language of a code block
export const modes = {
  shell, python, c, cpp, java, yaml, javascript, json, typescript, verilog, tcl, xml, html, css, cmake, diff,
  toml, properties, lua, dockerfile: dockerFile, vhdl, go, rust, sql, perl
}
