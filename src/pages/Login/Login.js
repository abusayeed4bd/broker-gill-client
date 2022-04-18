import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../sharedComponent/SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }
    const handelPasswordBlur = event => {
        setPassword(event.target.value);
    }

    const handleLoginSubmit = event => {
        event.preventDefault();

        signInWithEmailAndPassword(email, password);
        console.log(user);
    }
    return (
        <div className='container page'>

            <div className="form-container w-50 mx-auto bg-light m-4 p-4">
                <h2 className='text-center'>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        <label className='d-block' htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} className='form-control' type="email" name="email" placeholder='Your Email' id="" />
                    </div>
                    <div>
                        <label className='d-block' htmlFor="password">Password</label>
                        <input onBlur={handelPasswordBlur} className='form-control' type="password" name="password" placeholder='Your Email' id="" />
                    </div>
                    <button type='submit' className='w-100 btn btn-danger mt-3'>Login</button>
                </form>
                <p className='text-center mt-2'>New to this website? <Link className='text-decoration-none text-danger' to='/signup'>Create an account</Link></p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;