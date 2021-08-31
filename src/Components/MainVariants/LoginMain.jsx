import React from 'react';
import Main from "./Main";
import LoginForm from "../Forms/LoginForm";

const LoginMain = () => {
    return (
        <Main
            header={"Войти"}
            helloString={"Добро пожаловать, рады видеть вас снова 👋"}
            child={<LoginForm/>}
        >
        </Main>
    );
};

export default LoginMain;
