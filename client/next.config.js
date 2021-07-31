

const path = require('path')
const withAntdLess = require('next-plugin-antd-less');
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
    // 解析less
    [withAntdLess,{
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

