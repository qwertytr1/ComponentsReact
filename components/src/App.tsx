import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Main } from './mainPage';
import Page404 from './404';
import About from './about';
import { Layout } from './components/layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
