var webpack = require('webpack');
var PATHS ={
    "images" : "./assets/images"
};



module.exports = {
    entry: "./app/IndexComp.jsx",
    output: {
        path: "../admin/scripts/",
        filename: "bundle.js"
    },
    module: {
        noParse : /node_modules\/quill\/dist/,
        rules: [
            {
                test : /.*\.(gif|png|jpe?g|svg)$/i,
                loader:[
                    {
                        loader:"url-loader",
                        options:{
                            limit: 25000,
                            outputPath : PATHS.images,
                            publicPath : PATHS.images
                            
                        }
                    },
                    {
                        loader : "image-webpack-loader",
                        query : {
                            progressive : true,
                            optimizationLevel : 7,
                            interlaced : false,
                            pngquant : {
                                quality : '65-90',
                                speed : 4,

                            }
                        },
                    },
                ],
            },
            /*{
                test: /.*\.(zip)$/i,
                loader: "file-loader?name=" + PATHS.filesPublic + "[name].[ext]"
                /*options : {
                    outputPath : PATHS.images,
                    publicPath : PATHS.imagesPublic,
                } 
            },
            
            consider putting this in later but only when we have more files.  dont want to include too many things.
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: "script-loader"
            }*/
            {
                test : /\.css$/,
                exclude: [/node_modules/, /stylesheets/],
                use : ["style-loader", "css-loader"]},
            {
               test: /\.jsx?$/,
               exclude: /node_modules/,
               loader: 'babel-loader',
               options: {
                    presets: [ 
                        ["env", {
                                "targets" : {
                                    "browsers" : ["last 3 versions", ">1%"]
                                },
                                useBuiltIns : true,
                                }
                        ],
                        ["es2017"],
                        ["es2016"],
                        ["es2015"],
                        ["react"],
                        
                    ],
               }
           }
        ]
    },
    /*plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            //chunk name
            name: "common",
            //filename
            filename: "common.js",
            //if the module is used in 3 entry points we put it in the common.
            minChunks: 2,
        })
    ], */
    watch: true,
}