import React from 'react'
import logo from './logo.png'
import './header.css'
import { Link, NavLink } from 'react-router-dom'
function Header() {
    return (
        <>
            <div className='header'>
                <header>
                    <nav>
                        <div className='logo'>

                            <Link to='/'> <img src={logo} alt="logo" /></Link>
                        </div>
                        <div className='links'>

                            <ul>
                                <li>
                                    <NavLink id='abc' to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink id='abc' to='/about'>About</NavLink>
                                </li>
                                <li>
                                    <NavLink id='abc' to='/contact'>Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink id='abc' to='/github'>GitHub</NavLink>
                                </li>

                            </ul>
                        </div>
                        <div className='getstarted'>
                            <button type='button'>GetStarted</button>

                        </div>

                    </nav>
                </header>

            </div>
        </>
    )
}

export default Header