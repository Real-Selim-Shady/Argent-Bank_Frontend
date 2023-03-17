

/* eslint-disable react/react-in-jsx-scope */



//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";

//import { useState } from "react";


import { useNavigate } from "react-router-dom";
import axios from "axios";
import { accountService } from "../../services/accountService";
import { useSelector, useDispatch } from "react-redux";
import { selectEmail, selectPassword } from "../../utils/selectors";
import { onChangeEmail, onChangePassword } from "./Actions";
import { setData } from "./Actions";
import { store } from "../../utils/store";


function Connect(){


  let navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  const onEmailChange = (event) => {
    dispatch(onChangeEmail(event));
  };

  const onPasswordChange = (event) => {
    dispatch(onChangePassword(event));
  };



  const onSubmit = (e) => {
      e.preventDefault();
      //http://localhost:3001/api/v1/user/signup
      //http://localhost:3001/user/login
      const storedData = JSON.parse(localStorage.getItem("fetchedData"));
      axios.post("http://localhost:3001/api/v1/user/login", { email, password })
        .then(res => {
          accountService.saveToken(res.data.body.token);
          localStorage.setItem("fetchedData", JSON.stringify(res));
          const dataToSet = storedData || res; // utilise les données existantes si elles existent
          store.dispatch(setData(dataToSet)); // envoie les données dans le store
          navigate("/user/profile");
        })
        .catch(error => console.log(error));
  };


  return(

    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" name="email" id="email" value={email} onChange={onEmailChange} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} />
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              Remember me
            </label>
            <input type="checkbox" id="remember-me" />
          </div>
          <button className="sign-in-button">Sign In</button>
          <a href="/user/profile">click go to profile for test</a>
        </form>
      </section>
    </main>

  );

}

export default Connect;



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