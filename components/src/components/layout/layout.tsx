import React from 'react';
import styles from './layout.module.css'
import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Header from '../Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Layout = () => {
  return (
    <div className="wrapper">
      <header className="header">
        <Header />
      </header>
      <main className={styles.main} data-testid="layout">
        <div className={styles.container}>
          <Outlet />
          <ToastContainer position="top-left" autoClose={2000} />
        </div>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
};

export { Layout };
