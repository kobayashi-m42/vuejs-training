import Vue from "vue";
import Vuex, {
  Store,
  GetterTree,
  MutationTree,
  ActionTree,
  Module
} from "vuex";
import { ITodosState, ITodo } from "@/types/todo";

Vue.use(Vuex);

const state: ITodosState = {
  todos: []
};

const getters: GetterTree<ITodosState, ITodosState> = {
  all(state) {
    return state.todos;
  }
};

const mutations: MutationTree<ITodosState> = {
  addTodo: (state, todo: ITodo): void => {
    state.todos.push(todo);
  },
  editTodo: (state, { todo, title = todo.title, done = todo.done }): void => {
    todo.title = title;
    todo.done = done;
  },
  removeTodo: (state, todo): void => {
    state.todos.splice(state.todos.indexOf(todo), 1);
  }
};

const actions: ActionTree<ITodosState, ITodosState> = {
  addTodo: ({ commit }, todoTitle: string): void => {
    let todo: ITodo = {
      title: todoTitle,
      done: false
    };
    commit("addTodo", todo);
  },
  toggleTodo: ({ commit }, todo: ITodo): void => {
    commit("editTodo", { todo, done: !todo.done });
  },
  removeTodo: ({ commit }, todo: ITodo): void => {
    commit("removeTodo", todo);
  },
  editTodo: ({ commit }, { todo, changedTitle }): void => {
    commit("editTodo", { todo, title: changedTitle });
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
