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
    setTimeout(this.queryAllData, 3000);
  },
  methods: {
    queryAllData() {
      this.showDatas = mock;
    },
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
    searchData() {
      this.sexFilter = -1;
      if (this.searchKey.length === 0) {
        this.showDatas = mock;
      } else {
        this.showDatas = mock.filter((data) => {
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
