//Delete a student from database
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5555/student/${id}`)
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student details:", error);
      });
  }, [id]);

  const deleteStudent = () => {
    axios
      .delete(`http://localhost:5555/student/${id}`)
      .then(() => {
        alert("Student Deleted");
        navigate("/"); // Redirect to the student list or any other page after deletion
      })
      .catch((error) => {
        alert("Error deleting student");
        console.error("Error deleting student:", error);
      });
  };

  return (
    <div className="container">
      <h2>Delete Student</h2>
      <div>
        <p>Student Name: {student.name}</p>
        <p>Student Age: {student.age}</p>
        <p>Student Gender: {student.gender}</p>
      </div>
      <button onClick={deleteStudent} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
