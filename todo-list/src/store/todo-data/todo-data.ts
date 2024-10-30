import { TodosState } from '@/types/state.type';
import { ITodo } from '@/types/todo.interface';
import { REDUCER_NAME } from '@/utils/constant';
import { getTodos, removeAllTodos, saveTodos } from '@/utils/helpers';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TodosState = {
  todos: null,
};

export const todoData = createSlice({
  name: REDUCER_NAME,
  initialState,
  reducers: {
    addNewTodo: (state, { payload }: PayloadAction<ITodo>) => {
      state.todos = state.todos ? [...state.todos, payload] : [payload];
      saveTodos(state.todos);
    },

    fetchTodoList: (state) => {
      state.todos = getTodos();
    },

    clearAllTodos: (state) => {
      state.todos = null;
      removeAllTodos();
    },
  },
});

export const { addNewTodo, fetchTodoList, clearAllTodos } = todoData.actions;
