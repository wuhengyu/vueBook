<template>
<div id="Application">
  <button @click="add">添加元素</button>
  <button @click="dele">删除元素</button>
  <button @click="sort">反转元素</button>
  <transition-group name="list">
    <div v-for="item in items" :key="item">
      元素：{{ item }}
    </div>
  </transition-group>
</div>
</template>

<script>
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    add() {
      this.items.push(this.items[this.items.length - 1] + 1)
    },
    dele() {
      if (this.items.length > 0) {
        this.items.pop()
      }
    },
    sort() {
      this.items.reverse()
    }
  }
}
</script>

<style lang="scss" scoped>
// 列表元素在进入和离开过渡过程中的活跃状态
.list-enter-active,
.list-leave-active {
  // all所有可过渡的CSS属性都将参与过渡动画，包括但不限于width、height、color、background-color、transform等。
  // 过渡动画的总时长为1秒钟
  // 动画将以较慢的速度开始，逐渐加速，在接近结束时减速，最终平稳停止
  transition: all 1s ease;
}

// 列表元素在进入和离开过渡过程的起始状态和结束状态
.list-enter-from,
.list-leave-to {
  // 元素的不透明度为0，即完全透明。
  opacity: 0;
}
// 列表元素在重新排序（如列表项上下移动）时的过渡效果
.list-move {
  // transform 实现列表项在垂直或水平方向上的平滑移动
  // 1s 表示过渡动画的时长为1秒
  // ease 作为缓动函数确保动画过程的自然流畅。
  transition: transform 1s ease;
}
</style>
