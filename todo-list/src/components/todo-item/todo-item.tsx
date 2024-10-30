import { ITodo } from "@/types/todo.interface"

type TodoItemProps = {
  todo: ITodo
}
function TodoItem({todo}:TodoItemProps):JSX.Element {
const {text} = todo;
    return (
      <>
  {text}
      </>
    )
  }
  
  export default TodoItem
  