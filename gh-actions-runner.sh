#!/bin/bash

set -e

runner_version=2.338.2
runner_version_sha=baebf204307bac6193480852732f0aba2ae97b6c5597c244f4d5558390147c40
k8s_version=0.8.1
k8s_version_sha=2c3c4526f8a8d517373a2a0daa6122d7887bdc465c54945c6d716db87d9d9b4f

curl -o actions-runner.tar.gz -L https://github.com/actions/runner/releases/download/v${runner_version}/actions-runner-linux-x64-${runner_version}.tar.gz && \
    sha256sum actions-runner.tar.gz && \
    echo "${runner_version_sha} actions-runner.tar.gz" | sha256sum -c && \
    tar xzf actions-runner.tar.gz && rm actions-runner.tar.gz

curl -o actions-runner-k8s.zip -L https://github.com/actions/runner-container-hooks/releases/download/v${k8s_version}/actions-runner-hooks-k8s-${k8s_version}.zip && \
    sha256sum actions-runner-k8s.zip && \
    echo "${k8s_version_sha} actions-runner-k8s.zip" | sha256sum -c
unzip actions-runner-k8s.zip && rm actions-runner-k8s.zip
