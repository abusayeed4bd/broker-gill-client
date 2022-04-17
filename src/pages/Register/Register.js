import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../sharedComponent/SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    return (
        <div className='container'>

            <div className="form-container w-50 mx-auto bg-light m-4 p-4">
                <h2 className='text-center'>Create Account</h2>
                <form >
                    <div>
                        <label className='d-block' htmlFor="email">Name</label>
                        <input className='form-control' type="email" name="email" placeholder='Your Name' id="" />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="email">Email</label>
                        <input className='form-control' type="email" name="email" placeholder='Your Email' id="" />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="password">Password</label>
                        <input className='form-control' type="password" name="password" placeholder='Your Email' id="" />
                    </div>
                    <button className='w-100 btn btn-danger mt-3'>Crate Account</button>
                </form>
                <p className='text-center mt-2'>Already have an account ? <Link className='text-decoration-none text-danger' to='/signup'>Login here</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;