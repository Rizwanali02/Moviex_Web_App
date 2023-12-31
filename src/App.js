
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MovieList } from './components/MovieList';
import MovieDetails from './components/MovieDetails';
import { Header } from './components/Header';
import { Action } from './components/Action';
import { Types } from './components/Types';

const NotFound = () => {
  return <h2>404 - Not Found</h2>;
};

const App = () => {
  return (
    <Router>
      <Header />
      <Types/>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/action" element={<Action genreId={28} />} />
        <Route path="/drama" element={<Action genreId={28} />} />
        <Route path="/comedy" element={<Action genreId={35} />} />
        <Route path="/adventure" element={<Action genreId={12} />} />
        <Route path="/animation" element={<Action genreId={16} />} />
        <Route path="/crime" element={<Action genreId={80} />} />
        <Route path="/horror" element={<Action genreId={27} />} />
        <Route path="/music" element={<Action genreId={10402} />} />
        <Route path="/romance" element={<Action genreId={10749} />} />
        <Route path="/sciencefiction" element={<Action genreId={878} />} />
        <Route path="/tvmovie" element={<Action genreId={10770} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
