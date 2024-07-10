import React, { useState, useEffect } from "react";

export default function SearchFeature({ books, setFilteredBooks }) {
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const filtered = books.filter(
      (book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredBooks(filtered);
  }, [books, searchQuery, setFilteredBooks]);

  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="form-control mb-4"
    />
  );
}
