import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newBook = {
      title,
      author,
      publishYear
    };

    axios.post("http://localhost:5555/books", newBook)
      .then(() => {
        alert("Book Added");
        // Clear input fields after successful submission
        setTitle("");
        setAuthor("");
        setPublishYear("");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className="container">
      <form onSubmit={sendData}>

        <div className="form-group">
          <label htmlFor="title">Book Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter Book Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="author">Book Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter Book Author"
            value={author}
            onChange={(e) => {
              setAuthor(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="publishYear">Publish Year</label>
          <input
            type="text"
            className="form-control"
            id="publishYear"
            placeholder="Enter Publish Year"
            value={publishYear}
            onChange={(e) => {
              setPublishYear(e.target.value);
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
