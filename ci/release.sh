#!/bin/bash
set -e -u

CURRENT_VERSION=`cat package.json | jq -r .version`

name=$(git log -1 --pretty=format:"%an")
email=$(git log -1 --pretty=format:"%ae")
git config user.name "$name"
git config user.email "$email"

git fetch --tags

if [ `git branch | grep tmp-release` ]; then
    git branch -D tmp-release
fi
git checkout -b tmp-release

yarn install
yarn build
git add -f dist/
git commit -m "Release v$CURRENT_VERSION"
git tag "v$CURRENT_VERSION"
git push --tags

git checkout master
git branch -D tmp-release
