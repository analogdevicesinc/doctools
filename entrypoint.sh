#!/bin/bash

github_token_=$github_token
runner_token_=$runner_token
owner_repository_=$owner_repository
runner_name_=$runner_name
runner_labels_=$runner_labels
config_flags_=$config_flags

if [ -n "$CREDENTIALS_DIRECTORY" ]; then
   [ -f "$CREDENTIALS_DIRECTORY/github_token" ] && github_token_=$(cat "$CREDENTIALS_DIRECTORY/github_token")
   [ -f "$CREDENTIALS_DIRECTORY/runner_token" ] && runner_token_=$(cat "$CREDENTIALS_DIRECTORY/runner_token")
fi

unset CREDENTIALS_DIRECTORY
unset github_token
unset runner_token
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
runner_dir="/home/runner"
readonly runner_dir

node="$runner_dir/externals/node24/bin/node"
[ -x "$node" ] || node="$runner_dir/externals/node22/bin/node"
readonly node

set -e

function get_runner_token () {
    if [[ ! -z "$github_token_" ]]; then
        runner_token_=$(owner_repository_="$owner_repository_" github_token_="$github_token_" \
            $node -e "
            fetch('https://api.github.com/repos/' + process.env.owner_repository_ + '/actions/runners/registration-token', {
              method: 'POST',
              headers: {
                'Accept': 'application/vnd.github+json',
                'Authorization': 'Bearer ' + process.env.github_token_,
                'X-GitHub-Api-Version': '2022-11-28',
                'User-Agent': 'nr'
              }
            })
            .then(res => res.json())
            .then(data => {
              if (!data.token) throw new Error('Failed to get runner_token, check github_token permission');
              process.stdout.write(data.token);
            })
            .catch(err => {
              process.stderr.write(err.message + '\n');
              process.exit(1);
            });
        ")
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
