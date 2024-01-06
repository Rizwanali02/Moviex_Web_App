import React from 'react'

export const CastMoive = (props) => {
  return (
    <div>
      <div className="castContainer">
        {props.castMovie.map((cast) => (
          <div key={cast.id} className="castItem">
            {cast.profile_path && (
              <img className="castPhoto" src={`https://image.tmdb.org/t/p/w92/${cast.profile_path}`} alt={`${cast.name} Profile`} />
            )}
            <span className="castName">{cast.name} as {cast.character}</span>
          </div>
        ))}
      </div>
    </div>

  )
}
