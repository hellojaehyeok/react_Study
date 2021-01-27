import React, {useState, useEffect} from 'react';
import Counter from './components/counter';
import MovieList from './components/movieList';
import MovieForm from './components/movieForm';
import Navigation from './components/navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

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
        ...movies,
        movie
      ]
    );
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/Home">
            <h1>Home</h1>
          </Route>

          <Route path="/Movie">
            <h1>Movie List</h1>
            <MovieForm updateMovie={updateMovie}/>
            {renderName}
          </Route>

          <Route path="/Login">
            <h1>Login</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
