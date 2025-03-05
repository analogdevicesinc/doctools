#!/bin/bash
# for: build-doc-min

set -e

zypper install -y --no-recommends \
    gcc awk libffi-devel

PYTHON_MIN=$1
PYTHON_MIN_SHA=$2
curl -o python.tar.xz -L https://www.python.org/ftp/python/$PYTHON_MIN/Python-$PYTHON_MIN.tar.xz
echo "$PYTHON_MIN_SHA python.tar.xz" | sha3sum -a 256 -c

tar xf python.tar.xz
cd Python-$PYTHON_MIN

./configure \
    --prefix=/opt/python/$1 \
    --enable-shared \
    --enable-optimizations

make -s -j5
make install

ln -s /opt/python/$1/bin/python3.8 /usr/local/bin/python3.8
echo "/opt/python/$1/lib" >> /etc/ld.so.conf.d/python$1.conf
ldconfig
