import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Get Exclusive Offers To Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email Address' />
                <button className="subscribe-button">Subscribe</button>
            </div>
        </div>
    )
}

export default NewsLetter