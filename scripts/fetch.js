#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

const RESOURCES_DIR = path.join(__dirname, '..', 'deps');

const RESOURCES = [
  {
    name: 'tree-sitter-rst.wasm',
    url: 'https://raw.githubusercontent.com/stsewd/tree-sitter-rst/master/tree-sitter-rst.wasm',
  },
  {
    name: 'tree-sitter-bash.wasm',
    url: 'https://github.com/tree-sitter/tree-sitter-bash/releases/download/v0.25.1/tree-sitter-bash.wasm',
  },
  {
    name: 'tree-sitter-yaml.wasm',
    url: 'https://github.com/tree-sitter-grammars/tree-sitter-yaml/releases/download/v0.7.2/tree-sitter-yaml.wasm',
  },
  {
    name: 'rst-highlights.scm',
    url: 'https://raw.githubusercontent.com/nvim-treesitter/nvim-treesitter/master/queries/rst/highlights.scm',
  },
  {
    name: 'rst-injections.scm',
    url: 'https://raw.githubusercontent.com/analogdevicesinc/doctools/refs/heads/nvim/after/queries/rst/injections.scm',
  },
  {
    name: 'bash-highlights.scm',
    url: 'https://raw.githubusercontent.com/nvim-treesitter/nvim-treesitter/master/queries/bash/highlights.scm',
  },
  {
    name: 'yaml-highlights.scm',
    url: 'https://raw.githubusercontent.com/nvim-treesitter/nvim-treesitter/master/queries/yaml/highlights.scm',
  },
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const request = https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        const redirectUrl = response.headers.location;
        if (!redirectUrl) {
          reject(new Error(`Redirect without location for ${url}`));
          return;
        }
        fetch(redirectUrl).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode} for ${url}`));
        return;
      }

      const chunks = [];
      response.on('data', (chunk) => chunks.push(chunk));
      response.on('end', () => resolve(Buffer.concat(chunks)));
      response.on('error', reject);
    });

    request.on('error', reject);
    request.setTimeout(30000, () => {
      request.destroy();
      reject(new Error(`Timeout fetching ${url}`));
    });
  });
}

async function fetchResource(resource) {
  const destPath = path.join(RESOURCES_DIR, resource.name);
  if (fs.existsSync(destPath)) {
    console.log(`  [cached] ${resource.name}`);
    return;
  }

  console.log(`  [fetch] ${resource.name}`);

  try {
    const data = await fetch(resource.url);
    fs.writeFileSync(destPath, data);
    console.log(`  [ok] ${resource.name} (${data.length} bytes)`);
  } catch (err) {
    console.error(`  [error] ${resource.name}: ${err.message}`);
    throw err;
  }
}

async function main() {
  console.log('Fetching tree-sitter resources...');

  if (!fs.existsSync(RESOURCES_DIR)) {
    fs.mkdirSync(RESOURCES_DIR, { recursive: true });
  }

  let err = false;
  for (const resource of RESOURCES) {
    try {
      await fetchResource(resource);
    } catch (err) {
      err = true;
    }
  }

  if (err) {
    console.log('\nFailed to fetch deps.');
    process.exit(1);
  }
  console.log('Done');
}

main();
