import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import NotFound from './pages/404';
import About from './pages/About';
import Forms from './pages/Forms';
import './App.css';
import Search from 'pages/Search';
import { StateProvider } from 'components/GlobalState/StateProvider';
import Movie from 'pages/Movie';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto px-4 flex flex-col min-h-screen">
        <StateProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="search" element={<Search />} />
              <Route path="about" element={<About />} />
              <Route path="forms" element={<Forms />} />
              <Route path="movie/:id" element={<Movie />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </StateProvider>
      </div>
    </div>
  );
}

export default App;
