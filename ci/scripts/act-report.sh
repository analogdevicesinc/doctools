#!/bin/bash

act-report() {
	local err=0
	declare -A ci_job_index
	declare -A ci_job_name
	local nindex=0

	help_usage="
	Pipes ACT very verbose output, and print only GitHub Actions annotations (warnings and errors)
	The full log is saved to all.log and each job filterred output to act-log/<index>.log

	Examples:
	   $ act-report -W .github/workflows/kernel.yml --remote-name=public
	       Run some_run...

	"

	if [[ "$1" == "help" || "$1" == "--help" ]]; then
		printf "$help_usage" | sed -e 's/^\t//'
		return
	fi

	mkdir -p act-log
	command rm -r act-log/* 2>/dev/null

	act $@ | (while IFS= read -r row; do
		if [[ "$row" =~ ^\[([^]]+)\][[:space:]]+([[:alnum:]_[:punct:]])[[:space:]]+::(warning|error)[[:space:]]+(.*)::(.*)$ ]]; then
			ci_job="${BASH_REMATCH[1]}"
			emoji="${BASH_REMATCH[2]}"
			level="${BASH_REMATCH[3]}"
			file_info="${BASH_REMATCH[4]}"
			message="${BASH_REMATCH[5]}"
			message=$(echo "$message" | sed 's/%0A/\n	/g')
			log_name=$(echo $ci_job | sed 's|/|-|g')
	
			if [[ "$level" == "error" ]]; then
				level="\e[31merror\e[0m  "
			else
				level="\e[33mwarning\e[0m"
			fi

			if [[ ! -v ci_job_index["$ci_job"] ]]; then
				ci_job_index["$ci_job"]="$nindex"
				ci_job_name["$nindex"]="$ci_job"
				((nindex++))
			fi
			ci_index=${ci_job_index["$ci_job"]}
			ci_job="\e[3$(( 1 + $ci_index ))m[$ci_job]\e[0m"
			file_info=$(echo "$file_info" | sed -E 's/file=([^,]+),line=([0-9]+)(,(.*))?/\1:\2 \4/g')
	
			printf "$ci_job $level $file_info\n\n" | tee -a act-log/$ci_index.log
			printf "\t$message\n" | tee -a act-log/$ci_index.log

			printf "$level $file_info\n\n" >> act-log/$log_name.log
			printf "\t$message\n" >> act-log/$log_name.log
		elif [[ "$row" =~ ^\[([^]]+)\][[:space:]]+([[:alnum:]_[:punct:]])[[:space:]]+Run[[:space:]](.*)$ ]]; then
			ci_job="${BASH_REMATCH[1]}"
			emoji="${BASH_REMATCH[2]}"
			step="${BASH_REMATCH[3]}"
			log_name=$(echo $ci_job | sed 's|/|-|g')

			if [[ ! -v ci_job_index["$ci_job"] ]]; then
				ci_job_index["$ci_job"]="$nindex"
				ci_job_name["$nindex"]="$ci_job"
				((nindex++))
			fi
			ci_index=${ci_job_index["$ci_job"]}
			ci_job="\e[3$(( 1 + $ci_index ))m[$ci_job]\e[0m"
			step="$step"
			printf "$ci_job Run $step\n"
			printf "$\nRun $step\n" >> act-log/$log_name.log
		elif [[ "$row" =~ ^\[([^]]+)\][[:space:]]+(.*)$ ]]; then
			ci_job="${BASH_REMATCH[1]}"
			message="${BASH_REMATCH[2]}"

			if [[ ! -v ci_job_index["$ci_job"] ]]; then
				ci_job_index["$ci_job"]="$nindex"
				ci_job_name["$nindex"]="$ci_job"
				((nindex++))
			fi
			log_name=$(echo $ci_job | sed 's|/|-|g')

			ci_index=${ci_job_index["$ci_job"]}
			ci_job="\e[3$(( 1 + $ci_index ))m[$ci_job]\e[0m"

			echo "$message" >> act-log/$log_name.log
		else
			# Uncaught
			echo $row
		fi

		echo $row >> act-log/all.log
	done) ; err=${PIPESTATUS[0]}

	return $err
}
alias actr=act-report
