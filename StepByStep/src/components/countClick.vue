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
const colorStyle = { blue: false, red: true };
const colorList1 = "colorList1";
const colorList2 = "colorList2";
const colorList3 = "colorList3";
const textColor = "yellow";
const textFont = "40px";

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
    <!-- class属性可绑定的值并不会冲突，如果设置的对象中有多个属性的值都是true，则都会被添加到class属性中 -->
    <h1 :class="{ blue: true, red: false }">绑定对象1</h1>
    <h1 :class="colorStyle">绑定对象2</h1>
    <h1 :class="[colorList1, colorList2]">绑定对象3</h1>
    <h1 :class="[colorList3]">绑定对象4</h1>
    <!-- 内联设置的CSS与外部定义的CSS有一点区别，外部定义的CSS属性在命名时，多采用“-”符号进行连接（如font-size），而内联的CSS中属性的命名采用的是驼峰命名法（如fontSize） -->
    <h1 :style="{ color: textColor, fontSize: textFont }">內联样式</h1>
  </div>
</template>

<style scoped>
#colorId {
  color: rgb(49, 49, 230);
}
.colorId {
  color: rgb(33, 223, 96);
}
.blue {
  color: blue;
}
.red {
  color: red;
}
.colorList1 {
  color: rgb(235, 61, 221);
}
.colorList2 {
  color: rgb(181, 223, 32);
}
.colorList3 {
  color: rgb(255, 165, 0);
}
</style>

<!-- v-on:click：这是Vue.js中完整且原始的语法，用于监听元素上的click事件。当用户点击该元素时，会触发绑定的方法，例如上述代码中的 buttonClick。 -->
<!-- @click：这是 v-on:click 的简写形式，从2.0版本开始引入，使得模板更简洁易读。它拥有与 v-on:click 完全一样的功能。 -->
<!-- :click或者v-bind:click，动态的绑定一个或多个 attribute，也可以是组件的 prop。 -->