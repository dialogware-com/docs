import {defineConfig} from 'vitepress'
import { SearchPlugin } from 'vitepress-plugin-search'
//import { defineConfig } from "vite"

export default defineConfig({
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'vuejs/vuepress',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',

        // Optional options for generating "Edit this page" link
        nextLinks: true,
        // default value is true. Set it to false to hide prev page links on all pages
        prevLinks: true,
        // if your docs are in a different repo from your main project:
        //docsRepo: 'vuejs/vuepress',
        // if your docs are not at the root of the repo:
        docsDir: './md/',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'main',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
        smoothScroll: true,
        displayAllHeaders: true, // Default: false
        activeHeaderLinks: false,
        lang: 'en-US',
        title: 'DIALOGWARE',
        description: 'Text to Software solution to build a web application in minutes',
        logo: '/dialogware-2lines.png',
        siteTitle: false,
        nav: [
            {text: 'Team', link: '/about/team'},
            {text: 'Contact', link: '/user/contact'},
            {text: 'Roadmap', link: 'https://github.com/orgs/dialogware/projects/2/views/1'},
            {text: 'Tasks', link: 'https://github.com/orgs/dialogware/projects/1/views/1'},
            //{text: 'Contact', link: 'https://www.linkedin.com/in/tom-sapletta-com/'},
            {text: 'Documentation', link: 'https://docs.dialogware.com/'},
            {text: 'Start', link: '/user/registration'}
        ],
        markdown: {
            theme: 'material-palenight',
            lineNumbers: true
        },
        search: true,
        searchMaxSuggestions: 10,
        editLink: {
            pattern: 'https://github.com/dialogware/www/edit/main/md/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            message: 'Released under the  <a href="https://github.com/vuejs/vitepress/blob/main/LICENSE">Apache License</a>.',
            copyright: 'Copyright © 2023  <a href="https://softreck.com" >Softreck</a>'
        }
    }
})
