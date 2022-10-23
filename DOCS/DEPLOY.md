# [BUILD](https://github.com/dialogware/www/blob/main/DOCS/ABOUT.md) [<span style='font-size:20px;'&#x270D;</span](https://github.com/dialogware/www/edit/main/DOCS/BUILD.md)


[Deploying | VitePress](https://vitepress.vuejs.org/guide/deploying)

### Using GitHub Actions [#](https://vitepress.vuejs.org/guide/deploying#using-github-actions)

-  In your theme config file, `docs/.vitepress/config.js`, set the `base` property to the name of your GitHub repository. If you plan to deploy your site to `https://foo.github.io/bar/`, then you should set base to `'/bar/'`. It should always start and end with a slash.

-  Create a file named `deploy.yml` inside `.github/workflows` directory of your project with the following content:

```yaml
name: Deploy

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v3
        with:
          node-version: 16
          cache: yarn
      - run: yarn install --frozen-lockfile

      - name: Build
        run: yarn docs:build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vitepress/dist

```


-   Now commit your code and push it to the `main` branch.

-   Wait for actions to complete.

-   In your repository's Settings under Pages menu item, select `gh-pages` branch as GitHub Pages source. Now your docs will automatically deploy each time you push.
