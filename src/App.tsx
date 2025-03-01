import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Playlist from './components/Playlist';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <Playlist />
      </div>
      <Footer />
    </div>
  );
};

export default App;
