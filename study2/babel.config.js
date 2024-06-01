// 此对象主要用于配置Babel——一个广泛使用的JavaScript转译器，它能够将ES6+的代码转换为向后兼容的JavaScript版本，确保代码能在当前和旧版浏览器及环境中运行。
// 使用这个预设，可以无需手动配置就能支持Vue模板语法、ES6及以上版本的特性，以及其他一些常见的JavaScript语法糖，确保代码跨浏览器兼容。
// 自动处理项目中的JavaScript和Vue单文件组件的语法转换，以实现对现代JavaScript特性的支持和跨环境兼容性。
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ]
}
