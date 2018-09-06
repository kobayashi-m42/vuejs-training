
<template>
  <section class="todoapp">
    <TodoHeader></TodoHeader>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoList from "@/components/todo/TodoList.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";
import { State, Action, namespace } from "vuex-class";
import { ITodosState } from "@/types/todo";

const TodoState = namespace("TodoModule", State);
const TodoAction = namespace("TodoModule", Action);

@Component({
  components: {
    TodoHeader,
    TodoList,
    TodoFooter
  }
})
export default class Todo extends Vue {
  @TodoState
  todos!: ITodosState["todos"];

  @TodoAction
  changeVisibility!: (visibility: string) => void;

  mounted() {
    window.addEventListener("hashchange", this.onHashChange);
    this.onHashChange();
  }

  onHashChange() {
    let visibility: string = window.location.hash.replace(/#\/?/, "");
    this.changeVisibility(visibility);
  }
}
</script>

<style  src="todomvc-app-css/index.css">
</style>
