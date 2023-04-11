import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './Header';

const Layout = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export { Layout };
