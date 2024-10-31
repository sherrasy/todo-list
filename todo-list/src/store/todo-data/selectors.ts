import { State } from '@/types/state.type';
import { ITodo } from '@/types/todo.interface';
import { TodosTab } from '@/utils/constant';
import { createSelector } from '@reduxjs/toolkit';

export const getTodosList = (state: State): ITodo[] | null => state.todos;

export const getFilteredTodos = (filter: string) =>
  createSelector(getTodosList, (todos) => {
    if (!todos) return null;
    switch (filter) {
      case TodosTab.Completed:
        return todos.filter((item) => item.completed && !item.deleted);
      case TodosTab.Current:
        return todos.filter((item) => !item.completed && !item.deleted);
      case TodosTab.Deleted:
        return todos.filter((item) => item.deleted);
      default:
        break ;
    }
  });
