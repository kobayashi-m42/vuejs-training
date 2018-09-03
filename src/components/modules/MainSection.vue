<template>
  <section class="main" v-show="allTodos.length" >
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
import { ITodo } from "../../types/todo";

@Component({
  components: {
    TodoItem
  }
})
export default class MainSection extends Vue {
  get filteredTodos(): ITodo[] {
    return this.$store.getters.filteredTodos;
  }

  get allTodos(): ITodo[] {
    return this.$store.getters.all;
  }

  get allChecked() {
    return this.allTodos.every(todo => todo.done);
  }

  toggleAll(allChecked: boolean): void {
    this.$store.dispatch("toggleAll", allChecked);
  }
}
</script>
