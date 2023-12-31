import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpin } from './LoadingSpin';

export const MovieList = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const getMovies = async (page) => {
    let API = `https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&page=${page}`;
    const res = await fetch(API);
    const data = await res.json();
    setMovieData(data.results);
  };

  useEffect(() => {
    getMovies(currentPage);
  }, [currentPage]);

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if(!movieData){
      return <LoadingSpin/>
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (movieData.length === 0) {
    return <LoadingSpin />;
  }

  return (
    <center className='color '>
      <div className=" container-fluid  row  flex-wrap background">
        {movieData.map((movie) => (
          <div className="card m-3 p-3 movieBg" style={{ width: '18rem' }} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
            </Link>
            <div className="card-body">
              <h5 className="card-title">{movie.title}</h5>
            </div>
          </div>
        ))}
        <div className='d-flex justify-content-between pb-3'>
          <button disabled={currentPage <= 1} className='  btn-Previos' onClick={handlePrevClick}>Previos</button>
          <button className='  btn-Previos' onClick={handleNextClick}>
            Next
          </button>
        </div>
      </div>
    </center>
  );
};
