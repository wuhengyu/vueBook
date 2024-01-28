<template>
  <div>
    <!-- 为每个子组件都绑定了一个自定义事件处理器@myclick。这里的@myclick是Vue中的语法糖，相当于在原生JavaScript中监听v-on:myclick事件 -->
    <!-- appfunc是事件触发时调用的函数名 -->
    <!-- 父组件可以通过 v-on 或者缩写 @ 来监听子组件上触发的自定义事件 -->
    <titleChild @myclick="appfunc" title="标题1"></titleChild>
    <titleChild @myclick="appfunc" title="标题2"></titleChild>
  </div>
</template>

<script setup>
import titleChild from "./titleChild.vue";
// 当子组件触发myclick事件时，这个函数会被执行，并接收从子组件传递过来的参数params。函数体内的操作是将字符串"父组件的appfunc"与接收到的params拼接后输出到浏览器控制台
function appfunc(params) {
  console.log("父组件的appfunc" + params);
}
</script>

<style lang="scss" scoped>
</style>