import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './pages/Main';
import NotFound from './pages/404';
import About from './pages/About';
import Forms from './pages/Forms';
import './App.css';
import Search from 'pages/Search';
import Movie from 'pages/Movie';
import { Provider } from 'react-redux';
import { setupStore } from 'store/store';

function App() {
  const store = setupStore();
  return (
    <div className="App">
      <div className="container mx-auto px-4 flex flex-col min-h-screen">
        <Provider store={store}>
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
        </Provider>
      </div>
    </div>
  );
}

export default App;
