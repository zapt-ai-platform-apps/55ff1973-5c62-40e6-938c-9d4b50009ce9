import React from 'react';

export default function App() {
  return (
    <div className="min-h-screen text-gray-900 bg-gray-50 flex flex-col">
      <div className="h-full flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Math Adventures 3D</h1>
        <p className="max-w-md text-center mb-6">
          Welcome to Math Adventures 3D! This companion site will showcase our upcoming 3D worlds, highlight in-game features, and provide news and updates.
        </p>
        <button
          className="cursor-pointer bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700 transition-colors"
          disabled
        >
          Demo Coming Soon
        </button>
      </div>
      <footer className="text-center p-4">
        Made on <a href="https://www.zapt.ai" target="_blank" rel="noreferrer" className="underline">ZAPT</a>
      </footer>
    </div>
  );
}