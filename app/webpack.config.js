module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            // 识别ES6语法
            { test: /\.js$/, loader: "babel-loader" }, 
            {
                test: /\.scss$/,
                use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
    },
              {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        loaders: {
                            js: 'babel-loader?{"presets":["es2015"],"plugins": ["transform-object-rest-spread"]}',
                            css: 'vue-style-loader!css-loader'
                        }
                    }
                }],
            }
        ]
    }
}