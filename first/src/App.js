import React, {useState, useEffect} from 'react';
import Counter from './components/counter';
import MovieList from './components/movieList';
import MovieForm from './components/movieForm';

function App() {
  const [movies, setMovies] = useState([])

  const removeMovie = (id) =>{
    setMovies(movies.filter(movie =>{
      return movie.id !== id;
    }))
  };

  const renderName = movies.length ? movies.map(movie =>{
    return(
      <MovieList
      movie={movie}
      key={movie.id}
      removeMovie={removeMovie}
      />
    );
  }) : "추가된 영화가 없습니다."

  const updateMovie = (movie) =>{
    setMovies(
      [
        // ...movies 는 앞의 배열의 그대로 가져온다. (구조 분해 할당)
        ...movies,
        movie
      ]
    );
  }

  return (
    <div className="App">
      <h1>Movie List</h1>
      <MovieForm updateMovie={updateMovie}/>
      {renderName}
    </div>
  );

}

export default App;
