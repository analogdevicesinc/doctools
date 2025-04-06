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

	github_pipe_fifo=/tmp/github_env_$(tr -dc A-Za-z0-9 </dev/urandom | head -c 4; command echo)
	github_pipe_listener () {
		while true; do
		        if IFS= read -r row <&3; then
				printf "\ngithub_env:: \e[35m$row\e[0m\n"
				export $row
		        else
		                sleep 0.1
		        fi
		done 3< $github_pipe_fifo
	}
	github_pipe_exit_handler () {
		kill "$github_pipe_pid"
		command rm $github_pipe_fifo
	}
	mkfifo $github_pipe_fifo
	export GITHUB_ENV=$github_pipe_fifo
	github_pipe_listener &
	github_pipe_pid=$(command echo $!)
	trap github_pipe_exit_handler EXIT

	echo () {
		command echo "$@" | sed "s/%0A/\n/g"
	}
fi
