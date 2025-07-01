import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import './styles/globals.css'; // 引入包含所有样式的CSS文件

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Get the root element
  const rootElement = document.getElementById('root');
  
  if (rootElement) {
    // Create a React root and render the App
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
});
