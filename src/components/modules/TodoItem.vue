<template>
  <li class="todo">
    <div class="view">
      <input
         class="toggle"
         type="checkbox"
      >
      <label>todo 1</label>
      <button class="destroy"></button>
    </div>
  </li>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodoItem extends Vue {}
</script>
