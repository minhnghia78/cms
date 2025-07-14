import React, { useState } from 'react';
import Header from './Header';
import ForumSidebar from './ForumSidebar';
import TrendingContent from './TrendingContent';
import { X } from 'lucide-react';

interface ForumLayoutProps {
  children?: React.ReactNode;
}

const ForumLayout: React.FC<ForumLayoutProps> = ({ children }) => {
  // Mock user data - replace with actual auth context later
  const mockUser = {
    name: 'mnghialeo'
  };

  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <Header user={mockUser} />
      
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Forum Categories */}
          <div className="lg:col-span-2">
            <ForumSidebar />
          </div>
          
          {/* Right Sidebar - Trending Content */}
          <div className="lg:col-span-2">
            <TrendingContent />
          </div>
        </div>
        
        {/* Additional Content Area */}
        {children && (
          <div className="mt-6">
            {children}
          </div>
        )}
      </div>
      
      {/* Notification Banner */}
      {showNotification && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-3 max-w-lg">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-sm">📢</span>
            </div>
            <span className="text-sm flex-1">VOZ would like your permission to enable push notifications.</span>
            <div className="flex space-x-2">
              <button 
                className="bg-blue-500 hover:bg-blue-400 px-3 py-1 rounded text-xs transition-colors"
                onClick={() => setShowNotification(false)}
              >
                Allow
              </button>
              <button 
                className="bg-gray-500 hover:bg-gray-400 px-3 py-1 rounded text-xs transition-colors"
                onClick={() => setShowNotification(false)}
              >
                Block
              </button>
            </div>
            <button 
              className="text-blue-200 hover:text-white p-1"
              onClick={() => setShowNotification(false)}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForumLayout; 