<style src="todomvc-app-css/index.css">
</style>

<template>
  <section class="todoapp">
    <AppHeader></AppHeader>
    <MainSection></MainSection>
    <AppFooter></AppFooter>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AppHeader from "@/components/modules/AppHeader.vue";
import MainSection from "@/components/modules/MainSection.vue";
import AppFooter from "@/components/modules/AppFooter.vue";
import { State, Action, namespace } from "vuex-class";
import { ITodosState } from "@/types/todo";

const TodoState = namespace("TodoModule", State);
const TodoAction = namespace("TodoModule", Action);

@Component({
  components: {
    AppHeader,
    MainSection,
    AppFooter
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
