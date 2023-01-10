const path = require('path')
function resolve (dir) {
   return path.join(__dirname, '.', dir)
}

// 修改webpack默认配置，目的：按需引入antdesign
// customize-cra包含很多api
const {
  override,
  fixBabelImports,
  adjustStyleLoaders
} = require('customize-cra');

const rewiredMap = () => config => {
  // config为所有的webpack配置
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false // 生产环境关闭sourcemap
  //配置别名
  config.resolve.alias = {
    '@': resolve('src')
  }
  return config
}

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css',
  }),
  adjustStyleLoaders(rule => {
    if (rule.test.toString().includes("scss")) {
      rule.use.push({
        loader: require.resolve("sass-resources-loader"),
        options: {
          resources: "", //这里是你自己放公共scss变量的路径
        }
      });
    }
  }),
  rewiredMap()
);