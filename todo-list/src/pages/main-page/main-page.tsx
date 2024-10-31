import AddTodoForm from '@/components/add-todo-form/add-todo-form';
import TodoList from '@/components/todo-list/todo-list';
import { clearAllTodos } from '@/store/todo-data/todo-data';
import { useAppDispatch } from '@/utils/hooks';
import { Button } from '@mui/material';
import ClearAllIcon from '@mui/icons-material/ClearAll';

function MainPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClearList = () => dispatch(clearAllTodos());

  return (
    <div className='main-page__container'>
      <div className='main-page__controls-section'>
        <AddTodoForm />
        <Button className='main-page__clear-btn' onClick={handleClearList}>
          <span>Очистить </span>
          <ClearAllIcon className='icon' />
        </Button>
      </div>
      <div className='main-page__list-section'>
        <TodoList />
      </div>
    </div>
  );
}

export default MainPage;
