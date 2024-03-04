<template>
<div class="container">
  <div class="content">
    <input type="radio" :value="-1" v-model="sexFliter" />全部
    <input type="radio" :value="0" v-model="sexFliter" />男
    <input type="radio" :value="1" v-model="sexFliter" />女
  </div>
  <div class="content">搜索：<input type="text" v-model="searchKey" /></div>
  <div class="content">
    <table border="1" width="300px">
      <tr>
        <th>姓名</th>
        <th>性别</th>
      </tr>
      <tr v-for="(data, index) in showDatas" :key="index">
        <td>{{data.name}}</td>
        <td>{{data.sex == 0 ? '男' : '女'}}</td>
      </tr>
    </table>
  </div>
</div>
</template>

<script>
import { ref, onMounted, watch } from "vue";
// 定义了一个名为mock的数组，其中包含4个对象，每个对象代表一个用户，包含姓名(name)和性别(sex)属性
let mock = [{
  name: "小王",
  sex: 0
}, {
  name: "小红",
  sex: 1
}, {
  name: "小李",
  sex: 1
}, {
  name: "小张",
  sex: 0
}]

export default {
  // setup函数是Vue 3中用于初始化组件状态和副作用的主要入口。
  setup() {
    // 创建一个名为showDatas的响应式引用，初始值为空数组
    // 用于存储从服务器获取或经过筛选后的用户列表数据。
    const showDatas = ref([])
    // 模拟异步请求过程，通过setTimeout延迟1秒后将mock数据赋值给showDatas，实际应用中可能会替换为真实的HTTP请求
    const queryAllData = () => {
      // 模拟请求过程
      setTimeout(() => {
        showDatas.value = mock
      }, 1000);
    }
    // 组件挂载时请求数据
    onMounted(queryAllData)

    // sexFliter表示性别筛选器，默认值为-1，表示不筛选
    let sexFliter = ref(-1)
    // searchKey表示搜索关键字，默认值为空字符串
    let searchKey = ref("")

    let fliterData = () => {
      searchKey.value = ""
      // sexFliter为-1时，显示所有用户
      if (sexFliter.value == -1) {
        showDatas.value = mock
        // 否则仅显示性别与sexFliter相匹配的用户
      } else {
        showDatas.value = mock.filter((data) => {
          return data.sex == sexFliter.value
        })
      }
    }
    let searchData = () => {
      sexFliter.value = -1
      // searchKey为空字符串时，显示所有用户
      if (searchKey.value.length == 0) {
        showDatas.value = mock
        // 否则仅显示名字中包含搜索关键词的用户
      } else {
        showDatas.value = mock.filter((data) => {
          // 如果找到了匹配项返回一个非负整数（匹配内容在字符串中的起始索引位置）。如果没找到匹配项，则返回 -1。
          // 在JavaScript的数组filter()方法中，回调函数返回true的元素会被保留下来形成新的过滤后的数组，而返回false的元素则会被排除。
          return data.name.search(searchKey.value) != -1
        })
      }
    }
    // 添加侦听
    // 使用watch方法分别监听sexFliter和searchKey的变化，并在变化时触发相应的筛选或搜索函数
    watch(sexFliter, fliterData)
    watch(searchKey, searchData)

    // 在setup函数返回的对象中包含了showDatas、searchKey和sexFliter三个变量
    // 可在模板中使用并通过修改它们的值来实时更新用户列表展示
    return {
      showDatas,
      searchKey,
      sexFliter
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  // 外边距为上下左右均为50像素
  margin: 50px;
  // 将容器设置为弹性布局
  display: flex;
  // 指定弹性项目的主轴方向为垂直方向，即子元素会从上到下排列
  flex-direction: column;
  // 在交叉轴（这里是垂直方向）上将所有子元素居中对齐
  align-items: center;
  // 在主轴（这里是垂直方向）上将所有子元素居中对齐
  justify-content: center;

}

.content {
  // 设置内容区域的外边距为上下左右均为10像素
  margin: 10px;
}
</style>
