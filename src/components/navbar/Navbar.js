import React from 'react'
import "./Navbar.scss"
import nav_logo from "../../images/nav_logo.svg"

function Navbar() {
    return (
        <div className='navbar'>
            <div className="nav_logo">
                <img src={nav_logo} alt="" />
            </div>
            <div className="nav_menu">
                <li><a href="/">Catalogue</a></li>
                <li><a href="/">Business</a></li>
                <li><a href="/">Shopping</a></li>
            </div>
            <div className="nav_end">
                <button className='btn1'>Sign in</button>
                <button className='btn2'>Get started</button>
                <select name="" id="" className='select'>
                    <option value="English">English</option>
                    <option value="Uzbek">Uzbek</option>
                    <option value="Russian">Russian</option>
                </select>
            </div>
        </div>
    )
}

export default Navbar