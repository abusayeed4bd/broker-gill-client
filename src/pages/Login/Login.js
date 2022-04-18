import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../sharedComponent/Loading/Loading';
import SocialLogin from '../sharedComponent/SocialLogin/SocialLogin';
import './Login.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let from = location.state?.from?.pathname || "/";


    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error

    ] = useSignInWithEmailAndPassword(auth);
    let errorElement;

    if (error) {
        errorElement = <p className='text-danger mt-5 text-center'>Error: {error?.message}</p>
    }


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



    }
    const resetPassword = async (event) => {

        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    if (user) {
        navigate(from, { replace: true });
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
                    {errorElement}

                </form>
                <p className='text-center mt-2'>New to this website? <Link className='text-decoration-none text-danger' to='/signup'>Create an account</Link></p>
                <div className='text-center'>
                    <button onClick={resetPassword} className='btn btn link  text-danger'>reset password?</button>
                </div>
                <ToastContainer></ToastContainer>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;