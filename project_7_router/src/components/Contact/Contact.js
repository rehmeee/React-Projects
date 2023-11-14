import React from 'react'
import './contact.css'
function Contact() {
    return (
        <div className="contact">
            <div className="contact_box">
                <div className="heading">
                    <h4>Contact Us</h4>
                </div>
                <div className="inputs">
                    <input
                        type='input'
                        placeholder='Your Name'
                    />
                    <input
                        type='email'
                        placeholder='Your Email'
                    />
                    <input
                        type='input'
                        placeholder='Your message'
                    />

                </div>
                <div className="btn">
                    <button type='button' onClick={() => {
                        console.log('Love YOu')
                    }}>Lets Start</button>
                </div>

            </div>

        </div>
    )
}

export default Contact