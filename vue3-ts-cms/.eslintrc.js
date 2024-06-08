module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    // 关闭组件名字多个单词组成错误提示
    // "vue/multi-word-component-names": "off",
    "vue/multi-word-component-names": [
      "off",
      {
        // 用于指定需要忽略检查的组件名称列表，如果有特定组件名不需要遵循这条规则，你可以将它们作为字符串添加到这个数组中。
        ignores: [],
      },
    ],
  },
};
