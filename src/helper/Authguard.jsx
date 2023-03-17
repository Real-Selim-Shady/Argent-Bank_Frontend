import { Navigate } from "react-router-dom";
import { accountService } from "../services/accountService";

// eslint-disable-next-line react/prop-types
function AuthGuard({children}){

    //console.log(accountService.isLogged());
    //console.log(localStorage.getItem("token"));
    if(accountService.isLogged()){
    return children;}
    // eslint-disable-next-line react/react-in-jsx-scope
    else{return <Navigate to = "/user/login" />;}
}

export default AuthGuard;