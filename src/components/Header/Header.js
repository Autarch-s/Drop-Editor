import React from 'react';
import logo from '../../img/logo.png'
import Search from "./Search/Search";

const Header = () => {
    return (
        <header className="Header">
            <div className="wrapper">
                <img className="Header__logo" src={logo} alt="Zeyron logo"></img>
                <Search/>
            </div>
        </header>
    );
};

export default Header;