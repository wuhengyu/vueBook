<template>
<div id="Application">
  <div :style="{backgroundColor: 'blue', width: width + 'px', height:height + 'px'}" @click="run">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      width: 100,
      height: 100,
      timer: null
    }
  },
  methods: {
    run() {
      this.timer = setInterval(this.animation, 10)
    },
    animation() {
      if (this.width == 200) {
        clearInterval(this.timer)
        return
      } else {
        this.width += 1
        this.height += 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
