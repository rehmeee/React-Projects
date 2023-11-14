import React from 'react'
import image from './rehman.jpg'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className = "container">
            <div className = "photo">
                <img src={image} style={{borderRadius:'70px'}} alt="Rehman's Image" />
            </div>
            <div className = "intro">
                <h2 style={{textAlign:'center'}}>About Me</h2>
                <p>
               <i> Rehman Ali, a 21-year-old university student</i>, is a passionate individual dedicated to both academic pursuits and self-directed learning. Currently immersed in the realms of web development, C++, Python, and Software Engineering, Rehman's intellectual curiosity extends beyond the digital realm to encompass a deep appreciation for ancient history. A skilled problem-solver and avid coder, Rehman aspires to contribute to the tech industry's forefront, harboring ambitions to collaborate with esteemed IT companies such as Google, Amazon, Microsoft, and Meta.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About