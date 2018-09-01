<template>
  <div>
    <p class="error">{{ error }}</p>
    <textarea v-model="impression"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TextareaComp extends Vue {
  get error(): string {
    return this.$store.getters.getErrorMessage;
  }

  get impression(): string {
    return this.$store.getters.getImpression;
  }
  set impression(value: string) {
    this.$store.dispatch("inputText", value);
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
