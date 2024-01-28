import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function UpdateBook() {
  const { id } = useParams();

  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    publishYear: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the book details based on the ID when the component mounts
    axios.get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        const book = response.data;
        setBookData({
          title: book.title || "",
          author: book.author || "",
          publishYear: book.publishYear || "",
        });
        setIsLoading(false); // Set loading to false after fetching data
      })
      .catch((err) => {
        console.error("Error fetching book details:", err);
        setIsLoading(false); // Set loading to false in case of an error
      });
  }, [id]);

  function updateData(e) {
    e.preventDefault();
    const updatedBook = {
      title: bookData.title,
      author: bookData.author,
      publishYear: bookData.publishYear,
    };

    // Update the book details based on the ID
    axios.put(`http://localhost:5555/books/${id}`, updatedBook)
      .then(() => {
        alert("Book Updated");
      })
      .catch((err) => {
        alert(err);
      });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h2>Update Book Details</h2>
      
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <form onSubmit={updateData}>
          <div className="form-group">
            <label htmlFor="title">Book Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={bookData.title}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="author">Book Author</label>
            <input
              type="text"
              className="form-control"
              id="author"
              name="author"
              value={bookData.author}
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="publishYear">Publish Year</label>
            <input
              type="text"
              className="form-control"
              id="publishYear"
              name="publishYear"
              value={bookData.publishYear}
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

