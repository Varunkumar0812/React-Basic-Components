import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePageCenterContent from './components/HomePageCenterContent';

function App() {
  return (
    <div>
      <Header />
      <HomePageCenterContent />
      <Footer />
    </div >
  );
}

export default App;
