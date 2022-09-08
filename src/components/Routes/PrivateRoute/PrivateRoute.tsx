import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { useAppSelector } from 'hooks/useAppSelector';
import { IPrivateRoute } from 'types/IPrivateRoute';

const PrivateRoute: React.FC<IPrivateRoute> = ({
  children,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);

  return isLoggedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
