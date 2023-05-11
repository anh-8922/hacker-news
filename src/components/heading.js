import '../css/anh.css';
import Navbar from "./navbar/navigator";
import Home from "./navbar/home";
import Contact from "./navbar/contact";
import Login from "./navbar/login";
import Category from "./navbar/category";
import './navbar/navbar.css'
import { Link } from 'react-router-dom';
import './navbar/login.css'

export default function Heading() {
    
    return (
        <div id="header">
            <h1><span>DEV</span>&lt;NEWS/&gt;</h1>
            <nav id="navigator">
                <Link to='/'>Home</Link>
                <Link to='/'>Category</Link>
                <Link to='/'>Contact</Link>
                <Link to={'/login'} >Login</Link>
            </nav>
        </div>
    )
}