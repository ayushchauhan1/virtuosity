import React from 'react';
import logo from '../assets/logo.svg';
import { Link } from "react-router-dom";
const header = () => {
    return (
        <div className='header'>
            
                
                
               <div><img  className='logo' src={logo}></img></div>
                <div className="Nav-Home"><a href="/" className="middle"  style={{ textDecoration: 'none' ,color: "#1A1C20" }}>Home</a></div>
                <div className="Nav-about"><a href="/aboutus" className="middle"  style={{ textDecoration: 'none' ,color: "#1A1C20" }}>About us</a></div>
                <div className="Nav-ourboard"><a href="/ourboard" className="middle"  style={{ textDecoration: 'none' ,color: "#1A1C20" }}>ourBoard</a></div>
                <div className="Nav-services"><a href="/services" className="middle"  style={{ textDecoration: 'none' ,color: "#1A1C20" }}>Services</a></div>
                <div className="Nav-contact"><a href="/contactus" className="middle"  style={{ textDecoration: 'none' ,color: "#1A1C20" }}>Contact</a></div>
               
            
        </div>
    )
}

export default header
