#!/bin/bash

set -e

runner_version=2.334.0
runner_version_sha=048024cd2c848eb6f14d5646d56c13a4def2ae7ee3ad12122bee960c56f3d271
node20_version=20.20.2
node20_version_sha=19e56f0825510207dd904f087fe52faa0a4eb6b2aab5f0ea7a33830d04888b8b
node24_version=24.15.0
node24_version_sha=44836872d9aec49f1e6b52a9a922872db9a2b02d235a616a5681b6a85fec8d89
k8s_version=0.8.1
k8s_version_sha=2c3c4526f8a8d517373a2a0daa6122d7887bdc465c54945c6d716db87d9d9b4f

curl -o actions-runner.tar.gz -L https://github.com/actions/runner/releases/download/v${runner_version}/actions-runner-linux-x64-${runner_version}.tar.gz && \
    sha256sum actions-runner.tar.gz && \
    echo "${runner_version_sha} actions-runner.tar.gz" | sha256sum -c && \
    tar xzf actions-runner.tar.gz && rm actions-runner.tar.gz

rm -r ./externals/node*

if [[ "$FORCE_JAVASCRIPT_ACTIONS_TO_NODE24" != "true" ]]; then
    curl -o node20.tar.gz -L https://nodejs.org/dist/v${node20_version}/node-v${node20_version}-linux-x64.tar.gz && \
        sha256sum node20.tar.gz && \
        echo "${node20_version_sha} node20.tar.gz" | sha256sum -c
    tar xzf node20.tar.gz && \
        mv node-v${node20_version}-linux-x64 ./externals/node20 && \
        rm node20.tar.gz
    ./externals/node20/bin/node ./externals/node20/lib/node_modules/npm/bin/npm-cli.js --prefix ./externals/node20 -g update
fi

curl -o node24.tar.gz -L https://nodejs.org/dist/v${node24_version}/node-v${node24_version}-linux-x64.tar.gz && \
    sha256sum node24.tar.gz && \
    echo "${node24_version_sha} node24.tar.gz" | sha256sum -c
tar xzf node24.tar.gz && \
    mv node-v${node24_version}-linux-x64 ./externals/node24 && \
    rm node24.tar.gz
./externals/node24/bin/node ./externals/node24/lib/node_modules/npm/bin/npm-cli.js --prefix ./externals/node24 -g update
rm -r ~/.npm
curl -o actions-runner-k8s.zip -L https://github.com/actions/runner-container-hooks/releases/download/v${k8s_version}/actions-runner-hooks-k8s-${k8s_version}.zip && \
    sha256sum actions-runner-k8s.zip && \
    echo "${k8s_version_sha} actions-runner-k8s.zip" | sha256sum -c
unzip actions-runner-k8s.zip && rm actions-runner-k8s.zip
