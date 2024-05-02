<!-- <template>
  <h1>计数器1:{{ count }}</h1>
  <button @click="increment">增加</button>
</template>
<script>
  export default {
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }
</script> -->

<template>
  <h1>countText计数器1:{{ this.$store.getters.countText('次数1') }}</h1>
  <button @click="increment">增加</button>
</template>

<script>
export default {
  methods: {
    increment() {
      this.$store.commit('increment', 2)
    }
  }
}
</script>
