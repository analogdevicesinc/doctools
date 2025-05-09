#!/bin/bash

github_token_=$github_token
runner_token_=$runner_token
org_repository_=$org_repository
runner_labels_=$runner_labels

unset github_token
unset runner_token
unset org_repository
unset runner_labels

if [[ -z "$runner_labels_" ]]; then
    runner_labels_="v1"
fi

source /usr/local/bin/github-api.sh

if [[ -z "$org_repository_" ]]; then
    echo "No org_repository provided"
    exit 1
fi

function get_runner_token () {
    if [[ ! -z "$github_token_" ]]; then
        runner_token_=$(
            gh-actions-token $github_token_ \
                             $org_repository_
        )

        if [[ "$runner_token_" == "null" ]]; then
            echo "Failed to get '$org_repository_' runner_token, check github_token permission"
            exit 1
        fi
    else
        if [[ -f "/run/secrets/runner_token" ]]; then
            runner_token_=$(cat /run/secrets/runner_token)
        fi
        if [[ -z "$runner_token_" ]]; then
            echo "No runner_token or github_token provided"
            exit 1
        fi
    fi
}

get_runner_token

if [[ -z "$name_label" ]]; then
    name_label=$(echo $runner_token_ | sha3sum -a 256 | head -c4)
fi

name=$(echo $org_repository_ | sed 's|/|-|g')-$name_label

set -e

(cd /home/runner/actions-runner ; ./config.sh \
    --url https://github.com/$org_repository_ \
    --token $runner_token_ \
    --labels "$runner_labels_" \
    --unattended \
    --replace \
    --name $name \
)

function cleanup () {
    get_runner_token

    (cd /home/runner/actions-runner ; ./config.sh remove \
        --token $runner_token_)
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

/home/runner/actions-runner/run.sh & wait $!
