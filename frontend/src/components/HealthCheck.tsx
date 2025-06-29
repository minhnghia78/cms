import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchHealth } from '../slices/healthSlice';

const HealthCheck: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data: healthData, loading, error } = useAppSelector(state => state.health);

  useEffect(() => {
    dispatch(fetchHealth());
  }, [dispatch]);

  const getStatusIcon = () => {
    if (loading) return '🟡';
    if (error) return '🔴';
    if (healthData?.status === 'SUCCESS') return '🟢';
    return '⚪';
  };

  const getStatusText = () => {
    if (loading) return 'Checking Backend...';
    if (error) return 'Backend Disconnected';
    if (healthData?.status === 'SUCCESS') return 'Backend Connected';
    return 'Unknown Status';
  };

  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-center gap-3">
        <span className="text-2xl animate-pulse">{getStatusIcon()}</span>
        <span className="font-semibold text-gray-700">{getStatusText()}</span>
        <button 
          onClick={() => dispatch(fetchHealth())}
          disabled={loading}
          className="ml-4 p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          title="Refresh health check"
        >
          🔄
        </button>
      </div>
      
      {healthData && (
        <div className="mt-2 text-center text-sm text-gray-600">
          <span className="font-medium">Message:</span> {healthData.message} | 
          <span className="font-medium ml-2">Status:</span> {healthData.status}
        </div>
      )}
      
      {error && (
        <div className="mt-2 text-center text-sm text-red-600">
          <span className="font-medium">Error:</span> {error}
          <br />
          <span className="text-xs">Make sure the Spring Boot backend is running on port 8080</span>
        </div>
      )}
    </div>
  );
};

export default HealthCheck; 