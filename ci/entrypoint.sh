#!/bin/bash
# if: self_hosted

set -e

runner_version=v1
github_token=$(cat /run/secrets/adi_doctools_github_token)
org_repository=$(cat /run/secrets/adi_doctools_org_repository)

source /usr/local/bin/github-api.sh

if [[ ! -z $runner_labels ]]; then
    runner_version+="-$runner_labels"
fi

runner_token=$(
    gh-actions-token $github_token \
                     $org_repository \
                     runner_token
)
if [[ "$runner_token" == "null" ]]; then
    printf "Failed to get '$org_repository' runner_token, check github_token permission"
    exit 1
fi

./config.sh \
    --url https://github.com/$org_repository \
    --token $runner_token \
    --labels "$runner_version"

function cleanup () {
    ./config.sh remove \
        --token $runner_token
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

./run.sh & wait $!
