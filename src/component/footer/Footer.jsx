

/* eslint-disable react/react-in-jsx-scope */

//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";
import "./Footer.css";


function Footer(){

    return (
        <section>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </section>
    );


}

export default Footer;


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