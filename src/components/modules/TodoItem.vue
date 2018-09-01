<template>
  <li class="todo">
    <div class="view">
      <input
         class="toggle"
         type="checkbox"
         :checked="todo.done"
      >
      <label v-text="todo.title"></label>
      <button class="destroy"></button>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import * as T from "../../types/todo";

@Component
export default class TodoItem extends Vue {
  @Prop()
  private todo!: T.ITodo;
}
</script>
