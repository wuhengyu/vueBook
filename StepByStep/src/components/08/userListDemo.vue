<template>
<div class="container">
  <div class="content">
    <input type="radio" :value="-1" v-model="sexFliter" />全部
    <input type="radio" :value="0" v-model="sexFliter" />男
    <input type="radio" :value="1" v-model="sexFliter" />女
  </div>
  <div class="content">搜索：<input type="text" v-model="searchKey" /></div>
  <div class="content">
    <div class="tab" width="300px">
      <div>
        <div class="item">姓名</div>
        <div class="item">性别</div>
      </div>
      <transition-group name="list">
        <!-- <div v-for="(data, index) in showDatas" :key="data.name"> -->
        <div v-for="(data, index) in showDatas" :key="index">
          <div class="item">{{data.name}}</div>
          <div class="item">{{data.sex == 0 ? '男' : '女'}}</div>
        </div>
      </transition-group>
    </div>
  </div>
</div>
</template>

<script>
import {
  ref,
  onMounted,
  watch
} from 'vue'
export default {
  setup() {
    // 用户列表
    const showDatas = ref([])
    const queryAllData = () => {
      // 模拟请求过程
      setTimeout(() => {
        showDatas.value = mock
      }, 3000);
    }
    // 组件挂载是请求数据
    onMounted(queryAllData)

    let sexFliter = ref(-1)
    let searchKey = ref("")
    let fliterData = () => {
      searchKey.value = ""
      if (sexFliter.value == -1) {
        showDatas.value = mock
      } else {
        showDatas.value = mock.filter((data) => {
          return data.sex == sexFliter.value
        })
      }
    }
    let searchData = () => {
      sexFliter.value = -1
      if (searchKey.value.length == 0) {
        showDatas.value = mock
      } else {
        showDatas.value = mock.filter((data) => {
          return data.name.search(searchKey.value) != -1
        })
      }
    }
    // 添加侦听
    watch(sexFliter, fliterData)
    watch(searchKey, searchData)

    return {
      showDatas,
      searchKey,
      sexFliter
    }
  },
}

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
</script>

<style lang="scss" scoped>
.container {
  margin: 50px;
}

.content {
  margin: 20px;
}

.tab {
  width: 300px;
  position: absolute;
  margin-left: 450px;
}

.item {
  border: gray 1px solid;
  width: 148px;
  text-align: center;
  transition: all 0.8s ease;
  display: inline-block;
}

.list-enter-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.list-move {
  transition: transform 1s ease;
}

.list-leave-active {
  position: absolute;
  transition: all 1s ease;
}
</style>
