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
; include-template directive - yaml
; .. include-template:: <jinja source>
;    <yaml content>
; ==========
((directive
  name: (type) @_type
  body: (body
    (content) @injection.content))
 (#eq? @_type "include-template")
 (#set! injection.language "yaml")
 (#set! injection.combined))

