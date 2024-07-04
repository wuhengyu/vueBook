<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <!-- stretch 标签的宽度自撑开 -->
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span>
            <el-icon><UserFilled /></el-icon> 账号登录
          </span>
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon> 手机登录
          </span>
        </template>
        <login-phone ref="phoneRef" />
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>

    <el-button type="primary" class="login-btn" @click="handleLoginClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts" setup>
// ref用于创建可响应式的变量，onMounted是一个生命周期钩子，在组件被挂载到DOM后执行。
import { ref, onMounted } from "vue";
// 导入一个本地缓存工具模块，用于读取和存储数据。
import localCache from "@/utils/cache";
// 分别导入账号登录和手机登录的子组件。
import LoginAccount from "./login-account.vue";
import LoginPhone from "./login-phone.vue";

// 创建一个布尔型的响应式变量，表示用户是否选择记住密码，默认值为true。
const isKeepPassword = ref(true);
// 创建一个用于保存LoginAccount组件实例的引用，类型为LoginAccount组件实例的类型。
// TypeScript的类型注解
// InstanceType: 这是TypeScript中的一个实用类型，它允许你从一个构造函数类型（类类型）中获取该构造函数实例的类型。
// 换句话说，如果typeof LoginAccount代表LoginAccount类本身，那么InstanceType<typeof LoginAccount>就代表LoginAccount类的实例类型。
  // typeof是一个TypeScript操作符，用于获取一个变量或属性的类型。
  // 创建一个响应式引用accountRef，存储一个LoginAccount组件的实例。
const accountRef = ref<InstanceType<typeof LoginAccount>>();
// 定义一个字符串类型的响应式变量
const currentTab = ref("account");

onMounted(() => {
  // 回显用户名和密码（默认回显：root  123456）
  // 尝试从localCache中获取之前保存的用户名(name)和密码(password)。
  // || 用作一种简写方式来实现默认值赋值
  const name = localCache.getCache("name") || "root";
  const password = localCache.getCache("password") || "123456";
  // 如果accountRef已存在（即LoginAccount组件已加载），则调用其setFormFields方法，将用户名和密码填入表单中。
  accountRef.value?.setFormFields(name, password);
});
const handleLoginClick = () => {
  // 账号登录方式
  if (currentTab.value === "account") {
    // ?.是可选链操作符，当你尝试访问某个对象的深层属性或方法，但不确定这个对象是否存在（可能是null或undefined），
    // 传统的链式调用会抛出错误。而使用可选链操作符，如果对象存在，它就会继续访问后面的属性或方法；如果对象是null或undefined，
    // 则整个表达式会安全地返回undefined，而不是抛出错误。
    accountRef.value?.loginAction(isKeepPassword.value);
    alert("账号登录");
  } else {
    // 手机登录方法 todo
    alert("手机登录");
  }
};
</script>

<style scoped lang="less">
.login-panel {
  width: 400px;
  // 下边距为350像素
  margin-bottom: 600px;
  margin-top: 150px;

  .title {
    text-align: center;
  }

  .account-control {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }

  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
