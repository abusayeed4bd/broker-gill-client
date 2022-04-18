import React from 'react';

const CheckOut = () => {
    return (
        <div className='page container'>
            <h2 className='text-danger text-center display-5 bold'>checkout here </h2>
            <form >
                <div>
                    <label className='d-block' htmlFor="name">Name</label>
                    <input className='form-control' type="text" name="name" placeholder='Your Name' id="" />
                </div>
                <div>
                    <label className='d-block' htmlFor="email">Email</label>
                    <input className='form-control' type="email" name="email" placeholder='Your Email' id="" />
                </div>
                <div>
                    <label className='d-block' htmlFor="email">Amount</label>
                    <input className='form-control' type="number" name="email" placeholder='Anount' id="" />
                </div>
                <div>
                    <label className='d-block' htmlFor="password">Password</label>
                    <input className='form-control' type="password" name="password" placeholder='Your Email' id="" />
                </div>
                <button type='submit' className='w-100 btn btn-danger mt-3'>Payment</button>


            </form>
        </div>
    );
};

export default CheckOut;