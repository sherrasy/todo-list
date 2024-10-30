import { ILoginForm } from '@/types/login-form.interface';
import { AppRoute } from '@/utils/constant';
import { saveAuthStatus } from '@/utils/helpers';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function LoginForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<ILoginForm>({ mode: 'onBlur', reValidateMode: 'onChange' });
  const navigate = useNavigate();
  const regex = /^admin$/i;
  const handleLoginSubmit: SubmitHandler<ILoginForm> = () => {
    saveAuthStatus();
    navigate(AppRoute.Main)
  };
  return (
    <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <div className='login-form__fields'>
          <label className='login-form__field'>
            <span>Логин </span>
          <input
            type='text'
            {...register('login', {
              required: { value: true, message: 'Обязательное поле' },
              pattern: { value: regex, message: 'Неверный логин' },
            })}
            onChange={() => clearErrors('login')}
          /></label>
          {errors.login && <p className='login-form__error'> {errors.login.message}</p>}
           <label className='login-form__field'>
            <span>Пароль</span>
          <input
            type='text'
            {...register('password', {
              required: { value: true, message: 'Обязательное поле' },
              pattern: { value: regex, message: 'Неверный пароль' },
            })}
            onChange={() => clearErrors('password')}
          /></label>
          {errors.password && <p className='login-form__error'> {errors.password.message}</p>}
        <button type='submit' className='login-form__submit'>Войти</button>
      </div>
    </form>
  );
}

export default LoginForm;
