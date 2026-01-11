#!/bin/bash
# for: build-doc-*

set -e

zypper install -y --no-recommends \
    gcc awk libffi-devel findutils

PYTHON_VERSION=$1
PYTHON_SHA=$3
curl -o python.tar.xz -L https://www.python.org/ftp/python/$PYTHON_VERSION/Python-$PYTHON_VERSION.tar.xz
echo "$PYTHON_SHA python.tar.xz" | sha256sum -c

tar xf python.tar.xz
cd Python-$PYTHON_VERSION

./configure \
    --prefix=/opt/python/$1 \
    --enable-shared \
    --enable-optimizations

make -s -j5
make install

ln -s /opt/python/$1/bin/python$2 /usr/local/bin/python$2
ln -s /opt/python/$1/bin/pip$2 /usr/local/bin/pip$2
echo "/opt/python/$1/lib" >> /etc/ld.so.conf.d/python$1.conf
ldconfig

cd ..
rm -r Python-$PYTHON_VERSION python.tar.xz
