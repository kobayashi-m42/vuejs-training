<template>
  <div>
    <p class="error">{{ errorMessage }}</p>
    <textarea :value="impression" @input="addImpression"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Getter, Action, namespace } from "vuex-class";

const FormGetter = namespace("FormModule", Getter);
const FormAction = namespace("FormModule", Action);

@Component
export default class TextareaComp extends Vue {
  @FormGetter
  errorMessage!: string;
  @FormGetter
  impression!: string;
  @FormAction
  editText!: (value: string) => void;

  addImpression(e: any): void {
    this.editText(e.target.value);
  }
}
</script>

<style scoped>
.error {
  color: red;
}
</style>
