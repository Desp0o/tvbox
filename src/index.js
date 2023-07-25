import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ModalContextProvider } from './components/modalContext';
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalContextProvider>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ModalContextProvider>
);