import { addNewTodo } from '@/store/todo-data/todo-data';
import { IAddTodoForm } from '@/types/add-todo-form.interface';
import { getTodoId } from '@/utils/helpers';
import { useAppDispatch } from '@/utils/hooks';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import sprite from '/sprite.svg';
import { useEffect, useRef } from 'react';

function AddTodoForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = useForm<IAddTodoForm>({ mode: 'onBlur', reValidateMode: 'onSubmit' });
  const dispatch = useAppDispatch();
  const timerRef = useRef<ReturnType<typeof setTimeout>  | null>(null);
  const handleTodoSubmit: SubmitHandler<IAddTodoForm> = (data) => {
    const id = getTodoId();
    dispatch(addNewTodo({ ...data, id, completed: false, deleted: false }));
    reset();
  };

  const handleErrors: SubmitErrorHandler<IAddTodoForm> = () => {
    timerRef.current = setTimeout(() => {
      clearErrors('text');
    }, 4000);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [errors]);
  
  return (
    <form onSubmit={handleSubmit(handleTodoSubmit, handleErrors)}>
      <div className='add-todo-form__fields'>
        <div className='add-todo-form__field'>
          <input
            type='text'
            placeholder='Пополните список...'
            autoComplete='off'
            {...register('text', {
              required: 'Введите текст задачи' ,
            })}
          />
          {errors.text && (
            <p className='add-todo-form__error'> {errors.text.message}</p>
          )}
        </div>
        <button type='submit' className='add-todo-form__submit'>
          <svg className='icon'>
            <use xlinkHref={`${sprite}#plus`}></use>
          </svg>
          <span>Добавить</span>
        </button>
      </div>
    </form>
  );
}

export default AddTodoForm;
