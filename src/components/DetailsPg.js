import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBookById } from "../services/api";
import "./DetailsPg.css";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await fetchBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookData();
  }, [id]);

  if (!book) return <div>Loading...</div>;

  return (
    <div className="book-details-container">
      <h1 className="page-title">{book.title}</h1>
      <div className="book-details">
        <div className="book-info">
          <p>
            <strong>ISBN:</strong> {book.isbn}
          </p>
          <p>
            <strong>Page Count:</strong> {book.pageCount}
          </p>
          <p>
            <strong>Authors:</strong> {book.authors.join(", ")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
