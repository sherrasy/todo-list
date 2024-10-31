import { useAppSelector } from '@/utils/hooks';
import TodoItem from '../todo-item/todo-item';
import {
  getFilteredTodos,
  getTodosList,
} from '@/store/todo-data/selectors';
import { TodosTab } from '@/utils/constant';
import { Tab, Tabs } from '@mui/material';
import { useState } from 'react';

function TodoList(): JSX.Element {
  const [searchTab, setSearchTab] = useState("Default")
    const tabName = searchTab
      ? TodosTab[searchTab as keyof typeof TodosTab]
      : TodosTab.Default;
    const selector = tabName  === TodosTab.Default ? getTodosList : getFilteredTodos(tabName);
    const todos = useAppSelector(selector);

    const handleTabClick = (tab:string)=> setSearchTab(tab);

    const tabs = Object.entries(TodosTab);
  return (
    <div className='todo-list__wrapper'>
      <div className='todo-list__tabs tabs'>
        <Tabs className='tabs__list' value={searchTab}>
          {tabs.map(([key, value]) => (
            <Tab
              key={key}
              className='tabs__item'
              label={value}
              value={key}
              onClick={()=>handleTabClick(key)}
              wrapped
            />
          ))}
        </Tabs>
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
