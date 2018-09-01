import Vue from "vue";
import Vuex, {
  Store,
  GetterTree,
  MutationTree,
  ActionTree,
  Module
} from "vuex";
import * as T from "@/types/todo";

Vue.use(Vuex);

const state: T.ITodosState = {
  todos: []
};

const mutations: MutationTree<T.ITodosState> = {
  addTodo: (state, todo: T.ITodo): void => {
    console.log(state);
    state.todos.push(todo);
  }
};

const actions: ActionTree<T.ITodosState, T.ITodosState> = {
  addTodo: ({ commit }, todoTitle: string): void => {
    let todo: T.ITodo = {
      title: todoTitle,
      done: false
    };
    commit("addTodo", todo);
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions
});
