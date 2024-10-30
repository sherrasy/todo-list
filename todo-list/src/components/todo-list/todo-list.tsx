import { useAppSelector } from '@/utils/hooks';
import TodoItem from '../todo-item/todo-item';
import { getTodosList } from '@/store/todo-data/selectors';

function TodoList(): JSX.Element {
  const todos = useAppSelector(getTodosList);
  return (
    <div>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <TodoItem todo={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
