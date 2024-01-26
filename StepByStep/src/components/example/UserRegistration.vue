<template>
  <div class="container" id="Application">
    <div class="container">
      <div class="subTitle">加入我们，一起创建美好世界</div>
      <h1 class="title">创建你的账户</h1>
      <div v-for="(item, index) in fields" :key="index" class="inputContainer">
        <el-form-item :model="fields" label-width="120px">
          <div class="field">
            {{ item.title }}
            <span v-if="item.required" style="color: red">*</span>
          </div>

          <el-input v-model="item.model" class="input" :type="item.type" />
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
    <!-- 双向绑定 -->
    <!-- <h1>{{ name }}</h1>
    <h1>{{ fields[0].model }}</h1>
    -->
    <h1>{{ name }}</h1>
    <h1>{{ fields[0].model }}</h1>
    <h1>{{ email }}</h1>
    <h1>{{ password }}</h1>
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
          model: "",
        },
        {
          title: "邮箱地址",
          required: true,
          type: "text",
          model: "",
        },
        {
          title: "密码",
          required: true,
          type: "password",
          model: "",
        },
      ],
    };
  },
  computed: {
    name() {
      return this.fields[0].model;
    },
    email() {
      return this.fields[1].model;
    },
    password() {
      return this.fields[2].model;
    },
    set(value) {
      return (
        (this.fields[0].model = value),
        (this.fields[1].model = value),
        (this.fields[2].model = value)
      );
    },
  },
  // methods: {
  //    // 如果你想要为每个字段保存不同的值，可以使用一个函数来更新model
  //    updateModel(index, value) {
  //     this.fields[index].model = value;
  // },
  // setup() {
  //   return {};
  // },
};
</script> -->

<!-- <script setup>
import { reactive } from "vue";
const fields = reactive({
  fields: [
    {
      title: "用户名",
      required: true,
      type: "text",
      model: "",
    },
    {
      title: "邮箱地址",
      required: true,
      type: "text",
      model: "",
    },
    {
      title: "密码",
      required: true,
      type: "password",
      model: "",
    },
  ],
  const fieldsModel = computed({
    get() {
      return this.fields.map((item) => item.model);
    },
    set(value) {
      this.fields.forEach((item, index) => {
        item.model = value[index];
      });
    },
  })
});
</script> -->

<script setup>
import { reactive, computed } from "vue";
const fields = reactive([
  { title: "用户名", required: true, type: "text", model: "" },
  { title: "邮箱地址", required: false, type: "text", model: "" },
  { title: "密码", required: true, type: "password", model: "" },
]);

// computed属性是用来声明依赖于其他属性的计算属性，它会根据这些属性的变化自动进行重新计算。
const name = computed({
  // getter 函数，用于获取计算属性的值
  // 这里表示当外部访问 `name` 时，返回 `fields` 数组的第一个元素的 `model` 属性值
  get() {
    return fields[0].model;
  },

  // setter 函数，用于设置计算属性的值并触发相关依赖的更新
  // 这里表示当给 `name` 赋予新值时，会将新值赋给 `fields` 数组的第一个元素的 `model` 属性
  set(value) {
    fields[0].model = value;
  },
});

const email = computed({
  get() {
    return fields[1].model;
  },
  set(value) {
    fields[1].model = value;
  },
});

const password = computed({
  get() {
    return fields[2].model;
  },
  set(value) {
    fields[2].model = value;
  },
});
</script>

<style lang="scss" scoped>
</style>