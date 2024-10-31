import { ITodo } from '@/types/todo.interface';
import sprite from '/sprite.svg';
import { useAppDispatch } from '@/utils/hooks';
import { removeTodo, updateTodo } from '@/store/todo-data/todo-data';

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
          <svg className='icon' onClick={handleCompletedClick}>
            <use xlinkHref={`${sprite}#check`}></use>
          </svg>
        )}
        {!deleted && (
          <svg className='icon' onClick={handleAddToTrashClick}>
            <use xlinkHref={`${sprite}#trash`}></use>
          </svg>
        )}
        {deleted && (
          <svg className='icon' onClick={handleDeletedClick}>
            <use xlinkHref={`${sprite}#x`}></use>
          </svg>
        )}
      </div>
    </div>
  );
}

export default TodoItem;
