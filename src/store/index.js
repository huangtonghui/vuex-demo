import vue from 'vue'
import vuex from 'vuex'
vue.use(vuex)

const store = new vuex.Store({
  state: {
    todos: []
  },

  getters: {
    getTodos (state) {
      return state.todos
    }
  },

  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    delTodo (state, index) {
      state.todos.splice(index, 1)
    }
  },

  actions: {
    addTodo (state, todo) {
      state.commit('addTodo', todo)
    },

    delTodo (state, index) {
      state.commit('delTodo', index)
    }
  }
})

export default store
