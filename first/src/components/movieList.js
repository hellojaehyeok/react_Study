import React from 'react';

const MovieList = ({movie, removeMovie}) =>{
    return(
        <div className="movie_list">
            <div className="movie_title">{movie.title}</div>
            <div className="movie_year">{movie.year}</div>
            <button onClick={()=>removeMovie(movie.id)}>삭제</button>
        </div>
    )
}

export default MovieList;