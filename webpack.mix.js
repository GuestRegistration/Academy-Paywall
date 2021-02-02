const mix = require('laravel-mix');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .webpackConfig({
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js',
                '@': path.resolve('resources/js'),
                '@assets': path.resolve('resources/assets'),
            },
        },
        plugins: [
            new WebpackPwaManifest({
                "name": "Acada",
                "short_name": "Acada",
                "theme_color": "#C51E5B",
                "background_color": "#002B36",
                "display": "standalone",
                "Scope": "/",
                "start_url": "/",
                "fingerprints": false,
                "icons": [{
                    src: `${__dirname}/public/images/acada-icon.png`,
                    sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
                }]
            }),
            new GenerateSW({
                
                cleanupOutdatedCaches: true,
                swDest: path.join(`${__dirname}/public`, 'service-worker.js'),
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: new RegExp(`${process.env.APP_URL}`),
                        handler: 'NetworkFirst',
                        options: {
                            cacheName: `${process.env.APP_NAME}-${process.env.APP_ENV}`
                        }
                    },
                    {
                        urlPattern: new RegExp('https://fonts.(googleapis|gstatic).com'),
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'google-fonts'
                        }
                    }
                ],
                excludeChunks: ['runtime'],
            }),
        ],
    }).version();
