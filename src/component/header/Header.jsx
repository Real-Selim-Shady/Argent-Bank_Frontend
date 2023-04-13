

import React from "react";
import "./Header.css";  
import Log from "../logButton/Log";

function Header(){

    return (
        <section>
            <nav className="main-nav head-block">
                <a className="main-nav-logo" href="/">
                    <img
                    className="main-nav-logo-image"
                    src="/assets/argentBankLogo.png"
                    alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div className="log-box">
                    <Log />
                </div>
            </nav>
        </section>
    );

}

export default Header;
