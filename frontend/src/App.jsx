import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/header/Header';
import './App.css';
import Footer from './pages/home/Footer';

const App = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <div className="min-h-[calc(100vh-136px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
