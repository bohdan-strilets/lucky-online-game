import { useEffect } from 'react';
import { useAppSelector } from './useAppSelector';
import { getIsRefreshing, getToken } from 'redux/user/userSelectors';
import { useAppDispatch } from './useAppDispatch';
import userOperations from 'redux/user/userOperations';

const useGetCurrentUser = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);
  const token = useAppSelector(getToken);

  useEffect(() => {
    if (token) {
      dispatch(userOperations.getCurrentUser());
    }
  }, [dispatch]);

  return { isRefreshing };
};

export default useGetCurrentUser;
