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


; ==========
; directives with nested rst content
; .. tab-set::
;
;    .. tab-item:: <title>
;
;       <rst content>
;
; .. carousel::
;
;    .. figure:: <image>
;
;       <caption>
; ==========
((directive
  name: (type) @_type
  body: (body
    (content) @injection.content))
 (#any-of? @_type
   "tab-set" "tab-item" "carousel" "collapsible" "card" "grid" "flex"
   "video" "svg" "description" "hdl-parameters" "hdl-interfaces" "esd-warning")
 (#set! injection.language "rst"))

; ==========
; collection directive - yaml
; .. collection:: <title>
;    <yaml content>
; ==========
((directive
  name: (type) @_type
  body: (body
    (content) @injection.content))
 (#eq? @_type "collection")
 (#set! injection.language "yaml")
 (#set! injection.combined))
