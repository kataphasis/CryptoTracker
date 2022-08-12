import React, { useState, useContext } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { AuthContext } from '../contexts/AuthProvider'


const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)
const {login} = useContext(AuthContext)
    return (
        <div className='header'>
            <div className='container'>
                <h1>Patrick's<span className='primary'>Crypto Site</span></h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/Featured'>Featured</Link>
                    </li>
                    <li>
                        <Link to='/AllCryptos'>All Cryptos</Link>
                    </li>
                    <li>
                        <Link to='/UserCollection'>Your Collection</Link>
                    </li>
                    <li>
                        <span onClick={login}>Login</span>
                    </li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar