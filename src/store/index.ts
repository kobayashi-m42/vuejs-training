import Vue from "vue";
import Vuex, { Store } from "vuex";
import { TodoModule } from "./modules/todo";
import { localStoragePlugin } from "@/plugins/localStorage";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TodoModule
  },
  plugins: [localStoragePlugin]
});
