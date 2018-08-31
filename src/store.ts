import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {
    buttonAction(): void {
      console.log("buttonAction");
    }
  }
});
