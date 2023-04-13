
import React from "react";
import "./Log.css";  
import { accountService } from "../../services/accountService";
import { useNavigate } from "react-router-dom";
import { /*selectData,*/ selectToken } from "../../utils/selectors";
import { useSelector } from "react-redux";
import { store } from "../../utils/store";
import { /*setFirstName,*/ setToken } from "../profile/Actions";
import { useEffect } from "react";
import { selectUserData } from "../../utils/selectors";
import { getData } from "../../services/APIcalls";
import { setUserData } from "../profile/Actions";



function Log(){

   let navigate = useNavigate();
   const tokenState = useSelector(selectToken);
   const userDataSetted = useSelector(selectUserData);

    const logout = () => {
        accountService.logout();
        store.dispatch(setToken(""));
        navigate("/");
    };

    const login = () => {
        navigate("/user/login");
    };

    const signUp = () => {
        navigate("/user/signup");
    };

    useEffect(()=> {

        let tokenCheck = sessionStorage.getItem("token"); 
        if (!tokenCheck) { 
        tokenCheck = localStorage.getItem("token");
        }
        store.dispatch(setToken(tokenCheck));

        if(tokenCheck != null) {
            store.dispatch(setToken(tokenCheck)); 
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
        );}

}

export default Log;


