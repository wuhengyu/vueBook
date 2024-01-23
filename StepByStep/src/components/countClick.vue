<script setup>
import { ref } from "vue";

const count = ref(0);
const htmlCount = ref(`<span style='color:green';>${count.value}</span>`);
const countColor = "colorId";
const props = defineProps({
  dynamicAttr: {
    type: String,
    default: "class",
  },
});

function buttonClick() {
  count.value += 1;
}

function buttonClick2() {
  count.value = count.value + 1;
  htmlCount.value = `<span style='color:red';>${count.value}</span>`;
}
</script>

<template>
  <div>
    <button v-on:click="buttonClick">点击我{{ count }}</button>
    <button @click="buttonClick">点击我{{ count }}</button>
    <!-- count++是一个简短的JavaScript自增操作符，它可以直接在模板内执行并更新数据。 -->
    <!-- 内联事件处理器：事件被触发时执行的内联 JavaScript 语句 (与 onclick 类似) -->
    <button @click="count++">点击我 {{ count }}</button>
    <button @click="count += 1">点击我 {{ count }}</button>
    <button @click="buttonClick2">点击我 {{ count }}</button>
    <button @click="buttonClick2">
      点击我
      <span v-html="htmlCount"></span>
    </button>
    <h1 v-bind:id="countColor">id选择器</h1>
    <!-- 动态属性绑定 -->
    <h1 v-bind:[dynamicAttr]="countColor">类选择器</h1>
  </div>
</template>

<style scoped>
#colorId {
  color: rgb(49, 49, 230);
}
.colorId {
  color: rgb(33, 223, 96);
}
</style>

<!-- v-on:click：这是Vue.js中完整且原始的语法，用于监听元素上的click事件。当用户点击该元素时，会触发绑定的方法，例如上述代码中的 buttonClick。 -->
<!-- @click：这是 v-on:click 的简写形式，从2.0版本开始引入，使得模板更简洁易读。它拥有与 v-on:click 完全一样的功能。 -->
<!-- :click或者v-bind:click，动态的绑定一个或多个 attribute，也可以是组件的 prop。 -->