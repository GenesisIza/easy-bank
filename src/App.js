import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Suggestions from './components/Suggestions/Suggestions';
import LatestArticles from './components/LatestArticles/LatestArticles';

function App() {
  return (
    <main id="flex-container">
      <Navbar/>
      <Header/>
      <Suggestions/>
      <LatestArticles/>
    </main>
    
  );
}

export default App;
