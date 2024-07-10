import React, { useState } from "react";
import { Link } from "react-router-dom";

 export default function studentlogin() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [loggedIn, setLoggedIn] = useState(false);

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check the entered username and password
//     if (username === "Admin@gmail.com" && password === "123") {
//       // If credentials are correct, set loggedIn to true
//       setLoggedIn(true);
//     } else {
//       // Display an alert for incorrect credentials
//       alert("Invalid credentials. Please try again.");
//     }
//   };

  return (
    <div className="container">
      <h2>Login Page</h2>
     
      <form >
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
      

      
    </div>
  );
}
