import { Navigate } from 'react-router-dom';
import { AppRoute } from '@utils/constant';
import { getAuthStatus } from '@utils/helpers';

type PrivateRouteProps = {
  children:JSX.Element;
}
function PrivateRoute({children }:PrivateRouteProps): JSX.Element {
  const status = getAuthStatus();
  const isAuthorized = status ==='authorized';

  return (
    isAuthorized ? children : <Navigate to={AppRoute.Login}/>
  );
}

export default PrivateRoute;
