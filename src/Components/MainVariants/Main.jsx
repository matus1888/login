import React from 'react';
import facebook from "../../images/facebookLogo.svg"
import google from "../../images/Google__G__Logo 1.svg"

const Main = (props) => {
    return (
        <main className="main__container">
            <div>
                <div className="main__heading">
                    {props.header}
                </div>
                <div className="box">
                    <div>
                        <div className={`greyTypo main__hello-string ${props.strStyle}`}>
                            {props.helloString}
                        </div>
                        {props.str2 && <div className={`greyTypo main__hello-string ${props.strStyle}`}>
                            {props.str2[0]}
                            <a className="a"
                               href="https://gmail.com">
                                {props.str2[1]}
                            </a>{props.str2[2]}
                        </div>}
                    </div>
                </div>
                {(!props.isEmailConfirm) && <div className="login-buttons__FbookAndGoogle">
                    <div>
                        <button><img src={facebook} alt="logoF"/><div>Войти через Facebook</div></button>
                        <button><img src={google} alt="logoG"/><div>Войти через Google</div></button>
                    </div>
                </div>}
                {!(props.isEmailConfirm) && <div className="greyTypo main__hello-string">или</div>}
                {props.child}
            </div>
        </main>
    );
};

export default Main;