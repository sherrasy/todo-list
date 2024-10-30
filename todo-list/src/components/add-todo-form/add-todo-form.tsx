import { addNewTodo } from "@/store/todo-data/todo-data";
import { IAddTodoForm } from "@/types/add-todo-form.interface";
import { getTodoId } from "@/utils/helpers";
import { useAppDispatch } from "@/utils/hooks";
import { SubmitHandler, useForm } from "react-hook-form";

function AddTodoForm():JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset
  } = useForm<IAddTodoForm>({ mode: 'onBlur', reValidateMode: 'onChange' });
  const dispatch = useAppDispatch();
  const handleTodoSubmit: SubmitHandler<IAddTodoForm> = (data) => {
    const id = getTodoId()
    dispatch(addNewTodo({...data, id, completed:false, deleted:false}))
    reset();
  };
    return (
      <form onSubmit={handleSubmit(handleTodoSubmit)}>
          <div className='add-todo-form__fields'>
          <div className='add-todo-form__field'>
          <input
            type='text'
            placeholder="Текст вашей заметки"
            {...register('text', {
              required: { value: true, message: 'Введите текст заметки' },
            })}
            onChange={() => clearErrors('text')}
          />
          {errors.text && <p className='add-todo-form__error'> {errors.text.message}</p>}
          </div>
        <button type='submit' className='add-todo-form__submit'>Добавить</button>
      </div>
      </form>
    )
  }
  
  export default AddTodoForm
  