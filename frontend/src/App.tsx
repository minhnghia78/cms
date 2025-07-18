import React from 'react';
import ForumLayout from './components/ForumLayout';
import './App.css';
import { useNotifications } from './hooks';

function App() {
  // Initialize notifications system
  useNotifications();

  return (
    <>
      <ForumLayout />
    </>
  );
}

export default App;
