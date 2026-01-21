import React from 'react';
import ContentCard from './components/ContentCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Content Microfrontend</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Standalone Mode - Port 3002
        </h2>
        <p className="text-gray-600 mb-8">
          This is the content microfrontend running independently.
          The ContentCard component from this app is consumed by the host application.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ContentCard
            title="Sample Card 1"
            description="This is a sample content card component that can be shared across applications."
          />
          <ContentCard
            title="Sample Card 2"
            description="Each card is styled with Tailwind CSS and can accept custom props."
          />
          <ContentCard
            title="Sample Card 3"
            description="These cards demonstrate component sharing via Module Federation."
          />
        </div>
      </div>
    </div>
  );
}

export default App;
