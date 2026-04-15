#!/bin/bash

apply-patches ()
{
	local help_usage="apply-patches <run_id> [options]

	Examples:
	    $ apply-patches 123456789 --repo=my-repo
	    $ apply-patches 123456789 --repo=personal-account/my-repo
	    $ apply-patches 123456789 --repo=my-repo --artifact=my-patches
	    $ apply-patches 123456789 --repo=my-repo --token=ghp_xxx

	Options:

	--repo=<name>       GitHub repository name, may contain owner.
	--artifact=<name>   Artifact name (default: llm-patches).
	--token=<token>     GitHub token (default: \$GITHUB_TOKEN).
	"

	local repository=
	local run_id=
	local artifact="llm-patches"
	local github_token="$GITHUB_TOKEN"

	for arg; do
		if [[ "$arg" =~ ^-- ]]; then
			if [[ "$arg" == "--help" ]]; then
				printf "$help_usage" | sed -e 's/^\t//'
				return
			elif [[ "$arg" =~ ^--repo= ]]; then
				repository="${arg#--repo=}"
			elif [[ "$arg" == "--repo" ]]; then
				echo "missing --repo= value (e.g. --repo=my-repo)"
				return
			elif [[ "$arg" =~ ^--artifact= ]]; then
				artifact="${arg#--artifact=}"
			elif [[ "$arg" == "--artifact" ]]; then
				echo "missing --artifact= value (e.g. --artifact=llm-patches)"
				return
			elif [[ "$arg" =~ ^--token= ]]; then
				github_token="${arg#--token=}"
			elif [[ "$arg" == "--token" ]]; then
				echo "missing --token= value (e.g. --token=ghp_xxx)"
				return
			else
				echo "unknown option $arg"
				return
			fi
		elif [[ -z "$run_id" ]]; then
			run_id=$arg
		fi
	done

	if [[ -z "$github_token" ]]; then
		echo "no token provided, usage:"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	if [[ -z "$repository" ]]; then
		echo "missing repository, usage:"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	local org="analogdevicesinc"
	if [[ "$repository" == */* ]]; then
		org="${repository%%/*}"
		repository="${repository#*/}"
	fi

	if [[ -z "$run_id" ]]; then
		echo "missing run_id, usage:"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	if [[ -n $(git status --porcelain) ]]; then
		echo "Warning: git worktree contain changed files, enter o continue anyway"
		read -p "" cont
	fi

	echo "Fetching '$artifact' at '$org/$repository' run '$run_id'"
	artifact_id=$(curl -s \
		-H "Authorization: Bearer $github_token" \
		-H "Accept: application/vnd.github+json" \
		"https://api.github.com/repos/$org/$repository/actions/runs/$run_id/artifacts" \
		| jq -r ".artifacts[] | select(.name == \"$artifact\") | .id ")

	[ -n "$artifact_id" ] || { echo "Artifact '$artifact' at '$org/$repository' run '$run_id' not found." ;  return 1 ; }

	local patches_zip=$(mktemp -t "$artifact.XXX.zip")
	curl -sL \
		-H "Authorization: Bearer $github_token" \
		-H "Accept: application/vnd.github+json" \
		-o "$patches_zip" \
		"https://api.github.com/repos/$org/$repository/actions/artifacts/$artifact_id/zip"

	local patches_dir=$(mktemp -d -t "$artifact.XXX.zip")
	unzip -q "$patches_zip" -d "$patches_dir"
	rm "$patches_zip"

	echo "Patches at '$patches_dir'":
	ls "$patches_dir"
	read -p "Review? [y/N]: " choice
	case "$choice" in
		[yY])
			;;
		*)
			return 0
			;;
	esac

	for patch_file in "$patches_dir"/*.{patch,diff}; do
		[ -e "$patch_file" ] || continue

		git apply --check "$patch_file" 2>/dev/null &&
			echo "patch $(basename $patch_file) applies, enter to view diff)" ||
			{ echo "patch: $(basename $patch_file) does not apply" ; continue ; }

		read -p "" cont

		git apply "$patch_file"
		git diff

		echo -e "\nKeep patch?"
		echo "k) Keep on the working tree"
		echo "a) Apply as a commit"
		echo "s) Skip"
		read -p "Select an option: " choice
		case "$choice" in
			k)
				;;
			a)
				git restore .
				if git am "$patch_file"; then
					echo "$(basename $patch_file) applied"
				else
					git am --abort
					echo "$(basename $patch_file) failed"
				fi
				;;
			*)
				git restore .
				;;
		esac
	done
}
