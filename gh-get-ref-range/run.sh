gh_get_ref_range() {
  local github_token="$1"
  local org_repository="$2"
  local ref="$3"

  local pr_number=""
  local pr_base_ref=""
  local merge_commit_sha=""

  head_sha=""
  base_sha=""

  if [[ "$ref" =~ ^([0-9]+|pull/[0-9]+)(/head)?$ ]]; then
    pr_number="${ref#pull/}"
    pr_number="${pr_number%/head}"

    resp=$(curl -s \
      -H "Authorization: Bearer $github_token" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$org_repository/pulls/$pr_number")
    http_code=$(echo "$resp" | jq -r '.status // empty')
    [[ "$http_code" == "404" ]] && { echo "PR #$pr_number not found"; return 1; }

    head_sha=$(echo "$resp" | jq -r '.head.sha')
    pr_base_ref=$(echo "$resp" | jq -r '.base.ref')
    echo "pr_base_ref: $pr_base_ref"
    echo "head_sha: $head_sha"

    merge_commit_sha=$(echo "$resp" | jq -r '.merge_commit_sha')
    if [[ "$merge_commit_sha" == "null" ]]; then
      echo "::error ::gh-get-ref-range: Pull request '$pr_number' has conflicts."
      return 1
    fi
    echo "merge_commit_sha: $merge_commit_sha"

    resp=$(curl -s \
      -H "Authorization: Bearer $github_token" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$org_repository/commits/$pr_base_ref")
    http_code=$(echo "$resp" | jq -r '.status // empty')
    [[ "$http_code" == "404" ]] && return 1 || true

    base_sha=$(echo "$resp" | jq -r '.sha')
    echo "base_sha: $base_sha (base: $pr_base_ref)"

  else
    local branch_name="${ref#refs/heads/}"

    resp=$(curl -s \
      -H "Authorization: Bearer $github_token" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$org_repository/commits/$ref")
    http_code=$(echo "$resp" | jq -r '.status // empty')
    [[ "$http_code" == "404" ]] && return 1 || true

    head_sha=$(echo "$resp" | jq -r '.sha')
    if [[ "$head_sha" == "null" ]]; then
        head_sha=""
        return 1
    fi
    echo "head_sha: $head_sha"

    local owner="${org_repository%%/*}"
    resp=$(curl -s \
      -H "Authorization: Bearer $github_token" \
      -H "Accept: application/vnd.github+json" \
      "https://api.github.com/repos/$org_repository/pulls?head=$owner:$branch_name&state=open")

    local pr_json
    pr_json=$(echo "$resp" | jq '.[0]')
    if [[ "$pr_json" == "null" ]]; then
      resp=$(curl -s \
        -H "Authorization: Bearer $github_token" \
        -H "Accept: application/vnd.github+json" \
        "https://api.github.com/repos/$org_repository/commits/$head_sha/pulls")
      pr_json=$(echo "$resp" | jq '.[0]')
    fi
    if [[ -n "$pr_json" && "$pr_json" != "null" ]]; then
      pr_number=$(echo "$pr_json" | jq -r '.number')
      pr_base_ref=$(echo "$pr_json" | jq -r '.base.ref')
      echo "got pr: #$pr_number (base: $pr_base_ref)"

      merge_commit_sha=$(echo "$resp" | jq -r '.merge_commit_sha')
      if [[ "$merge_commit_sha" == "null" ]]; then
        echo "::error ::gh-get-ref-range: Pull request '$pr_number' has conflicts."
        return 1
      fi
      echo "merge_commit_sha: $merge_commit_sha"

      resp=$(curl -s \
        -H "Authorization: Bearer $github_token" \
        -H "Accept: application/vnd.github+json" \
        "https://api.github.com/repos/$org_repository/commits/$pr_base_ref")
      http_code=$(echo "$resp" | jq -r '.status // empty')
      [[ "$http_code" == "404" ]] && { echo "::error ::Base ref '$pr_base_ref' not found"; return 1; }

      base_sha=$(echo "$resp" | jq -r '.sha')
      echo "base_sha: $base_sha (base: $pr_base_ref)"
    fi
  fi

  return 0
}
