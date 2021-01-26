# React Study

react를 공부하기 위하여 만들었습니다.    

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




