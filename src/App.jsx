import React, {useState} from "react"
import './App.css';
import Header from "./Components/Header";
import LoginMain from "./Components/MainVariants/LoginMain";
import RegistrationMain from "./Components/MainVariants/RegistrationMain";
import {Route} from "react-router-dom";
import ConfirmMailMain from "./Components/MainVariants/ConfirmMailMain";
import DidntMailMain from "./Components/MainVariants/DidntMailMain";
import ForgetMain from "./Components/MainVariants/ForgetMain";
import MainApp from "./Components/MainApp";

function App() {
    const [state,setState]=useState('')
    return (
        <div className="wrapper">
            <Header/>
            <Route exact path={'/'}><LoginMain/></Route>
            <Route exact path={'/registration'}><RegistrationMain setter={setState}/></Route>
            <Route exact path={'/confirm'}><ConfirmMailMain name={state}/></Route>
            <Route exact path={'/notgetmail'}><DidntMailMain/></Route>
            <Route exact path={'/forget'}><ForgetMain/></Route>
            <Route exact path={'/goto'}><MainApp /></Route>

        </div>
    );
}

export default App;
