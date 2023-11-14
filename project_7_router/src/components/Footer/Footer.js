import React from 'react'
import './footer.css'
import logo from './facebook.svg'
import logo2 from './instagram.svg'
function Footer() {
    return (
        <div className='footer'>
            <div className='upperFooter' style={{ backgroundColor: 'white' }}>
                <div className='about2'>
                    <h6>About</h6>
                    <p className='paragraph' >
                        <i>Rehman Ali, a 21-year-old university student</i>, is a passionate individual dedicated to both academic pursuits and self-directed learning. Currently immersed in the realms of web development, C++, Python, and Software Engineering, Rehman's intellectual curiosity extends beyond the digital realm to encompass a deep appreciation for ancient history. A skilled problem-solver and avid coder, Rehman aspires to contribute to the tech industry's forefront, harboring ambitions to collaborate with esteemed IT companies such as Google, Amazon, Microsoft, and Meta.
                    </p>
                </div>
                <div className='skills'>
                    <ul>
                        <li>
                            Web Developmen
                        </li>
                        <li>
                            Competative Programming
                        </li>
                        <li>
                            Python
                        </li>
                        <li>
                            React js
                        </li>
                        <li>
                            Problem Solving
                        </li>
                    </ul>
                </div>
                <div className='quickLinks'>
                    <ul>
                        <li>
                            <a href='https://github.com/ScriptSorcererMani' target='_blank'>GitHub</a>
                        </li>
                        <li>
                            <a href='https://www.codechef.com/users/rehman258' target='_blank'>CodeChef</a>
                        </li>
                        <li>
                            ScriptSorcererMani@gmail.com
                        </li>

                    </ul>
                </div>
            </div>
            <hr />
            <div className='loweFooter' >
                <div className='copyRight'>
                    <p>
                        Copyright © 2017 All Rights Reserved by <a style={{ textDecoration: 'none' }} href='https://cdpn.io/scanfcode/fullpage/MEZPNd?anon=true&view=#' target='_blank'>Scanfcode</a>.</p>
                </div>
                <div className='acounts'>
                    <ul>
                        <li>
                            <a href='#'><img src={logo} /></a>
                        </li>
                        <li>
                            <a href='#'>
                                <img src={logo2} /></a>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Footer