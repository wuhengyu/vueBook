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
  // 计算属性适用于处理属性之间的关系和复杂的计算逻辑，而data对象适用于存储组件的状态数据。
  data() {
    return {
      parentMessage: "初始消息",
    };
  },
};
</script>