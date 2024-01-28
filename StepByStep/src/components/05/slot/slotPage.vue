<template>
  <div>
    <input type="radio" value="slotPage1" v-model="selectedPage" />页面1
    <input type="radio" value="slotPage2" v-model="selectedPage" />页面2
    <!-- Vue中动态组件的写法，:is 属性允许你动态地切换所渲染的组件。 -->
    <component :is="currentPageComponent" />
  </div>
</template>  
  
<script setup>
import { ref, computed } from "vue";
import SlotPage1 from "./slotPage1.vue";
import SlotPage2 from "./slotPage2.vue";

// 创建一个映射，将页面名称映射到组件
// components 是一个对象，它将页面名称映射到实际的组件对象
const components = {
  slotPage1: SlotPage1,
  slotPage2: SlotPage2,
};

// 用于存储当前选中的页面名称的 ref
const selectedPage = ref("slotPage1");

// 计算属性，返回当前选中的组件
// 在界面上切换页面选项时，selectedPage 的值会发生变化，进而触发 currentPageComponent 计算属性的重新计算，并返回新的组件对象
const currentPageComponent = computed(() => {
  // 返回了当前被选中的页面对应的组件对象
  return components[selectedPage.value];
});
</script>

<style lang="scss" scoped>
</style>