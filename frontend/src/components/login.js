import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check the entered username and password
    if (username === "Admin" && password === "123") {
      // If credentials are correct, set loggedIn to true
      setLoggedIn(true);
    } else {
      // Display an alert for incorrect credentials
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render the link based on the login status */}
      {loggedIn && (
        <div>
          <p>Logged in successfully!</p>
          <Link to="/add">Go to AddStudent</Link>
        </div>
      )}
    </div>
  );
}
