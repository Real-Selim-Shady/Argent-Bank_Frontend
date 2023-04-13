

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectEmailCreation, selectPasswordCreation, selectFirstNameCreation, selectLastNameCreation } from "../../utils/selectors";
import { onChangeEmailCreation, onChangePasswordCreation, onChangeFirstNameCreation, onChangeLastNameCreation } from "./Actions";
import { createData } from "../../services/APIcalls";
import { selectSignupFieldsErrorStatus } from "../../utils/selectors";
import { errorSubmitSignupAction } from "./Actions";
import { goodSubmitSignupAction } from "./Actions";
import "./Signup.css";

function Signup(){


  //let navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector(selectEmailCreation);
  const password = useSelector(selectPasswordCreation);
  const firstName = useSelector(selectFirstNameCreation);
  const lastName = useSelector(selectLastNameCreation);

  const onEmailCreationChange = (event) => {
    dispatch(onChangeEmailCreation(event));
  };

  const onPasswordCreationChange = (event) => {
    dispatch(onChangePasswordCreation(event));
  };

  const onFirstNameCreationChange = (event) => {
    dispatch(onChangeFirstNameCreation(event));
  };

  const onLastNameCreationChange = (event) => {
    dispatch(onChangeLastNameCreation(event));
  };


  const errorSubmitSignup = useSelector(selectSignupFieldsErrorStatus);
  const onSubmit = async (e) => {
    e.preventDefault();


    if (email == "" || password == "" || firstName == "" || lastName == ""){

      dispatch(errorSubmitSignupAction());
      return false;
    }else{
      dispatch(goodSubmitSignupAction());


      await createData(email,password,firstName,lastName);

    }

  };

  return(

    <main className="main bg-dark">
      <section className="sign-in-sign-up-content">
        <i className="fa fa-solid fa-user sign-in-sign-up-icon iconProfileConnect"></i>
        <h1>Sign Up</h1>
        <form onSubmit={onSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Email</label>
            <input type="email" name="emailC" id="emailC" value={email} onChange={onEmailCreationChange} />
            {(email === "" && errorSubmitSignup === true) && <div className="empty-field-message">Please fill the email field</div>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" name="passwordC" id="passwordC" value={password} onChange={onPasswordCreationChange} />
            {(password === "" && errorSubmitSignup === true) && <div className="empty-field-message">Please fill the password field</div>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">First Name</label>
            <input type="text" name="firstNameC" id="firstNameC" value={firstName} onChange={onFirstNameCreationChange} />
            {(firstName === "" && errorSubmitSignup === true) && <div className="empty-field-message">Please fill the first name field</div>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Last Name</label>
            <input type="text" name="lastNameC" id="lastNameC" value={lastName} onChange={onLastNameCreationChange} />
            {(lastName === "" && errorSubmitSignup === true) && <div className="empty-field-message">Please fill the last name field</div>}
          </div>
          <button className="sign-in-sign-up-button">Sign Up</button>
        </form>
      </section>
    </main>

  );

}

export default Signup;


