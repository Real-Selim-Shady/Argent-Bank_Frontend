
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
import "./Profile.css";
import { isEditingAction } from "./Actions";
import { isNotEditingAction } from "./Actions";
import { selectEditUserInfo } from "../../utils/selectors";


function Profile(){

  const [isLoaded, setIsLoaded] = useState(true);

  const dispatch = useDispatch();

  const tokenState = useSelector(selectToken);

  const userDataSetted = useSelector(selectUserData);

  const isEditing = useSelector(selectEditUserInfo);


  useEffect(() => {

    const workAsync = async () => {
      await getData();
      const newFetchedUserData = JSON.parse(localStorage.getItem("user/signedInEdited"));
      const fetchedUserData = JSON.parse(localStorage.getItem("user/signedIn"));

      if( newFetchedUserData != null){
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
    store.dispatch(isEditingAction());
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
      const newFetchedUserData = JSON.parse(localStorage.getItem("user/signedUpEdited"));
      store.dispatch(setUserData(newFetchedUserData));
    };

    asyncUpdate();
    store.dispatch(isNotEditingAction());
  };

  const cancelEdit = () => {
    
    const workAsync2 = async () => {
      await getData();
      const newFetchedUserData = JSON.parse(localStorage.getItem("user/signedUpEdited"));
      const fetchedUserData = JSON.parse(localStorage.getItem("user/signedUp"));

      if( newFetchedUserData != null){
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
    workAsync2();
    store.dispatch(isNotEditingAction());
  };

    if(tokenState != null){
      if (!isLoaded) {
      return (
      <main className="main bg-dark">
        {(isEditing === false)&&
          <div className="header" id="validated">
            {<h1>Welcome back<br />{userDataSetted?.body?.firstName} {userDataSetted?.body?.lastName} !</h1>}
            <button className="edit-button" onClick={edit}>Edit Name</button>
          </div>
        }
        {(isEditing === true)&&
          <div className="header" id="toBeValidated">
            <form onSubmit={onSubmit}>
            {<h1>Welcome back<br /></h1>}
              <div className="names-to-edit">
                <div className="name-edit">
                  <input type="text" name="firstName" id="firstName" className="inputNameEditClass" value={userDataSetted?.body?.firstName} onChange={onFirstNameChange} />
                </div>
                <div className="name-edit">
                  <input type="text" name="lastName" id="lastName" className="inputNameEditClass" value={userDataSetted?.body?.lastName} onChange={onLastNameChange} />
                </div>
              </div>
              <button className="save-edit-button" onClick={onSubmit}>save</button>
              <button type="button" className="save-edit-button" onClick={cancelEdit}>cancel</button>
            </form>
          </div>
        }
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
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x67124)</h3>
              <p className="account-amount">$10,928.42</p>
              <p className="account-amount-description">Available Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
          <section className="account">
            <div className="account-content-wrapper">
              <h3 className="account-title">Argent Bank Checking (x5201)</h3>
              <p className="account-amount">$184.30</p>
              <p className="account-amount-description">Current Balance</p>
            </div>
            <div className="account-content-wrapper cta">
              <button className="transaction-button">View transactions</button>
            </div>
          </section>
        </main>
      );}else{return (<div>loading</div>);}
    }else{
      return <Navigate to = "/user/login" />;
    }

}

export default Profile;
