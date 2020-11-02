
import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
          <img src={logo} alt=""/>
          <nav>
            <a href="/shop ">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/manage">Manage</a>
            <a href="/about">About us</a>
            <a href="contact">Contact us</a>
          </nav>
        </div>
    );
};

export default Header;