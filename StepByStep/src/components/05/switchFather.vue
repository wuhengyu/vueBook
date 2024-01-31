<template>
  <div>
    <br />
    <switchChild
      @switch-change="change1"
      switch-style="mini"
      border-color="gray"
      color="blue"
    />
    <h3>开关状态：{{ state1 }}</h3>
    <switchChild
      @switch-change="change2"
      switch-style="nomini"
      border-color="gray"
      color="red"
    />
    <h3>开关状态：{{ state2 }}</h3>
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