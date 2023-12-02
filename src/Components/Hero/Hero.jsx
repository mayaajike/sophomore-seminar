import React, { useState } from 'react'
import './Hero.css'
import moneyIcon from '../Assets/money icon.png'
import chatbotIcon from '../Assets/chatbot.png'
import listIcon from '../Assets/list.png'
import voicechatIcon from '../Assets/voicechat.png'
import { HashRouter, Link } from 'react-router-dom'
import { HomeContext } from '../../Context/HomeContext'

const Hero = () => {
    const [menu, setMenu] = useState("home");

    return (
        <div className='hero'>
            <div className="hero-left">
                <div className='button-container-style'>
                    <div className='button-style' onClick={() => { setMenu("price search") }} > 
                        <Link style={{ textDecoration: 'none' }} to='/price search' >
                            <h2>Price Search</h2>
                            <img src={moneyIcon} alt="Price Icon" />
                        </Link>
                        {menu === "price search" ? <hr /> : <></>}
                    </div>

                    <div className='button-style' onClick={() => { setMenu("ai recipe helper") }} >  
                        <Link style= {{ textDecoration: 'none' }} to='/ai recipe helper' >
                            <h2>AI Recipe Helper</h2>
                            <img src={chatbotIcon} alt="Price Icon" />
                        </Link>
                        {menu === "ai recipe helper" ? <hr/> : <></> }
                    </div>

                    <div className='button-style' onClick={() => { setMenu("shopping lists") }}>
                        <Link style={{ textDecoration: 'none' }} to='/shopping lists'>
                            <h2>Shopping Lists</h2>
                            <img src={listIcon} alt="Price Icon" />
                        </Link>
                        {menu === "shopping lists" ? <hr /> : <></>}
                    </div>

                    <div className='voice-chat-button' onClick={() => { setMenu("voice assistant") }}>
                        <Link style={{ textDecoration: 'none' }} to='/voice assistant'>
                            <h2>Try Our Voice Assistant </h2>
                            <img src={voicechatIcon} alt="Voice Chat Icon" />
                        </Link>
                        {menu === "voice assistant" ? <hr /> : <></>}
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Hero