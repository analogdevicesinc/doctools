#!/bin/bash

set -e

zypper install -y --no-recommends \
    go

GIT_LFS_VERSION=$1
GIT_LFS_SHA=$2

curl -o git-lfs.tar.gz -L https://github.com/git-lfs/git-lfs/releases/download/v$GIT_LFS_VERSION/git-lfs-v$GIT_LFS_VERSION.tar.gz
echo "$GIT_LFS_SHA git-lfs.tar.gz" | sha256sum -c

tar xzf git-lfs.tar.gz

cd git-lfs-${GIT_LFS_VERSION}

make

install -m 755 bin/git-lfs /usr/local/bin/git-lfs

cd ..
rm -r git-lfs-${GIT_LFS_VERSION} git-lfs.tar.gz

zypper remove -yu go

git lfs install --system
