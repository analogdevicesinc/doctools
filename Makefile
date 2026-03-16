help:
	@echo "Available commands:"
	@echo "  all: build, then install"
	@echo "  build: build vsix package"
	@echo "  install: install to vscod[e|ium]"

all: build install

build:
	npm install
	npm run build
	npm run package

install:
	command -v codium && codium --install-extension adi-doctools-*.vsix --force || true
	command -v code && code --install-extension adi-doctools-*.vsix --force || true
