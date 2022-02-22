#!/bin/bash

set -euxo pipefail

git add -A
npx prettier --write $(git diff --name-only --cached)
git commit -m "add note"
git push
