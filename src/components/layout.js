import { Outlet, NavLink } from "react-router-dom";
import '../css/anh.css';
import '../css/navbar.css';
import Footer from "./footer";


export default function Layout() {
    //const [click, setClick] = useState(false);
    return (
        <>
            <div id="header">
                <h1><span>DEV</span>&lt;NEWS/&gt;</h1> 
            </div>
            <nav>
                <ul id="nav-bar">
                    <li>
                        <NavLink to="/" activeClassName="active" id='nav-items'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="top" activeClassName="active" id='nav-items'>Top Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="latest" activeClassName="active" id='nav-items'>Latest Stories</NavLink>
                    </li>
                    <li>
                        <NavLink to="best" activeClassName="active" id='nav-items'>Best Stories</NavLink>
                    </li>
                </ul>
            </nav>
            
            <Outlet />
            
            <Footer/>
        </>
      )

}