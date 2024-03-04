<template>
<div id="Application">
  <div class="container">
    <div class="content">
      <input type="radio" :value="-1" v-model="sexFilter" />全部
      <input type="radio" :value="0" v-model="sexFilter" />男
      <input type="radio" :value="1" v-model="sexFilter" />女
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
</div>
</template>

<script>
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
  data() {
    return {
      sexFilter: -1,
      showDatas: [],
      searchKey: "",
    };
  },
  mounted() {
    // 模拟请求过程
    setTimeout(this.queryAllData, 1000);
  },
  methods: {
    queryAllData() {
      this.showDatas = mock;
    },
    // 筛选性别
    filterData() {
      this.searchKey = "";
      if (this.sexFilter === -1) {
        this.showDatas = mock;
      } else {
        this.showDatas = mock.filter((data) => {
          return data.sex === this.sexFilter;
        });
      }
    },

    // 当用户在界面输入搜索关键词并触发了searchKey的更新时，这个代码片段就会被执行。它会遍历mock数组，并筛选出所有姓名中包含搜索关键词的对象，将这些对象组成的新的数组赋值给组件状态变量this.showDatas，从而在视图层展示过滤后的结果。
    searchData() {
      this.sexFilter = -1;
      if (this.searchKey.length === 0) {
        this.showDatas = mock;
      } else {
        // 该方法利用JavaScript数组的内置方法filter()对mock数组中的每个元素执行一个测试（函数），并返回通过测试的所有元素组成的新数组。
        this.showDatas = mock.filter((data) => {
          // (data) => { return data.name.includes(this.searchKey); } 是传递给filter()方法的回调函数。对于数组mock中的每一个对象data
          // 检查当前对象data的name属性值是否包含组件状态变量this.searchKey的值。includes()是字符串方法，用于判断一个字符串是否包含另一个指定的子字符串
          // data 是一个参数，代表的是数组 mock 中当前正在被遍历到的元素。在JavaScript数组的 filter() 方法内部，这个回调函数 (data) => {...} 会为数组中的每一个对象执行一次。
          // data 是一个对象，具有 name 和 sex 属性
          return data.name.includes(this.searchKey);
        });
      }
    },
  },
  watch: {
    sexFilter(newValue) {
      this.filterData();
    },
    searchKey(newValue) {
      this.searchData();
    },
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
