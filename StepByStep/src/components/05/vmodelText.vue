<template>
  <div>
    <input type="text" v-model="message" />
    <p>{{ message }}</p>
    <el-button @click="message = ''">清空1</el-button>
    <br />

    <!-- 使用v-bind指令来控制输入框的内容，即当属性message2改变后，v-bind指令会将其同步更新到输入框中
    使用v-on:input指令来监听输入框的输入事件，当输入框的输入内容变化时，手动通过action函数来更新message2属性，这样就实现了双向绑定的效果 -->
    <input :value="message2" @input="action" />
    <p>{{ message2 }}</p>
    <el-button @click="message2 = ''">清空2</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
const message = ref("");
const message2 = ref("");

const action = (e) => {
  message2.value = e.target.value;
};
</script>

<style lang="scss" scoped>
</style>