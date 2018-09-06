<template>
  <footer class="footer" v-show="all.length">
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
       v-show="all.length > remaining"
       @click="removeCompleted"
    >
      Clear completed
    </button>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action, namespace } from "vuex-class";
import { ITodosState } from "../../types/todo";

const TodoGetter = namespace("TodoModule", Getter);
const TodoAction = namespace("TodoModule", Action);

@Component({
  filters: {
    pluralize(n: number) {
      return n === 1 ? "item" : "items";
    }
  }
})
export default class TodoFooter extends Vue {
  @TodoGetter
  remaining!: number;
  @TodoGetter
  visibility!: ITodosState["visibility"];
  @TodoGetter
  all!: ITodosState["todos"];
  @TodoAction
  removeCompleted!: () => void;

  filters = ["all", "active", "completed"];
}
</script>
