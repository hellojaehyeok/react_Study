import React from 'react';

const List = ({movie}) =>{
    return(
        <div className="movie_list">
            <div className="movie_title">{movie.title}</div>
            <div className="movie_year">{movie.year}</div>
        </div>
    )
}

export default List;