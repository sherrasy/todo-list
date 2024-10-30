import LoginPage from '@pages/login-page/login-page';
import MainPage from '@pages/main-page/main-page';
import { AppRoute } from '@utils/constant';
import { HashRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from '@components/private-route/private-route';

function App(): JSX.Element {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
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
