import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout';
import Main from './pages/Main';
import NotFound from './pages/404';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
