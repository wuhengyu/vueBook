<template>
  <div>
    <!-- 直接在父组件双向绑定 -->
    <!-- <el-input v-model="message" /> -->
    <!-- 父子组件之间通过v-model实现双向绑定 -->
    <!-- 通过Vue的v-model指令实现父子组件间的双向绑定，意味着子组件内部的输入值变化会同步到父组件的message变量上，同时父组件的message变量值变化也会传递给子组件并更新其内部状态。 -->
    <vmodelChild v-model="message" />
    <p>{{ message }}</p>
    <el-button @click="message = ''">清空</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
import vmodelChild from "./vmodelChild.vue";
</script>

<style lang="scss" scoped>
</style>