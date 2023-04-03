

/* eslint-disable react/react-in-jsx-scope */

//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";
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
//import { setFirstName } from "../profile/Actions";
import { setUserData } from "../profile/Actions";


function Log(){

   let navigate = useNavigate();
   const tokenState = useSelector(selectToken);
   const tokenCheck = localStorage.getItem("token2");

   const userDataSetted = useSelector(selectUserData);
   //console.log("log userData check continue", userDataSetted);
   //console.log("log userData name check continue", userDataSetted?.body?.firstName);

   //const userDataSetted = useSelector(selectUserData);


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
        if(tokenCheck != null) {
            store.dispatch(setToken(tokenCheck)); 
            const nameAsync = async () =>{
            await getData();
            const fetchedUserData = JSON.parse(localStorage.getItem("user/signedUp"));
            setUserData(fetchedUserData);
            store.dispatch(setUserData(fetchedUserData));};
            nameAsync();
        }
        
    }, []);

    if(tokenState === "" || tokenState === null){
        //if(tokenCheck === null){
        return (
            <div>
                <a className="main-nav-item" href="" onClick={signUp}>
                <i className="fa fa-user-circle"></i>
                Sign up
                </a>
                <a className="main-nav-item" href="" onClick={login}>
                <i className="fa fa-user-circle"></i>
                Sign In
                </a>
            </div>
        );}else{
        return (
            <div>
                <a className="main-nav-item" href="/user/profile">
                    {userDataSetted?.body?.firstName}
                </a>
                <a className="main-nav-item" href="/" onClick={logout}>
                <i className="fa fa-user-circle"></i>
                Sign Out
                </a>
            </div>
        );}

}

export default Log;


