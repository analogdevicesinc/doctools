#!/bin/bash

target=../adi_doctools/theme/harmonic/static/fonts

declare -A url
url[barlow]="https://github.com/jpt/barlow/archive/refs/tags/1.422.tar.gz"
url[inter]="https://github.com/rsms/inter/releases/download/v4.0/Inter-4.0.zip"

declare -A sha
sha[barlow]="f4bc7fd2802844deead4d19634b9c4d11710624a48fcfd7196821e353159c048"
sha[inter]="ff970a5d4561a04f102a7cb781adbd6ac4e9b6c460914c7a101f15acb7f7d1a4"

declare -A files
files[barlow]="fonts/woff2/Barlow-Medium.woff2 fonts/woff2/Barlow-SemiBold.woff2 OFL.txt"
files[inter]="web/Inter-Regular.woff2 web/Inter-SemiBold.woff2 LICENSE.txt"

declare -A ext
ext[barlow]="tar.gz"
ext[inter]="zip"

if [ -d .cache-fonts ]; then
	rm -r .cache-fonts
fi

mkdir .cache-fonts
pushd .
cd .cache-fonts
for i in "${!url[@]}"; do
	wget ${url[$i]} -O $i.${ext[$i]} -q
done
ls

if [ ! -d $target ]; then
	mkdir $target
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
		if [ ! -d $target/$i ]; then
			mkdir $target/$i
		fi
		files_ar=(${files[$i]})
		for j in "${files_ar[@]}"; do
			cp $i/$j $target/$i
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
