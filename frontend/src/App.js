import React,{useState} from "react";
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddStudent from './components/AddStudent';
import AllStudents from "./components/AllStudents";


function App() {
  return (
    <div>
      {/* Adding routers */}
    <Router>
      <Header />
      
      <Routes>
        <Route path="/add" element={<AddStudent />} /> {/*Add student page*/}
        <Route path="/" element={<AllStudents />} /> 
      </Routes>
      
    </Router>
  </div>
    
  )
}

export default App;
