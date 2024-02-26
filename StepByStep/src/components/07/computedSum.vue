<template>
  <div>
    <h1>测试数据：{{sum}}</h1>
    <button @click="click">点击</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
export default {
  setup () {
      let a = ref(1);
      let b = ref(2);
      let sum = computed({
          set (value){
              a.value = value
              b.value = value
          },
          get () {
              return a.value + b.value
          }
      });
      function click() {
          a.value += 1;
          b.value += 2;
          if (sum.value > 10) {
              sum.value = 0
          } 
      }
      return {
          sum,
          click
      }
  },
}
</script>

<style lang="scss" scoped>
</style>