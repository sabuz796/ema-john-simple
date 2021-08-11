import React from 'react';
// ../ means current folder state move to one level up (here 2 level up) 
import logo from '../../images/logo.png';
// ./ means same folder state
import './Header.css';


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;