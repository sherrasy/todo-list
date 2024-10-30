import { ITodo } from "@/types/todo.interface";

export const AUTH_STATUS = 'todo-auth-status';
export const TODOS = 'todo-list';

export const getAuthStatus = (): string | null => {
  const status = localStorage.getItem(AUTH_STATUS);
  return status ?? null;
};

export const saveAuthStatus = () => {
  localStorage.setItem(AUTH_STATUS, 'authorized');
};

export const getTodoId = (): number =>
  Math.floor(Math.random() * (100 - 1 + 1)) + 1;

export const getTodos = (): ITodo[] | null => {
  const todosData:string|null = localStorage.getItem(TODOS);
  if(!todosData){
    return null;
  }
  const todos = JSON.parse(todosData);
  return todos;
};

export const saveTodos = (data: ITodo[] | null): void => {
  if(!data){
    return;
  }
  const todosData = JSON.stringify(data)
  localStorage.setItem(TODOS, todosData);
};

export const removeAllTodos = (): void => {
  localStorage.removeItem(TODOS);
};
