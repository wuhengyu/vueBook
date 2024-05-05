<template>
  <div>
    <h1>actions计数器:{{ this.$store.state.count }}</h1>
  <button @click="increment">增加</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.$store.dispatch('asyncIncrement', 10)
    },
  },
}
</script>