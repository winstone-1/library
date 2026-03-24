import React from 'react';
import Header from './Components/Header';
import BookLibrary from './Components/BookLibrary';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      
      <Header /> 
      <main className="max-w-5xl mx-auto p-6">
        <BookLibrary />
      </main>
      <footer className="text-center py-10 text-gray-400 text-sm">
        Built with React & OpenLibrary API © 2026
      </footer>
    </div>
  );
}

export default App;