import React from 'react';
import { Link } from 'react-router-dom';
import broker from '../../../image/broker.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-content d-flex justify-content-between container align-items-center'>
            <div className="banner-text ">
                <h1 className='display-4 fw-bold'>Get your Property</h1>
                <h1 className='display-4 fw-bold text-danger'>Solution Here</h1>
                <p className='text-muted'>I am providing home buying and selling assistance service for almost 30 yeasr in NYC USA
                </p>

                <Link className='btn btn-danger' to='/services'>Explore More</Link>
            </div>
            <div className="banner-img ">
                <img style={{ maxWidth: '300px' }} className='img-fluid' src={broker} alt="" />
            </div>
        </div>
    );
};

export default Banner;