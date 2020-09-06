import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import Suggestions from './components/Suggestions/Suggestions';
import LatestArticles from './components/LatestArticles/LatestArticles';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main id="flex-container">
      <Navbar/>
      <Header/>
      <Suggestions/>
      <LatestArticles/>
      <Footer/>
    </main> 
  );
}

export default App;
