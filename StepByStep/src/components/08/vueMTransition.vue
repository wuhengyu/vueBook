<template>
<div id="Application">
  <button @click="click">显示/隐藏（A消失B展示）</button>
  <!-- 默认插入和移除同时进行 -->
  <!-- mode="in-out"表示先执行插入再移除，mode="out-in"表示先执行移除再插入-->
  <transition name="ani" mode="in-out">
    <div v-if="show" class="demo">
    </div>
    <div v-else class="demo2">
    </div>
  </transition>
</div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    click() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  width: 100px;
  height: 100px;
  background-color: blue;
}

.demo2 {
  width: 100px;
  height: 100px;
  background-color: blue;
}

.ani-enter-from {
  width: 0px;
  height: 0px;
  background-color: red;
}

.ani-enter-active {
  transition: width 3s, height 3s, background-color 3s;
}

.ani-enter-to {
  width: 100px;
  height: 100px;
  background-color: blue;
}

.ani-leave-from {
  width: 100px;
  height: 100px;
  background-color: blue;
}

.ani-leave-active {
  transition: width 3s, height 3s, background-color 3s;
}

.ani-leave-to {
  width: 0px;
  height: 0px;
  background-color: red;
}
</style>
