import React from 'react';
import Main from "./Main";
import RegistrationForm from "../Forms/RegistrationForm";

const RegistrationMain = (props) => {
    return (
        <Main
            header={"Регистрация"}
            helloString={"Зарегистрируйся и получи доступ к аналитике аккаунтов."}
            child={<RegistrationForm setter={props.setter}/>}
        >
        </Main>
    );
};

export default RegistrationMain;
