import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function AllBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    function getBooks() {
      axios
        .get("http://localhost:5555/books")
        .then((res) => {
          if (Array.isArray(res.data.data)) {
            setBooks(res.data.data);
          } else {
            console.error("Invalid data structure:", res.data);
            setBooks([]);
          }
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getBooks();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">All Books</h1>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Publish Year</th>
            {/* Action is for CRUD operation */}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publishYear}</td>
              <td>
                <Link to={`/CreteBooks`} className="mr-2">
                  Add
                </Link>
                <Link to={`/UpdateBooks/${book._id}`} className="mr-2">
                 Update
              </Link>

                <Link to={`/DeleteBooks/${book._id}`}>
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
