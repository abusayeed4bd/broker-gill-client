import React from 'react';
import './About.css'
import abusayeed from '../../image/abusayeed.jpg'

const About = () => {
    return (
        <div className='page container'>
            <h2 className='text-danger display-6 fw-bold text-center my-3'>About Me</h2>
            <div className="text-center">
                <img height={'400px'} src={abusayeed} alt="" />
                <div>
                    <h2>Hi there, this is Abu Sayeed</h2>
                    <p>I am a Front end web developer </p>
                    <h3>My Goal:</h3>
                    <p>Now I am learning web developmet specially I am learning javascript library framework named react js. my next plan is within 3 month I want to get a internship offer from any reputed company. It can be from Bangladesh or internation company.</p>
                </div>
            </div>
        </div>
    );
};

export default About;