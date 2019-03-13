<template>
  <div id="app">
    <router-link to="/">To Home</router-link>
    <router-link to="/about">To About</router-link>
    <router-view/>
    <p>{{getTodos}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import VConsole from 'vconsole'
let vconsole = new VConsole()
console.log('vconsole: ', vconsole)

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      // getters
      getTodos: 'getTodos'
    }),
    ...mapState({
      // state
      todos: 'todos'
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
