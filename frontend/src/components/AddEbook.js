import React, { useState } from 'react';
import axios from 'axios';

const AddEbook = () => {
  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [pdfFile, setPdfFile] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('author', author);
    formData.append('pdf', pdfFile);

    try {
      await axios.post('http://localhost:5555/ebooks/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      alert('eBook uploaded successfully');
      // Clear form fields after successful upload
      setName('');
      setAuthor('');
      setPdfFile(null);
    } catch (error) {
      console.error('Error uploading eBook:', error);
      alert('Failed to upload eBook');
    }
  };

  return (
    <div className="container">
      <h2>Add New eBook</h2>
      <form onSubmit={handleFormSubmit}>
   
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text"  className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author:</label>
          <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        </div>
        <div class="mb-3"> 
          <label for="formFile" class="form-label">Upload PDF:</label>
          <input class="form-control" type="file" id="formFile" onChange={(e) => setPdfFile(e.target.files[0])} accept=".pdf" required />
        </div>
        <button type="submit" className
        ="btn btn-primary">Upload eBook</button>
      </form>
    </div>
  );
};

export default AddEbook;
