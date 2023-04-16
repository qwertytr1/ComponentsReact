import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import React from 'react';
import Main from './pages/main/mainPage';
import Page404 from './pages/404/404';
import About from './pages/about/about';
import { Layout } from './components/layout/layout';
import FormPage from './pages/forms/forms';
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      <Route path="about" element={<About />} />
      <Route path="/404" element={<Page404 />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
