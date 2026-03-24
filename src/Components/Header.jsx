import React from 'react'

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-xl mb-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">My Digital Library</h1>
          <p className="text-blue-100 opacity-80">Manage your collection and discover new reads</p>
        </div>
        <div className="hidden md:block">
          <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 text-sm font-medium">
            v1.0 Stable
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header