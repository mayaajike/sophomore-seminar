import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { HomeContext } from '../../Context/HomeContext';

const Navbar = () => {

    const [menu, setMenu] = useState("home");
    const {getTotalCartItems} = useContext(HomeContext)

    return (
        <div className='navbar' >
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SMART GROCERY LIST</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("home")}}><Link style={{ textDecoration: 'none' }} to='/'>Home</Link>{menu==="home" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("shopping lists")}}><Link style={{ textDecoration: 'none' }} to='/shopping lists'>Shopping Lists</Link>{menu==="shopping lists" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("ai recipe helper")}}><Link style={{ textDecoration: 'none' }} to='/ai recipe helper'>AI Recipe Helper</Link>{menu==="ai recipe helper" ? <hr/> : <></>}</li>
                <li onClick={() => {setMenu("price search")}}><Link style={{ textDecoration: 'none' }} to='/price search'>Price Search</Link>{menu==="price search" ? <hr/> : <></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default Navbar 