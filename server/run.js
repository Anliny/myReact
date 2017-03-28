const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
    entry: './app/main.js',
    output: {
        path: path.resolve('__dirname', '../build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(js|jsx)$/,
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({ template: './app/template/index.html' }),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } }) //webpack 配置添加 webpack.DefinePlugin 插件，更改NODE_ENV 不加会报错
    ]
};


let compiler = webpack(config)
compiler.run(function(err, stats) {
    if (err) {
        console.log(err);
    }
    console.log(stats.toString({
        chunks: true, // Makes the build much quieter  // 安静编译。不输出控制台
        colors: true // Shows colors in the console // 编译时控制台显示对比不同的内容添加颜色
    }));
});

// 在一个文件中创建一个命名实例... 
let bs = require("browser-sync").create('Server');

// 初始化Browsersync服务器
bs.init({
    server: {
        baseDir: "./build",
        index: "index.html"
    }

});

compiler.watch({ // 监听文件修改
    ignored: /node_modules/,
    aggregateTimeout: 300,
    poll: 1000
}, function(err, stats) {
    if (err) {
        console.log(err);
    } else {
        bs.reload(); //编译过后重载浏览器
    }
});