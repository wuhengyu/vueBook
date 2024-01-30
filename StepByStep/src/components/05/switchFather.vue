<template>
  <div>
    <switchChild
      @switch-change="change1"
      switch-style="mini"
      background-color="green"
      border-color="gray"
      color="blue"
    />
    <div>开关状态：{{ state1 }}</div>
    <br />
    <switchChild
      @switch-change="change2"
      switch-style="mini"
      background-color="blue"
      border-color="gray"
      color="red"
    />
    <div>开关状态：{{ state2 }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import switchChild from "./switchChild.vue";

const state1 = ref("关闭");
const state2 = ref("关闭");

function change1() {
  state1.value === "关闭" ? (state1.value = "打开") : (state1.value = "关闭");
  console.log(state1.value);
}
function change2() {
  state2.value === "关闭" ? (state2.value = "打开") : (state2.value = "关闭");
  console.log(state2.value);
}
</script>

<style lang="scss" scoped>
</style>