

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchBooks } from '../services/api';
import './BooksPg.css'; 
//pagination purpose
const BooksPage = () => {
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 30;
  useEffect(() => {
    const fetchBooksData = async () => {
      try {
        const response = await fetchBooks();
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooksData();
  }, []);


  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="books-container">
      <h1 className="page-title">Books Page</h1>
      <div className="books-grid">
        {currentBooks.map((book) => (
          <div className="book-item" key={book.id}>
            <Link to={`/books/${book.id}`}>
              <h2 className="book-title">{book.title}</h2>
            </Link>
          </div>
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
        ))}
        <button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(books.length / booksPerPage)}>Next</button>
      </div>
    </div>
  );
};

export default BooksPage;
