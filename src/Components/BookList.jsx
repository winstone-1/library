import React from 'react';


function BookList({ books }) {
 
  if (!books) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {books.map((book) => (
        
        <div key={book.id} className="border p-4 rounded shadow-sm bg-white">
          <h3 className="font-bold text-lg">{book.title}</h3>
          <p className="text-gray-600 italic">{book.author}</p>
          
          <button className="text-red-500 text-sm mt-2">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;