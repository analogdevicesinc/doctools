#!/bin/bash

[ -z "$PS1" ] || it=true

if [[ "$it" == "true" ]]; then
	err=0
	if git rev-parse --is-inside-work-tree  > /dev/null 2>&1 ; then
		pushd $(git rev-parse --show-toplevel) &>/dev/null
		if [[ -f "ci/build.sh" ]]; then
			export head_sha=$(git rev-parse --short=20 @)
			export base_sha=$(git rev-parse --short=20 @~6)
			printf "Set git commit range as (\$base_sha..\$head_sha)\n"
			printf "\e[34m$base_sha..$head_sha\e[0m.\n"
			printf "Adjust variables range as needed.\n"
			source ci/build.sh
			printf "\nSourced methods from ci/build.sh:\n\e[34m"
			grep -oE '^[a-zA-Z_][a-zA-Z0-9_]*\s*\(\)\s*\{' ci/build.sh |  \
				awk -F'[ ()]+' '{print $1}' | paste -sd ' '
			printf "\e[0m"
		else
			printf "At a git repository, but ci/build.sh not found."
			err=1
		fi
		popd &>/dev/null
	else
		printf "Not a git repository."
		err=1
	fi

	if [[ $err == "1" ]]; then
		printf " Not sourcing ci/build.sh or setting git commit range variables\n"
	fi
fi
