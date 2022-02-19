const path = require("path");
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: "Lotto-setting",
    mode: "development", // 실서비스: production
    devtool: "eval", // 빠르게
    resolve: {
        extensions: [".js", ".jsx"],
    },

    entry: {
        app: ["./client"],
    }, // 입력

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: "babel-loader",
                options: {
                    presets: [
                        ['@babel/preset-env', {
                            targets: {
                                browsers: ['> 1% in KR'], // browerslist
                            },
                            debug: true,
                        }],
                        '@babel/preset-react',
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties",
                        'react-refresh/babel',
                    ],
                },
            },
        ],
    },
    plugins: [
        new RefreshWebpackPlugin()
    ],

    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.js",
        publicPath: '/dist',
    },

    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true,
    },
};
