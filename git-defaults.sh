#!/bin/bash

git config --add --system user.name "CSE CI"
git config --add --system user.email "cse-ci-notifications@analog.com"
git config --add --system init.defaultBranch  "__runner_init_branch"
git config --add --system advice.mergeConflict false
git config --add --system advice.detachedHead false
git config --add --system fetch.prune true
git config --add --system fetch.pruneTags true
git config --add --system safe.directory '*'
