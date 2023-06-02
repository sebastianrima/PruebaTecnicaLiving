//general imports
import React from 'react';
import ReactDOM from 'react-dom/client';
//Style
import './index.css';
//other pages
import App from './App';
import MentoresPreview from './pages/MentoresPreview/MentoresPreview';
import MentoresDetails from './pages/MentoresDetails/MentoresDetails';
import reportWebVitals from './reportWebVitals';
//router
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
//adding browser router to allow user to navigate trough the different pages
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
