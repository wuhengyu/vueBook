const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        // 表示启用Options API
        __VUE_OPTIONS_API__: 'true',
        // 表示在生产环境中禁用DevTools
        __VUE_PROD_DEVTOOLS__: 'false',
        // 表示在生产环境中禁用 hydration mismatch 的详细警告
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
})
