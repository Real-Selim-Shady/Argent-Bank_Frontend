

/* eslint-disable react/react-in-jsx-scope */

//import { selectState2 } from "../../utils/selectors";
//import { useSelector, useDispatch } from "react-redux";
//import { action2 } from "./Actions";*/
import { selectData } from "../../utils/selectors";
import { useDispatch, useSelector/*, useDispatch*/ } from "react-redux";
import { setData } from "../connect/Actions";
import { useEffect } from "react";
//import { store } from "../../utils/store";
//import { accountService } from "../../services/accountService";
import { getData } from "../../services/APIcalls";


function Profile(){

  const dispatch = useDispatch();

  const fetchedData = localStorage.getItem("fetchedData");
  const parsedData = JSON.parse(fetchedData);
  const dataSetted = useSelector(selectData);
  
  useEffect(() => {
    dispatch(setData(parsedData));
  }, []);
  
  console.log("fetchedData", parsedData);
  console.log("data page profile", dataSetted);


    return (
    <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back<br />Tony Jarvis!</h1>
          <button className="edit-button">Edit Name</button>
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
        <div>
            token: {dataSetted?.data?.body?.token}
        </div>
        <button onClick={getData}>LE BOUTON DATA</button>
      </main>
    );
}

export default Profile;

/*
    <div className="LLBackground">
      {residences.map((residence) => (
        <div key={residence.id} className="coverCard">
          <a href={`/ResidenceOverview/${residence.id}`}>
            <img
              src={residence.cover}
              className="coverPic"
              alt="photo_de couverture de l'habitat"
            />
            <p className="coverTitle">{residence.title}</p>
          </a>
        </div>
      ))}
    </div>
*/


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