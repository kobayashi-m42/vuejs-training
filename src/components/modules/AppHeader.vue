<template>
  <header class="header">
    <h1>todos</h1>
    <input
      input class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
    >
  </header>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppHeader extends Vue {}
</script>
