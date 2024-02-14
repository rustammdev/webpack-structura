const path = require("path") // nodejs
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    
    // **entry
    // Yo'l, qayerdan malumotlarni olish xaqida
    entry : {
        app : path.resolve(__dirname, "./src/app.js"),
        about : path.resolve(__dirname, "./src/about.js")
    },
    
    // **output
    // Umumiy codlarni qayerga joylashi va nima nom ostida saqlashi
    output : {
        path : path.resolve(__dirname, "public"),
        filename : '[name].js'
    },
    
    // **loaders
    module : {
        rules : [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    
    // **plugin
    plugins : [
        new HtmlWebPackPlugin({
            // **title
            // saxifa title qismi yoziladi
            title : "Webpack 5 ✌️",
            
            // **filename
            // bundle bn birgalikda ochiladigan .html file nomi
            filename : "index.html",
            
            // **template
            // html templateni qayerdandir olish
            template : "./src/temp.html",

            // **chunks
            // html filega qaysi js file ulsh kerakligini bildiradi
            chunks : ['app']
        }),

        new HtmlWebPackPlugin({
            title : 'About html',
            filename : 'about.html',
            template : './src/tempAbout.html',
            chunks : ['about'],
        }),
    ],

    // **mode
    // codni qanday holatda ko'chirishi (bundle.js ga)
    // production - kod siqilgan ixcham holarda (o'qish uchun noqulay)
    // development - o'qish uchun moslangan qo'shimcha commentlar bn birga
    mode : "development", // production 


    // dev server
    // shel [npm i -D webpack-dev-serve]
    devServer : {
        static : {
            directory : path.resolve(__dirname, 'public'),
        },
        port : 3000,
        open : true,
        hot : true,
        compress : true,
        historyApiFallback : true,
    }
}
