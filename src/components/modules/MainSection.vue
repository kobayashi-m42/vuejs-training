<template>
  <section class="main">
    <input
      class="toggle-all"
      id="toggle-all"
      type="checkbox"
    >
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :todo="todo"
      ></TodoItem>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import { ITodo } from "../../types/todo";

@Component({
  components: {
    TodoItem
  }
})
export default class MainSection extends Vue {
  get todos(): ITodo[] {
    return this.$store.getters.all;
  }
}
</script>
