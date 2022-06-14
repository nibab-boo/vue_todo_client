<template>
  <div>
    <h1>
      {{ oneTodo.title }}
    </h1>
    <p>{{ `${oneTodo.completed ? "completed" : "Not completed"}`}} </p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { useRoute } from "vue-router";
export default {
  name: "Todo",
  computed: {
    ...mapGetters(["oneTodo"]),
  },
  methods: {
    ...mapActions(['fetchTodo'])
  },
  created () {
    const route = useRoute();
    console.log(route.params.id);
    this.fetchTodo(route.params.id);
  }
}
</script>

<style lang="css" scoped>

</style>