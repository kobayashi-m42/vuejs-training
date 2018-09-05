<template>
  <p>{{ impression }}</p>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, namespace } from "vuex-class";

const FormGetter = namespace("FormModule", Getter);

@Component
export default class stringComp extends Vue {
  @FormGetter
  impression!: string;
}
</script>
