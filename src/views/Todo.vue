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

@Component({
  components: {
    AppHeader,
    MainSection,
    AppFooter
  }
})
export default class Todo extends Vue {}
</script>
