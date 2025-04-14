#!/bin/bash

set -e

#core: wget make git openssl ca-certificates ca-certificates-mozilla
#gh-actions: nodejs npm-default
#packaging: unzip
#weasyprint: libpango fontconfig lato-fonts
zypper install -y --no-recommends \
    wget make git git-lfs openssl openssl-devel ca-certificates ca-certificates-mozilla \
    nodejs npm-default \
    unzip xz \
    libpango-1_0-0 fontconfig lato-fonts

update-ca-certificates

fc-cache -f && fc-list

npm config set fund false
