import React,{useState} from "react";
import './App.css';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddStudent from './components/AddStudent';
import AllStudents from "./components/AllStudents";
import UpdateStudent from "./components/UpdateStudent";
import DeleteStudent from "./components/DeleteStudent";


function App() {
  return (
    <div>
      {/* Adding routers */}
    <Router>
      <Header />
      <SnackbarProvider maxSnack={3}>
      <Routes>
        <Route path="/add" element={<AddStudent />} /> {/*Add student page*/}
        <Route path="/" element={<AllStudents />} /> 
        <Route path="/add" element={<AddStudent />} /> 
        <Route path="/update/:id" element={<UpdateStudent />} /> 
        <Route path="/delete/:id" element={<DeleteStudent />} /> 
      </Routes>
      </SnackbarProvider>
      
    </Router>
  </div>
    
  )
}

export default App;
