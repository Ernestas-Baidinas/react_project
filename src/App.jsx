import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add-book" element={<BookForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
