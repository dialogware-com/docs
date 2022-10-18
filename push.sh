#!/usr/bin/env bash
# chmod +x push.sh
#GITHUB_TOKEN
[ -z $GITHUB_TOKEN ] && GITHUB_TOKEN=$(cat .github_token)
flatedit
cp -fv README.md vitepress/index.md
yarn docs:build
cp -f -r vitepress/.vitepress/dist/* .
rm README.md

MESSAGE=$1
MESSAGE="update docs"
[ -z "$MESSAGE" ] && read -p "Enter message for commit: " MESSAGE
git status # To check the status of working tree

if [ -n "$(git status - porcelain)" ];
then
 echo "IT IS CLEAN"
else
 git add . # To add the changes in local repository
 git commit -m "${MESSAGE}" # To commit the changes and prepare it for remote repository
 git status # To check the status of working tree
fi

#git add . # To add the changes in local repository
git commit -a -m "${MESSAGE}" # To commit the changes and prepare it for remote repository
git remote add origin "github.com/dialogware/www.git"
echo "Pushing data to remote server!!!"
git push -u origin master # To push the changes in remote repository

