<template>
  <div id="thanks">
    Thanksページ
    <FormHeader></FormHeader>
    送信ありがとうございました！
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import FormHeader from "./FormHeader.vue";

@Component({
  components: {
    FormHeader
  }
})
export default class Thanks extends Vue {}
</script>

<style lang="scss" scoped>
#thanks {
  text-align: center;
}
</style>
