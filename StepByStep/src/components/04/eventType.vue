<template>
  <div>
    <el-button @click="click">单击事件</el-button>
    <el-button @dblclick="dblclick">双击事件</el-button>
    <input
      type="text"
      @focus="focus"
      @blur="blur"
      @change="change"
      @select="select"
    />
    <el-button @mousedown.ctrl="mouseDown"
      >鼠标按下(当ctrl被按下被才触发)</el-button
    >
    <el-button @mouseup="mouseup">鼠标抬起</el-button>
    <el-button @mousemove="mousemove">鼠标移动</el-button>
    <el-button @mouseover="mouseover">鼠标移入</el-button>
    <el-button @mouseout="mouseout">鼠标移出</el-button>
    <el-button @mousedown.ctrl="mousedown">Ctrl，鼠标按下</el-button>
    <!-- 当alt键和enter被按下被才触发 -->
    <!-- @keyup.alt.enter="keyup" -->
    <input
      type="text"
      @keydown="keydown"
      @keyup="keyup"
      placeholder="按下抬起按键, 按下回车"
    />
    <div @mousemove.stop="mousemove2" clas="ball-container">
      <div
        class="ball"
        :style="{ left: offsetX + 'px', top: offsetY + 'px' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
function click() {
  console.log("单击事件");
}
function dblclick() {
  console.log("双击事件");
}
function focus() {
  console.log("获取焦点");
}
function blur() {
  console.log("失去焦点");
}
function change() {
  console.log("输入内容变化");
}
function select() {
  console.log("输入内容选中");
}
function mouseDown() {
  console.log("鼠标按下");
}
function mouseup() {
  console.log("鼠标抬起");
}
function mousemove() {
  console.log("鼠标移动");
}
function mouseover() {
  console.log("鼠标移入");
}
function mouseout() {
  console.log("鼠标移出");
}
function mousedown() {
  console.log("鼠标按下");
}
function keydown() {
  console.log("按下按键");
}
function keyup(event) {
  console.log("抬起按键");
  if (event.key === "Enter") {
    console.log("按下回车");
  }
}
// offsetX.value 和 offsetY.value 预设为Vue的响应式引用类型（如ref或computed），它们用于存储鼠标的水平和垂直坐标。
const offsetX = ref([0]);
const offsetY = ref([0]);
function mousemove2(event) {
  // offsetX.value 和 offsetY.value 预设为Vue的响应式引用类型（如ref或computed），它们用于存储鼠标的水平和垂直坐标。
  offsetX.value = event.clientX;
  offsetY.value = event.clientY;
  // console.log(event.clientX, event.clientY);
  // console.log(offsetX.value, offsetY.value);
  // console.log(event);
}
</script>

<style lang="scss" scoped>
.ball {
  width: 60px;
  height: 60px;
  background-color: #f00;
  border-radius: 50%;
  position: absolute;
}
.ball-container {
  width: 440px;
  height: 440px;
  background-color: #000;
  position: relative;
  overflow: hidden;
}
</style>