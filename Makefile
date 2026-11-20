WTS_VERSION ?= 0.26.13
WTS_URL = https://cdn.jsdelivr.net/npm/web-tree-sitter@$(WTS_VERSION)
RST_URL = https://raw.githubusercontent.com/stsewd/tree-sitter-rst/master/tree-sitter-rst.wasm
VENDOR = adoc_gui/web/vendor
FILE ?= demo.rst

.PHONY: vendor run test

# The tree-sitter runtime and the reStructuredText grammar, and CodeMirror
vendor:
	mkdir -p $(VENDOR)
	npm ci --no-audit --no-fund
	npm run vendor
	curl -fsSL -o $(VENDOR)/web-tree-sitter.js $(WTS_URL)/web-tree-sitter.js
	curl -fsSL -o $(VENDOR)/web-tree-sitter.wasm $(WTS_URL)/web-tree-sitter.wasm
	curl -fsSL -o $(VENDOR)/tree-sitter-rst.wasm $(RST_URL)

run:
	python3 -m adoc_gui $(FILE)

test:
	node --test tests/*.test.mjs
