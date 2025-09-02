import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getProfile } from '../store/slices/userSlice';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, token, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ProtectedRoute effect:', { token: !!token, isAuthenticated, loading });
    
    // If we have a token but user is not authenticated, try to get profile
    if (token && !isAuthenticated && !loading) {
      console.log('ProtectedRoute: Fetching profile...');
      dispatch(getProfile());
    } else if (!token && !loading) {
      // If no token and not loading, redirect to login
      console.log('ProtectedRoute: No token, redirecting to login...');
      navigate('/login');
    }
  }, [token, isAuthenticated, loading, navigate, dispatch]);

  // Show loading while checking authentication or fetching profile
  if (loading || (token && !isAuthenticated)) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // If no token and not loading, don't render (will redirect)
  if (!token && !loading) {
    return null;
  }

  // If authenticated, render children
  if (isAuthenticated) {
    return children;
  }

  // Default case - don't render
  return null;
};

export default ProtectedRoute;
