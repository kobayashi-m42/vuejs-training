<template>
  <p>{{ string }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class stringComp extends Vue {
  get string(): string {
    return this.$store.getters.impression;
  }
}
</script>
