const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭eslint校验
  // 指定了编译输出的目录为build, 默认是dist。
  // outputDir:'build',
  // 打包生成的静态资源存放的目录
  assetsDir:'static',
  // 指定引用资源的前缀
  // publicPath:'./',
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/vue-admin/' 
  : '/',
  // 配置Webpack的回调函数，用于修改Vue CLI生成的Webpack配置。
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
});
