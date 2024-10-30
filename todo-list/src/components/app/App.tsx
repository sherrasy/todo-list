import LoginPage from '@pages/login-page/login-page';
import MainPage from '@pages/main-page/main-page';
import { AppRoute } from '@utils/constant';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@components/private-route/private-route';
import { useAppDispatch } from '@/utils/hooks';
import { useEffect } from 'react';
import { fetchTodoList } from '@/store/todo-data/todo-data';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchTodoList())
  },[])
  return (
    <HashRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          index
          element={
            <PrivateRoute>
              <MainPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Login} element={<LoginPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
