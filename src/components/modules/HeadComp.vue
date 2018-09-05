<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";

const FormGetter = namespace("FormModule", Getter);

@Component
export default class HeadComp extends Vue {
  @FormGetter
  title!: string;
}
</script>
