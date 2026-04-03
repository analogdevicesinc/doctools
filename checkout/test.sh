#!/bin/bash
# Behaviour: if pull request exists, use range, if not, fallback to n commit.

set -x

tmpdir=$(mktemp -d -t test.action.checkout.XXX)
pushd $tmpdir


# sha
ref=56e6abde816890b9325f8e7a423d4a5f1a0ea9ee # -> none -> mode branch
ref=e5a8c2b6e74bafa9b0cc748d2f05d59b21a55b04 # -> 3234
# branch
ref=Brandon-Hurst:adsp-6.12.0-y # -> 3131
ref=ad5529r-driver
# pr number
ref=3096

repository=analogdevicesinc/linux

branch=
resp=
pr_json=
pr=
mode=

if ! [[ "$ref" =~ ^([0-9]+|pull/[0-9]+)(/head)?$ ]]; then
  # branch/commit

  # try branch
  branch="${ref#refs/heads/}"
  [[ "$branch" == *":"* ]] || {
    owner="${repository%/*}"
    branch="$owner:$branch"
  }
  # some-user:my-fix
  resp=$(curl -s \
    -H "Authorization: Bearer $github_token" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$repository/pulls?head=$branch&state=open")

  pr_json=$(echo "$resp" | jq '.[0]')
  if [[ "$pr_json" == "null" ]]; then
    # try sha
    sha="$ref"
    resp=$(curl -s \
      -H "Authorization: Bearer $github_token" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$repository/commits/$sha/pulls?state=open")
    pr_json=$(echo "$resp" | jq '.[0]')
  fi

  pr=$(echo "$pr_json" | jq -r '.number')
else
  # pr number
  pr="${ref#pull/}"
  pr="${pr%/head}"
fi

if [[ -n "$pr" ]]; then
  resp=$(curl -s \
    -H "Authorization: Bearer $github_token" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$repository/pulls/$pr")
  status=$(echo "$resp" | jq -r '.status // empty')
  if [[ "$status" == "404" ]]; then
    # does not exist
    pr=""
  else
    merge_commit_sha=$(echo "$resp" | jq -r '.merge_commit_sha')
    if [[ "$merge_commit_sha" == "null" ]]; then
      # has conflicts
      pr=""
    fi
  fi
fi

git init --initial-branch=trunk .
git config gc.auto 0
git config core.pager cat
git remote add origin "file:///mnt/linux"
local_ref="/mnt/git/$repository.git"
if [[ -d $local_ref ]]; then
  git remote add local "file://$local_ref"
  git fetch local --depth 10
  git remote rm local
fi
git switch -C trunk

# --empty was added on git 2.26.0
has_keep=$(git rebase -help 2>&1 | grep "\--empty" | wc -l) || true
if [[ "$has_keep" -gt "0" ]]; then
  keep_empty="--empty=keep"
else
  keep_empty="--keep-empty"
fi

fetch_depth=7
if [[ -n "$pr" ]]; then
  mode="pr"
  git fetch origin --depth=1 "refs/pull/$pr/merge"
  fetch_head=$(git rev-parse FETCH_HEAD)

  while ! git merge-base $fetch_head^1 $fetch_head^2 ; do
    git fetch origin --deepen=$fetch_depth $fetch_head
  done

  head_sha=$(git rev-parse $fetch_head^2)
  into_head_sha=$(git rev-parse $fetch_head^1)
  base_sha=$(git rev-list --reverse $into_head_sha..$head_sha | head -n 1)
  base_sha=$(git rev-parse $base_sha~)
else
  mode="branch"
  git fetch origin --depth=$fetch_depth "$ref"

  head_sha=$(git rev-parse "$ref")
  base_sha=$(git rev-parse $head_sha~$fetch_depth)
fi

git reset --hard FETCH_HEAD

if [[ "$mode" == "pr" ]]; then
  # rebase into
  git rebase --rebase-merges "$keep_empty" \
    "$into_head_sha" "$head_sha" && {
    head_sha=$(git rev-parse HEAD)
    base_sha=$into_head_sha
  } || {
    git rebase --abort
    checkout_fail_pr_rebase="true"
  }

  # apply fixups
  git log --oneline --pretty=format:'%s' $base_sha..$head_sha | grep ^fixup! && {
    git rebase $keep_empty --rebase-merges --autosquash $base_sha \
      || git rebase --abort && {
      head_sha=$(git rev-parse HEAD)
    } || {
      git rebase --abort
      checkout_fail_pr_fixup="true"
    }
  } || true
fi

git log --oneline --reverse $base_sha..$head_sha

popd
rm -rf $tmpdir
