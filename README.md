# React Study

react를 공부하기 위하여 만들었습니다.    

### JSX
return문 안에 JSX 문법을 사용한다.    
JavaScript의 확장된 문법이다.     

### 이벤트 핸들링(onClick, onKeyUp)

1. 단어가 바뀔때마다 대문자로 쓴다. ex) onclick -> onClick     
2. onClick={}   중괄호 안에는 함수가 들어간다.     
3. return 안에는 하나의 태그로 이루어져 있어야한다.   


    const onSubmit = () => {
        alert("Submitted");
    }

    return(
        <div className="App">
            <button onClick={ onSubmit }>Submit</button>
        </div>
    );


### useState

useState를 사용하기 위해서는 아래의 코드를 추가해야 한다.    

    import React, { useState } from 'react';

useState를 이용하여 'Song' 이라는 값을 text에 담고 setText는text의 값을 업데이트할때 사용한다.    

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

