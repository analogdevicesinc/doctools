#!/bin/bash

runner_version=v1
github_token=$(cat /run/secrets/github_token 2> /dev/null)
org_repository=$(cat /run/secrets/org_repository 2> /dev/null)

source /usr/local/bin/github-api.sh

if [[ -z $org_repository ]]; then
    echo "No org_repository provided"
    exit 1
fi

if [[ ! -z $github_token ]]; then
    runner_token=$(
        gh-actions-token $github_token \
                         $org_repository \
                         runner_token
    )

    if [[ "$runner_token" == "null" ]]; then
        echo "Failed to get '$org_repository' runner_token, check github_token permission"
        exit 1
    fi
else
    runner_token=$(cat /run/secrets/runner_token 2> /dev/null)

    if [[ -z $runner_token ]]; then
        echo "No runner_token or github_token provided"
        exit 1
    fi
fi

if [[ ! -z $runner_labels ]]; then
    runner_version+="-$runner_labels"
fi

name=$(echo $org_repository | sed 's|/|-|g')-$(echo $runner_token | sha3sum -a 256 | head -c4)-$(tr -dc A-Za-z0-9 </dev/urandom | head -c2; echo)

set -e

/home/runner/actions-runner/config.sh \
    --url https://github.com/$org_repository \
    --token $runner_token \
    --labels "$runner_version" \
    --name  $name

function cleanup () {
    /home/runner/actions-runner/config.sh remove \
        --token $runner_token
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

/home/runner/actions-runner/run.sh & wait $!
