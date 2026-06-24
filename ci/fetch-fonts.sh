#!/bin/bash

target=${1:-../adi_doctools/theme/harmonic/static/fonts}
format=${2:-woff2}

declare -A url
url[barlow]="https://github.com/jpt/barlow/archive/refs/tags/1.422.tar.gz"
url[inter]="https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip"
url[jetbrains-mono]="https://github.com/JetBrains/JetBrainsMono/releases/download/v2.304/JetBrainsMono-2.304.zip"

declare -A sha
sha[barlow]="f4bc7fd2802844deead4d19634b9c4d11710624a48fcfd7196821e353159c048"
sha[inter]="ff970a5d4561a04f102a7cb781adbd6ac4e9b6c460914c7a101f15acb7f7d1a4"
sha[jetbrains-mono]="6f6376c6ed2960ea8a963cd7387ec9d76e3f629125bc33d1fdcd7eb7012f7bbf"

declare -A dir
dir[inter:woff2]="web"
dir[inter:ttf]="extras/ttf"
dir[inter]=${dir[inter:$format]}
dir[jetbrains-mono:woff2]="webfonts"
dir[jetbrains-mono:ttf]="ttf"
dir[jetbrains-mono]=${dir[jetbrains-mono:$format]}

declare -A files
files[barlow]="fonts/$format/Barlow-Medium.$format fonts/$format/Barlow-SemiBold.$format OFL.txt"
files[inter]="${dir[inter]}/Inter-Regular.$format ${dir[inter]}/Inter-SemiBold.$format LICENSE.txt"
files[jetbrains-mono]="fonts/${dir[jetbrains-mono]}/JetBrainsMono-Regular.$format fonts/${dir[jetbrains-mono]}/JetBrainsMono-Bold.$format OFL.txt"

declare -A ext
ext[barlow]="tar.gz"
ext[inter]="zip"
ext[jetbrains-mono]="zip"

if [ -d .cache-fonts ]; then
	rm -r .cache-fonts
fi

mkdir .cache-fonts
pushd .
cd .cache-fonts
for i in "${!url[@]}"; do
	curl -sL "${url[$i]}" -o "$i.${ext[$i]}"
done
ls

if [ ! -d "$target" ]; then
	mkdir -p "$target"
fi
for i in "${!sha[@]}"; do
	if echo "${sha[$i]} $i.${ext[$i]}"  | sha256sum --check --status; then
		mkdir $i
		if [ "${ext[$i]}" == "tar.gz" ]; then
			tar xzf $i.tar.gz -C $i --strip-components 1
		fi
		if [ "${ext[$i]}" == "zip" ]; then
			unzip -q $i.zip -d $i
		fi
		if [ ! -d "$target/$i" ]; then
			mkdir "$target/$i"
		fi
		files_ar=(${files[$i]})
		for j in "${files_ar[@]}"; do
			cp "$i/$j" "$target/$i"
		done
		rm -r $i
	else
		echo "Font $i failed SHA256 checksum."
		ret=1
	fi
done
popd

rm -r .cache-fonts

exit $ret
