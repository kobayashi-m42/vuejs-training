export interface ITodosState {
  todos: ITodo[];
  visibility: "all" | "active" | "completed";
}

export interface ITodo {
  title: string;
  done: boolean;
}
