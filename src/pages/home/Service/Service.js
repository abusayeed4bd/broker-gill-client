import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='shadow-sm  col-lg-4 col-sm-12 col-md-6 m-3 p-2 card border-0'>

            <img className='img-fluid' src={img} alt="" />
            <h2>{name}</h2>
            <p className='text-danger fs-4 fw-bold'>${price}</p>
            <p className='text-muted fs-5'><small>{description}</small></p>
            <div className="text-end me-3 mt-auto">
                <Link className='text-decoration-none text-danger fw-bold ' to='/checkout'>Book Now &#8594;</Link>
            </div>
        </div>
    );
};

export default Service;