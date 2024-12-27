import React from 'react';
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-blue-100 flex items-center justify-center p-8">
      <div className="p-16 bg-white/40 backdrop-blur-lg rounded-2xl shadow-2xl">
        <Clock />
      </div>
    </div>
  );
}

export default App;