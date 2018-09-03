<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      items left
    </span>
    <ul class="filters" >
      <li
        v-for="filter in filters"
        :key="filter">
        <a
          :href="'#/' + filter"
          :class="{ selected: visibility == filter }"
        >
          {{ filter }}
        </a>
      </li>
    </ul>
    <button
       class="clear-completed"
       v-show="all.length > remaining"
       @click="removeCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AppFooter extends Vue {
  filters = ["all", "active", "completed"];

  get remaining(): string {
    return this.$store.getters.remaining;
  }

  get visibility(): string {
    return this.$store.getters.visibility;
  }

  get all(): string {
    return this.$store.getters.all;
  }

  removeCompleted(): void {
    this.$store.dispatch("removeCompleted");
  }
}
</script>
