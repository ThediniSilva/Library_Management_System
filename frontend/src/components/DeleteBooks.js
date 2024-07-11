import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function DeleteBook() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.error("Error fetching book details:", error);
      });
  }, [id]);

  const deleteBook = () => {
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        alert("Book Deleted");
        navigate("/AdminAllBooks"); // Redirect to the book list or any other page after deletion
      })
      .catch((error) => {
        alert("Error deleting book");
        console.error("Error deleting book:", error);
      });
  };

  return (
    <div className="container">
      <h2>Delete Book</h2>
      <div>
        <p>Book Title: {book.title}</p>
        <p>Book Author: {book.author}</p>
        <p>price: {book.price}</p>
        <p>quantity: {book.quantity}</p>
      </div>
      <button onClick={deleteBook} className="btn btn-danger">
        Delete
      </button>
    </div>
  );
}
