import React, { Suspense, lazy } from 'react';

const Header = lazy(() => import('header/Header'));
const ContentCard = lazy(() => import('content/ContentCard'));

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Suspense fallback={<div className="bg-gray-800 text-white p-4">Loading Header...</div>}>
        <Header />
      </Suspense>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Microfrontend Demo - Host Application
        </h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Content from Remote Microfrontend
          </h2>
          <Suspense fallback={<div className="text-gray-500">Loading Content...</div>}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ContentCard
                title="Card 1"
                description="This card is loaded from the content microfrontend"
              />
              <ContentCard
                title="Card 2"
                description="Module Federation enables runtime code sharing"
              />
              <ContentCard
                title="Card 3"
                description="Each microfrontend can be developed independently"
              />
            </div>
          </Suspense>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-8">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">
            Architecture Info
          </h3>
          <ul className="list-disc list-inside text-blue-700 space-y-1">
            <li>Host App (Port 3000): Orchestrates microfrontends</li>
            <li>Header Remote (Port 3001): Provides navigation header</li>
            <li>Content Remote (Port 3002): Provides content cards</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
