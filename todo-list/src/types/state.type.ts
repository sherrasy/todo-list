import { store } from "@/store";
import { ITodo } from "./todo.interface";

export type TodosState = {
    todos:ITodo[] | null;
  };


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;