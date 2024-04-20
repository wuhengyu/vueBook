<template>
<div id="Application">
  <div :class="cls" @click="run">

  </div>
</div>
</template>

<script>
export default {
  // Vue组件中的data是一个用于存储组件状态的必备选项
  // data函数被用来返回一个对象，这个对象的属性将会成为组件实例的数据属性。
  data() {
    return {
      // 组件实例化时，将拥有一个可以直接通过this.cls访问到的属性
      // 通常，这个属性会被用作元素的类名（class）或其他需要根据组件状态动态改变的CSS样式引用
      cls: "demo"
    }
  },
  // methods是Vue组件中用于组织业务逻辑或处理事件的方法集合
  methods: {
    // 定义了一个名为run的方法
    run() {
      if (this.cls == "demo") {
        this.cls = "demo-ani"
      } else {
        this.cls = "demo"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes animation1 {
            0% {
                background-color: red;
                width: 100px;
                height: 100px;
            }
            25% {
                background-color: orchid;
                width: 200px;
                height: 200px;
            }
            75% {
                background-color: green;
                width: 150px;
                height: 150px;
            }
            100% {
                background-color: blue;
                width: 200px;
                height: 200px;
            }
        }
        .demo {
            width: 100px;
            height: 100px;
            background-color: red;
            // /* 设置关键帧动画名称 */
            // animation-name: animation1;
            // /* 设置动画时长 */
            // animation-duration: 3s;
            // /* 设置动画播放方式：渐入渐出 */
            // animation-timing-function: ease-in-out;
            // /* 设置动画播放的方向：轮流 */
            // animation-direction: alternate;
            // /* 设置动画播放的次数：无限次 */
            // animation-iteration-count: infinite;
            // /* 设置动画的播放状态：正在播放 */
            // animation-play-state: running;
            // /* 设置播放动画的延迟时间：1秒 */
            // animation-delay: 1s;

            
        }
        .demo-ani {
            /* 设置关键帧动画名称 */
            animation-name: animation1;
            /* 设置动画时长 */
            animation-duration: 3s;
            /* 设置动画播放方式：渐入渐出 */
            animation-timing-function: ease-in-out;
            /* 设置动画播放的方向：轮流 */
            animation-direction: alternate;
            /* 设置动画播放的次数：无限次 */
            animation-iteration-count: infinite;
            /* 设置动画的播放状态：正在播放 */
            animation-play-state: running;
            /* 设置播放动画的延迟时间：1秒 */
            animation-delay: 1s;
            /* 设置动画播放结束应用到元素的样式：用于指定动画结束后，目标元素应保留动画最后一帧的样式 */
            animation-fill-mode:forwards;
            width: 200px;
            height: 200px;
            background-color: blue;
        }
</style>
