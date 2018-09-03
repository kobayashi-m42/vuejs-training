<template>
  <footer class="footer" v-show="allTodos.length">
    <span class="todo-count">
      <strong>{{ remaining }}</strong>
      {{ remaining | pluralize }} left
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
       v-show="allTodos.length > remaining"
       @click="removeCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  filters: {
    pluralize(n: number) {
      return n === 1 ? "item" : "items";
    }
  }
})
export default class AppFooter extends Vue {
  filters = ["all", "active", "completed"];

  get remaining(): string {
    return this.$store.getters.remaining;
  }

  get visibility(): string {
    return this.$store.getters.visibility;
  }

  get allTodos(): string {
    return this.$store.getters.all;
  }

  removeCompleted(): void {
    this.$store.dispatch("removeCompleted");
  }
}
</script>
