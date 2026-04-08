#!/bin/bash

ensure_turboquant_wasm () {
  turboquant_wasm="$HOME/.local/share/turboquant.wasm"
  if [[ -f "$turboquant_wasm" ]]; then
    echo "$turboquant_wasm (cached)"
	return 0
  fi

  zig="$HOME/.local/share/zig"
  export PATH="$PATH:$zig"

  if ! which zig ; then
    zig="$HOME/.local/share/zig"
    rm -rf "$zip"
    zig_tar="$(mktemp -t zig.XXX.tar.xz)"
    mkdir -p "$zig"
    curl -L https://ziglang.org/builds/zig-x86_64-linux-0.16.0-dev.3132+fd2718f82.tar.xz -o "$zig_tar"
    tar -xf "$zig_tar" -C "$zig" --strip-components=1
    rm "$zig_tar"
  fi

  binaryen="$HOME/.local/share/binaryen"
  export PATH="$PATH:$binaryen/bin"

  if ! which wasm-opt ; then
    binaryen="$HOME/.local/share/binaryen"
    rm -rf "$binaryen"
    binaryen_tar="$(mktemp -t binaryen.XXX.tar.gz)"
    mkdir -p "$binaryen"
    curl -L https://github.com/WebAssembly/binaryen/releases/download/version_129/binaryen-version_129-x86_64-linux.tar.gz -o "$binaryen_tar"
    tar -xf "$binaryen_tar" -C "$binaryen" --strip-components=1
    rm "$binaryen_tar"
  fi
  
  turboquant_git="$(mktemp -d -t turboquant_git.XXX)"
  git clone https://github.com/botirk38/turboquant "$turboquant_git" --depth 1
  pushd "$turboquant_git"
  curl -L https://raw.githubusercontent.com/analogdevicesinc/doctools/refs/heads/main/.github/patches/turboquant-add-wasm-wrapper.patch \
    | git am
  pushd turboquant
  
  npm install
  zig build wasm
  wasm-opt -Oz --strip-producers --strip-target-features dist/turboquant.wasm -o dist/turboquant.wasm --enable-simd --enable-bulk-memory --enable-nontrapping-float-to-int --enable-sign-ext --enable-mutable-globals --enable-relaxed-simd
  node scripts/embed-wasm.mjs
  ./node_modules/.bin/esbuild src/js/index.ts --bundle --outfile=dist/index.js --format=esm --minify --sourcemap=external --platform=node
  ./node_modules/.bin/tsc --emitDeclarationOnly
  cp dist/turboquant.wasm $turboquant_wasm
  popd
  popd

  rm -rf "$turboquant_git"
  rm -rf "$binaryen"
  rm -rf "$zig"
}
