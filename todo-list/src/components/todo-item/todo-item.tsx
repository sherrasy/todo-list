import { ITodo } from "@/types/todo.interface"
import sprite from '/sprite.svg';

type TodoItemProps = {
  todo: ITodo
}
function TodoItem({todo}:TodoItemProps):JSX.Element {
const {text} = todo;
    return (
      <div className="todo-item__wrapper">
        <div className="todo-item__text">
        <span>{text}</span>
        </div>
        <div className="todo-item__controls">
        <svg className='icon' onClick={()=>{}}>
            <use xlinkHref={`${sprite}#check`}></use>
          </svg>
        <svg className='icon' onClick={()=>{}}>
            <use xlinkHref={`${sprite}#trash`}></use>
          </svg>
        </div>
      </div>
    )
  }
  
  export default TodoItem
  