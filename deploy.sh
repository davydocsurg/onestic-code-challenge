#!/usr/bin/env sh
# abort on errors
set -e
# buildyarn run build
# navigate into the build output directory
cd dist
# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git init
git add -A
git commit -m 'deploy'
git push -f git@github.com:davydocsurg/onestic-code-challenge.git master:gh-pages
cd -