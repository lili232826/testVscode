'use strict'
const utils = require('./utils')
const webpack = require('webpack')
const config = require('../config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.conf')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const portfinder = require('portfinder')

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const url = require('url')

var buildData = require('../src/data/buildApi.json')
var loginData = require('../src/data/loginApi.json')
var shopData = require('../src/data/shopApi.json')
var apiRoutes = express.Router()

//app.use(bodyParser.json()) //在其他路由中间件前（尽可能靠前，以能够通过bodyPaser获取req.body）
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use('/api', apiRoutes)

//图片上传
const formidable = require('formidable')
app.use(express.static(__dirname + "./../page"));

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

const devWebpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
    },
    // cheap-module-eval-source-map is faster for development
    devtool: config.dev.devtool,

    // these devServer options should be customized in /config/index.js
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: {
            rewrites: [
                { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
            ],
        },
        hot: true,
        contentBase: false, // since we use CopyWebpackPlugin.
        compress: true,
        host: HOST || config.dev.host,
        port: PORT || config.dev.port,
        open: config.dev.autoOpenBrowser,
        overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
        publicPath: config.dev.assetsPublicPath,
        proxy: config.dev.proxyTable,
        quiet: true, // necessary for FriendlyErrorsPlugin
        watchOptions: {
            poll: config.dev.poll,
        },
        before(app) {
            app.get("/api/build", function(req, res) {
                res.json({
                    errno: 0,
                    data: buildData
                })
            });
            app.post("/api/login", jsonParser, function(req, res) {
                if (!req.body) return res.sendStatus(400)
                var username = req.body.username;
                var password = req.body.password;
                for (var i = 0; i < loginData.users.length; i++) {
                    var name = loginData.users[i].username;
                    var pass = loginData.users[i].password;
                    if (username == name) {
                        if (password == pass) {
                            res.send(name);
                            break;
                        } else {
                            res.send({
                                "state": 1,
                                "error": "密码不正确"
                            });
                            break;
                        }
                    } else {
                        continue
                    }
                    console.log("888888888888888888888")
                    res.send({
                        "state": 1,
                        "error": "用户名不存在"
                    });
                }
                //var name=req.body.name;
                //var pass=req.body.pass;
                // res.json({
                //     errno: 0,
                //     data: loginData
                // })
            });
            app.get("/api/shop", function(req, res) {
                //var parseObj = url.parse(req.url, true);
                //req.query = parseObj.query;
                console.log(req.query.userId, 'query')
                res.json({
                    errno: 0,
                    data: shopData
                })
            });
            app.post("/api/headerPic", jsonParser, function(req, res) {
                console.log(req, res)
                    // var form = new formidable.IncomingForm();
                    // form.encoding = 'utf-8';
                    // form.uploadDir = path.join(__dirname + "/../page/upload");
                    // form.keepExtensions = true; //保留后缀
                    // form.maxFieldsSize = 2 * 1024 * 1024;
                    // //处理图片
                    // form.parse(req, function(err, fields, files) {
                    //     console.log(files.the_file);
                    //     var filename = files.the_file.name
                    //     var nameArray = filename.split('.');
                    //     var type = nameArray[nameArray.length - 1];
                    //     var name = '';
                    //     for (var i = 0; i < nameArray.length - 1; i++) {
                    //         name = name + nameArray[i];
                    //     }
                    //     var date = new Date();
                    //     var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
                    //     var avatarName = name + time + '.' + type;
                    //     var newPath = form.uploadDir + "/" + avatarName;
                    //     fs.renameSync(files.the_file.path, newPath); //重命名
                    //     res.send({ data: "/upload/" + avatarName })
                    // })
            })

        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/dev.env')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        // copy custom static assets
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../static'),
            to: config.dev.assetsSubDirectory,
            ignore: ['.*']
        }])
    ]
})

module.exports = new Promise((resolve, reject) => {
    portfinder.basePort = process.env.PORT || config.dev.port
    portfinder.getPort((err, port) => {
        if (err) {
            reject(err)
        } else {
            // publish the new Port, necessary for e2e tests
            process.env.PORT = port
                // add port to devServer config
            devWebpackConfig.devServer.port = port

            // Add FriendlyErrorsPlugin
            devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
                },
                onErrors: config.dev.notifyOnErrors ?
                    utils.createNotifierCallback() : undefined
            }))

            resolve(devWebpackConfig)
        }
    })
})