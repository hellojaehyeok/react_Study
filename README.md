# React Study

react를 공부하기 위하여 만들었습니다.    

## 목차
1. JSX
2. 이벤트 핸들링
3. useState
4. useState - Login
5. useEffect
6. 컴포넌트 반복 제거
7. props
8. map
9. 영화 리스트 만들기
10. 느낀점

### JSX
return문안에 JSX 문법을 사용한다.    
JavaScript의 확장된 문법이다.     

<hr />

### 이벤트 핸들링(onClick, onKeyUp)

1. 단어가 바뀔 때마다 대문자로 쓴다. ex) onclick -> onClick     
2. onClick={}   중괄호 안에는 함수가 들어간다.     
3. return 안에는 하나의 태그로 이루어져 있어야 한다.      

```
    const onSubmit = () => {
        alert("Submitted");
    }

    return(
        <div className="App">
            <button onClick={ onSubmit }>Submit</button>
        </div>
    );
```

<hr />

### useState

useState를 사용하기 위해서는 아래의 코드를 추가해야 한다.    

    import React, { useState } from 'react';

useState를 이용하여 'Song' 이라는 값을 text에 담고 setText는 text의 값을 업데이트할 때 사용한다.    

    const [text, setText] = useState('Song');
    
    const updateText = () => {
        setText('Jae Hyeok');
    }

    return(
        <div className="App">
            <span>{text}</span>
            <button onClick={updateText}>Update</button>
        </div>
    );

<hr />

### useState - Login 기능 만들기

onChange = {e => setUsername(e.target.value)}      
setUsername를 사용하여 사용자가 타이핑을 할 때마다 값을 바꾼다.    
method는 get과 post 두 방식이 있다.      
get - url을 통하여 데이터를 전송한다.      
post - url이 아닌 다른 방식으로 데이터를 숨겨서 전송한다.      

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onSubmit = e => {
        e.preventDefault();
        console.log(username, password);
    }

    return (
        <div className="App">
            <form onSubmit={onSubmit} action='#' method='post'>
                <input
                    type="text"
                    placeholder="usename"
                    name='username'
                    value={username}
                    onChange = {e => setUsername(e.target.value)}
                /><br />
                <input
                    type="password"
                    placeholder="password"
                    name='password'
                    value={password}
                    onChange = {e => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );


<hr />

### useEffect

useEffect 사용하기 위해서는 아래의 코드를 추가해야 한다.     
state가 변경이 될 때마다 렌더링이 되는데 렌더링이 된 후 useEffect가 실행된다.      

    import React, { useEffect } from 'react';


useEffect(실행될 함수, []) 뒤쪽에 빈 배열이 있으면 처음 한번만 실행한다.     
배열 안에 값을 입력하면 그 값이 변경될 때만 함수가 실행된다.     

    const [count, setCount] = useState(0);
    const [count_2, setCount_2] = useState(0);

    useEffect(() => {
        console.log('First Rendering');
    }, [])

    useEffect(() => {
        console.log('Change');
    }, [count, count_2])

    return(
        <div className="App">
            <button onClick={()=> setCount(count+1)}>Click</button>
            <button onClick={()=> setCount_2(count_2+1)}>Click</button>
        </div>
    );


<hr />

### 컴포넌트 반복 제거

장점   

1. 반복되는 코드를 줄인다.     
2. 한 번에 변경이 가능하여 편리하다.    

중복되는 코드를 여러 번 쓰는 것을 방지하기 위하여 새로운 js 파일을 만든다.      

counter.js

    const [count, setCount] = useState(0);
    const increment = () => {
      setCount(count + 1);
    }
    
    return (
        <button onClick={increment}>
            Click {count}
        </button>
    );

counter.js를 사용하고자 하는 코드 위쪽에 아래 코드를 추가한다.      

    import Counter from './경로'

import 다음에 있는 이름이 태그명이 되어 사용하면 된다.       
각자 컴포넌트에서 따로따로 적용된다.      

    <div className="App">
      <Counter/>
      <Counter/>
      <Counter/>
    </div>


<hr />

### 자식컴포넌트에 데이터 보내기 props

부모 -> 사용을 하는 컴포넌트    
자식 -> 사용 되는 컴포넌트    

props로 string만 보내는 것이 아닌 state도 보낼 수 있다.

App.js

    const [buttonName, useButtonName] = useState('ClickBtn')
    <div className="App">
      <Counter click="click"/>
      <Counter click={buttonName}/>
      <Counter/>
    </div>


counter.js        
const clickString = props.click || 'Click'       
props.click이 존재하면 props.click을 사용하고 아니면 Click을 사용한다.      

    const Counter = (props)=>{
        const [count, setCount] = useState(0);
        const increment = () => {
        setCount(count + 1);
        }

        const clickString = props.click || 'Click'
        
        return (
            <button onClick={increment}>
                {clickString}{count}
            </button>
        );
    };


<hr />

### map을 활용한 반복문

map() -> 배열 내의 모든 요소 각각에 대하여 함수를 호출한 결과를 모아 새로운 배열을 반환한다.     
아래의 코드같은 경우 map 안에 JSX를 사용하였다.    
key를 넣어주어야 에러가 사라진다.

    const lists = [
        {name : 'Song', index : 1},
        {name : 'Jae', index : 2},
        {name : 'Hyeok', index : 3}
    ]

    const renderName = lists.map(list =>{
        return(
            <div>
                <div className="list_name">{list.name}</div>
                <div className="list_index">{list.index}</div>
            </div>
        );
    })
    return (
        <div className="App">
            {renderName}
        </div>
    );


<hr />

### 영화 리스트 만들기 - App.js

영화 리스트 전체를 담는 App.js를 생성한다.       

useState를 사용하여 영화 리스트들을 담을 빈 배열을 만든다.       

    const [movies, setMovies] = useState([])


원하는 영화 리스트를 삭제하기 위하여 함수를 만든다.      
setMovies를 통해 리스트들을 편집한다.      
filter -> map과 비슷한 형식으로 모든 요소를 비교한 후 true만 리턴한다.      
id를 비교하여 일치하지 않은 것만 리턴한다.(일치하면 리턴을 시키지 않아 배열에서 없어진다.)      

    const removeMovie = (id) =>{
        setMovies(movies.filter(movie =>{
            return movie.id !== id;
        }))
    };


빈배열일때는 movies.length가 0이다.      
배열의 길이가 0이면 renderName는 "추가된 영화가 없습니다." 가 되고,     
그렇지 않으면 return 안에 있는 JSX를 리턴한다.    
MovieList 컴포넌트를 외부에서 가져온 후 props를 사용하여 정보를 내보낸다.         

    const renderName = movies.length ? movies.map(movie =>{
    return(
        <MovieList
        movie={movie}
        key={movie.id}
        removeMovie={removeMovie}
        />
    );
    }) : "추가된 영화가 없습니다."



setMovies를 활용하여 movies의 배열에 추가한다.      
...movies는 앞의 배열의 그대로 가져온다. (구조 분해 할당)       

    const updateMovie = (movie) =>{
        setMovies(
            [
            ...movies,
            movie
            ]
        );
    }

return을 사용하여 아래의 코드들을 내보낸다.       

    return (
        <div className="App"> 
            <h1>Movie List</h1>
            <MovieForm updateMovie={updateMovie}/>
            {renderName}
        </div>
    );


<hr />

### 영화 리스트 만들기 - movieList.js

영화 리스트들을 관리하는 컴포넌트이다.      

props로 부모요소에서 받아온 정보들을 입력 후 내보낸다.       

    const MovieList = ({movie, removeMovie}) =>{
        return(
            <div className="movie_list">
                <div className="movie_title">{movie.title}</div>
                <div className="movie_year">{movie.year}</div>
                <button onClick={()=>removeMovie(movie.id)}>삭제</button>
            </div>
        )
    }


<hr />

### 영화 리스트 만들기 - movieForm.js

영화 입력 폼을 담당하는 컴포넌트이다.        

input창에 입력될 텍스트와 에러텍스트에 넣을 useState를 생성한다.      

    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setMovieYear] = useState(""); 
    const [titleError, setTitleError] = useState("");
    const [yearError, setYearError] = useState(""); 


입력텍스트를 초기화시키는 함수를 만든다.      

    const resetForm = ()=>{
        setMovieTitle("");
        setMovieYear("");
    }

에러텍스트를 초기화시키는 함수를 만든다.      

    const resetErrors = () =>{
        setTitleError('')
        setYearError('')
    }


에러텍스트를 관리하는 함수를 만든다.      
함수가 실행회면 초기화시켜 이전값들을 삭제한다.       
validated의 초기값을 true로 만들고 조건문이 성립되면 fasle로 만든다.      
movieTitle과 movieYear의 값이 비어있으면 에러텍스트를 뜨게한다.      

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


form에서 submit을 하였을때 실행되는 함수이다.      
새로고침이 되면 영화 리스트들이 없어지기 때문에 preventDefault()를 사용하여 막는다.      
만약 validateForm가 true면 조건문을 실행한다. (input창이 비어있지 않으면)      
props의 updateMovie를 활용하여 id와 title, year값을 전송한다.         
전송을 하게되면 에러텍스트와 입력텍스트를 비어있게하여 보이지않게 한다.       


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

return문에 form을 만들고 외부에서 가져온 InputField를 넣는다.    
type, value, placeholder, onChange, errorMassage 를 props로 정보를 내보낸다.

    return (
        <form className="movieForm" onSubmit={onSubmit}>
            <InputField
                type="text"
                value={movieTitle}
                placeholder="영화제목"
                onChange={e => setMovieTitle(e.target.value)}
                errorMassage={titleError}
            />
            <br />
            <InputField
                type="number"
                value={movieYear}
                placeholder="개봉년도"
                onChange={e => setMovieYear(e.target.value)}
                errorMassage={yearError}
            />
            <br />
            <button type="submit">영화추가</button>
        </form>
    );

<hr />

### 영화 리스트 만들기 - inputField.js

input창을 외부에서 관리하기 위하여 만든 컴포넌트이다.       
한번에 모든 컴포넌트를 관리할 수 있는 장점이 있다.      
props로 type, value, placeholder, onChange, errorMassage을 만들어     
부모요소에서 편리하게 정보를 받아오도록 하였다.

    const InputField = ({
        type,
        value,
        placeholder,
        onChange,
        errorMassage
    }) =>{

        return(
            <>
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                />
                <span className="errorText">{errorMassage}</span>
            </>
        );
    };

<hr />

### 영화 리스트 만들기 원리
1. App.js에서 import로 컴포넌트를 받아와 화면에 띄운다.       
2. 영화리스트의 수가 0이면 "추가된 영화가 없습니다."이 되고 그렇지 않으면 영화 리스트를 리턴한다.       
3. movieForm에서 inputField를 import 해오고 정보를 넣는다.     
(onChange와 setMovieTitle를 활용하여 사용자가 타이핑시 MovieTitle을 계속 바꾼다.)      
4. submit을 하게 되면 onSubmit 함수를 실행한다. 
5. resetErrors, validateForm, resetForm함수가 각 상황에 맞게 실행된다.
6. props인 updateMovie로 입력된 movieTitle, movieYear, id 를 내보낸다.
7. App.js에서 updateMovie로 받아온 정보들을 setMovies를 통해 배열에 추가한다.
8. 배열이 늘어남에 따라 JSX 함수를 리턴한다. (2번순서)
9. MovieList.js에 props 정보를 주어 div 리스트를 리턴한다.

<hr />

### 느낀점

유튜브를 통하여 React를 처음 배웠습니다.
새로운 코드들을 배우는 과정이 너무 재미있었고, 기존의 HTML, JavaScript 를 
더 효율적이게 만드는것같아 설레였습니다.   
영화리스트를 만들며 어려운 부분도 많았는데, 그만큼 배운것이 정말 많았고 
코딩의 매력에 한층 더 빠지게되었습니다.

송재혁입니다.
감사합니다!

