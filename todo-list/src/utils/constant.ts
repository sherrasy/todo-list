export const AppRoute = {
  Main: '/',
  Login: '/auth',
} as const;

export const TodosTab = {
  Current: 'Текущие дела',
  Default: 'Все дела',
  Completed: 'Выполненные дела',
  Deleted: 'Корзина',
} as const;

export const REDUCER_NAME = 'TODOS';