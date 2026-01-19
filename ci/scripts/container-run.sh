#!/bin/bash

container_engine=podman
container-run ()
{
	help_usage="container-run <image> [cmd]

	Examples:
	    $ container-run adi/linux:latest echo hello!
	      hello!

	    $ container-run adi/linux
	    > check_checkpatch
	      checking @~6..@ ... Done!
	    > exit

	    $ container-run adi/linux base_sha=@~10 \; check_checkpatch
	      checking @~10..@ ... Done!

	    $ container-run --root adi/linux
	    > zypper install some_package
	       installing some_package...

	Options:

	--volume=<path>     Mount a path as a volume.
	--root              Runs as root instead of user runner.
	--mount-keys        Mount credentials into the container.
	--mount-ai          Mount ai tools, including credentials.

	If volume is not provided:
	 * is git repository: Set as the root of the repository, and if a
	   wortree, add the common git dir as well.
	 * is not a git repository: only set the current directory.
	If volume is provided, only set the current directory.
	"
	
	local as_root=false
	local mount_keys=false
	local mount_ai=false
	local volume=
	local image=
	local with_args=
	local cwd=
	declare -a run_params=
	declare -a args=
	for arg; do
		if [[ "$arg" =~ ^-- ]]; then
			if [[ "$arg" == "--help" ]]; then
				printf "$help_usage" | sed -e 's/^\t//'
				return
			elif [[ "$arg" == "--root" ]]; then
				as_root=true
			elif [[ "$arg" == "--mount-keys" ]]; then
				mount_keys=true
			elif [[ "$arg" == "--mount-ai" ]]; then
				mount_ai=true
			elif [[ "$arg" == "--volume" ]]; then
				echo "missing --volume= value (e.g. --volume=work)"
				return
			elif [[ "$arg" =~ "--volume=" ]]; then
				volume=${arg:9}
				if [[ -z "$volume" ]]; then
					echo "missing --volume= value (e.g. --volume=work)"
					return
				fi
			else
				echo "unknown option $arg"
				return
			fi
		elif [[ -z "$image" ]]; then
			image=$arg
		else
			[[ "$arg" ]] && args+=("$arg");
		fi
	done

	if [[ ! -z "${args[@]}" ]]; then
		with_args=true
	fi

	if [[ -z "$image" ]]; then
		echo "missing image, usage:"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	if [ -z "$($container_engine images -q $image 2>/dev/null)" ]; then
		image=localhost/$image
	fi

	if git rev-parse --is-inside-work-tree  > /dev/null 2>&1 ; then
		cwd=$(git rev-parse --show-toplevel)

		ci_worktree=$(git worktree list | grep '\[ci\]' | cut -f1 -d " ")
		if [[ -z "$ci_worktree" ]]; then
			remote=$(git remote -v | grep analogdevicesinc | head -1 | cut -f1)
			if [[ ! -z "$remote" ]]; then
				printf "Remote '\e[34m$remote\e[0m' matches '\e[34manalogdevicesinc\e[0m'."
				if git ls-remote --exit-code --heads $remote refs/heads/ci 1>/dev/null ; then
					printf "\b, and has branch '\e[34mci\e[0m'.\n"
					read -p "Fetch (y/n)? " yn
					case $yn in
						[Yy]* )
							printf "\33[2K\rFetching branch '\e[34mci\e[0m'..."
							git branch -D ci &>/dev/null
							git fetch --quiet $remote ci:ci
							wortree_base=$(realpath $(git rev-parse --git-common-dir)/..)
							if [ -d "$wortree_base/ci" ]; then
								ci_worktree=$wortree_base/_ci
							else
								ci_worktree=$wortree_base/ci
							fi
							git worktree add -q $ci_worktree ci
							printf "\33[2K\rFetched CI branch to 'ci'.\n"
							printf "To \e[34mclean-up\e[0m, use: \n"
							printf "  \e[34mgit worktree remove ci\e[0m\n\n"
							printf "Keep it up to date as well with \e[34mgit pull\e[0m.\n\n" ;;
						* )
							printf "Continuing without \e[34ci\e[0m worktree.\n\n" ;;
					esac
				fi
			fi
		fi
	else
		cwd=$(pwd -P)
	fi

	# If the image is not found, will search sources on
	# /etc/$container_engine/registries.d
	name=$(echo $image | sed 's|:|_|g' | sed 's|/|_|g').$(echo ${cwd:1} | sed 's|/|-|g')
	running=$($container_engine container inspect -f '{{.State.Running}}' $name 2>/dev/null)
	if [[ ! -z "$($container_engine ps -a --filter "name=^$name$" --format "{{.Names}}")" ]]; then
		exists=true
	else
		exists=false
	fi

	if [[ -z "$volume" ]]; then
		git_root=$(git rev-parse --git-common-dir 2>/dev/null) || true
		if [[ ! -z "$git_root" ]]; then
			volume=$(realpath $git_root/..)
			git_root_2=$(git rev-parse --show-toplevel)
			[ "$git_root_2" != "$git" ] && volume_2=$git_root_2
		else
			volume=.
		fi
	fi
	volume=$(realpath $volume)

	home=$($as_root && echo "/root" || echo "/home/runner")
	if [[ "$running" == "true" ]]; then
		run_params=()
	else
		run_params=(run -it)
		run_params+=(--entrypoint=)
		run_params+=(--name=$name)
		run_params+=(--workdir=$(pwd -P))
		run_params+=(--volume $volume:$volume)
		[ ! -z "$volume_2" ] && run_params+=(--volume $volume_2:$volume_2)
		if $mount_keys; then
			if [[ -d "$HOME/.ssh" ]]; then
				run_params+=(--volume $HOME/.ssh:$home/.ssh)
			fi
			if [[ -f "$HOME/.git-credentials" ]]; then
				run_params+=(--volume $HOME/.git-credentials:$home/.git-credentials)
			fi

		fi
		if $mount_ai; then
			ai_env_vars=(
				ANTHROPIC_BASE_URL
				ANTHROPIC_AUTH_TOKEN
				ANTHROPIC_CUSTOM_HEADERS
				ANTHROPIC_MODEL
				ANTHROPIC_DEFAULT_OPUS_MODEL
				ANTHROPIC_DEFAULT_SONNET_MODEL
				ANTHROPIC_DEFAULT_HAIKU_MODEL
			)
			echo -n "Detected AI tools:"
			if [[ -f "$HOME/.local/bin/claude" ]]; then
				echo -n " claude"
				run_params+=(--volume $HOME/.local/bin/claude:$home/.local/bin/claude)
			fi
			echo ""
			vars_=()
			for var in "${ai_env_vars[@]}"; do
				val="${!var}"
				if [[ -n "$val" ]]; then
					vars_+=($var)
					run_params+=(--env $var="$val")
				fi
			done
			echo "Passed AI env vars:"
			printf "%s\n" "${vars_[@]}" | column

		fi
	fi
	if [ "$container_engine" == "podman" ]; then
		if $as_root; then
			run_params+=(--user root)
		elif [[ "$running" != "true" ]]; then
			run_params+=(--userns keep-id)
		fi
	elif [ "$container_engine" == "docker" ]; then
		if $as_root; then
			run_params+=(--user root)
		else
			run_params+=(--env USERID=$(id -u))
			run_params+=(--env GROUPID=$(id -g))
		fi
	fi

	if [[ "$running" == "true" ]]; then
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine exec "${run_params[@]}" -it $name bash -lc "$args_"
		else
			$container_engine exec "${run_params[@]}" -it $name bash -l
		fi
	else
		if [[ "$exists" == "true" ]]; then
			$container_engine rm $name 1>/dev/null
		fi
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine "${run_params[@]}" $image bash -lc "$args_"
		else
			$container_engine "${run_params[@]}" $image bash -l
		fi
	fi

}
alias container=$container_engine
alias docker-run=container-run
alias podman-run=container-run
alias cr=container-run

