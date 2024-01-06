import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingSpin } from './LoadingSpin';
import { RelatedMovies } from './RelatedMovies';
import { CastMoive } from './CastMoive';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [relatedMovies, setRelatedMovies] = useState([]);
  const [castMovie, setCastMovie] = useState([]);
  const [showFullOverview, setShowFullOverview] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getMovieDetail = async () => {

      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=04c35731a5ee918f014970082a0088b1`);
      const data = await response.json();
      setMovieDetail(data);

      // Fetch related movies genres
      const relatedMoviesResponse = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1&with_genres=${data.genres
        .map((genre) => genre.id)
        .join(',')}&exclude=${id}`
      );
      const relatedMoviesData = await relatedMoviesResponse.json();
      setRelatedMovies(relatedMoviesData.results);
      window.scrollTo({ top: 0, behavior: 'smooth' });

      const castResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=04c35731a5ee918f014970082a0088b1`)
      const castData = await castResponse.json();
      setCastMovie(castData.cast);
    };

    getMovieDetail();
  }, [id]);

  const toggleOverview = () => {
    setShowFullOverview(!showFullOverview);
  };

  if (!movieDetail) {
    return <LoadingSpin />;
  }

  return (
    <div className='movieBg container-fluid'>
      <div className="cardCSS">

        <img className='movieImg' src={`https://image.tmdb.org/t/p/w500/${movieDetail.poster_path}`} alt="Poster_Loading" />
        <div className="card-body movieSummry">
          <h2 className="card-title pt-3 pb-3">{movieDetail.title}</h2>
          {showFullOverview ? movieDetail.overview : `${movieDetail.overview.substring(0, 200)}...`}
          {movieDetail.overview.length > 200 && (
            <span className='seeMoreBtn' onClick={toggleOverview}>
              {showFullOverview ? ' See Less' : ' See More'}
            </span>
          )}
          <p className="card-text mt-4"><strong>Release Date</strong>: {movieDetail.release_date}</p>
          <p className="card-text"><strong>Rating</strong>: {movieDetail.vote_average}</p>
        </div>
      </div>
      <div><CastMoive castMovie={castMovie}/></div>
      <div className='RelatedMovies' ><RelatedMovies relatedMovies={relatedMovies} /> </div>
    </div>
  );
};

export default MovieDetail;
