import axios from "axios";
import { accountService } from "./accountService";


export const connectAPI = (email, password) => {

    axios.post("http://localhost:3001/api/v1/user/login", { email, password })
      .then(res => {
        accountService.saveToken(res.data.body.token);
        localStorage.setItem("fetchedData", JSON.stringify(res));
      })
      .catch(error => console.log(error));
};

export const getData = () => {
    /*axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
      } )*/
    //console.log("token", localStorage.getItem("token"));
    fetch ("http://localhost:3001/api/v1/user/profile", {
    method: "post",
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}` }
    } )
        .then((response) => response.json())
        .then((res) =>{
            accountService.userData(res);
            console.log("user/profile",res);
        })
        .catch(error => console.log(error));
};



    //const email = document.getElementById("email").value;
    //const password = document.getElementById("password").value;
    //let navigate = useNavigate();
    //const storedData = JSON.parse(localStorage.getItem("fetchedData"));
    //const dispatch = useDispatch();
    //http://localhost:3001/api/v1/user/signup
    //http://localhost:3001/user/login
    //const email = useSelector(selectEmail);
    //const password = useSelector(selectPassword);
    //const dataToSet = storedData || res; // utilise les données existantes si elles existent
    //store.dispatch(setData(dataToSet)); // envoie les données dans le store
    //navigate("/user/profile");
    //import { useSelector/*, useDispatch*/ } from "react-redux";
    //import { selectEmail, selectPassword } from "../utils/selectors";
    //import { setData } from "../component/connect/Actions";
    //import { store } from "../utils/store";
    //import { useNavigate } from "react-router-dom";

