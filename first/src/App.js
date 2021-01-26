import React, {useState, useEffect} from 'react';
import Counter from './counter';
import List from './list';

function App() {
  
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  const [movies, setMovies] = useState([
    {title : '해리포터와 마법사의 돌', year : 2001},
    {title : '해리포터와 비밀의 방', year : 2002},
    {title : '해리포터와 아즈카반의 죄수 ', year : 2004}
  ])

  const renderName = movies.map(movie =>{
    return(
      <List movie={movie} key={movie.title}/>
    );
  })

  const updateMovie = (e) =>{
    e.preventDefault();
    setMovies(
      [
        ...movies,
        {title:movieTitle, year:movieYear}
      ]
    )
  }

  return (
    <div className="App">
      <h1>Movie List</h1>
      <form onSubmit={updateMovie}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        />
        <input
          type="text"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        />

        <button type="submit">영화추가</button>
      </form>
      {renderName}
    </div>
  );

}

export default App;
