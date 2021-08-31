import React, {useEffect, useState} from 'react';
import lock from "../../images/lock.svg"
import send from "../../images/send.svg"
import ellipse from "../../images/Ellipse.svg"
import {withRouter} from "react-router-dom";

const ForgetMain = ({history}) => {
    const [state, setState] = useState({
        mail: '',
        sendOk: false,
        inputFocused:false,
        animation: false
    })
    const [error, setError]=useState(undefined)
    let onClickListener=()=>{
         state.sendOk? (
             history.push('/')
         ):(validateData())
    }
    let regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let validateData=()=>{
        if(regExp.test(state.mail)&&
            (state.mail==="example@example.com")) {
            setError(undefined)
            setState({...state, animation: true})
            setTimeout(() =>
                    setState({...state, sendOk: true, animation: false})
                , 2000)
        }else {
            setError("Неверный email")
        }
    }
    let EnterListener=(event)=>{
        if(event.key==='Enter'){
            event.preventDefault();
            onClickListener()
        }
    }
    let focusListener=()=>{
        setState({...state,inputFocused: !state.inputFocused})
    }
    useEffect(()=> {
        document.addEventListener('keypress', EnterListener)
        return () => document.removeEventListener('keypress', EnterListener)
    })
    let styleOfFocus= ()=>{
        return state.inputFocused?"hidden":''
    }
    return (
        <main className="main__container">
            <div>
                <div className="box">
                    <div>
                        <img className={`main__logotype__center ${styleOfFocus()}`}
                             src={state.sendOk ? send : lock} alt="logotype"/>
                        <div className="main__heading3">
                            {state.sendOk ? "Письмо отправлено" : "Восстановить пароль"}
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div>
                        <div className={`greyTypo main__hello-string ${state.sendOk ? 'sendMail' : 'noSendMail'}`}>
                            {state.sendOk ? "На указанный вами e-mail было отправлено письмо для смены пароля" :
                                "Введите e-mail, на который регистрировались ранее"}
                        </div>
                    </div>
                </div>
                {(!state.sendOk) && <div className="main__input__margin">
                    <div className="block__input">
                        <input onFocus={focusListener}
                               onBlur={focusListener}
                               onChange={(e) =>
                            setState({...state, mail: e.target.value})}
                               className={`${error?"error":''}`}
                               type="text" value={state.mail} placeholder="email"/>
                    </div>
                    {error&&<div className="block__error">
                        <div>{error}</div>
                    </div>}
                </div>}
                <div className="btn-login__container">
                    <button onClick={onClickListener}
                            className="button__one button__login animated"
                    >
                        {state.animation && <img src={ellipse} className="inButtonImg" alt="spinner"/>}
                        {state.sendOk ? "Вернуться на главную" : "Отправка"}
                    </button>
                </div>
            </div>
        </main>
    );
};

export default withRouter(ForgetMain);
