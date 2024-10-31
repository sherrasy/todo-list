import { ITodo } from '@/types/todo.interface';
import { useAppDispatch } from '@/utils/hooks';
import { removeTodo, updateTodo } from '@/store/todo-data/todo-data';
import { Check, Clear, Delete } from '@mui/icons-material';

type TodoItemProps = {
  todo: ITodo;
};
function TodoItem({ todo }: TodoItemProps): JSX.Element {
  const dispatch = useAppDispatch();
  const { id,text, completed, deleted } = todo;

  const handleCompletedClick = () =>
    dispatch(updateTodo({ ...todo, completed: !completed }));
  const handleAddToTrashClick = () =>
    dispatch(updateTodo({ ...todo, deleted: true }));
  const handleDeletedClick = () =>
    dispatch(removeTodo(id));

  return (
    <div
      className={`todo-item__wrapper ${completed ? 'completed-todo' : ''} ${
        deleted ? 'deleted-todo' : ''
      }`}
    >
      <div className='todo-item__text'>
        <span>{text}</span>
      </div>
      <div className='todo-item__controls'>
        {(!completed && !deleted) && (
          <Check className='icon' onClick={handleCompletedClick}/>
        )}
        {!deleted && (
          <Delete className='icon' onClick={handleAddToTrashClick}/>
        )}
        {deleted && (
          <Clear className='icon' onClick={handleDeletedClick}/>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
