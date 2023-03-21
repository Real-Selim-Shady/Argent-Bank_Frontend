/* eslint-disable react/react-in-jsx-scope */
import logo from "../../logo.svg";
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { Provider, useSelector } from "react-redux";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React /*, { useState }*/ from "react";
import Component1 from "../../component/component1/Component1";
import Component2 from "../../component/component2/Component2";
import Header from "../../component/header/Header";
import Welcome from "../../component/welcome/Welcome";
import Connect from "../../component/connect/Connect";
import Profile from "../../component/profile/Profile";
import Footer from "../../component/footer/Footer";
import AuthGuard from "../../helper/Authguard";
import { selectData } from "../../utils/selectors";

//import { accountService } from "../../services/accountService";



function App() { 

  /*const fetchedData = localStorage.getItem("fetchedData");
  const parsedData = JSON.parse(fetchedData);
  console.log(parsedData?.data?.body?.token); //-> peut servir à vérifier que le token est bien supprimé du localStorage*/
  const dataSetted = useSelector(selectData);
  console.log("data page d'accueil", dataSetted);

  return (
    <Routes>
      <Route path="/a" element={
        <div>
          <Component1 />
          <Component2 />
        </div>
      }
       />
      <Route path="/" element={
        <div>
          <Header />
          <Welcome />
          <Footer />
        </div>
      }
       />
      <Route path="/user/login" element={
        <div>
          <Header />
          <Connect />
          <Footer />
        </div>
      }
       />
      <Route path="/user/profile" element={
        <div>
          <Header />
          <AuthGuard>
            <Profile />
          </AuthGuard>
          <Footer />
        </div>
      }
       />
      <Route path="/b" element={
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      }
       />
    </Routes>
  );
}

export default App;
