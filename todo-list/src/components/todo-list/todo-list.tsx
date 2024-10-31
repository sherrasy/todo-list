import { useAppSelector } from '@/utils/hooks';
import TodoItem from '../todo-item/todo-item';
import {
  getFilteredTodos,
  getTodosList,
} from '@/store/todo-data/selectors';
import { Link, useSearchParams } from 'react-router-dom';
import { TodosTab } from '@/utils/constant';

function TodoList(): JSX.Element {
  const [searchParams] = useSearchParams();
  const searchTab = searchParams.get('tab');
    const tabName = searchTab
      ? TodosTab[searchTab as keyof typeof TodosTab]
      : TodosTab.Default;
    const selector = tabName  === TodosTab.Default ? getTodosList : getFilteredTodos(tabName);
    const todos = useAppSelector(selector);

  const tabs = Object.entries(TodosTab);

  return (
    <div className='todo-list__wrapper'>
      <div className='todo-list__tabs tabs'>
        <ul className='tabs__list'>
          {tabs.map(([key, value]) => (
            <li
              key={key}
              className={`tabs__item ${
                searchTab === key ? 'tabs__item--active' : ''
              }`}
            >
              <Link to={`?tab=${key}`} className='tabs__link'>
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='todo-list__container todos'>
        <ul className='todos__list'>
          {todos?.map((todo) => (
            <li key={todo.id} className='todos__item'>
              <TodoItem todo={todo} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
