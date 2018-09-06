<template>
  <section class="main" v-show="all.length" >
    <input
      class="toggle-all"
      id="toggle-all"
      type="checkbox"
      :checked="allChecked"
      @change="toggleAll(!allChecked)"
    >
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <TodoItem
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :todo="todo"
      ></TodoItem>
    </ul>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";
import { ITodosState, ITodo } from "../../types/todo";
import { Getter, Action, namespace } from "vuex-class";

const TodoGetter = namespace("TodoModule", Getter);
const TodoAction = namespace("TodoModule", Action);

@Component({
  components: {
    TodoItem
  }
})
export default class TodoList extends Vue {
  @TodoGetter
  filteredTodos!: ITodosState["todos"];
  @TodoGetter
  all!: ITodosState["todos"];
  @TodoAction
  toggleAll!: () => void;

  get allChecked() {
    return this.all.every((todo: ITodo) => todo.done);
  }
}
</script>
