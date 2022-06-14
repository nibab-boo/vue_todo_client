<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as completed.</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete

      </span>
      <span>
        <span class="complete-box"></span> = Complete

      </span>
    </div>

    <div class="todos">
      <div
      @click="onClick(todo)"
      v-for="todo in allTodos"
      :key="todo.id"
      class="todo"
      @dblclick="onDoubleClick(todo)"
      v-bind:class="{'is-complete':todo.completed}"
      >
        {{ todo.title }}
      <i @click="deleteTodo(todo.id)" class="fas fa-trash"></i>

      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  // import { useRoute } from "vue-router";
  import router from '@/router';


  export default {
    // import our getters and actions
    name: "Todos",
    methods: {
      ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
      onDoubleClick: function (currentTodo) {
        if (currentTodo.completed) return;
        const updatedTodo = {
          id: currentTodo.id,
          title: currentTodo.title,
          completed: !currentTodo.completed,
        }
        this.$store.dispatch("updateTodo", updatedTodo);
      },
      onClick: function(currentTodo) {
        // const route = useRoute();
        console.log("routing");
        router.push(`/todos/${currentTodo.id}`);
      }
    },
    computed: {
      ...mapGetters([
        "allTodos",
      ]),

    },
    created() {
      this.fetchTodos();
      // This can be done if we don't use mapActions
      // this.$store.dispatch("fetchTodos");
    }

  }

</script>

<style lang="css" scoped>
.todos{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
}
.todo {
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
  font-weight: bold;
}
i {
  position: absolute;
  bottom: 36%;
  right: 10px;
  color: #fff;
  cursor: pointer;
}
i:hover {
  color: rgb(194, 40, 40);
}
.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b882;
}
.is-complete {
  background: #35495e;
  color: white;
}
@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
    /* grid-template-columns: repeat(1, 1fr); */
  }
}
</style>