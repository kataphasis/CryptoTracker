import React from 'react'
import './Signup.css'

import Crypto from '../assets/trade.png'

const Signup = () => {
    return (
        <div className='signup'>
            <div className='container'>
                {/* left */}
                <div className='left'>
                    <img src={Crypto} alt='' />
                </div>

                {/* right */}
                <div className='right'>
                    <h2>Register Now</h2>
                    <p>Track your favorite projects and see recent price action!</p>
                    <div className='input-container'>
                        <input type='email' placeholder='Enter your email' />
                        <button className='btn'>Sign Up</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup