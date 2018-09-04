import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepCount: 0,
    title: ["感想を入力", "確認画面", "送信完了"],
    button: ["確認", "送信"],
    impression: "",
    errorMessage: "入力は必須です",
    isError: true,
    component: ["TextareaComp", "StringComp"]
  },
  mutations: {
    setStepCount: (state): void => {
      state.stepCount++;
    },
    updateImpression: (state, value) => {
      state.impression = value;
      if (state.impression) {
        state.isError = false;
      } else {
        state.isError = true;
      }
    }
  },
  actions: {
    handleClick: (context): void => {
      if (!context.rootState.isError) {
        context.commit("setStepCount");
      }
      if (context.rootState.stepCount === context.rootState.title.length - 1) {
        router.push("thanks");
      }
    },
    editText: (context, value): void => {
      context.commit("updateImpression", value);
    }
  },
  getters: {
    title: (state): string => {
      return state.title[state.stepCount];
    },
    button: (state): string => {
      return state.button[state.stepCount];
    },
    errorMessage: (state): string => {
      if (state.isError) {
        return state.errorMessage;
      } else {
        return "";
      }
    },
    impression: (state): string => {
      return state.impression;
    },
    component: (state): string => {
      return state.component[state.stepCount];
    }
  }
});
