flatedit
cp -f README.md docs/index.md
yarn docs:build
mv -rf vitepress/.vitepress/dist/* .
