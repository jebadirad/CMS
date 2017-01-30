module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: "../admin/scripts/",
        filename: "bundle.js"
    },
    module: {
        noParse : /node_modules\/quill\/dist/,
        rules: [
            {
                test : /\.svg$|\.png$|\.jpg$/,
                use:"file-loader"
            },
            /*
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
               query: {
                    presets: [ "react"],
                   	plugins: ["transform-react-jsx", "transform-react-jsx-self","transform-react-jsx-source"]
               }
           }
        ]
    },
    watch: true,
}