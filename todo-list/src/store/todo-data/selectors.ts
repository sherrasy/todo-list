import { State } from "@/types/state.type";
import { ITodo } from "@/types/todo.interface";
import { createSelector } from "@reduxjs/toolkit";

export const getTodosList = (state: State): ITodo[]|null => state.todos;
export const getCompletedTodos = createSelector(
    getTodosList,
    (todos) => todos ? todos.filter((item)=> item.completed && !item.deleted) : null

  );

export const getActiveTodos = () =>
    createSelector(getTodosList, (todos): ITodo[]|null =>
      todos ? todos.filter((item)=> !item.completed && !item.deleted) : null
    );
export const getDeletedTodos = () =>
    createSelector(getTodosList, (todos): ITodo[]|null =>
      todos ? todos.filter((item)=> item.deleted) : null
    );