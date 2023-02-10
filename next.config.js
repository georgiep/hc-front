const path = require('path');

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//     enabled: true,
// })


module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        return config;
    }
};


// module.exports = {
//     experimental: {
//         forceSwcTransforms: true,
//     },
// }
//
// module.exports = {
//     experimental: {
//         swcTraceProfiling: true,
//     },
// }
//
// module.exports = withBundleAnalyzer({})

// module.exports = {
//     experimental: { disableOptimizedLoading: true },
// }

// module.exports = {
//     webpack(config, options) {
//         if (!options.isServer) {
//             console.log('split')
//             config.optimization.splitChunks.cacheGroups.vendor = {
//                 test: /[\\/]node_modules[\\/]/,
//                 name(module) {
//                     // get the name. E.g. node_modules/packageName/not/this/part.js
//                     // or node_modules/packageName
//                     const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
//                     console.log(packageName)
//                     // npm package names are URL-safe, but some servers don't like @ symbols
//                     return `npm.${packageName.replace('@', '')}`;
//                 },
//             }
//         }
//         return config;
//     },
// };

// module.exports = {
//     webpack: (config) => {
//         config.module.rules.push({
//             test: require.resolve("next/dist/shared/lib/router/router.js"),
//             loader: "exports-loader",
//             options: {
//                 exports: "fetchNextData",
//             },
//         })
//
//         return config
//     },
// }

// module.exports = {
//     future: {
//         webpack5: true,
//     }
// }


