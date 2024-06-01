const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  // 是否对依赖进行转译。设置为true表示所有依赖都会被转译，这对于支持较旧浏览器的项目很有用
  transpileDependencies: true,
  // 是否在保存文件时运行ESLint校验
  lintOnSave:false,  //关闭eslint校验
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
})