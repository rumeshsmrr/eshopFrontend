// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { IoArrowDownCircleOutline } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
    <div className='whiteBar'></div>
    <nav className="navbar ">
       
        <div className='navPart1 '>
            <div className="navbar-logo">E-Shop</div>
            <ul className="navbar-links">
                <li>Home</li>
                <li>Products</li>
                <li>Pricing</li>
                <li>Our Shops</li>
            </ul>
           
        </div>
        <div className='middleNav'>
        <div className='shape1'>
            <div id="curved-corner-topleft"></div>
            </div>
            <div className='shape2'>
            <div id="curved-corner-topright"></div>
            </div>
            </div>
      <div className='navPart2'>
      
      <button className="contact-btn">Contact Us</button>
      <IoArrowDownCircleOutline className='arrowIcon2'/>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
