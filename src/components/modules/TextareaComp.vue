<template>
  <div>
    <p class="error">{{ error }}</p>
    <textarea></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TextareaComp extends Vue {
  error: string = "入力は必須です";
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
