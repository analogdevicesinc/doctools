
git-lock () {
	local owner_repository="$1"
	local sha="$2"
	local lock="$3"


	[[ -n "$sha" ]] || { echo "Error: must provide a 'owner/repostiory'" ; return 1 ;}
	[[ -n "$sha" ]] || { echo "Error: must provide a git sha" ; return 1 ;}
	[[ -n "$lock" ]] || lock="gh-pages"

	local ref="refs/locks/$lock"

	data=$(jq -n --arg ref "$ref" --arg sha "$sha" '{
		"ref": $ref,
		"sha": $sha
	}')
	# Create
	curl -L \
		-X POST \
		-H "Accept: application/vnd.github+json" \
		-H "Authorization: Bearer $GITHUB_TOKEN" \
		-H "X-GitHub-Api-Version: 2026-03-10" \
		"https://api.github.com/repos/$owner_repository/git/refs" \
		-d "$data"
	sleep 1
	# Delete
	curl -w "%{http_code}" -L \
		-X DELETE \
		-H "Accept: application/vnd.github+json" \
		-H "Authorization: Bearer $GITHUB_TOKEN" \
		-H "X-GitHub-Api-Version: 2026-03-10" \
		"https://api.github.com/repos/$owner_repository/git/$ref"
}
