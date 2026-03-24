import React from 'react';

// Destructure both 'books' and 'onDelete' from props
const BookList = ({ books, onDelete }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book) => (
        <div key={book.id} className="book-card border border-gray-100 p-6 rounded-xl bg-white flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-xl text-gray-800 leading-tight mb-1">{book.title}</h3>
            <p className="text-blue-600 font-medium text-sm mb-4">by {book.author}</p>
          </div>
          <div className="border-t pt-4 flex justify-between items-center">
            <span className="text-xs text-gray-400">ID: {String(book.id).slice(-5)}</span>
            <button 
              onClick={() => onDelete(book.id)} 
              className="text-red-400 hover:text-red-600 font-medium text-sm p-1"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;