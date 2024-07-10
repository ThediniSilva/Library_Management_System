import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchFeature from "../Sections/SearchFeature";

export default function AllBooks() {
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

  const addToCart = (book) => {
    const updatedCart = [...cart, book];
    setCart(updatedCart);
  
    // Calculate total amount
    const totalPrice = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalAmount(totalPrice);
  };

  const removeFromCart = (bookId) => {
    const updatedCart = cart.filter((item) => item._id !== bookId);
    setCart(updatedCart);
    
    // Calculate total amount
    const totalPrice = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalAmount(totalPrice);
  };

  const updateCartItemQuantity = (bookId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item._id === bookId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCart(updatedCart);
    
    // Calculate total amount
    const totalPrice = updatedCart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotalAmount(totalPrice);
  };

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
              <td>
                <input 
                  type="number" 
                  value={book.quantity || 1} 
                  onChange={(e) => {
                    const newQuantity = parseInt(e.target.value);
                    updateCartItemQuantity(book._id, newQuantity);
                  }} 
                />
              </td>
              <td>
                <button onClick={() => addToCart(book)}>Add to Cart</button>
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

      {/* Shopping Cart */}
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - ${item.price * item.quantity} ({item.quantity} {item.quantity > 1 ? 'books' : 'book'})
              <button onClick={() => removeFromCart(item._id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total: ${totalAmount}</p>
      </div>
    </div>
  );
}
