module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: "../admin/scripts/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test : /\.svg$|\.png$|\.jpg$/,
                use:"file-loader"
            },
            {
                test : /\.css$/,
                exclude: /node_modules/,
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