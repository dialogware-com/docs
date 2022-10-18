import {defineConfig} from 'vitepress'

export default defineConfig({
    themeConfig: {
        lang: 'en-US',
        title: 'DIALOGWARE',
        description: 'Text to Software solution to build a web application in minutes',
        logo: '/dialogware-2lines.png',
        siteTitle: false,
        nav: [
            {text: 'Roadmap', link: 'https://github.com/orgs/dialogware/projects/2/views/1'},
            {text: 'Tasks', link: 'https://github.com/orgs/dialogware/projects/1/views/1'},
            {text: 'Contact', link: 'https://www.linkedin.com/in/tom-sapletta-com/'}
        ],
        markdown: {
            theme: 'material-palenight',
            lineNumbers: true
        }
    }
})