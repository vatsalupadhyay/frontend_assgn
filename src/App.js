import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import BooksPage from "./components/BooksPg";
import BookDetailsPage from "./components/DetailsPg";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Routes>
            <Route path="/books/:id" element={<BookDetailsPage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/" element={<BooksPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
