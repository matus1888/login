import React from 'react';
import Main from "./Main";
import EmailConfirm from "../Forms/Confirm/EmailConfirm";

const ConfirmMailMain = (props) => {
    return (
        <Main
            header={"Подтвердите ваш email"}
            helloString={`${props.name}, на ваш E-mail отправлено письмо со ссылкой для            подтверждения. Перейдите по ней, чтобы активировать вашу учетную 
            запись и получить 7 дней бесплатного доступа.`}
            strStyle="confirm"
            isEmailConfirm
            child={<EmailConfirm/>}
        >
        </Main>
    );
};

export default ConfirmMailMain;
