<template>
  <li class="todo" :class="{ completed: todo.done , editing: editing}">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        :checked="todo.done"
        @change="toggleTodo(todo)"
      >
      <label v-text="todo.title" @dblclick="editing = true"></label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input
      class="edit"
      v-show="editing"
      v-focus="editing"
      :value="todo.title"
      @keyup.enter="doneEdit"
      @keyup.esc="cancelEdit"
      @blur="doneEdit"
    >
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ITodo } from "../../types/todo";

@Component({
  directives: {
    focus: function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    }
  }
})
export default class TodoItem extends Vue {
  @Prop()
  private todo!: ITodo;

  editing: boolean = false;

  toggleTodo(todo: ITodo): void {
    this.$store.dispatch("toggleTodo", todo);
  }

  removeTodo(todo: ITodo): void {
    this.$store.dispatch("removeTodo", todo);
  }

  doneEdit(e: any): void {
    const changedTitle: string = e.target.value.trim();
    const todo: ITodo = this.todo;
    if (!changedTitle) {
      this.$store.dispatch("removeTodo", todo);
    } else if (this.editing) {
      this.$store.dispatch("editTodo", {
        todo,
        changedTitle
      });
      this.editing = false;
    }
  }

  cancelEdit(e: any): void {
    e.target.value = this.todo.title;
    this.editing = false;
  }
}
</script>
