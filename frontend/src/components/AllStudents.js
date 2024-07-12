import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudent() {
      axios
        .get("http://localhost:5555/student")
        .then((res) => {
          if (Array.isArray(res.data.data)) {
            setStudents(res.data.data);
          } else {
            console.error("Invalid data structure:", res.data);
            setStudents([]);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    
    getStudent();
  }, []);

  const linkStyle = {
    textDecoration: "none",
    color: "white",
  };
  const customBtnStyle = {
    marginRight: "10px", // Adjust the margin as needed
  };


  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Students</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            {/* Action is for crud operation */}
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
             
                <Link
                  to={`/update/${student._id}`}
                  style={{ ...linkStyle, ...customBtnStyle }}
                  className="btn btn-primary"
                >
                  Update
                </Link>
                <Link
                  to={`/delete/${student._id}`}
                  style={linkStyle}
                  className="btn btn-danger"
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link
                  to={`/add`}
                  style={{ ...linkStyle, ...customBtnStyle }}
                  className="btn btn-success"
                >
                  Add New Student
                </Link>
    </div>
  );
}
