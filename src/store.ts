import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepCount: 0,
    title: ["感想を入力", "確認画面", "送信完了"],
    button: ["確認", "送信"]
  },
  mutations: {
    setStepCount: (state): void => {
      console.log("rootsetStepCount");
      state.stepCount++;
    }
  },
  actions: {
    buttonAction: (context): void => {
      console.log("buttonAction");
      context.commit("setStepCount");
    }
  },
  getters: {
    getTitle: (state): string => {
      return state.title[state.stepCount];
    },
    getButton: (state): string => {
      return state.button[state.stepCount];
    }
  }
});
