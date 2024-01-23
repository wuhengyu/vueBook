<template>
  <div>
    <input type="checkbox" value="足球" v-model="inputValueList" />足球
    <input type="checkbox" value="篮球" v-model="inputValueList" />篮球
    <input type="checkbox" value="乒乓球" v-model="inputValueList" />乒乓球
    <input type="radio" value="男" v-model.lazy="radioValueList" />男
    <input type="radio" value="女" v-model.lazy="radioValueList" />女
    <input
      type="text"
      v-model.lazy="inputValueList"
      placeholder="双向绑定懒加载"
    />
    <input
      type="text"
      v-model="inputValueList2"
      placeholder="非双向绑定懒加载"
    />
    <select v-model="select" multiple>
      <option value="篮球">篮球</option>
      <option value="足球">足球</option>
    </select>
    <p>{{ inputValueList }}</p>
    <p>{{ radioValueList }}</p>
    <p>{{ inputValueList2 }}</p>
    <p>{{ select }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";
const inputValueList = ref([]);
const inputValueList2 = ref([]);
const radioValueList = ref([]);
const select = ref([]);
</script>

<style lang="scss" scoped>
</style>
