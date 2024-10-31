import { ILoginForm } from '@/types/login-form.interface';
import { AppRoute } from '@/utils/constant';
import { saveAuthStatus } from '@/utils/helpers';
import { useEffect, useRef } from 'react';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILoginForm>({ mode: 'onBlur', reValidateMode: 'onSubmit' });
  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout>  | null>(null);

  const regex = /^admin$/i;
  const handleLoginSubmit: SubmitHandler<ILoginForm> = () => {
    saveAuthStatus();
    navigate(AppRoute.Main);
  };
  
  const handleErrors: SubmitErrorHandler<ILoginForm> = () => {
    timerRef.current = setTimeout(() => {
      clearErrors(['login', 'password']);
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
    <form onSubmit={handleSubmit(handleLoginSubmit, handleErrors)}>
      <div className='login-form__fields'>
        <label className='login-form__field'>
          <span>Логин </span>
          <input
            type='text'
            autoComplete='off'
            {...register('login', {
              pattern: { value: regex, message: 'Неверный логин' },
              required: 'Заполните логин',
            })}
          />
        </label>
        {errors.login && (
          <p className='login-form__error'> {errors.login.message}</p>
        )}
        <label className='login-form__field'>
          <span>Пароль</span>
          <input
            type='text'
            autoComplete='off'
            {...register('password', {
              pattern: { value: regex, message: 'Неверный пароль' },
              required: 'Заполните пароль',
            })}
          />
        </label>
        {errors.password && (
          <p className='login-form__error'> {errors.password.message}</p>
        )}
        <button type='submit' className='login-form__submit'>
          Войти
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
