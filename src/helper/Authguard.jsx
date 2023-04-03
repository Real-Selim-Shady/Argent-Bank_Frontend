import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
//import { accountService } from "../services/accountService";
import { useSelector/*, useDispatch*/ } from "react-redux";
//import { selectData } from "../utils/selectors";
//import { useEffect } from "react";
//import { accountService } from "../services/accountService";
import { selectToken } from "../utils/selectors";
import { store } from "../utils/store";
import { setToken } from "../component/profile/Actions";
//import { getData } from "../services/APIcalls";
//import { selectFirstName } from "../utils/selectors";
//import { selectLastName } from "../utils/selectors";
//import { setFirstName } from "../component/profile/Actions";
//import { setLastName } from "../component/profile/Actions";

// eslint-disable-next-line react/prop-types
function AuthGuard({children}){



    const [isLoaded, setIsLoaded] = useState(true);
    const tokenState = useSelector(selectToken);


    useEffect(() => {


        const tokenCheck = localStorage.getItem("token2");
        store.dispatch(setToken(tokenCheck));

        setTimeout(() => {
            setIsLoaded(false);
            }, 100);



    }, []);

    if (!isLoaded){
        //if(accountService.isLogged()){
        if(tokenState != "" ){
        //if(tokenCheck != null){
        return children;}
        // eslint-disable-next-line react/react-in-jsx-scope
        else{return <Navigate to = "/user/login" />;}
        }else{null;}
}

export default AuthGuard;