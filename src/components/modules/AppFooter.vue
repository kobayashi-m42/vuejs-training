<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>2</strong>
      items left
    </span>
    <ul class="filters">
      <li><a href="#" class="selected">All</a></li>
      <li><a href="#">Active</a></li>
      <li><a href="#">Completed</a></li>
    </ul>
    <button class="clear-completed">
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {}
</script>
