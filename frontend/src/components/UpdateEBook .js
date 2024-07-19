import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const UpdateEBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [existingPdfPath, setExistingPdfPath] = useState('');

  useEffect(() => {
    fetchEBookDetails();
  }, []);

  const fetchEBookDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:5555/ebooks/${id}`);
      setName(response.data.name);
      setAuthor(response.data.author);
      setExistingPdfPath(response.data.pdfPath); // Set existing PDF path
    } catch (error) {
      console.error('Error fetching eBook details:', error);
      alert('Failed to fetch eBook details');
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);
    if (pdfFile) {
      formData.append('pdf', pdfFile);
    }

    try {
      await axios.put(`http://localhost:5555/ebooks/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('eBook updated successfully');
      navigate('/AdminEbookList');
    } catch (error) {
      console.error('Error updating eBook:', error);
      alert('Failed to update eBook');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Update eBook</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Current PDF:</label>
          {existingPdfPath ? (
            <div>
              <a href={`http://localhost:5555/${existingPdfPath}`} target="_blank" rel="noopener noreferrer">
                View Current PDF
              </a>
            </div>
          ) : (
            <p>No PDF uploaded</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="pdfFile">Upload New PDF:</label>
          <input
            type="file"
            className="form-control"
            id="pdfFile"
            onChange={(e) => setPdfFile(e.target.files[0])}
            accept=".pdf"
          />
        </div>
        <button type="submit" className="btn btn-primary">Update eBook</button>
      </form>
    </div>
  );
};

export default UpdateEBook;
