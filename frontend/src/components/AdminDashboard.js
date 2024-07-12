import React from "react";
import "./Admindashboard.css"; // Import your CSS file

export default function Admindashboard() {
  return (
    <div className="container admin-dashboard">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card">
            <div className="card-blur-overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Book List</h5>
              <p className="card-text">Add new books and view book list here.</p>
              <a href="/AdminAllBooks" className="btn btn-primary">Go To Book List</a>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-blur-overlay"></div>
            <div className="card-body">
              <h5 className="card-title">Student List</h5>
              <p className="card-text">Add new Student and view Student list here..</p>
              <a href="/AllStudents" className="btn btn-primary">Go To Student List</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
