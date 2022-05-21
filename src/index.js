import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import { makeServer } from './server';
import { AuthProvider, QuizProvider, ToastProvider, ThemeProvider } from './contexts';


makeServer();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <ToastProvider>
            <QuizProvider>
              <App />
            </QuizProvider>
          </ToastProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);

