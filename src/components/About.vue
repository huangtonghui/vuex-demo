<template>
  <div>
    <div>
      <h2>About</h2>
      <input type="text" v-model="value"/>
      <button type="button" @click="addTodo('about-')">添加</button>
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
  name: 'About',
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
      todoCount: 'todoCount'
    }),
    ...mapState({
      // state
      todos: 'todos'
    })
  }
}
</script>
