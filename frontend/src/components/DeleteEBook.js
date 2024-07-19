import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteEBook = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    deleteEBook();
  }, []);

  const deleteEBook = async () => {
    try {
      await axios.delete(`http://localhost:5555/ebooks/${id}`);
      alert('eBook deleted successfully');
      navigate('/AdminEbookList');
    } catch (error) {
      console.error('Error deleting eBook:', error);
      alert('Failed to delete eBook');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Deleting eBook...</h2>
    </div>
  );
};

export default DeleteEBook;
