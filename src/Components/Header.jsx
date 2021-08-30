import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <span className="logo">LIVEDUNE</span>
            <span className="other">
                <span className="block__no-style greyTypo">
                    У вас нет  аккаунта?
                </span>
                <span className="button__wrapper">
                    <button className="button__one">Регистрация</button>
                </span>
            </span>
        </header>
    );
};

export default Header;