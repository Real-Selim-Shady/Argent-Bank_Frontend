

/* eslint-disable react/react-in-jsx-scope */

//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";
import "./Header.css";  
import Log from "../logButton/Log";

function Header(){

    return (
        <section>
            <nav className="main-nav">
                <a className="main-nav-logo" href="/">
                    <img
                    className="main-nav-logo-image"
                    src="/assets/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <a href="/user/profile">go to profile</a>
                <div>
                    <Log />
                </div>
            </nav>
        </section>
    );

}

export default Header;


    /*
    const state2 = useSelector(selectState2);
    const dispatch = useDispatch();
    
    return (
        <div>
            <p>
                Component2
            </p>
            <button onClick={() => dispatch(action2())}></button>
            <p>
                {state2}
            </p>
        </div>

    );*/