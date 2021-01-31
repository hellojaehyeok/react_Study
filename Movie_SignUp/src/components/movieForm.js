import React, {useState} from 'react';
import InputField from './inputField';


const MovieForm = ({ updateMovie }) =>{
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState(""); 
  const [titleError, setTitleError] = useState("");
  const [yearError, setYearError] = useState(""); 

  const resetForm = ()=>{
    setMovieTitle("");
    setMovieYear("");
  }

  const validateForm = () =>{
    resetErrors();
    let validated = true;
    if(!movieTitle){
      setTitleError('영화제목을 입력해주세요.')
      validated = false;
    }
    if(!movieYear){
      setYearError('개봉년도를 입력해주세요.')
      validated = false;
    }
    return validated;
  };

  const resetErrors = () =>{
    setTitleError('')
    setYearError('')
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    if(validateForm()){
      updateMovie({
          id:Date.now(),
          title:movieTitle,
          year:movieYear
      });
      resetErrors();
      resetForm();
    }
  }

  return (
      <form className="movieForm" onSubmit={onSubmit}>
        <InputField
          className="movieTitle"
          type="text"
          value={movieTitle}
          placeholder="영화제목"
          onChange={e => setMovieTitle(e.target.value)}
          errorMassage={titleError}
        />
        <InputField
          className="movieYear"
          type="number"
          value={movieYear}
          placeholder="개봉년도"
          onChange={e => setMovieYear(e.target.value)}
          errorMassage={yearError}
        />
        <button className="submitBtn" type="submit">영화추가</button>
      </form>
  );
};

export default MovieForm;