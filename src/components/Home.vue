<template>
  <div>
    <h2>Home</h2>
    <div>
      <input type="text" v-model="value"/>
      <button type="button" @click="addTodo('home-')">添加</button>
    </div>
    <div v-for="(todo, index) in todos" :key="index">
      <span>{{todo}}</span>
      <button @click="delTodo(index)">删除</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      value: ''
    }
  },
  methods: {
    addTodo (label) {
      // mutations
      if (this.value !== '') {
        let todo = label + this.value
        this.$store.commit('addTodo', todo)
        this.value = ''
      }
    },

    delTodo (index) {
      // actions
      this.$store.dispatch('delTodo', index)
    }
  },
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
</style>
