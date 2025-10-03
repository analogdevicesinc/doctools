#!/bin/bash

it=false ; [ -z "$PS1" ] || it=true

if git rev-parse --is-inside-work-tree  > /dev/null 2>&1 ; then
	pushd $(realpath $(git rev-parse --git-common-dir)/..) 1>/dev/null

	ci_worktree=$(git worktree list | grep '\[_ci\]' | cut -f1 -d " ")
	if [[ -z "$ci_worktree" ]]; then
		remote=$(git remote -v | grep analogdevicesinc | head -1 | cut -f1)
		if [[ ! -z "$remote" ]]; then
			$it && printf "Remote '\e[34m$remote\e[0m' matches '\e[34manalogdevicesinc\e[0m'."
			if git ls-remote --exit-code --heads $remote refs/heads/ci 1>/dev/null ; then
				$it && printf "\b, fetching branch '\e[34mci\e[0m'..."
				git fetch --quiet $remote ci
				git branch -D _ci &>/dev/null
				git worktree add -q -b _ci _ci $remote/ci
				ci_worktree=$(git worktree list | grep '\[_ci\]' | cut -f1 -d " ")
				$it && printf "\33[2K\rFetched CI branch to '$ci_worktree'.\n"
				$it && printf "To \e[34mclean-up\e[0m, use: \n"
				$it && printf "  \e[34mgit worktree remove _ci\e[0m\n\n"
			fi
		fi
	fi
	if [[ ! -z "$ci_worktree" ]]; then
		if [[ -f "$ci_worktree/ci/user.sh" ]]; then
			source $ci_worktree/ci/user.sh
		elif [[ -f "$ci_worktree/ci/build.sh" ]]; then
			source $ci_worktree/ci/build.sh
			if $it; then
				printf "Sourced methods from '$ci_worktree/ci/build.sh':\n\e[34m"
				grep -oE '^[a-zA-Z][a-zA-Z0-9_]*\s*\(\)\s*\{' $ci_worktree/ci/build.sh |  \
					awk -F'[ ()]+' '{print $1}' | column
				printf "\e[0m"
			fi
		fi
	fi

	if [[ -z "$head_sha" ]]; then
		export head_sha=@
	fi
	if [[ -z "$base_sha" ]]; then
		export base_sha=@~6
	fi
	if $it; then
		printf "The git commit range was set to:\n"
		printf "\$base_sha..\$head_sha: \e[34m$base_sha..$head_sha\e[0m \n"
		printf "Adjust '\$base_sha' and '\$head_sha' to your work range.\n"
	fi

	popd &>/dev/null
else
	printf "\e[31mNot\e[0m a git repository! Won't set ci tools, nor git commit range.\n"
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
