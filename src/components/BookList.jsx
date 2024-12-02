import React, { useEffect, useState } from "react";
import { fetchBooks, updateBookStatus } from "../api/books";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
      setLoading(false);
    };
    loadBooks();
  }, []);

  const toggleReserved = async (index) => {
    const updatedBooks = [...books];
    updatedBooks[index].reserved = !updatedBooks[index].reserved;
    setBooks(updatedBooks);
    await updateBookStatus(index, updatedBooks[index].reserved);
  };

  if (loading) return <p className="text-center text-xl">Loading books...</p>;
  if (!books.length) return <p className="text-center text-xl">No books available.</p>;

  return (
    <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {books.map((book, index) => (
        <div key={index} className="border border-gray-300 rounded-lg bg-white p-4 shadow-md">
          <img
            src={book.cover}
            alt={book.title}
            className="w-full h-100 object-cover rounded-md mb-4" />
          <h3 className="text-lg font-semibold text-gray-800">{book.title}</h3>
          <p className="text-sm text-gray-600"><strong>Author:</strong> {book.author}</p>
          <p className="text-sm text-gray-600"><strong>Category:</strong> {book.category}</p>
          <p className="text-sm text-gray-600"><strong>Price:</strong> ${book.price.toFixed(2)}</p>
          <button
            onClick={() => toggleReserved(index)}
            className={`mt-4 w-full py-2 text-white font-semibold rounded-md transition-all ${book.reserved ? 'bg-red-500 hover:bg-red-600' : 'bg-blue-500 hover:bg-blue-600'}`}>
            {book.reserved ? "Grąžinti" : "Išduoti skaitytojui"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
