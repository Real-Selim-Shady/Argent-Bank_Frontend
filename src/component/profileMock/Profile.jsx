

/* eslint-disable react/react-in-jsx-scope */


import { selectFirstName, selectLastName/*, selectUserData*/ } from "../../utils/selectors";
import { onChangeFirstName, onChangeLastName, setFirstName, setLastName, setUserData } from "./Actions";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { updateData, rebootData } from "../../services/APIcalls";


function Profile(){

  const [isLoaded, setIsLoaded] = useState(true);
  const dispatch = useDispatch();

  const firstName = useSelector(selectFirstName);
  const lastName = useSelector(selectLastName);


  useEffect(() => {
    const fetchedUserData = JSON.parse(localStorage.getItem("user/signedUp"))?.body;
    dispatch(setUserData(fetchedUserData));
    dispatch(setFirstName(fetchedUserData?.firstName));
    dispatch(setLastName(fetchedUserData?.lastName));
    setIsLoaded(false);
  }, []);
  console.log(isLoaded);

  const onFirstNameChange = (event) => {
    dispatch(onChangeFirstName(event));
  };

  const onLastNameChange = (event) => {
    dispatch(onChangeLastName(event));
  };


    const onSubmit = (e) => {
      e.preventDefault();
      const dataEdit = {
        firstName: firstName,
        lastName: lastName
      };
        updateData(dataEdit).then((response) => {
          dispatch(setUserData(response.data));
          setIsLoaded(true);
        }).catch((error) => {
          console.log(error);
        });
    };

    const edit = () => {
      //updateData();
    };


    if (isLoaded != false) {
    return (
    <main className="main bg-dark">
        <div className="header" id="validated">
          {<h1>Welcome back<br />{firstName} {lastName} !</h1>}
          <button className="edit-button" onClick={edit}>Edit Name</button>
        </div>
        <div className="header" id="toBeValidated">
          <form onSubmit={onSubmit}>
            <div className="input-wrapper">
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" id="firstName" value={firstName} /*onFocus= "" */ onChange={onFirstNameChange} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" id="lastName"  value={lastName } /*onFocus= "" */ onChange={onLastNameChange} />
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
        {<button onClick={rebootData}>Reboot Tony s Data</button>}
      </main>
    );}else{null;}
}

export default Profile;


/*
Les actions onChangeFirstName et onChangeLastName ne sont pas utilisées dans votre composant Profile.

L'action setUserData est appelée sans avoir été définie dans votre fichier actions.js.

Vous utilisez setTimeout pour définir l'état initial de votre composant, ce qui n'est pas une bonne pratique. Vous devriez utiliser useState et useEffect pour cela.

Vous utilisez des valeurs de l'état pour définir les valeurs des champs de saisie, mais ces valeurs ne sont pas mises à jour lorsque l'utilisateur saisit du texte. Vous devez plutôt utiliser les valeurs des actions setFirstName et setLastName.

Vous utilisez event.target.elements pour obtenir les valeurs des champs de saisie dans la fonction onSubmit, mais event n'est pas défini. Vous devez plutôt utiliser le paramètre e qui est passé à la fonction.

Vous appelez updateData avant de mettre à jour l'état avec les nouvelles données saisies par l'utilisateur. Vous devriez inverser ces deux opérations.

Vous utilisez newFetchedUserData dans votre fonction onSubmit, mais cette variable n'est pas définie à ce niveau. Vous devez plutôt utiliser userDataSetted, qui est la variable d'état qui contient les données de l'utilisateur.

Vous utilisez store.dispatch pour déclencher des actions, mais vous n'avez pas défini de store dans votre fichier. Vous devriez utiliser dispatch pour déclencher des actions.
*/