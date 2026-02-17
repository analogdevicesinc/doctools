#!/bin/bash

runner_version=2.331.0
runner_version_sha=5fcc01bd546ba5c3f1291c2803658ebd3cedb3836489eda3be357d41bfcf28a7
node20_version=20.20.0
node20_version_sha=92dfd59fb4837230abba5d6dd717b882ca897e22fde2f9268e1aac2c4bde0f5b
node24_version=24.13.1
node24_version_sha=7ad28fb172a9ab0593f86c1a39e5c268d0d8fc3d6cb0167f455b5655a7a6e2fd
k8s_version=0.8.1
k8s_version_sha=2c3c4526f8a8d517373a2a0daa6122d7887bdc465c54945c6d716db87d9d9b4f

curl -o actions-runner.tar.gz -L https://github.com/actions/runner/releases/download/v${runner_version}/actions-runner-linux-x64-${runner_version}.tar.gz && \
    echo "${runner_version_sha} actions-runner.tar.gz" | sha256sum -c && \
    tar xzf actions-runner.tar.gz && rm actions-runner.tar.gz

rm -r ./externals/node*
curl -o node20.tar.gz -L https://nodejs.org/dist/v${node20_version}/node-v${node20_version}-linux-x64.tar.gz && \
    echo "${node20_version_sha} node20.tar.gz" | sha256sum -c && \
    tar xzf node20.tar.gz && \
    mv node-v${node20_version}-linux-x64 ./externals/node20 && \
    rm node20.tar.gz

curl -o node24.tar.gz -L https://nodejs.org/dist/v${node24_version}/node-v${node24_version}-linux-x64.tar.gz && \
    echo "${node24_version_sha} node24.tar.gz" | sha256sum -c && \
    tar xzf node24.tar.gz && \
    mv node-v${node24_version}-linux-x64 ./externals/node24 && \
    rm node24.tar.gz
./externals/node20/bin/node ./externals/node20/lib/node_modules/npm/bin/npm-cli.js --prefix ./externals/node20 -g update
./externals/node24/bin/node ./externals/node24/lib/node_modules/npm/bin/npm-cli.js --prefix ./externals/node24 -g update
rm -r ./.npm
curl -o actions-runner-k8s.zip -L https://github.com/actions/runner-container-hooks/releases/download/v${k8s_version}/actions-runner-hooks-k8s-${k8s_version}.zip && \
    echo "${k8s_version_sha} actions-runner-k8s.zip" | sha256sum -c && \
    unzip actions-runner-k8s.zip && rm actions-runner-k8s.zip
