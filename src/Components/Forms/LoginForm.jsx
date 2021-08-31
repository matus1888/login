import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

const LoginForm = ({history}) => {
    const [state, setState] = useState({
        name: '',
        password: ''
    })
    const [error,setError] = useState(undefined)
    let setName=(e)=>{
        setError(undefined)
        setState({...state,name:e.target.value})
    }
    let setPass=(e)=>{
        setError(undefined)
        setState({...state,password:e.target.value})
    }
    let regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let validateData=()=>{
        if (state.name===''&&state.password===''){
            setError("Введите email, Введите пароль")
        }else
        {regExp.test(state.name)?setError(undefined):setError("Неверный email или пароль")}
    }
    let EnterListener=(event)=>{
        if(event.key==='Enter'){
            event.preventDefault();
            validateData()
        }
    }
    useEffect(()=> {
        document.addEventListener('keypress', EnterListener)
        return () => document.removeEventListener('keypress', EnterListener)
    })
    return (
        <div>
            <div className="block__input">
                <input onChange={setName} className={`${error?"error":''}`} type="text" value={state.name} placeholder="email"/>
            </div>
            <div className="block__input">
                <input onChange={setPass}  className={`${error?"error":''}`} type="password" value={state.password} placeholder="password"/>
            </div>
            {error&&<div className="block__error">
                <div>{error}</div>
            </div>}
            <div className="btn-login__container">
                <button  onClick={validateData} className="button__one button__login">Войти в аккаунт</button>
            </div>
            <div className="forget">
                <div onClick={()=>history.push('/forget')}>Забыли пароль?</div>
            </div>
        </div>
    );
};

export default withRouter(LoginForm);
