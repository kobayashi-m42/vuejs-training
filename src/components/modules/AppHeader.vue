<template>
  <header class="header">
    <h1>todos</h1>
    <input
      input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      @keyup.enter="add"
    >
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Action, namespace } from "vuex-class";

const TodoAction = namespace("TodoModule", Action);

@Component
export default class AppHeader extends Vue {
  @TodoAction
  addTodo!: (todoTitle: string) => void;

  add(e: any): void {
    const todoTitle: string = e.target.value;
    if (todoTitle.trim()) {
      this.addTodo(todoTitle);
    }
    e.target.value = "";
  }
}
</script>
