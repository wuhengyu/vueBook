<template>
<div id="Application">
  <button @click="click">显示/隐藏</button>
  <!-- <transition> 组件包裹需要进行过渡效果的元素。这里指定过渡动画的名称为 "ani"，Vue.js 会根据这个名称来查找对应的 CSS 类名以应用动画效果 -->
  <transition name="ani">
    <div v-if="show" class="demo">
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

// @keyframes keyframe-in 和 @keyframes keyframe-out：定义两个关键帧动画，
// 分别对应 div 元素从隐藏到显示（"keyframe-in"）以及从显示到隐藏（"keyframe-out"）的过程。
// ani和keyframes的from\to相同功能
@keyframes keyframe-in {
  from {
    width: 0px;
    height: 0px;
    background-color: red;
  }

  to {
    width: 100px;
    height: 100px;
    background-color: blue;
  }
}

@keyframes keyframe-out {
  from {
    width: 100px;
    height: 100px;
    background-color: blue;
  }

  to {
    width: 0px;
    height: 0px;
    background-color: red;
  }
}

.demo {
  width: 100px;
  height: 100px;
  background-color: blue;
}

// 这6类是 Vue.js 为过渡动画生成的 CSS 类名，分别对应过渡的不同阶段（进入/离开时的起始状态、活动状态和结束状态）
.ani-enter-from {
  width: 0px;
  height: 0px;
  background-color: red;
}

.ani-enter-active {
  animation: keyframe-in 3s;
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
  animation: keyframe-out 3s;
}

.ani-leave-to {
  width: 0px;
  height: 0px;
  background-color: red;
}
</style>
