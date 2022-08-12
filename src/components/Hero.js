import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='left'>
                    <p>Explore All Crypto Currencies</p>
                    <h1>Look at Recent Price Action</h1>
                    <p>Save a Collection to Track Your Favorites</p>
                    <div className='input-container'>
                        <input type='crypto' placeholder='Enter a Cryptocurrency' />
                        <button className='btn'>Learn More</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='right'>
                    <div className='img-container'>
                        <img src={Crypto} alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero