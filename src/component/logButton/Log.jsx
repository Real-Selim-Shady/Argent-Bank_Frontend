
import React from "react";
import "./Log.css";  
import { accountService } from "../../services/accountService";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../../utils/selectors";
import { useSelector } from "react-redux";
import { store } from "../../utils/store";
import { setToken } from "../profile/Actions";
import { useEffect } from "react";
import { selectUserData } from "../../utils/selectors";
import { getData } from "../../services/APIcalls";
import { setUserData } from "../profile/Actions";


/**
 * @description Function rendering logs (in - out), sign up, and go to profile buttons
 */
function Log(){

    let navigate = useNavigate();
    const tokenState = useSelector(selectToken);
    const userDataSetted = useSelector(selectUserData);

    /**
     * @description Function seting log out button
     */
    const logout = () => {
        accountService.logout();
        store.dispatch(setToken(""));
        navigate("/");
    };

    /**
     * @description Function seting log in button
     */
    const login = () => {
        navigate("/user/login");
    };

    /**
     * @description Function sign up in button
     */
    const signUp = () => {
        navigate("/user/signup");
    };

    useEffect(()=> {

        /**
         * @description If token exists it's sent to its state
         */
        let tokenCheck = sessionStorage.getItem("token"); 
        if (!tokenCheck) { 
        tokenCheck = localStorage.getItem("token");
        }
        store.dispatch(setToken(tokenCheck));

        if(tokenCheck != null) {
            store.dispatch(setToken(tokenCheck)); 
            /**
             * @description Function retrieving user name on profile button
             */
            const nameAsync = async () =>{
            try{await getData();}catch(error){console.log(error); accountService.logout(); navigate("/*"); return;}
            const fetchedUserData = JSON.parse(localStorage.getItem("user/signedIn"));
            setUserData(fetchedUserData);
            store.dispatch(setUserData(fetchedUserData));};
            nameAsync();
        }
    }, []);

    if(tokenState === "" || userDataSetted?.body?.firstName === undefined || tokenState === null){
        return (
            <div>
                <a className="main-nav-item" href="" onClick={signUp}>
                <i className="fa-solid fa-user-plus iconMargin"></i>
                Sign up
                </a>
                <a className="main-nav-item" href="" onClick={login}>
                <i className="fa-sharp fa-solid fa-arrow-right-to-bracket iconMargin"></i>
                Sign In
                </a>
            </div>
        );}else{
        return (
            <div>
                <a className="main-nav-item" href="/user/profile">
                    <i className="fa-solid fa-user iconProfile iconMargin"></i>
                    {userDataSetted?.body?.firstName}
                </a>
                <a className="main-nav-item" href="/" onClick={logout}>
                <i className="fa-sharp fa-solid fa-arrow-right-from-bracket iconMargin"></i>
                Sign Out
                </a>
            </div>
        );
    }

}

export default Log;


