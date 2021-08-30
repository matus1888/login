import React, {useState} from 'react';
import facebook from "../images/facebookLogo.svg"
import google from "../images/Google__G__Logo 1.svg"

const Main = () => {
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
    return (
        <main className="main__container">
            <div>
                <div className="heading">Войти</div>
                <div className="greyTypo hello">Добро пожаловать, рады видеть вас снова 👋</div>
                <div className="login-buttons__FbookAndGoogle">
                    <div><button><img src={facebook} alt="logoF"/>Войти через Facebook</button>
                        <button><img src={google} alt="logoG"/>Войти через Google</button>
                    </div>
                </div>
                <div className="greyTypo hello">или</div>
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
                <div className="forgot">
                    <a href="https://localhost:3000">Забыли пароль?</a>
                </div>
            </div>
        </main>
    );
};

export default Main;