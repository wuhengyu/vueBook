<template>
  <div>
    <h3>点击次数：{{ count }}</h3>
    <el-button @click="click(2, '参数2')">点击我</el-button>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
const count = ref(0);
function click(step, param) {
  // 自定义步长
  count.value += step;
  console.log("事件第二个自定义参数：" + param);
  // count.value++;
  // count.value += 1;
  // count.value++;
  // count.value = count.value + 1;
}
function countChange(newvalue, oldValue) {
  console.log("新值：" + newvalue, "旧值：" + oldValue);
}

watch(count, countChange);
</script>

<style lang="scss" scoped>
</style>