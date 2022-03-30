// import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

// export
module.exports = {
    // 파일을 읽어들이기 시작하는 진입점 설정
    entry: './js/main.js',

    // 결과물(번들)을 반환하는 과정
    output: {
        // path: path.resolve(__dirname, 'dist'), -> dist, main.js는 디폴트 값이다
        // filename: 'main.js',
        clean: true // 이전에 있던 것들은 사라지고 test.js만 번들된다
    },

    module: {
        rules: [
            {
                test: /\.s?css$/ ,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            /*
            {
                test: /\.js$/ ,
                use:{
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            */
        ]
    },

    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new CopyPlugin({
            patterns: [
                { from: 'static' }
            ]
        })
    ],

    devServer : {
        host: 'localhost'
    }
}

