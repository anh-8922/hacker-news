import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
//import { MenuItems } from './MenuItems';
//import '../css/anh.css';

const MenuItems = [
    {
        title: "Home", url: "/",
    },
    {
        title: "Setting", url: "/setting",
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
    const menuList = MenuItems.map(({url, title}, index) => {
        return (
            <li key={index}>
                <NavLink exact to={url} activeClassName="active">{title}</NavLink>
            </li>
        )
    })
    //const handleClick = () => {
        //setClick(!click);
    //}

    return (
        <nav>{menuList}</nav>
    )
}