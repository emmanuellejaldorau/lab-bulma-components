import React from "react";


function Navbar() {

    return (
        <div className="navbar-menu is-transparent">
            <div className="navbar-start">
                <a className="navbar-item">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Bulma" />
                </a>
                <a className="navbar-item">
                    Home
                </a>
            </div>        

            <div className="navbar-end">
                <a className="navbar-item">
                <span className="button is-info">Login</span>
                </a>
                <a className="navbar-item">
                    <span className="button is-success">Sign up</span>  
                </a>
            </div>
        </div>
    );
    
}

export default Navbar;

