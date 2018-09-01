<template>
  <section class="main">
  <input
    class="toggle-all"
    id="toggle-all"
    type="checkbox"
  >
  <label for="toggle-all"></label>
  <ul class="todo-list">
    <TodoItem></TodoItem>
    <TodoItem></TodoItem>
  </ul>
</section>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoItem from "./TodoItem.vue";

@Component({
  components: {
    TodoItem
  }
})
export default class MainSection extends Vue {}
</script>
