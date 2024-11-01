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

    updateTodo: (state, { payload }: PayloadAction<ITodo>) => {
      if (!state.todos) {
        return;
      }
      const todoId = state.todos.findIndex((item) => item.id === payload.id);
      if (todoId !== -1) {
        state.todos[todoId] = { ...payload };
      }
      saveTodos(state.todos);
    },

    removeTodo: (state, { payload }: PayloadAction<number>) => {
      if (!state.todos) {
        return;
      }
      const todos = state.todos.filter((item) => item.id !== payload);
      state.todos = todos.length > 0 ? todos : null;
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

export const { addNewTodo, updateTodo,removeTodo, fetchTodoList, clearAllTodos } =
  todoData.actions;
