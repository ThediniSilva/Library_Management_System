import React from "react";
import { Link } from "react-router-dom";


function loginPage() {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <img src="../Image/3.png" className="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/login" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <img src="../Image/2.png" className="card-img-top" alt="Image" />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to="/Studentlogin" className="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginPage;
