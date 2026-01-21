import React from 'react';
import Header from './components/Header';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Header Microfrontend - Standalone Mode
        </h1>
        <p className="text-gray-600">
          This is the header microfrontend running independently on port 3001.
          The Header component from this app is consumed by the host application.
        </p>
      </div>
    </div>
  );
}

export default App;
