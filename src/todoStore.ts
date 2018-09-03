import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree, Module } from "vuex";
import { ITodosState, ITodo } from "@/types/todo";

Vue.use(Vuex);

const state: ITodosState = {
  todos: [],
  visibility: "all"
};

const getters: GetterTree<ITodosState, ITodosState> = {
  all(state) {
    return state.todos;
  },
  active(state) {
    return state.todos.filter(todo => !todo.done);
  },
  completed(state) {
    return state.todos.filter(todo => todo.done);
  },
  remaining(state, getters) {
    return getters["active"].length;
  },
  filteredTodos(state, getters) {
    return getters[state.visibility];
  },
  visibility(state) {
    return state.visibility;
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
  },
  changeVisibility: (state, visibility): void => {
    state.visibility = visibility;
  },
  removeCompleted: (state): void => {
    state.todos = state.todos.filter(todo => !todo.done);
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
  },
  changeVisibility: ({ commit }, visibility: string): void => {
    commit("changeVisibility", visibility);
  },
  removeCompleted: ({ commit }): void => {
    commit("removeCompleted");
  }
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
