import React from 'react';
import DidntMail from "../Forms/Confirm/DidntMail";
import Main from "./Main";

const DidntMailMain = () => {
    const mass=["Также проверьте разные папки почтового ящика(актуально для gmail.com) и папку'Спам'.Если письмо все же не пришло, повторите попытку илинапишите об этом в тех.поддержку ",
        'support@livedune.ru'," и мы активируем ваш аккаунт."]
    return (
        <Main
            header="Мне не пришло письмо"
            strStyle="didntMail"
            helloString="Письмо может прийти с задержкой в 5-10 минут."
            str2={mass}
            child={<DidntMail/>}
            isEmailConfirm
        >
        </Main>
    );
};

export default DidntMailMain;
