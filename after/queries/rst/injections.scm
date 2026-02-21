; extends
; ============================================================================
; RST injection queries for embedding other languages
; ============================================================================
; Other file needed: lua/config/rst/init.lua

; ==========
; shell directive - inject bash
; .. shell::
;    <bash content>
; ==========
((directive
  name: (type) @_type
  body: (body
    (content) @injection.content))
 (#eq? @_type "shell")
 (#set! injection.language "bash")
 (#set! injection.combined))

; ==========
; markdown directive - inject markdown
; .. markdown::
;    <markdown content>
; ==========
((directive
  name: (type) @_type
  body: (body
    (content) @injection.content))
 (#eq? @_type "markdown")
 (#set! injection.language "markdown")
 (#set! injection.combined))

