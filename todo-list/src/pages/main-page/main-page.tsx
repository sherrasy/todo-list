import AddTodoForm from '@/components/add-todo-form/add-todo-form';
import TodoItem from '@/components/todo-item/todo-item';

function MainPage(): JSX.Element {
  return (
    <>
      <AddTodoForm />
      <TodoItem />
    </>
  );
}

export default MainPage;
