

const path = require('path')
const withLess = require('@zeit/next-less')
const withCss = require('@zeit/next-css')
const withSvgr = require("next-svgr");
const withPlugins = require("next-compose-plugins");

// less 配置
const lessOption = {
  paths:[
    path.join(__dirname,'/src')
  ],
  javascriptEnabled: true,
  // modifyVars:modifyVars,
}

// 合并插件配置
module.exports = withPlugins([
    // 解析css
    withCss,
    // 解析less
    [withLess,{
      cssModules: true,
      lessLoaderOptions:lessOption
    }],
    // 支持svg
    withSvgr,
],{
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/articles',
      },
    ]
  }
})

