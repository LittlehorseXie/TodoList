const path = require('path'),
      webpack = require('webpack'),
      webpackDevServer = require('webpack-dev-server')

const config = require('./webpack-config.js'),
      options = {
        contentBase: path.join(__dirname, '..', 'app/pages'),
        hot: true,
        host: 'localhost'
      }


webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options)

server.listen(9000, 'localhost', () => {
    console.log('Starting server on http://localhost:9000')
})



// const PORT = 8001

// const chalk = require('chalk')
// const path = require('path')
// const webpack = require('webpack')
// const webpackConfig = require('./webpack-config.js')
// const compile = webpack(webpackConfig)
// const Koa = require('koa')
// const app = new Koa()
// const { devMiddleware, hotMiddleware } = require('koa-webpack-middleware')

// app.use(devMiddleware(compile, {
//   // display no info to console (only warnings and errors)
//   noInfo: false,

//   // display nothing to the console
//   quiet: false,

//   // switch into lazy mode
//   // that means no watching, but recompilation on every request
//   lazy: true,

//   // watch options (only lazy: false)
//   watchOptions: {
//       aggregateTimeout: 300,
//       poll: true
//   },

//   // public path to bind the middleware to
//   // use the same as in webpack
//   publicPath: path.join(__dirname, '..', 'app/assets'),

//   // custom headers
//   headers: { "X-Custom-Header": "yes" },

//   // options for formating the statistics
//   stats: {
//       colors: true
//   }
// }))

// app.use(hotMiddleware(compile, {}))

// console.log('listen at ', chalk.yellow('127.0.0.1:' + PORT))
// app.listen(3000)