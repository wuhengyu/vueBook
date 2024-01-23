<template>
  <div>
    <el-input type="text" v-model.trim="content" />
    <p>{{ content }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const content = ref("去掉前后空格");
</script>

<style lang="scss" scoped>
</style>