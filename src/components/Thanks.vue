<template>
  <div>
    Thanksページ
    <HeadComp></HeadComp>
    送信ありがとうございました！
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import HeadComp from "./modules/HeadComp.vue";

@Component({
  components: {
    HeadComp
  }
})
export default class Thanks extends Vue {}
</script>

<style scoped>
</style>
