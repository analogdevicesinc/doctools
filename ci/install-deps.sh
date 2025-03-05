#!/bin/bash

set -e

#core: wget make git openssl ca-certificates ca-certificates-mozilla
#gh-actions: nodejs npm-default
#packaging: unzip
#build&run: python3 python3-pip python3-setuptools
#weasyprint: libpango fontconfig lato-fonts
zypper install -y --no-recommends \
    wget make git openssl openssl-devel ca-certificates ca-certificates-mozilla \
    nodejs npm-default \
    unzip \
    python3 python3-pip python3-setuptools \
    libpango-1_0-0 fontconfig lato-fonts

update-ca-certificates

fc-cache -f && fc-list
