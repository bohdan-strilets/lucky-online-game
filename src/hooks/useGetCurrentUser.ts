import { useEffect } from 'react';
import { useAppSelector } from './useAppSelector';
import { getIsRefreshing } from 'redux/user/userSelectors';
import { useAppDispatch } from './useAppDispatch';
import userOperations from 'redux/user/userOperations';

const useGetCurrentUser = () => {
  const dispatch = useAppDispatch();
  const isRefreshing = useAppSelector(getIsRefreshing);

  useEffect(() => {
    dispatch(userOperations.getCurrentUser());
  }, [dispatch]);

  return { isRefreshing };
};

export default useGetCurrentUser;
