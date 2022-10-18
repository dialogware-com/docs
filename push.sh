flatedit
cp -f README.md docs/index.md
yarn docs:build
cp -f -r vitepress/.vitepress/dist/* .
git commit -m "update docs"
git push