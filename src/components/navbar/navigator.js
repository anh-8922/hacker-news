import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';


const MenuItems = [
    {
        title: "Home", url: "/",
    },
    {
        title: "Top Stories", url: "/top",
    },
    {
        title: "Latest Stories", url: "/latest",
    },
    {
        title: "Best Stories", url: "/best",
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