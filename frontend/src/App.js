import React,{useState} from "react";
import './App.css';
import { SnackbarProvider } from 'notistack';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import AddStudent from './components/AddStudent';
import AllStudents from "./components/AllStudents";
import UpdateStudent from "./components/UpdateStudent";
import DeleteStudent from "./components/DeleteStudent";
import Login from "./components/login";
import CreteBooks from "./components/CreateBooks";
import AllBooks from "./components/AllBooks";
import UpdateBooks from "./components/UpdateBooks";
import DeleteBooks from "./components/DeleteBooks";
import Studentlogin from "./components/studentLogin";
import LoginPage from "./components/loginPage";
import AdminAllBooks from "./components/AdminBooklist";
import Admindashboard from "./components/AdminDashboard";
import Home from "./components/Home";


function App() {
  return (
    <div>
      {/* Adding routers */}
    <Router>
      <Header />
      <SnackbarProvider maxSnack={3}>
      <Routes>
        <Route path="/add" element={<AddStudent />} /> {/*Add student page*/}
        <Route path="/AllStudents" element={<AllStudents />} /> 
        <Route path="/add" element={<AddStudent />} /> 
        <Route path="/update/:id" element={<UpdateStudent />} /> 
        <Route path="/delete/:id" element={<DeleteStudent />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/CreteBooks" element={<CreteBooks />} /> 
        <Route path="/AllBooks" element={<AllBooks />} /> 
        <Route path="/UpdateBooks/:id" element={<UpdateBooks />} />
        <Route path="/DeleteBooks/:id" element={<DeleteBooks />} />
        <Route path="/Studentlogin" element={<Studentlogin />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/AdminAllBooks" element={<AdminAllBooks />} />
        <Route path="/Admindashboard" element={<Admindashboard />} />
        <Route path="/" element={<Home />} />
        

      </Routes>
      </SnackbarProvider>
      
    </Router>
  </div>
    
  )
}

export default App;
