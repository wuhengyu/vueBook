<!-- <template>
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link>
</nav>
<router-view />
</template> -->

<template>
  <HelloWorld />
  <HelloWorld2 />
  <stateDemo />
  <GetterDemo />
  <actionsDemo />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloWorld2 from './components/HelloWorld2.vue'
import stateDemo from './components/stateDemo.vue'
import GetterDemo from './components/GetterDemo.vue'
import actionsDemo from './components/actionsDemo.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    HelloWorld2,
    stateDemo,
    GetterDemo,
    actionsDemo
  }
}
</script>
