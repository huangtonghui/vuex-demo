
<template>
  <div id="app" class="container">
    <h1>Vue Vuex Todo Demo</h1>
    <form class="form-inline">
      <div class="form-group">
        <input type="text" class="form-control"  placeholder="" v-model="value"/>
        <button type="button" class="btn btn-default" @click="addTodo"> 添加 </button>
      </div>
    </form>
    <div class="todolist">
      <ul class="list-group">
        <li class="list-group-item" v-for="(todo, index) in todos" :key="index">
          <span>{{todo.value}}</span>
          <button class="btn btn-default" @click="delTodo(index)"> 删除 </button>
        </li>
      </ul>
    </div>

    <p>todo数量：{{todoCount}}</p>
    <pre>{{$store.state}}</pre>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  components: {

  },
  data() {
    return {
      value: "",
      id: 0
    };
  },

  methods: {
    addTodo() {
      let todo = {
        value: this.value,
        id: ++this.id
      };
      this.value = "";
      // actions
      this.$store.dispatch("addTodo", todo);
      // mutations
      // this.$store.commit("addTodo", todo);
    },

    delTodo(index) {
      this.$store.dispatch("delTodo", index);
    }
  },
  
  computed: {
    ...mapGetters({
      //映射Getter
      todoCount: "todoCount" 
    }),
    ...mapState({
      //映射state
      todos: "todos" 
    })
  }
};
</script>

<style>
</style>
