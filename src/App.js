import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Suggestions from './components/Suggestions/Suggestions';

function App() {
  return (
    <main id="flex-container">
      <Navbar/>
      <Header/>
      <Suggestions/>
    </main>
    
  );
}

export default App;
