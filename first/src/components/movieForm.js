import React, {useState} from 'react';


const MovieForm = ({ updateMovie }) =>{
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState(""); 

  const resetForm = ()=>{
  setMovieTitle("");
  setMovieYear("");
  }

   

  const onSubmit = (e) =>{
    e.preventDefault();
    updateMovie({
        id:Date.now(),
        title:movieTitle,
        year:movieYear
    });
    resetForm();
  }

  return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
        />
        <input
          type="number"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
        />

        <button type="submit">영화추가</button>
      </form>
  );


};

export default MovieForm;