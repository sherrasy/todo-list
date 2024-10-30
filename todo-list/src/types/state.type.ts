import { store } from "@/store";
import { ITodo } from "./todo.interface";

export type TodosState = {
    todos:ITodo[] | null;
    isLoading: boolean;
    isPosting: boolean;
    hasError: boolean; 
    hasPostingError: boolean; 
  };


export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;