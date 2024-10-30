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

export const getTodos = (): string | null => {
  const todos = localStorage.getItem(TODOS);
  return todos ?? null;
};

export const saveTodos = (data: string): void => {
  localStorage.setItem(TODOS, data);
};

export const removeAllTodos = (): void => {
  localStorage.removeItem(TODOS);
};
