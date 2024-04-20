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
.demo {
  // 宽度为100px
  width: 100px;
  // 高度为100px
  height: 100px;
  // 背景颜色为红色
  background-color: rgb(39, 211, 54);
  // 过渡属性为宽度、高度和背景颜色
  transition-property: width, height, background-color;
  // 过渡持续时间为1s
  transition-duration: 1s;
  // 过渡速度曲线为线性匀速
  transition-timing-function: linear;
  // 过渡延迟为2s
  transition-delay: 2s;
}

.demo-ani {
  // 宽度为200px
  width: 200px;
  // 高度为200px
  height: 200px;
  // 背景颜色为蓝色
  background-color: blue;
  // 过渡为宽度2s、高度2s、背景颜色2s
  transition: width 2s, height 2s, background-color 2s;
}
</style>
