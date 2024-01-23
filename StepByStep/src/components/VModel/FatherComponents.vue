// 父组件
<template>
  <div>
    <el-input v-model="parentMessage" placeholder="请输入内容" />
    <ChildComponents :message="parentMessage"></ChildComponents>
  </div>
</template>

<script>
import ChildComponents from "./ChildComponents.vue";

export default {
  components: {
    ChildComponents,
  },
  data() {
    return {
      parentMessage: "初始消息",
    };
  },
};
</script>