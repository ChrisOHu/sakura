// https://github.com/shelljs/shelljs
require('shelljs/global')
env.NODE_ENV = 'production'

var path = require('path')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.config.prod')

var spinner = ora('building for production...')
spinner.start()

var assetsPath = path.join(__dirname, "./dist")
rm('-rf', assetsPath)
mkdir('-p', assetsPath)

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n')
})

