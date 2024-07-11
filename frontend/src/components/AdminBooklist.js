import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchFeature from "../Sections/SearchFeature";

export default function AdminAllBooks() {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    function getBooks() {
      axios
        .get("http://localhost:5555/books")
        .then((res) => {
          if (Array.isArray(res.data.data)) {
            setBooks(res.data.data);
            setFilteredBooks(res.data.data); // Initially set filtered books to all books
          } else {
            console.error("Invalid data structure:", res.data);
            setBooks([]);
            setFilteredBooks([]);
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
      {/* Search bar */}
      <SearchFeature books={books} setFilteredBooks={setFilteredBooks} />
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book) => (
            <tr key={book._id}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.price}</td>
              <td> {book.quantity}</td>
              <td>
                
                <Link to={`/UpdateBooks/${book._id}`} className="mr-2">
                  Update
                </Link>
                <Link to={`/DeleteBooks/${book._id}`} className="mr-2">
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
