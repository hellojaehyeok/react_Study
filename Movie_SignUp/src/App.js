import React, {useState, useEffect} from 'react';
import Counter from './components/counter';
import MovieList from './components/movieList';
import MovieForm from './components/movieForm';
import Navigation from './components/navigation';
import SignUp from './components/signUp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App() {
  const [movies, setMovies] = useState([
    {title :" 해리포터와 마법사의 돌", year : 2001, id:"movie_1"},
    {title :" 해리포터와 비밀의 방", year : 2002, id:"movie_2"},
    {title :" 해리포터와 아즈카반의 죄수", year : 2004, id:"movie_3"}
  ])

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

          <Route path="/Movie">
            <h1>Movie List</h1>
            <MovieForm updateMovie={updateMovie}/>
            {renderName}
          </Route>

          <Route path="/SignUp">
            <h1>Sign Up</h1>
            <SignUp />
          </Route>
          
          <Route path="/Home">
            <h1>Home</h1>
            <p>
              안녕하세요 송재혁입니다. <br/>
              React를 이용하여 영화리스트, 회원가입폼을 제작하였습니다.
            </p>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
