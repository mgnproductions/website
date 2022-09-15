#!/bin/bash

build_folder=dist
echo " `date` : Build Project!"

echo " `date` : Create Branch gh-pages"

git checkout --orphan gh-pages

echo " `date` : Install and generate"

# npm install
npm run generate

# commit changes on branch gh-pages
git --work-tree $build_folder add --all
git --work-tree $build_folder commit -m gh-pages

# push branch gh-pages
git push origin HEAD:gh-pages --force

# rm -f $build_folder

git checkout -f main
git branch -D gh-pages