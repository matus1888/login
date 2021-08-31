import React, {useState} from 'react';
import {withRouter} from "react-router-dom";

const DidntMail = ({history}) => {
const [mail,setMail]=useState('')
    const [error, setError]=useState(undefined)
    let regExp = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    let validateData=()=>{
        if(regExp.test(mail)) {
            setError(undefined)
            history.push('/')
        }else {
            setError("Неверный email")
        }
    }
    return (
        <div>
            <div className="main__input__margin">
                <div className="block__input">
                    <input onChange={(e)=>setMail(e.target.value)}
                           type="text" value={mail} placeholder="email"/>
                </div>
            </div>
            {error && <div className="block__error">
                <div>{error}</div>
            </div>}
            <div className="btn-login__container">
                <button  onClick={validateData}
                         className="button__one button__login"
                >Отправить заново</button>
            </div>

            <div
                className="greyTypo"
                onClick={validateData}
                >Отменить
            </div>
        </div>
    );
};

export default withRouter(DidntMail);
