<template>
  <p>{{ string }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class stringComp extends Vue {
  string: string = "入力された感想をここに出す";
}
</script>
