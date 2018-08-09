import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    todos:[],
  },

  getters:{
    todoCount(state){
      return state.todos.length;
    }
  },

  mutations:{
    addTodo(state, todo){
      if (todo.value != '') {
        state.todos.push(todo);
      }
    },

    delTodo(state, index){
      state.todos.splice(index, 1);
    }
  },

  actions:{
    addTodo(state, todo){
        if(todo.value != ""){
            state.commit("addTodo", todo);
        }
    },

    delTodo(state,index){
        state.commit("delTodo", index);
    }
  },

});

export default store;

