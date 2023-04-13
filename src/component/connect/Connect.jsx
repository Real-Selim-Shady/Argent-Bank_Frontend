import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectEmail, selectPassword } from "../../utils/selectors";
import { onChangeEmail, onChangePassword } from "./Actions";
import { connectAPI } from "../../services/APIcalls";
import { setRemember} from "./Actions";
import { selectRemember } from "../../utils/selectors";
import { errorSubmitSigninAction } from "./Actions";
import { goodSubmitSigninAction } from "./Actions";
import { selectSigninFieldsErrorStatus } from "../../utils/selectors";
import "./Connect.css";

/**
 * @description Function rendering Connect feature
 */
function Connect(){

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector(selectEmail);
  const password = useSelector(selectPassword);

  /**
   * @description When field changes, thoses changes are sent to its linked state
   */
  const onEmailChange = (event) => {
    dispatch(onChangeEmail(event));
  };

  /**
   * @description When field changes, thoses changes are sent to its linked state
   */
  const onPasswordChange = (event) => {
    dispatch(onChangePassword(event));
  };

  const signinFieldErrorStatus = useSelector(selectSigninFieldsErrorStatus);

  /**
   * @description rememberState is used to check is user wants to be remembered or not
   */
  const rememberState = useSelector(selectRemember);
  const changeRememberStatus = () => { dispatch(setRemember());};

  /**
   * @description When form is sent, states value are sent to the API
   */
  const onSubmit = async (e) => {
    e.preventDefault();
    if (email == "" || password == ""){
      dispatch(errorSubmitSigninAction());
      return false;
    }else{
      dispatch(goodSubmitSigninAction());
    await connectAPI(email, password, rememberState);
    navigate("/user/profile");}
  };

  return(

    <main className="main bg-dark">
      <section className="sign-in-sign-up-content">
        <i className="fa fa-solid fa-user sign-in-sign-up-icon iconProfileConnect"></i>
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input type="email" name="email" id="email" value={email} onChange={onEmailChange} />
            {(email === "" && signinFieldErrorStatus === true) && <div className="empty-field-message">Please fill the last name field</div>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" value={password} onChange={onPasswordChange} />
            {(password === "" && signinFieldErrorStatus === true) && <div className="empty-field-message">Please fill the last name field</div>}
          </div>
          <div className="input-remember">
            <label htmlFor="remember-me">
              Remember me
            </label>
            <input type="checkbox" id="remember-me" onClick={changeRememberStatus} />
          </div>
          <button className="sign-in-sign-up-button">Sign In</button>
        </form>
      </section>
    </main>

  );

}

export default Connect;

