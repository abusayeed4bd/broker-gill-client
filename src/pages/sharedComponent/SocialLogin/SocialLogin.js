import React from 'react';
import google from '../../../image/google.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }


    return (
        <div className='text-center  mx-auto'>
            <div className="devider d-flex align-items-center">
                <div style={{ height: '1px' }} className="line w-100 bg-danger"></div>
                <p className=' m-2'>or</p>
                <div style={{ height: '1px' }} className="line w-100 bg-danger"></div>
            </div>
            <button onClick={handleSignInWithGoogle} className='btn btn-dark w-100'>
                <img width='25px' className='me-2' src={google} alt="" />
                Login With Google
            </button>
        </div>
    );
};

export default SocialLogin;