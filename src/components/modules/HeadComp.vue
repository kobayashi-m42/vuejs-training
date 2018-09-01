<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeadComp extends Vue {
  get title(): string {
    return this.$store.getters.title;
  }
}
</script>
