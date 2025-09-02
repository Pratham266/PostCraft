import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '../components/ui/button';

const Home = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.firstName}!
        </h1>
        <p className="text-gray-600">
          Ready to create some amazing social media content?
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Your Profile</h2>
          <div className="space-y-2">
            <p><span className="font-medium">Name:</span> {user?.firstName} {user?.lastName}</p>
            <p><span className="font-medium">Email:</span> {user?.email}</p>
            <p><span className="font-medium">User ID:</span> {user?.userId}</p>
            <p><span className="font-medium">Member since:</span> {new Date(user?.createdAt).toLocaleDateString()}</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-4">
            <Link to="/dashboard">
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                Go to Dashboard
              </Button>
            </Link>
            <p className="text-sm text-gray-600">
              Start creating amazing social media posts with AI
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
