<template>
  <div>
    <input type="checkbox" value="足球" v-model="inputValueList" />足球
    <input type="checkbox" value="篮球" v-model="inputValueList" />篮球
    <input type="checkbox" value="乒乓球" v-model="inputValueList" />乒乓球
    <input type="radio" value="男" v-model="radioValueList" />男
    <input type="radio" value="女" v-model="radioValueList" />女
    <p>{{ inputValueList }}</p>
    <p>{{ radioValueList }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValueList = ref([]);
const radioValueList = ref([]);
</script>

<style lang="scss" scoped>
</style>