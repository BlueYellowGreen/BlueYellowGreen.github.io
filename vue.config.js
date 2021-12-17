const path = require('path')
const PrerenderSpaPlugin = require('prerender-spa-plugin')

const productionPlugins = [
    new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: [
            "/",
            "/algo"
        ],
        renderer: new PrerenderSpaPlugin.PuppeteerRenderer({
            renderAfterElementExists: '#app'
        }),
    }),
]


const SitemapPlugin = require('sitemap-webpack-plugin').default
const paths = [
    {
        path: '/',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: '1.0',
        changefreq: 'daily'
    },
    {
        path: '/algo',
        lastmod: new Date().toISOString().slice(0, 10),
        priority: '0.8',
        changefreq: 'daily'
    },
]


module.exports = {
    lintOnSave: false,
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.plugins.push(...productionPlugins)
        }

        plugins: [
            new SitemapPlugin('https://leedooho.com', paths, {
                filename: 'sitemap.xml',
                lastmod: true,
                changefreq: 'daily',
                priority: '0.8'
            })
        ]
    }
}