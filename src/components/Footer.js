import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='col col-1'>
                    <h1>Patrick's<span className='primary'>Crypto Site</span></h1>
                </div>
                <div className='col'>
                    <h5>Navigate Site</h5>
                    <span className='bar'></span>
                        <a href='./Signup'>Sign Up or Sign In</a>
                        <a href='./Featured'>Chat</a>
                        <a href='../view/allCryptos'>Help Center</a>
                        <a href='../view/UserCollection'>FAQ</a>

                </div>
                <div className='col'>
                    <h5>Other Projects</h5>
                    <span className='bar'> </span>
                        <a href='/'>MusicMaker</a>
                        <a href='/'>PortfolioWebsite</a>
                        <a href='/'>BugTracker</a>
                        <a href='/'>PokerTracker</a>
                </div>
                <div className='col'>
                    <h5>About Me</h5>
                    <span className='bar'> </span>
                        <a href='/'><FaTwitter className='icon'/></a>
                        <a href='/'><FaLinkedin className='icon'/></a>
                        <a href='/'><FaGithub className='icon'/></a>
                </div>
            </div>
            
        </div>
    )
}

export default Footer