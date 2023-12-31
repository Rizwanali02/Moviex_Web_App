import React from 'react'
import { Link } from 'react-router-dom'

export const RelatedMovies = ({ relatedMovies }) => {
    return (
        <div className='container-fluid '>
            {relatedMovies.length > 0 && (
                <div className="mt-4 ">
                    <h4 className='d-flex  justify-content-center '>Related Movies</h4>
                    <div className="row d-flex justify-content-center  ">
                        {relatedMovies.map((relatedMovie) => (
                            <div className="col-md-4 card movieBg m-4  p-3  " style={{ width: '18rem' }} key={relatedMovie.id}>
                                <Link to={`/movie/${relatedMovie.id}`}><img
                                    src={`https://image.tmdb.org/t/p/w500/${relatedMovie.poster_path}`}
                                    className="card-img-top"
                                    alt={relatedMovie.title}
                                /></Link>
                                <h5 className="card-title">{relatedMovie.title}</h5>
                               
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>

    )
}
