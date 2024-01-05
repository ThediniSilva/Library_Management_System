import React,{useState} from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddStudent from './components/AddStudent';


function App() {
  return (
    <div>
      {/* Adding routers  */}
    <Router>
      <Header />
      <Routes>
        <Route path="/add" element={<AddStudent />} /> 
      </Routes>
    </Router>
  </div>
    
  )
}

export default App;
