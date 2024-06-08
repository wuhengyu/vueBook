<template>
  <div class="login">
    <!-- 使用LoginPanel组件  -->
    <login-panel />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LoginPanel from "./cpns/login-panel.vue";
export default defineComponent({
  // components 属性注册了组件需要使用的其他子组件，这里使用了名为LoginPanel的子组件
  components: {
    LoginPanel,
  },
  // setup 函数是组件的设置函数，用于定义组件的状态、计算属性、方法等。
  setup() {
    return {};
  },
});
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
