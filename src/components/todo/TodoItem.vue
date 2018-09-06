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
import { Getter, Action, namespace } from "vuex-class";

const TodoGetter = namespace("TodoModule", Getter);
const TodoAction = namespace("TodoModule", Action);

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

  @TodoAction
  toggleTodo!: () => void;
  @TodoAction
  removeTodo!: (todo: ITodo) => void;
  @TodoAction
  editTodoAction!: (object: object) => void;

  editing: boolean = false;

  doneEdit(e: any): void {
    const changedTitle: string = e.target.value.trim();
    const todo: ITodo = this.todo;
    if (!changedTitle) {
      this.removeTodo(todo);
    } else if (this.editing) {
      this.editTodoAction({
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
