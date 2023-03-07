import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { ChatContextProvider } from './context/ChatContext';
import { DarkModeContextProvider } from './context/darkModeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <ChatContextProvider>
      <DarkModeContextProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </DarkModeContextProvider>
    </ChatContextProvider>
  </AuthContextProvider>
);
