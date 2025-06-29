import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { fetchHealth } from './slices/healthSlice';
import { fetchUsers } from './slices/usersSlice';
import { fetchCategories } from './slices/categoriesSlice';
import { fetchPosts } from './slices/postsSlice';
import HealthCheck from './components/HealthCheck';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Categories from './components/Categories';
import Posts from './components/Posts';

function AppContent() {
  const dispatch = useAppDispatch();
  const { data: healthData, loading: healthLoading } = useAppSelector(state => state.health);
  const [currentView, setCurrentView] = React.useState<'dashboard' | 'users' | 'categories' | 'posts'>('dashboard');

  useEffect(() => {
    // Check backend health on app start
    dispatch(fetchHealth());
  }, [dispatch]);

  useEffect(() => {
    // Load initial data if backend is healthy
    if (healthData?.status === 'SUCCESS') {
      dispatch(fetchUsers());
      dispatch(fetchCategories());
      dispatch(fetchPosts());
    }
  }, [healthData, dispatch]);

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'users':
        return <Users />;
      case 'categories':
        return <Categories />;
      case 'posts':
        return <Posts />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <HealthCheck />
      
      <div className="flex">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
