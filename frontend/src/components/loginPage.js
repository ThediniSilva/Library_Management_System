import React from "react";
import { Link } from "react-router-dom";


function loginPage() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="../Image/5.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">Admin Login</h5>
              <p className="card-text">Librarian can login to the site using this login button.</p>
              <Link to="/login" className="btn btn-primary">Log-in</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="../Image/7.jpg" className="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">Student Login</h5>
              <p className="card-text">Students can login to the site using this login butto
              </p><br/>
              <Link to="/Studentlogin" className="btn btn-primary">Log-in</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
