import React from 'react';
import {withRouter} from "react-router-dom";

const Header = ({location, history}) => {
    let isRegistrationOrLoginForm = (location.pathname === "/") || (location.pathname === "/registration")
    let isConfirmedPage = !!((location.pathname === "/confirm")||(location.pathname==="/notgetmail"))
    let getButtonText = location.pathname === '/' ? "Регистрация" : location.pathname === '/registration' ? "Войти" : ''
    let getButtonLink = location.pathname === '/' ? "/registration" : location.pathname === '/registration' ? "/" : '#'
    let regOrLogin=location.pathname==='/registration'
    let outClick=()=>{history.push("/")}

    return (
        <header className="header">
            <span className="logo"
                  onClick={() => history.push('/')}>LIVEDUNE</span>
            {isRegistrationOrLoginForm && <span className="other">
                <span className="block__no-style greyTypo">
                    {regOrLogin?"Уже есть аккаунт?":"У вас нет  аккаунта?"}
                </span>
                <span className="button__wrapper">
                    <button
                        onClick={() => history.push(getButtonLink)}
                        className="button__one">{getButtonText}</button>
                </span>
            </span>}
            {isConfirmedPage &&
            <span className="other">
                <span onClick={outClick} className="block__no-style greyTypo">
                    Выйти
                </span>
            </span>
            }
        </header>
    );
};

export default withRouter(Header);