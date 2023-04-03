//import { selectFirstName } from "../../utils/selectors";
//import { selectLastName } from "../../utils/selectors";
import { onChangeFirstName } from "./Actions";
import { onChangeLastName } from "./Actions";
import { setFirstName } from "./Actions";
import { setLastName } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "./Actions";
import { selectUserData } from "../../utils/selectors";
import React, { useEffect, useState } from "react";
import { updateData } from "../../services/APIcalls";
import { store } from "../../utils/store";
import { selectToken } from "../../utils/selectors";
import { Navigate } from "react-router-dom";
import { getData } from "../../services/APIcalls";


function Profile(){

  const [isLoaded, setIsLoaded] = useState(true);


  const dispatch = useDispatch();

  const tokenState = useSelector(selectToken);

  const userDataSetted = useSelector(selectUserData);
  //const firstNameState = useSelector(selectFirstName); //-> à transferer dans l'intermédiaire
  //const lastNameState = useSelector(selectLastName); //-> à transferer dans l'intermédiaire


  useEffect(() => {

    const workAsync = async () => {
      await getData();
      const newFetchedUserData = JSON.parse(localStorage.getItem("user/signedUpEdited2"));
      const fetchedUserData = JSON.parse(localStorage.getItem("user/signedUp"));
      //console.log("newFetchedUserData", newFetchedUserData);

      if( newFetchedUserData != null){
        console.log("new data used");
        setUserData(newFetchedUserData);
        await store.dispatch(setUserData(newFetchedUserData));
        store.dispatch(setFirstName(userDataSetted?.body?.firstName));
        store.dispatch(setLastName(userDataSetted?.body?.lastName));
        setIsLoaded(false);
      }else if(fetchedUserData){
        setUserData(fetchedUserData);
        await store.dispatch(setUserData(fetchedUserData));
        store.dispatch(setFirstName(fetchedUserData.body.firstName));
        store.dispatch(setLastName(fetchedUserData.body.lastName));
        setIsLoaded(false);
      }
    };
    workAsync();

  }, []);

   
  const edit = () => {
    //updateData();
  };



  const  onFirstNameChange= (event) => {
    dispatch(onChangeFirstName(event));
    //-> change color from grey to black
  };

  const onLastNameChange = (event) => {
    dispatch(onChangeLastName(event));
  };

  const onSubmit = (e) => {
    e.preventDefault();



    const dataEdit = {
      firstName : userDataSetted?.body?.firstName,
      lastName : userDataSetted?.body?.lastName
    };
    
    const asyncUpdate = async () => {
      await updateData(dataEdit);
      const newFetchedUserData = JSON.parse(localStorage.getItem("user/signedUpEdited2"));
      store.dispatch(setUserData(newFetchedUserData));
    };

    asyncUpdate();

  };

    if(tokenState != null){
      if (!isLoaded) {
      return (
      <main className="main bg-dark">
          <div className="header" id="validated">
            {<h1>Welcome back<br />{userDataSetted?.body?.firstName} {userDataSetted?.body?.lastName} !</h1>}
            {/*<h1>Version states<br />{firstNameState} {lastNameState} {"later"} !</h1>*/}
            <button className="edit-button" onClick={edit}>Edit Name</button>
          </div>
          <div className="header" id="toBeValidated">
            <form onSubmit={onSubmit}>
              <div className="input-wrapper">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" value={userDataSetted?.body?.firstName} /*onFocus= "" */ onChange={onFirstNameChange} />
              </div>
              <div className="input-wrapper">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName"  value={userDataSetted?.body?.lastName} /*onFocus= "" */ onChange={onLastNameChange} />
              </div>
              <button className="sign-in-button">Edit</button>
            </form>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x8349)</h3>
              <p className="account-amount">$2,082.79</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          {/*<button onClick={rebootData}>Reboot Tony s Data</button>*/}
        </main>
      );}else{return (<div>loading</div>);}
    }else{
      return <Navigate to = "/user/login" />;
    }

}

export default Profile;
