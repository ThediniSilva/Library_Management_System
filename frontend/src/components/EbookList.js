import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EbookList = () => {
  const [eBooks, setEBooks] = useState([]);

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

  return (
    <div>
      <h2>Book List</h2>
      <ul>
        {eBooks.map((eBook) => (
          <li key={eBook._id}>
            <div>
              <strong>Name:</strong> {eBook.name}
            </div>
            <div>
              <strong>Author:</strong> {eBook.author}
            </div>
            <div>
              <button onClick={() => handleDownload(eBook._id)}>Download PDF</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EbookList;
