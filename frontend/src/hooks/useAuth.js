import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../store/slices/userSlice';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { token, isAuthenticated, loading, user } = useSelector((state) => state.user);

  useEffect(() => {
    // If we have a token but user is not authenticated, fetch profile
    if (token && !isAuthenticated && !loading) {
      console.log('useAuth: Token found, fetching profile...');
      dispatch(getProfile());
    }
  }, [token, isAuthenticated, loading, dispatch]);

  return {
    token,
    isAuthenticated,
    loading,
    user,
  };
};
