<template>
  <div>
    Formページ
    <HeadComp></HeadComp>
    <component :is="isComponent"></component>
    <button @click="handleClick">{{button}}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HeadComp from "@/components/modules/HeadComp.vue";
import TextareaComp from "@/components/modules/TextareaComp.vue";
import StringComp from "@/components/modules/StringComp.vue";

@Component({
  components: {
    HeadComp,
    TextareaComp,
    StringComp
  }
})
export default class Form extends Vue {
  get button(): string {
    return this.$store.getters.button;
  }
  get isComponent(): string {
    return this.$store.getters.component;
  }

  handleClick(): void {
    this.$store.dispatch("handleClick");
  }
}
</script>
