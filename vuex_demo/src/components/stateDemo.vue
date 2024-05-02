<template>
  <div>
    <h1>mapState计数器1:{{ count }}</h1>
    <h1>mapState计数器2:{{ countData }}</h1>
    <h1>mapState计数器3:{{ countData2 }}</h1>
  <button @click="increment">增加</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    increment() {
      this.$store.commit('increment')
    },
  },
  // computed: mapState(['count'])
  // computed: {
  //   ...mapState(['count'])
  // }
  // computed: {
  //   ...mapState({
  //     count: state => state.count
  //   })
  // }
  // computed: {
  //   ...mapState({
  //     count: 'count'
  //   })
  // }
  // computed: {
  //   ...mapState({
  //     count: state => state.count
  //   })
  // }
  computed: mapState({
    count: state => state.count,
    countData: 'count',
    countData2(state){
      return state.count
    }
  })
}
</script>