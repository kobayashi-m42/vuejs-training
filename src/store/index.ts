import Vue from "vue";
import Vuex, { Store } from "vuex";
import { TodoModule } from "./modules/todo";
import { FormModule } from "./modules/form";
import { localStoragePlugin } from "@/plugins/localStorage";

Vue.use(Vuex);

export interface RootState {
  version: string;
}

export default new Vuex.Store({
  state: {
    version: "1.0.0"
  },
  modules: {
    TodoModule,
    FormModule
  },
  plugins: [localStoragePlugin]
});
