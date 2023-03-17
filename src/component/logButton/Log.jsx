

/* eslint-disable react/react-in-jsx-scope */

//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";
import "./Log.css";  
import { accountService } from "../../services/accountService";
import { useNavigate } from "react-router-dom";

function Log(){

   let navigate = useNavigate();

    const logout = () => {
        accountService.logout();
        navigate("/");
    };

    const login = () => {
        navigate("/user/login");
    };


    if(accountService.isLogged()){
    return (
        <button className="main-nav-item" href="/" onClick={logout}>
        <i className="fa fa-user-circle"></i>
        Sign Out
        </button>
    );}else{
    return (
        <button className="main-nav-item" onClick={login}>
        <i className="fa fa-user-circle"></i>
        Sign In
        </button>
    );}

}

export default Log;


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