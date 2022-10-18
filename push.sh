#/bin/bash -e
#GITHUB_TOKEN
[ -z $GITHUB_TOKEN ] && GITHUB_TOKEN=$(cat .github_token)
flatedit
cp -f README.md docs/index.md
yarn docs:build
cp -f -r vitepress/.vitepress/dist/* .

MESSAGE=$1
MESSAGE="update docs"
[ -z $MESSAGE ] && read -p "Enter message for commit: " MESSAGE
git add . # To add the changes in local repository
git commit -m"${MESSAGE}" # To commit the changes and prepare it for remote repository
if [ -n "$(git status - porcelain)" ];
then
 echo "IT IS CLEAN"
else
 git status # To check the status of working tree
 echo "Pushing data to remote server!!!"
 git push -u origin master # To push the changes in remote repository
fi

