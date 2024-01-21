//Update student details 
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateStudent() {
  const { id } = useParams();

  const [studentData, setStudentData] = useState({
    name: "",
    age: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the student details based on the ID when the component mounts
    axios.get(`http://localhost:5555/student/${id}`)
      .then((response) => {
        const student = response.data;
        setStudentData({
          name: student.name || "",
          age: student.age || "",
          gender: student.gender || "",
        });
        setIsLoading(false); // Set loading to false after fetching data
      })
      .catch((err) => {
        console.error("Error fetching student details:", err);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  function updateData(e) {
    e.preventDefault();
    const updatedStudent = {
      name: studentData.name,
      age: studentData.age,
      gender: studentData.gender,
    };

    // Update the student details based on the ID
    axios.put(`http://localhost:5555/student/${id}`, updatedStudent)
      .then(() => {
        alert("Student Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>Update Student Details</h2>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={updateData}>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={studentData.name}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="age">Student Age</label>
            <input
              type="text"
              className="form-control"
              id="age"
              name="age"
              value={studentData.age}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="gender">Student Gender</label>
            <input
              type="text"
              className="form-control"
              id="gender"
              name="gender"
              value={studentData.gender}
              onChange={handleInputChange}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update
          </button>
        </form>
      )}
    </div>
  );
}
