<template>
  <li class="todo" :class="{ completed: todo.done }">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)"
      >
      <label v-text="todo.title"></label>
      <button class="destroy"></button>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITodo } from "../../types/todo";

@Component
export default class TodoItem extends Vue {
  @Prop()
  private todo!: ITodo;

  toggleTodo(todo: ITodo): void {
    this.$store.dispatch("toggleTodo", todo);
  }
}
</script>
