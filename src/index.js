import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap the App component with BrowserRouter */}
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

