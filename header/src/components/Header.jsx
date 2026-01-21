import React from 'react';
import '../index.css';

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">🚀</span>
            </div>
            <h1 className="text-2xl font-bold">Microfrontends</h1>
          </div>

          <nav className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-blue-200 transition-colors">
              Home
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Features
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors">
              Contact
            </a>
          </nav>

          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
