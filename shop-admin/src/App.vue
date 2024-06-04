<!-- <template>
  <Home msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Home from './components/home/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script> -->

<template>
  <router-view></router-view>
</template>

<style>
body {
  height: 100%;
  width: 100%;
  position: absolute;
  margin: 0;
  padding: 0;
  background-color: #f1f1f1;
}
.content-container {
  background-color: white;
  padding: 30px;
  margin: 30px; 
  /* margin-top:30px; */
  border-radius: 10px;
  /* 设置最小宽度为1200像素，确保内容在窄屏设备上不会过于挤压。 */
  min-width:1200px;
  /* 使元素以行内块元素的方式显示，允许它与其他元素并排显示，同时保留块元素的特性。 */
  /* 元素保持在一行内，但可以设置宽度、高度、内边距和外边距，就像块级元素一样。 */
  /* 如果没有指定宽度，宽度由内容决定，但可以设置固定宽度。 */
  /* 允许设置上下及左右的margin和padding，提供更多的布局控制。 */
  /* 与相邻的inline-block元素在同一行，除非没有足够的空间。 */
  /* inline是行内元素，元素会按照文本流的方式排列，不会换行，只占据其内容的宽度。不能设置宽高：无法直接指定宽度和高度，它们由内容自动确定。
  边距限制：margin和padding仅影响左右，对上下方向无效（除非使用vertical-align）。默认间距：元素间可能有默认的空白间距，受字体和换行符影响。 */
  /* display:inline-block;  */
  width:93%;
}
.input-tip {
  margin: 0 10px;
  line-height: 40px;
}
.input-field {
  margin-right: 40px;
}
.content-row {
  margin-bottom: 20px;
}

</style>