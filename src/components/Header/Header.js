import React from 'react';
import './Header.css'
import { SiAframe } from 'react-icons/si';
import { BsFillHouseFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='appname'>
                <SiAframe></SiAframe>
                <p>Frame</p>
                <BsFillHouseFill></BsFillHouseFill>
            </div>
            <div className="nav-links">
                <NavLink className='navlink' to='/home'>Home</NavLink>
                <NavLink className='navlink' to='/tour'>Tour</NavLink>
                <NavLink className='navlink' to='/booking'>Booking</NavLink>
                <NavLink className='navlink' to='/about'>About</NavLink>
            </div>
            <NavLink className='navlink' to='/Login'>Login</NavLink>
        </nav>
    );
};

export default Header;