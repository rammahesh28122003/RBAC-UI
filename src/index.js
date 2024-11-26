import React from 'react';
import ReactDOM from 'react-dom/client'; // Use the new `react-dom/client` API
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Ensure the ID matches the one in index.html
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
