import React from 'react';
import {withRouter} from "react-router-dom";

const EmailConfirm = ({history}) => {

    return (
        <div>
            <div className="btn-login__container">
                <button  onClick={()=>{
                    console.log("button listener is not presented")}}
                         className="button__one button__login"
                >Перейти к почте</button>
            </div>
            <div className="forget">
                <div onClick={()=>history.push("/notgetmail")}>Мне не пришло письмо</div>
            </div>
        </div>
    );
};

export default withRouter(EmailConfirm);
