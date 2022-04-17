import React from 'react';
import google from '../../../image/google.png'

const SocialLogin = () => {
    return (
        <div className='text-center  mx-auto'>
            <div className="devider d-flex align-items-center">
                <div style={{ height: '1px' }} className="line w-100 bg-danger"></div>
                <p className=' m-2'>or</p>
                <div style={{ height: '1px' }} className="line w-100 bg-danger"></div>
            </div>
            <button className='btn btn-dark w-100'>
                <img width='25px' className='me-2' src={google} alt="" />
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;