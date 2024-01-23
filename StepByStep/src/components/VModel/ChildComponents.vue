<template>
  <div>
    <el-text class="mx-1" type="primary"> {{ message }} </el-text>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>