import { Store } from "vuex";

const STORAGE_KEY = "todos-vuejs";
export const localStoragePlugin = (store: Store<any>) => {
  store.subscribe((mutation, state) => {
    const todos = store.state.TodoModule.todos;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  });
};
