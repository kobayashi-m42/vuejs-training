<template>
  <div id="form">
    Formページ
    <FormHeader></FormHeader>
    <component :is="component"></component>
    <button @click="handleClick">{{button}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FormHeader from "@/components/form/FormHeader.vue";
import TextArea from "@/components/form/TextArea.vue";
import Impression from "@/components/form/Impression.vue";
import { Getter, Action, namespace } from "vuex-class";

const FormGetter = namespace("FormModule", Getter);
const FormAction = namespace("FormModule", Action);

@Component({
  components: {
    FormHeader,
    TextArea,
    Impression
  }
})
export default class Form extends Vue {
  @FormGetter
  button!: string;
  @FormGetter
  component!: string;
  @FormAction
  handleClick!: () => void;
}
</script>

<style lang="scss" scoped>
#form {
  text-align: center;
}
</style>
