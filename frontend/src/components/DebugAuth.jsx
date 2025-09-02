import { useSelector } from 'react-redux';

const DebugAuth = () => {
  const { user, token, isAuthenticated, loading, error } = useSelector((state) => state.user);

  return (
    <div className="fixed top-4 right-4 bg-black bg-opacity-75 text-white p-4 rounded-lg text-xs max-w-xs">
      <h3 className="font-bold mb-2">Auth Debug</h3>
      <div className="space-y-1">
        <p>Token: {token ? '✅' : '❌'}</p>
        <p>Authenticated: {isAuthenticated ? '✅' : '❌'}</p>
        <p>Loading: {loading ? '✅' : '❌'}</p>
        <p>User: {user ? user.firstName : 'None'}</p>
        {error && <p className="text-red-300">Error: {error.error}</p>}
      </div>
    </div>
  );
};

export default DebugAuth;
