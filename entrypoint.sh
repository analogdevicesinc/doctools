#!/bin/bash

github_token_=$github_token
runner_token_=$runner_token
owner_repository_=${owner_repository:-$org_repository}
runner_name_=$runner_name
runner_labels_=$runner_labels
config_flags_=$config_flags

if [ -n "$CREDENTIALS_DIRECTORY" ]; then
   [ -f "$CREDENTIALS_DIRECTORY/github_token" ] && github_token_=$(cat "$CREDENTIALS_DIRECTORY/github_token")
   [ -f "$CREDENTIALS_DIRECTORY/runner_token" ] && runner_token_=$(cat "$CREDENTIALS_DIRECTORY/runner_token")
   [ -f "$CREDENTIALS_DIRECTORY/owner_repository" ] && owner_repository_=$(cat "$CREDENTIALS_DIRECTORY/owner_repository")
fi

unset CREDENTIALS_DIRECTORY
unset github_token
unset runner_token
unset org_repository
unset owner_repository
unset runner_name
unset runner_labels
unset config_flags

if [[ -z "$config_flags_" ]]; then
    config_flags_="--replace"
fi

if [[ -z "$owner_repository_" ]]; then
    echo "No owner_repository provided"
    exit 1
fi

function get_runner_token () {
    if [[ ! -z "$github_token_" ]]; then
        runner_token_=$(curl -L \
          -X POST \
          -H "Accept: application/vnd.github+json" \
          -H "Authorization: Bearer $github_token_" \
          -H "X-GitHub-Api-Version: 2022-11-28" \
          "https://api.github.com/repos/$owner_repository_/actions/runners/registration-token" \
          | jq -r .token)

        if [[ "$runner_token_" == "null" ]]; then
            echo "Failed to get '$owner_repository_' runner_token, check github_token permission"
            exit 1
        fi
    else
        if [[ -p "/var/run/secrets/runner_token" ]] || [[ -f "/var/run/secrets/runner_token" ]]; then
            runner_token_=$(cat /var/run/secrets/runner_token)
        fi
        if [[ -z "$runner_token_" ]]; then
            echo "No runner_token or github_token provided"
            exit 1
        fi
    fi
}

get_runner_token

[ -n "$runner_name_" ] || runner_name_=$(echo $owner_repository_ | sed 's|/|-|g')-$(echo $runner_token_ | sha256sum | head -c4)
[ -n "$runner_labels_" ] || runner_labels_="self-hosted"

set -e

[[ -x /home/runner/config.sh ]] && runner_dir="/home/runner" || runner_dir="/home/runner/actions-runner"
readonly runner_dir
(cd "$runner_dir" ; ./config.sh \
    --url https://github.com/$owner_repository_ \
    --token $runner_token_ \
    --name "$runner_name_" \
    --labels "$runner_labels_" \
    --no-default-labels \
    --unattended \
    $config_flags_ \
)

function cleanup () {
    get_runner_token

    (cd "$runner_dir" ; ./config.sh remove \
        --token $runner_token_)
}

trap 'cleanup; exit 130' INT
trap 'cleanup; exit 143' TERM

$runner_dir/run.sh & wait $!
