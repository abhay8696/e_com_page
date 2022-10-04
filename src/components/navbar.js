import React from 'react';
import '../styles/navbar.css'

import logo from '../data/images/logo.svg';
import cart from '../data/images/icon-cart.svg';
import profileImage from '../data/images/image-avatar.png';
const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={logo}/>
            <div className='menu'>
                <span>Collections</span>
                <span>Men</span>
                <span>Women</span>
                <span>About</span>
                <span>Contact</span>
            </div>
            <div className='cart_profile'>
                <img src={cart} />
                <img src={profileImage} />
            </div>
        </div>
    );
};

export default Navbar;