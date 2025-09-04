#!/bin/bash

gh-get-release-id()
{
  release_id=$(curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$2/releases/tags/$3" \
    | jq -r .id)
  echo "$4=$release_id" >> "$GITHUB_ENV"
  echo $release_id
}

gh-get-asset-id()
{
  asset_id=$(curl -L \
    -H "Accept: application/vnd.github+json"  \
    -H "Authorization: Bearer $1"  \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$2/releases/$3/assets" \
    | jq -r ".[] | select(.name==\"$4\") | .id")
  echo "$5=$asset_id" >> "$GITHUB_ENV"
  echo $asset_id
}

gh-create-tag()
{
  curl -L \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$2/git/refs" \
    -d "{
      \"ref\": \"refs/tags/$3\",
      \"sha\": \"$4\"
    }"
}

gh-create-release()
{
  release_id=$(curl -L \
   -X POST \
   -H "Accept: application/vnd.github+json" \
   -H "Authorization: Bearer $1" \
   -H "X-GitHub-Api-Version: 2022-11-28" \
   "https://api.github.com/repos/$2/releases" \
   -d "{\"tag_name\":\"$3\",\"name\":\"$3\",\"make_latest\":\"true\"}" \
   | jq -r .id)
  echo "$4=$release_id" >> "$GITHUB_ENV"
  echo $release_id
}

gh-upload-asset()
{
  curl -L \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -H "Content-Type: application/octet-stream" \
    "https://uploads.github.com/repos/$2/releases/$3/assets?name=$4" \
    --data-binary "@$5"
}

gh-delete-asset()
{
  curl -L \
    -X DELETE \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$2/releases/assets/$3"
}

gh-update-commitish()
{
  curl -s \
    -X PATCH \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    -d '{"target_commitish": "$3"}' \
    "https://api.github.com/repos/$2/releases/$4"
}

gh-get-number-commits()
{
  total_commits=$(curl -L \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    "https://api.github.com/repos/$2/compare/$3...$4" \
    | jq ".total_commits")
  echo "total_commits=$total_commits" >> "$GITHUB_ENV"
  echo $total_commits
}

gh-cancel-workflow()
{
  curl -L \
    -X POST \
    -H "Accept: application/vnd.github+json" \
    -H "Authorization: Bearer $1" \
    -H "X-GitHub-Api-Version: 2022-11-28" \
    https://api.github.com/repos/$2/actions/runs/$3/cancel
}
