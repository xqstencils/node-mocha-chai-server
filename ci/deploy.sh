#!/bin/bash
set -e -u

APP_NAME='node-mocha-chai-server'
APP_VERSION=`cat package.json | jq -r .version`

echo 'Config user name & user email'
name=$(git log -1 --pretty=format:"%an")
email=$(git log -1 --pretty=format:"%ae")
git config user.name "$name"
git config user.email "$email"

echo 'Commit dist files'
git add -f dist/
git commit -m "Release v$APP_VERSION"

echo 'Deploy code to heroku'
git push -f https://heroku:$HEROKU_API_KEY@git.heroku.com/$HEROKU_APP_NAME.git master
