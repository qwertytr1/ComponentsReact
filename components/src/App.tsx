import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Routes } from 'react-router-dom';
import './App.css';
import React from 'react';
import { Main } from './pages/main/mainPage';
import Page404 from './pages/404/404';
import About from './pages/about/about';
import { Layout } from './components/layout';
import FormPage from './pages/forms/forms';
function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='/form' element={<FormPage />} />
        <Route index element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/404" element={<Page404 />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  </>);
};
export default App;
