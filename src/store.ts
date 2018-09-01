import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    stepCount: 0,
    title: ["感想を入力", "確認画面", "送信完了"],
    button: ["確認", "送信"],
    impression: "",
    errorMessage: "入力は必須です",
    isError: true
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
    buttonAction: (context): void => {
      context.commit("setStepCount");
    },
    inputText: (context, value): void => {
      context.commit("updateImpression", value);
    }
  },
  getters: {
    getTitle: (state): string => {
      return state.title[state.stepCount];
    },
    getButton: (state): string => {
      return state.button[state.stepCount];
    },
    getErrorMessage: (state): string => {
      if (state.isError) {
        return state.errorMessage;
      } else {
        return "";
      }
    },
    getImpression: (state): string => {
      return state.impression;
    }
  }
});
