import { ILoginForm } from '@/types/login-form.interface';
import { AppRoute } from '@/utils/constant';
import { saveAuthStatus } from '@/utils/helpers';
import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
} from '@mui/material';
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
        <div className='login-form__field'>
          <FormControl variant='standard'>
            <InputLabel htmlFor='login'>Логин</InputLabel>
            <Input
              id='login'
              placeholder='Логин'
              autoComplete='off'
              {...register('login', {
                pattern: { value: regex, message: 'Неверный логин' },
                required: 'Заполните логин',
              })}
            />
            {errors.login && (
              <FormHelperText className='login-form__error'>
                {' '}
                {errors.login.message}
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <div className='login-form__field'>
          <FormControl variant='standard'>
            <InputLabel htmlFor='password'>Пароль</InputLabel>
            <Input
              id='password'
              placeholder='Пароль'
              autoComplete='off'
              {...register('password', {
                pattern: { value: regex, message: 'Неверный пароль' },
                required: 'Заполните пароль',
              })}
            />
            {errors.password && (
              <FormHelperText className='login-form__error'>
                {' '}
                {errors.password.message}
              </FormHelperText>
            )}
          </FormControl>
        </div>
        <Button type='submit' variant='contained' className='login-form__submit'>
          Войти
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
