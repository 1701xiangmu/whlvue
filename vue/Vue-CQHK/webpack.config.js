"use strict"
var path = require("path");

module.exports={
    entry:[path.resolve(__dirname,"./src/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    module:{
        rules:[
            {test:/\.css$/,loader:"style-loader!css-loader",exclude:/node_modules/},
            {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/},
            {test:/\.(eot|svg|ttf|woff)$/,loader:"url-loader"},
            {test:/\.(gif|jpg|png|jpeg)$/,loader:"url-loader"},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-2"]},exclude:/node_modules/}
        ]
    }
}