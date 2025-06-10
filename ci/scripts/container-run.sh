#!/bin/bash

container_engine=podman
container-run ()
{
	help_usage="
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

	"
	
	local as_root=
	local volume=.
	local image=
	local with_args=
	local cwd=
	declare -a args=
	for arg; do
		if [[ "$arg" =~ ^-- ]]; then
			if [[ "$arg" == "--root" ]]; then
				as_root=true
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
		echo "container-run --root --volume=<path> <image> [cmd]"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	if [ -z "$($container_engine images -q $image 2>/dev/null)" ]; then
		image=localhost/$image
	fi

	if git rev-parse --is-inside-work-tree  > /dev/null 2>&1 ; then
		cwd=$(git rev-parse --show-toplevel)
	else
		cwd=$(pwd)
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

	run_params="run -it \
		--entrypoint= \
		--name=$name \
		--workdir=$(pwd) \
		--volume $volume:$(cd $volume; pwd)"
	if [ "$container_engine" == "podman" ]; then
		if [[ "$as_root" ]]; then
			run_params="$run_params --user root"
		else
			run_params="$run_params --userns keep-id"
		fi
	elif [ "$container_engine" == "docker" ]; then
		if [[ "$as_root" ]]; then
			run_params="$run_params --user root"
		fi
	fi

	if [[ "$running" == "true" ]]; then
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine exec -it $name bash -lc "$args_"
		else
			$container_engine exec -it $name bash -l
		fi
	else
		if [[ "$exists" == "true" ]]; then
			$container_engine rm $name 1>/dev/null
		fi
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine ${run_params} $image bash -lc "$args_"
		else
			$container_engine ${run_params} $image bash -l
		fi
	fi

}
alias docker-run=container-run
alias container-run=container-run
alias cr=container-run

