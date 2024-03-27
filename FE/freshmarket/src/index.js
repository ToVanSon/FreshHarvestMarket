import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/users/homePage';
import { BrowserRouter } from 'react-router-dom';
import RoutersCustom from './router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <RoutersCustom/>
  
  </BrowserRouter>
);
