import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='container'>
            <div className="service-title text-center mt-4">
                <h2 className='display-5 fw-bold text-danger'>My Services</h2>
                <p className='text-muted fs-5'>I am providing home buying and selling assistance service for almost 30 yeasr in NYC USA</p>
            </div>
            <div className=' card-container  row card-group'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;