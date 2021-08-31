import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";

const RegistrationForm = ({history,setter}) => {
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
        promoCode: '',
        promo: true
    })
    const [error, setError] = useState(undefined)
    const [validationError, setValidationError] = useState(undefined)
    let setName = (e) => {
        setError(undefined)
        setState({...state, name: e.target.value})
    }
    let setMail = (e) => {
        setValidationError(undefined)
        setState({...state, email: e.target.value})
    }
    let setPass = (e) => {
        setError(undefined)
        setState({...state, password: e.target.value})
    }
    let setPromoCode = (e) => {
        setState({...state, promoCode: e.target.value})
    }
    let regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let validateData = () => {
        let valid=regExp.test(state.email)
        if (state.name === '' && state.password === '') {
            setError("Введите имя, Введите пароль")
        } else if(!valid) {
            setValidationError("Возможно вы ошиблись в указании почтового сервиса")
        } else{
            setter(state.name)
            history.push('/confirm')
        }
    }
    let EnterListener = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            validateData()
        }
    }
    useEffect(() => {
        document.addEventListener('keypress', EnterListener)
        return () => document.removeEventListener('keypress', EnterListener)
    })
    return (
        <div>
            <div className="block__input">
                <input onChange={setName} className={`${error ? "error" : ''}`}
                       type="text" value={state.name} placeholder="Имя"/>
            </div>
            <div className="block__input">
                <input onChange={setMail} className={`${error || validationError ? "error" : ''}`}
                       type="text" value={state.email} placeholder="Email"/>
            </div>
            {validationError && <div className="block__error">
                <div>{validationError}</div>
            </div>}
            <div className="block__input">
                <input onChange={setPass} className={`${error ? "error" : ''}`}
                       type="password" value={state.password}
                       placeholder="Пароль"/>
            </div>
            {!(state.promo) && <div className="block__input">
                <input onChange={setPromoCode} className={`${error ? "error" : ''}`}
                       type="text" value={state.promoCode}
                       placeholder="Promo"/>
            </div>}
            {error && <div className="block__error">
                <div>{error}</div>
            </div>}
            {state.promo && <div className="forget">
                <div onClick={() => setState({...state, promo: false})}>У меня есть промокод</div>
            </div>}
            <div className="btn-login__container">
                <button onClick={validateData}
                        className="button__one button__login"
                >Создать аккаунт
                </button>
            </div>
            <div className="oferta"> Создавая аккаунт, я согласен с <a href="https://google.com">условиями оферты</a>
            </div>
        </div>
    );
};

export default withRouter(RegistrationForm);
