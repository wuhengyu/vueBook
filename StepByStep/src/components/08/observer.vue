<template>
<div id="Application">
  <button @click="click">显示/隐藏</button>
  <div id="loadingIndicator">

  </div>
  <!-- appear表示是否在初始渲染时触发进入过渡 -->
  <transition name="ani" appear @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter" @enter-cancelled="enterCancelled" @before-leave="beforeLeave" @leave="leave" @after-leave="afterLeave" @leave-cancelled="leaveCancelled">
    <div v-show="show" class="demo">
      <!-- 内容区域 -->
    </div>
  </transition>
</div>

</template>

<script>
export default {
  data() {
    return {
      show: false, // 控制显示和隐藏的标志位
    }
  },
  // 下面的 el 是指在每个过渡钩子（如 beforeEnter, enter, afterEnter 等）中作为参数传递的 DOM 元素，即正在进行过渡动画的元素
  methods: {
    /**
     * 点击按钮切换显示和隐藏状态
     */
    click() {
      this.show = !this.show;
    },

    /**
     * 进入过渡的前置钩子，发生在 transition 的开始，beforeEnter
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    beforeEnter(el) {
      console.log("beforeEnter")
    },

    /**
     * 进入过渡的钩子，当元素的 CSS 过渡/动画开始执行时调用，enter
     * @param {Element} el - 过渡对应的 DOM 元素
     * @param {Function} done - 过渡完成时的回调函数
     */
    enter(el, done) {
      console.log("enter")
    },
    /**
     * 进入过渡完成的钩子，当元素的 CSS 过渡/动画完成时调用，afterEnter
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    afterEnter(el) {
      console.log("afterEnter")
    },
    /**
     * 进入过渡被取消时的钩子，enterCancelled
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    enterCancelled(el) {
      console.log("enterCancelled")
    },

    /**
     * 离开过渡的前置钩子，发生在 transition 的开始，beforeLeave
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    beforeLeave(el) {
      console.log("beforeLeave")
    },

    /**
     * 离开过渡的钩子，当元素的 CSS 过渡/动画开始执行时调用，leave
     * @param {Element} el - 过渡对应的 DOM 元素
     * @param {Function} done - 过渡完成时的回调函数
     */
    leave(el, done) {
      console.log("leave")
    },
    /**
     * 离开过渡完成的钩子，当元素的 CSS 过渡/动画完成时调用，afterLeave
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    afterLeave(el) {
      console.log("afterLeave")
    },

    /**
     * 离开过渡被取消时的钩子，leaveCancelled
     * @param {Element} el - 过渡对应的 DOM 元素
     */
    leaveCancelled(el) {
      console.log("leaveCancelled")
    }
  }
}
</script>

<style lang="scss" scoped>
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

.loading-indicator {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* 确保加载提示在其他内容之上 */
}

/* 以下为 SVG 动画样式，通常由外部库提供，这里仅作示例 */
svg circle {
  stroke-dasharray: 80px, 200px;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: dash 1.7s ease-in-out infinite;
}

@keyframes dash {
  0% {
    stroke-dashoffset: 100px;
  }
  50% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -100px;
  }
}
</style>
