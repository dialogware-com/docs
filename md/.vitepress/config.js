import {defineConfig} from 'vitepress'
//import {defineConfig} from 'vite'
import {SearchPlugin} from 'vitepress-plugin-search' // npm i vitepress-plugin-search markdown-it -D

export default defineConfig({
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'dialogware/www',
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
       // lastUpdated: 'Date: ',
        smoothScroll: true,
        displayAllHeaders: true, // Default: false
        activeHeaderLinks: true,
        lang: 'en-US',
        title: 'DIALOGWARE',
        description: 'Text to Software solution to build a web application in minutes',
        logo: '/img/dialogware-2lines.png',
        siteTitle: 'DIALOGWARE', // When adding a logo, it gets displayed along with the site title. If your logo is all you need and if you would like to hide the site title text, set false to the siteTitle option.
        nav: [
            //{text: 'Home', link: '/'},
            //{text: 'Start', link: '/app/start'},
            {text: 'Early Access', link: '/app/access'},
            {text: 'Desktop Application', link: '/app/desktop'},
            //{text: 'Examples', link: '/app/sentences'},
            //{text: 'Pricing (2023)', link: '/offer/pricing'},
            {text: 'Status', link: '/about/status'},
            //{text: 'Our Story', link: '/about/story'},
            //{text: 'Team & Partners', link: '/about/team'},
            //{text: 'Contact', link: 'https://www.linkedin.com/in/tom-sapletta-com/'},
            //{text: 'Start', link: '/user/registration'},
            {text: 'Contact', link: '/user/contact'},
            {
                text: 'Documentation',
                items: [
                    {text: 'Video', link: '/about/video'},
                    {text: 'docs.dialogware.com', link: 'https://docs.dialogware.com/'},
                    {text: 'Roadmap on github', link: 'https://github.com/orgs/dialogware/projects/2/views/1'},
                    {text: 'Tasks on github', link: 'https://github.com/orgs/dialogware/projects/1/views/1'}
                ]
            },

        ],
        /*
        sidebar: [
            {
                text: 'Guide',
                items: [
                    { text: 'Introduction', link: '/introduction' },
                    { text: 'Getting Started', link: '/getting-started' },
                ]
            }
        ],
        */
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
            //message: 'Released under the  <a href="https://github.com/dialogware/www/blob/main/LICENSE">Apache License</a>.',
            copyright: '© 2023  <a href="https://softreck.com" >Softreck</a>. All rights reserved.'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/dialogware/www' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/showcase/dialogware/' },
            //{ icon: 'twitter', link: 'https://pioneer.app/leaderboard' },
            //{ icon: 'twitter', link: '' },
            /*
            {
                icon: {
                    svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
                },
                link: ''
            }
             */
        ]
    }
    ,plugins: [SearchPlugin()]
})
