<template>
  <div>1111</div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
} from "vue";

// onBeforeCreate(() => {
//   console.log("组件即将创建");
// });

// onCreated(() => {
//   console.log("组件创建完成");
// });

onBeforeMount(() => {
  console.log("组件即将挂载");
});

onMounted(() => {
  console.log("组件挂载完成");
});

onBeforeUpdate(() => {
  console.log("组件即将更新");
});

onUpdated(() => {
  console.log("组件更新完成");
});

onActivated(() => {
  console.log("被缓存的组件激活时调用");
});

onDeactivated(() => {
  console.log("被缓存的组件停用时调用");
});

onBeforeUnmount(() => {
  console.log("组件即将被卸载时使用");
});

onUnmounted(() => {
  console.log("组件卸载后使用");
});

onErrorCaptured((err, vm, info) => {
  console.log("捕获到来自子组件的异常时调用", err, vm, info);
});

onRenderTracked((event) => {
  console.log("虚拟DOM重新渲染时调用", event);
});

onRenderTriggered((event) => {
  console.log("虚拟DOM被触发渲染时调用", event);
});
</script>

<style lang="scss" scoped>
</style>