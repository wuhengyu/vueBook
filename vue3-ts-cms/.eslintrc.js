// 这是一个ESLint配置模块，通过module.exports导出一个配置对象来定制ESLint的规则、环境、解析器选项等，以适应项目特定的代码风格和要求。
module.exports = {
  // 表明当前配置文件是项目的根配置文件，ESLint 在查找配置时会停止向上查找父目录中的配置。
  root: true,
  // 定义了脚本的运行环境，从而决定哪些全局变量应该被预先定义。
  env: {
    // node: true 表示启用了Node.js环境，ESLint会认可Node.js全局变量（如require, exports等）和Node.js范围内的全局作用域。
    node: true,
    // 'vue/setup-compiler-macros': true 是针对Vue 3中 <script setup> 语法的特殊环境配置，确保ESLint能正确处理这种新语法特性。
    'vue/setup-compiler-macros': true
  },
  // 继承了一组预定义的规则集，这些规则集包含了推荐的最佳实践和约定。
  extends: [
    // 'plugin:vue/vue3-essential' 包含Vue.js 3的核心 linting 规则。
    'plugin:vue/vue3-essential',
    // 'eslint:recommended' 启用了ESLint官方推荐的基本规则集合，覆盖了一些常见的错误和潜在问题。
    'eslint:recommended',
    // @vue/typescript/recommended 提供了Vue项目中使用TypeScript时的推荐规则集。
    '@vue/typescript/recommended',
    // 'plugin:prettier/recommended' 表示原本也计划集成Prettier格式化规则，但目前未启用。
    // Prettier是一个代码格式化工具，与ESLint配合可以统一代码风格。
    // 'plugin:prettier/recommended'
  ],
  // 配置了ESLint的解析器选项，这里设置了ecmaVersion: 2020，意味着ESLint将支持到ECMAScript 2020的语法特性。
  parserOptions: {
    ecmaVersion: 2020
  },
  // 自定义或覆盖了ESLint和插件中的一些具体规则。
  rules: {
    // 当NODE_ENV为production时，使用console.log等会发出警告，否则关闭此规则，允许在开发环境使用console。
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 生产环境下使用debugger语句会警告，开发环境则不禁用。
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 完全关闭了Vue组件名必须为多词（驼峰式或短横线连接）的检查，允许单词组件名。
    'vue/multi-word-component-names': [
      // ignores 属性是一个数组，用于指定不应受该规则限制的组件名称列表。
      // 当数组为空（[]）时，表示没有组件名称会被忽略，但这通常表明用户有意关闭了该规则的特定忽略功能，
      // 因为整个规则已经被设置为'off'，所以这个ignores配置实际上不起作用。
      'off',
      {
        ignores: []
      }
    ],
    // 禁用了对TypeScript中显式使用any类型的警告，这通常是因为项目中存在需要灵活类型的情况而做出的妥协。
    '@typescript-eslint/no-explicit-any': 'off',
  }
}
