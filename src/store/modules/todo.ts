import Vue from "vue";
import Vuex, { GetterTree, MutationTree, ActionTree, Module } from "vuex";
import { ITodosState, ITodo } from "@/types/todo";

Vue.use(Vuex);

const STORAGE_KEY = "todos-vuejs";
const state: ITodosState = {
  todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "[]"),
  visibility: "all"
};

const getters: GetterTree<ITodosState, ITodosState> = {
  all: (state): ITodosState["todos"] => {
    return state.todos;
  },
  active: (state): ITodosState["todos"] => {
    return state.todos.filter(todo => !todo.done);
  },
  completed: (state): ITodosState["todos"] => {
    return state.todos.filter(todo => todo.done);
  },
  remaining: (state, getters): number => {
    return getters["active"].length;
  },
  filteredTodos: (state, getters): ITodosState["todos"] => {
    return getters[state.visibility];
  },
  visibility: (state): ITodosState["visibility"] => {
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
  },
  toggleAll: (state, allChecked): void => {
    state.todos.map(todo => {
      todo.done = allChecked;
    });
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
  editTodoAction: ({ commit }, { todo, changedTitle }): void => {
    commit("editTodo", { todo, title: changedTitle });
  },
  changeVisibility: (
    { commit },
    visibility: ITodosState["visibility"]
  ): void => {
    if (getters[visibility]) {
      commit("changeVisibility", visibility);
    } else {
      window.location.hash = "";
      commit("changeVisibility", "all");
    }
  },
  removeCompleted: ({ commit }): void => {
    commit("removeCompleted");
  },
  toggleAll: ({ commit }, allChecked: boolean): void => {
    commit("toggleAll", allChecked);
  }
};

export const TodoModule: Module<ITodosState, ITodosState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
