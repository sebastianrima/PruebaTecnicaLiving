//general imports
import React from 'react';
import logo from './logo.svg';
//Style
import './App.css';
//other pages
import MentoresDetails from './pages/MentoresDetails/MentoresDetails';
import MentoresPreview from './pages/MentoresPreview/MentoresPreview';
import { Routes, Route, Navigate } from 'react-router-dom';

//this redirects automaticly to Mentores Preview and creates the diferent routes
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/MentoresPreview"/>}/>
        <Route path="/MentoresPreview" element={<MentoresPreview/>}/>
        <Route path="/MentoresDetails" element={<MentoresDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
