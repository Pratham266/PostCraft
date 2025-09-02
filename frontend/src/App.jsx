import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import DebugAuth from './components/DebugAuth';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';

// Component to handle initial app setup
const AppInitializer = ({ children }) => {
  // This hook will automatically handle token restoration and profile fetching
  useAuth();

  return (
    <>
      {children}
      <DebugAuth />
    </>
  );
};

function App() {
  return (
    <Provider store={store}>
      <AppInitializer>
        <Router>
          <Routes>
            {/* Auth pages (no layout) */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            
            {/* Main app pages (with layout and protection) */}
            <Route path="/" element={
              <ProtectedRoute>
                <Layout>
                  <Home />
                </Layout>
              </ProtectedRoute>
            } />
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } />
            <Route path="/about" element={
              <ProtectedRoute>
                <Layout>
                  <About />
                </Layout>
              </ProtectedRoute>
            } />
          </Routes>
        </Router>
      </AppInitializer>
    </Provider>
  );
}

export default App;
