<!-- <template>
<h1>计数器2:{{ count }}</h1>
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
  <h1>state计数器2:{{ this.$store.state.count }}</h1>
  <button @click="increment">增加</button>
</template>

  <script>
  export default {
    methods: {
      increment() {
        this.$store.commit('increment', 4)
      }
    }
  }
 </script>
