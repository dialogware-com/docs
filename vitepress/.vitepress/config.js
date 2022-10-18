import { defineConfig } from 'vitepress'

export default defineConfig({
    themeConfig: {
        lang: 'en-US',
        title: 'DIALOGWARE',
        description: 'Text to Software solution to build a web application in minutes',
        logo: '/dialogware-2lines.png',
        siteTitle: false,
        nav: [
            {text: 'Guide', link: '/guide'},
            {text: 'Configs', link: '/configs'},
            {text: 'Changelog', link: 'https://github.com/...'}
        ],
        markdown: {
            theme: 'material-palenight',
            lineNumbers: true
        }
    }
})