import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const MenuItems = [
    {
        title: "Home", url: "/",
    },
    {
        title: "Category", url: "/category",
    },
    {
        title: "Contact", url: "/contact",
    },
    {
        title: "Login", url: "/login",
    },
]

export default function Navbar() {
    //const [click, setClick] = useState(false);
    const menuList = MenuItems.map(({ url, title }, index) => {
        return (

            <div id='nav-bar'>
                <li id="nav-list" key={index}>
                    <NavLink exact to={url} activeClassName="active" id='nav-items'>{title}</NavLink>
                </li>
            </div>

        )
    })
    //const handleClick = () => {
    //setClick(!click);
    //}

    return (
        <nav>{menuList}</nav>
    )
}