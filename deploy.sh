#!/bin/bash
set -e

REMOTE="git@github.com:zbryikt/tkirby.org"
BRANCH="gh-pages"
DIR="static"

echo "deploying $DIR to $REMOTE ($BRANCH) ..."

cd "$DIR"
git init -b "$BRANCH"
git add -A
git commit -m "deploy $(date '+%Y-%m-%d %H:%M:%S')"
git push -f "$REMOTE" "$BRANCH"
rm -rf .git

cd ..
echo "done."
