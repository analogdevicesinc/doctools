#!/bin/bash

[ -z "$PS1" ] || it=true

if git rev-parse --is-inside-work-tree  > /dev/null 2>&1 ; then
	pushd $(git rev-parse --show-toplevel) &>/dev/null
	if [[ -z "$head_sha" ]]; then
		export head_sha=$(git rev-parse --short=20 @)
	fi
	if [[ -z "$base_sha" ]]; then
		export base_sha=$(git rev-parse --short=20 @~6)
	fi
	if [[ "$it" == "true" ]]; then
		printf "Set git commit range as (\$base_sha..\$head_sha)\n"
		printf "\e[34m$base_sha..$head_sha\e[0m\n"
		printf "Adjust variables range as needed.\n"
	fi
	if [[ -f "ci/build.sh" ]]; then
		source ci/build.sh
		if [[ "$it" == "true" ]]; then
			printf "\nSourced methods from ci/build.sh:\n\e[34m"
			grep -oE '^[a-zA-Z_][a-zA-Z0-9_]*\s*\(\)\s*\{' ci/build.sh |  \
				awk -F'[ ()]+' '{print $1}' | paste -sd ' '
			printf "\e[0m"
		fi
	fi
	popd &>/dev/null
else
	printf "Not a git repository, not setting git commit range variables or sourcing ci/build.sh\n"
fi

github_pipe_fifo=/tmp/github_env_$(tr -dc A-Za-z0-9 </dev/urandom | head -c 4; command echo)
github_pipe_listener () {
	github_pipe_listener_clean () {
		exit 0
	}

	trap github_pipe_listener_clean SIGTERM

	while true; do
	        if IFS= read -r row <&3; then
			printf "\033[1A\033[K\rgithub_env:: \e[35m$row\e[0m\033[1B\r"
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
set -m ; github_pipe_listener &
github_pipe_pid=$(command echo $!)
trap github_pipe_exit_handler EXIT

echo () {
	command echo "$@" | sed "s/%0A/\n/g"
}
