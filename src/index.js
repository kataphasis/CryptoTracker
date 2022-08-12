import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthProvider } from './contexts/AuthProvider'
import { DataProvider } from './contexts/DataProvider'
import firebase from './firebase'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    
      <AuthProvider>
        <DataProvider>
          <App />
        </DataProvider>
      </AuthProvider>
    
  
);