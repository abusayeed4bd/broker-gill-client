import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="bg-dark mt-5">
            <div className='container footer-content d-flex justify-content-between py-5'>
                <div>
                    <h2 className='display-6 fw-bold text-white'>BROKER GILL</h2>
                    <p className='text-white'>Real estate broker. located in Florida USA</p>
                </div>
                <div className='d-flex justify-content-between  '>
                    <div className='d-flex flex-column  '>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                        <Link to='/services'>Services</Link>
                    </div>
                    <div className='d-flex flex-column'>
                        <Link to='/login'>Login</Link>
                        <Link to='/signup'>Create new account</Link>
                    </div>
                </div>
            </div>
            <div className='text-white text-center py-1'>
                <p>All right researve by &copy; <span className='text-danger'>Abusayeed</span></p>
            </div>
        </div>
    );
};

export default Footer;