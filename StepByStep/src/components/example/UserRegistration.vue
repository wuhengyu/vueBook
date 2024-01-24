<template>
  <div class="container" id="Application">
    <div class="container">
      <div class="subTitle">加入我们，一起创建美好世界</div>
      <h1 class="title">创建你的账户</h1>
      <div
        v-for="(item, index) in fields.fields"
        :key="index"
        class="inputContainer"
      >
        <el-form-item :model="fields" label-width="120px">
          <div class="field">
            {{ item.title }}
            <span v-if="item.required" style="color: red">*</span>
          </div>

          <el-input class="input" :type="item.type" />
          <div class="tip" v-if="index == 2">
            请确保密码至少包含大写字母和数字, 并且长度至少为6位
          </div>
        </el-form-item>
      </div>
      <div class="subContainer">
        <div class="setting">隐私设置</div>
        <input class="checkbox" type="checkbox" /><label class="label"
          >接受更新邮件</label
        >
      </div>
      <el-button class="btn">创建账户</el-button>
    </div>
  </div>
</template>

<!-- <script>
export default {
  data() {
    return {
      fields: [
        {
          title: "用户名",
          required: true,
          type: "text",
        },
        {
          title: "邮箱地址",
          required: true,
          type: "text",
        },
        {
          title: "密码",
          required: true,
          type: "password",
        },
      ],
    };
  },
  setup() {
    return {};
  },
};
</script> -->

<script setup>
import { reactive } from "vue";
const fields = reactive({
  fields: [
    {
      title: "用户名",
      required: true,
      type: "text",
    },
    {
      title: "邮箱地址",
      required: true,
      type: "text",
    },
    {
      title: "密码",
      required: true,
      type: "password",
    },
  ],
});
</script>

<style lang="scss" scoped>
</style>