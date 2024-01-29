<template>
  <div>
    <switchChild
      @switch-change="change1"
      switch-style="mini"
      background-color="green"
      border-color="green"
      color="blue"
    />
    <div>开关状态：{{ state1 }}</div>
    <br />
    <switchChild
      @switch-change="change2"
      switch-style="normal"
      background-color="blue"
      border-color="blue"
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
  console.log("change1");
}
function change2() {
  console.log("change2");
}
</script>

<style lang="scss" scoped>
</style>