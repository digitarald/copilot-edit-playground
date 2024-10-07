import React from 'react';
import logo from './logo.svg';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="text-center">
        <img src={logo} className="w-32 h-32 mx-auto mb-4" alt="logo" />
        <h1 className="mb-2 text-4xl font-bold text-gray-800">Pilot Training</h1>
        <p className="text-xl text-gray-600">Fly with AI</p>
        <a
          className="inline-block px-4 py-2 mt-6 text-white transition bg-blue-500 rounded hover:bg-blue-600"
          href="/"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default Home;
