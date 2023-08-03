import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ModalContextProvider } from './components/modalContext';
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ModalContextProvider>
    <Router>
      <ScrollToTop />
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </ModalContextProvider>
);