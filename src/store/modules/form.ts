import Vue from "vue";
import Vuex, { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import router from "../../router";
import { FormState } from "@/types/form";
import { RootState } from "@/store";

Vue.use(Vuex);

const state: FormState = {
  stepCount: 0,
  title: ["感想を入力", "確認画面", "送信完了"],
  button: ["確認", "送信"],
  impression: "",
  errorMessage: "入力は必須です",
  isError: true,
  component: ["TextArea", "Impression"]
};

const getters: GetterTree<FormState, RootState> = {
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
};

const mutations: MutationTree<FormState> = {
  setStepCount: (state): void => {
    state.stepCount++;
  },
  updateImpression: (state, value): void => {
    state.impression = value;
    state.isError = !state.impression;
  }
};

const actions: ActionTree<FormState, RootState> = {
  editText: (context, value: string): void => {
    context.commit("updateImpression", value);
  },
  handleClick: (context): void => {
    if (!context.state.isError) {
      context.commit("setStepCount");
    }
    if (context.state.stepCount === context.state.title.length - 1) {
      router.push("thanks");
    }
  }
};

export const FormModule: Module<FormState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
