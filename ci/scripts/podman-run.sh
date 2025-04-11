#!/bin/bash

podman-run ()
{
	help_usage="
	Examples:
	    $ podman-run adi/linux:latest echo hello!
	      hello!

	    $ podman-run adi/linux:latest
	    > check_checkpatch
	      checking @~6..@ ... Done!
	    > exit

	    $ podman-run adi/linux:latest base_sha=@~10 \; check_checkpatch
	      checking @~10..@ ... Done!

	    $ podman-run --root adi/linux:latest
	    > zypper install some_package
	       installing some_package...

	"
	
	local as_root=
	local volume=.
	local image=
	local with_args=
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
		echo "podman-run --root --volume=<path> <image> [cmd]"
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	# If the image is not found, will search sources on
	# /etc/$container_engine/registries.d
	name=$(echo $image | sed 's|:|-|g' | sed 's|/|-|g')
	running=$($container_engine container inspect -f '{{.State.Running}}' $name 2>/dev/null)
	run_params="run -it \
		--replace \
		--entrypoint= \
		--name=$name \
		--workdir=$(pwd) \
		--volume $volume:$(cd $volume; pwd)"
	if [[ "$as_root" ]]; then
		run_params="$run_params --user root"
	else
		run_params="$run_params --userns keep-id"
	fi

	if [[ "$running" == "true" ]]; then
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine exec -it $name bash -lc "$args_"
		else
			$container_engine exec -it $name bash -l
		fi
	else
		if [[ "$with_args" ]]; then
			args_="${args[@]}"
			$container_engine ${run_params} $image bash -lc "$args_"
		else
			$container_engine ${run_params} $image bash -l
		fi
	fi

}
alias pdr=podman-run


