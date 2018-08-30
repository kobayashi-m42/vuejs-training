<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HeadComp extends Vue {
  title: string = "感想を入力";
}
</script>
