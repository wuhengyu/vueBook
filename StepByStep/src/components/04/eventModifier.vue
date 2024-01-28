<!-- 当我们在页面上触发了一个单击事件时，事件首先会从父组件开始依次传递到子组件，这一过程通常被形象地称为事件捕获，
当事件传递到最上层的子组件时，其还会逆向地再进行一轮传递，从子组件依次向下传递，这一过程被称为事件冒泡。 -->

<template>
  <div>
    <h3>点击次数：{{ count }}</h3>
    <el-button @click="click(2, '参数2')">点击我</el-button>
    <!-- 事件冒泡 -->
    <!-- // 点击内层，执行顺序：内中外 -->
    <!-- <div @click="click1" style="border: solid red">
      外层
      <div @click="click2" style="border: solid blue">
        中层
        <div @click="click3" style="border: solid rgb(28, 230, 119)">内层</div>
      </div>
    </div> -->

    <!-- 事件捕获 -->
    <!-- 点击内层，执行顺序：外中内 -->
    <!-- 捕获事件触发的顺序刚好与冒泡事件相反 -->
    <!-- <div @click.capture="click1" style="border: solid red">
      外层
      <div @click.capture="click2" style="border: solid blue">
        中层
        <div @click.capture="click3" style="border: solid rgb(28, 230, 119)">
          内层
        </div>
      </div>
    </div> -->

    <!-- 阻止事件冒泡 -->
    <!-- 不希望事件进行传递 -->
    <!-- 只有被单击的当前组件绑定的方法会被调用 -->
    <div @click.stop="click1" style="border: solid red">
      外层
      <div @click.stop="click2" style="border: solid blue">
        中层
        <div @click.stop="click3" style="border: solid rgb(28, 230, 119)">
          内层
          <div @click.once="click4" style="border: solid rgb(28, 230, 119)">
            只触发一次
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(0);
function click(step) {
  count.value += step;
}

function click1() {
  console.log("外层");
}
function click2() {
  console.log("中层");
}
function click3() {
  console.log("内层");
}
function click4() {
  console.log("只触发一次");
}
</script>

<style lang="scss" scoped>
</style>