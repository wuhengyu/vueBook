<template>
  <div>
    <p>{{ message }}</p>
    <button @click="logMessage">打印消息</button>
  </div>
</template>

<script>
// 定义mixin也非常简单，它就是一个对象而已，只不过这个对象里面可以包含Vue组件中的一些常见配置，如data、methods、created等等
const myMixin = {
  data() {
    return {
      message: "Hello, mixins!",
    };
  },
  methods: {
    logMessage() {
      console.log(message);
    },
  },
};

// 我们的公共mixin定义好后，最重要就是如何使用它。根据不同的业务场景，我们可以分为两种：局部混入和全局混入。顾名思义，局部混入和组件的按需加载有点类似，就是需要用到mixin中的代码时，我们再在组件章引入它。全局混入的话，则代表我在项目的任何组件中都可以使用mixin。
export default {
  mixins: [myMixin],
};
</script>