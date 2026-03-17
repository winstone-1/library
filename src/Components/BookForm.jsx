import { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;
    onAdd({ title, author, id: Date.now() });
    setTitle(''); setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow flex gap-4">
      <input className="border p-2 flex-1" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input className="border p-2 flex-1" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Book</button>
    </form>
  );
};
export default BookForm;
