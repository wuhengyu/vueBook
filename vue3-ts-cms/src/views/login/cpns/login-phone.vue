<template>
  <div class="login-phone">
    <!-- :rules="rules" -->
    <el-form label-width="60px" :model="phone" :rules="rules" ref="formRef">
      <el-form-item label="手机号" prop="phoneNumber" label-width="auto" style="max-width: 300px">
        <el-input v-model="phone.phoneNumber" />
      </el-form-item>
      <el-form-item label="验证码" prop="phoneCode" label-width="auto" style="max-width: 300px">
        <el-input v-model="phone.phoneCode" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import type { ElForm } from "element-plus";
import { rules } from "../config/account-config";

const store = useStore();
// 1.定义响应式数据
const phone = reactive({
  phoneNumber: "",
  phoneCode: "",
});
// 2.获取form组件对象，其中 InstanceType<typeof ElForm> 是声明form实例类型
const formRef = ref<InstanceType<typeof ElForm>>();
// 3.提交表单和标签验证
const loginAction2 = (isKeepPassword: boolean) => {
  formRef.value?.validate((valid) => {
    if (valid) {
      // 1.判断是否需要记住密码
      if (isKeepPassword) {
        // 本地缓存用户名和密码
        localCache.setCache("phoneNumber", phone.phoneNumber);
        localCache.setCache("phoneCode", phone.phoneCode);
      } else {
        // 清除本地缓存的用户名和密码
        localCache.deleteCache("phoneNumber");
        localCache.deleteCache("phoneCode");
      }

      // 2.开始进行登录验证
      store.dispatch("login/accountLoginAction", { ...phone });
    }
  });
};
// 给表单项设置值
const setFormFields2 = (phoneNumber: string, phoneCode: string) => {
  phone.phoneNumber = phoneNumber || phone.phoneNumber;
  phone.phoneCode = phoneCode || phone.phoneCode;
};
// 4.该组件暴露出去的属性（loginAction ）
defineExpose({ loginAction2, setFormFields2 });
</script>
<style scoped lang="less">
.login-phone {
  // 一维布局模型，可以更灵活地调整项目的位置和大小
  display: flex;
  // 所有子项将在主轴上居中对齐
  justify-content: center;
}
</style>
