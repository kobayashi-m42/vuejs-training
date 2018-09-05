<template>
  <div id="form">
    Formページ
    <HeadComp></HeadComp>
    <component :is="component"></component>
    <button @click="handleClick">{{button}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeadComp from "@/components/modules/HeadComp.vue";
import TextareaComp from "@/components/modules/TextareaComp.vue";
import StringComp from "@/components/modules/StringComp.vue";
import { Getter, Action, namespace } from "vuex-class";

const FormGetter = namespace("FormModule", Getter);
const FormAction = namespace("FormModule", Action);

@Component({
  components: {
    HeadComp,
    TextareaComp,
    StringComp
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
