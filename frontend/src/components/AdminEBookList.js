import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";

const AdminEbookList = () => {
  const [eBooks, setEBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5555/ebooks');
      setEBooks(response.data);
    } catch (error) {
      console.error('Error fetching eBooks:', error);
      // Handle error
    }
  };

  const handleDownload = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5555/ebooks/download/${id}`, {
        responseType: 'blob'  // Ensure response type is blob for file download
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${id}.pdf`); // Set desired file name here
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading eBook:', error);
      // Handle error
    }
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredEBooks = eBooks.filter((eBook) =>
    eBook.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    eBook.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Book List</h1>
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search by book name or author"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>PDF</th>
          </tr>
        </thead>
        <tbody>
          {filteredEBooks.map((eBook) => (
            <tr key={eBook._id}>
              <td>{eBook.name}</td>
              <td>{eBook.author}</td>
              <td>
                <button className="btn btn-outline-success" onClick={() => handleDownload(eBook._id)}>Download PDF</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/AddEbook"  className="btn btn-success">
Add new E-book
</Link>

    </div>
  );
};




export default AdminEbookList;




