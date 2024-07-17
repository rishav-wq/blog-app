import React from 'react';
import { createRoot } from 'react-dom/client'; // Adjust import here
import App from './App';
import { ContextProvider } from './context/Context';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
