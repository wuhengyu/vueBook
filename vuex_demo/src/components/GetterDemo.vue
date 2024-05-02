<template>
  <div>
    <h1>getters计数器1:{{ this.$store.getters.countText('次数2') }}</h1>
    <h1>getters计数器2:{{ countText('次数3') }}</h1>
    <h1>getters计数器3:{{ getCountTextWithUnit('哈哈哈哈哈') }}</h1>
    <h1>getters计数器4:{{ countWithUnit }}</h1>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  methods: {
    increment() {
      this.$store.commit('increment', 3)
    },
    getCountTextWithUnit(unit) {
      return this.countText + unit;
    },
  },
  // computed: mapGetters(['countText'])
  computed: {
    ...mapGetters(['countText']),
    countWithUnit() {
      return this.countText + '嘻嘻嘻嘻嘻';
    }
  }
}
</script>