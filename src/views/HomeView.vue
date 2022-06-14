<template>
  <div class="home">
    <div class="container">
      <h2>TODO list Manager</h2>
      <AddTodo />
      <FilterTodo />
      <Todos />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Todos from '@/components/Todos.vue';
import AddTodo from '@/components/AddTodo.vue';
import FilterTodo from '@/components/FilterTodo.vue';

export default {
  name: 'HomeView',
  components: {
    Todos,
    AddTodo,
    FilterTodo,
  }
}
</script>

<style lang="css" scoped>
  .container {
    width: 80vw;
    margin: 20px auto;
  }
</style>
