help:
	@echo "Available commands:"
	@echo "  all: build, then install"
	@echo "  build: build vsix package"
	@echo "  test: run unit and end-to-end tests"
	@echo "  install: install to vscod[e|ium]"

all: build install

build:
	npm install
	npm run build
	npm run package

test:
	npm install
	npm test
	npm run test:e2e

install:
	command -v codium && codium --install-extension adi-doctools-*.vsix --force || true
	command -v code && code --install-extension adi-doctools-*.vsix --force || true
