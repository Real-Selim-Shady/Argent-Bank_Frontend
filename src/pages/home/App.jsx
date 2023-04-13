/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
import "./App.css";
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "../../component/header/Header";
import Welcome from "../../component/welcome/Welcome";
import Connect from "../../component/connect/Connect";
import Profile from "../../component/profile/Profile";
import Footer from "../../component/footer/Footer";
import AuthGuard from "../../helper/Authguard";
import Signup from "../../component/signup/Signup";
import Error from "../error/Error";



function App() { 

  return (
    <Routes>
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
      <Route path="/user/signup" element={
        <div>
          <Header />
          <Signup />
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
      <Route path="/SuccessSignup/login" element={
        <div>
          <Header />
          <p>
            Your account has been created, you can now connect to it from this page.
          </p>
          <Connect />
          <Footer />
        </div>
      }
       />
      <Route path="/error/connection" element={
        <div>
          <Header />
          <p>
            We couldn't find the user in our database, but, do not worry, your data are safe.
            <br/>You may have enter wrong information, or our servers could be temporarily offline.
            <br/>You can try to connect again with right user information, or contact us at contact@argentbank.com.
          </p>
          <Connect />
          <Footer />
        </div>
      }
      />
      <Route path="/error/connectUserUnknown" element={
        <div>
          <Header />
          <p>
            Something wrong happened.
            <br/>The email you entered is not recognized.
            <br/>If your account already exist, we may have troubles with our server, and you could try again later.
            <br/>Otherwise, please verify the email you entered or create an account.
          </p>
          <Connect />
          <Footer />
        </div>
      }
      />
      <Route path="/error/connectWrongPassword" element={
        <div>
          <Header />
          <p>
            Something wrong happened.
            <br/>The password you entered is not recognized.
          </p>
          <Connect />
          <Footer />
        </div>
      }
      />
      <Route path="/error/signup" element={
      <div>
        <Header />
        <p>
            Something wrong happened in our servers.
            <br/>You can try to signup again, or contact us at contact@argentbank.com.
        </p>
        <Signup />
        <Footer />
      </div>
      }
      />
      <Route path="/error/signupMailExist" element={
      <div>
        <Header />
        <p>
            The email you entered already exist in our database.
            <br/>You can try to signup with a non existing email, connect to an existing profile, or contact us at contact@argentbank.com.
        </p>
        <Signup />
        <Footer />
      </div>
      }
      />
      <Route path="/*" element={
        <div>
          <Header />
          <Error />
          <Footer />
        </div>
      }
       />
      </Routes>
  );
}

export default App;
