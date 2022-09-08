import { Navigate } from 'react-router-dom';
import { getIsLoggedIn } from 'redux/user/userSelectors';
import { useAppSelector } from 'hooks/useAppSelector';
import { IPublicRoute } from 'types/IPublicRoute';

const PublicRoute: React.FC<IPublicRoute> = ({
  children,
  restricted = false,
  redirectTo = '/',
}) => {
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  console.log('shouldRedirect', shouldRedirect);
  console.log('isLoggedIn', isLoggedIn);

  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

export default PublicRoute;
