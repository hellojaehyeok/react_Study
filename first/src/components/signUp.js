import React, {useState} from 'react';
import InputField from './inputField';

const SignUp = () =>{

    const [userId, setUserId] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [errorId, setErrorId] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorName, setErrorName] = useState("");
    const [errorMail, setErrorMail] = useState("");



    const validateError = () => {
        resetErrors();
        let validated = true;
        if(!userId){
            setErrorId('아이디를 입력하세요')
          validated = false;
        }
        if(!userPassword){
            setErrorPassword('비밀번호를 입력하세요.')
          validated = false;
        }
        if(!userName){
            setErrorName('이름을 입력하세요.')
          validated = false;
        }
        if(!userMail){
            setErrorMail('이메일을 입력하세요.')
          validated = false;
        }
        return validated;
    } 

    const resetErrors = () =>{
        setErrorId("");
        setErrorPassword("");
        setErrorName("");
        setErrorMail("");
    };

    const resetForm = () =>{
        setUserId("");
        setUserPassword("");
        setUserName("");
        setUserMail("");
    }

    const onSubmit = () =>{
        if(validateError()){
            alert("회원가입이 완료되었습니다.")
            console.log(userId, userPassword, userName, userMail);
            resetForm();
        }
    };

    return(
        <form action="#" className="signUpForm" onSubmit={onSubmit}>
            <InputField
                className="signUpId"
                type="text"
                value={userId}
                placeholder="아이디를 입력하세요."
                onChange={e => setUserId(e.target.value)}
                errorMassage={errorId}
            />
            <InputField
                className="signUpPw"
                type="text"
                value={userPassword}
                placeholder="비밀번호를 입력하세요."
                onChange={e => setUserPassword(e.target.value)}
                errorMassage={errorPassword}
            />
            <InputField
                className="signUpName"
                type="text"
                value={userName}
                placeholder="이름을 입력하세요."
                onChange={e => setUserName(e.target.value)}
                errorMassage={errorName}
            />
            <InputField
                className="signUpMail"
                type="text"
                value={userMail}
                placeholder="이메일을 입력하세요."
                onChange={e => setUserMail(e.target.value)}
                errorMassage={errorMail}
            />
            <button type="submit">회원가입</button>
        </form>
    );
}

export default SignUp;