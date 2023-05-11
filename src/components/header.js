import {Link } from "react-router-dom";
import '../css/anh.css';
import '../css/navbar.css';



export default function Header() {
    //const [click, setClick] = useState(false);
    return (
        <div id="head">
            <div id="header">
                <h1><span>DEV</span>&lt;NEWS/&gt;</h1> 
            </div>
            
            <nav id="navigator">
                <Link className="list" to='/'>Home</Link>
                <Link className="list" to='/'>Category</Link>
                <Link className="list" to='/'>Contact</Link>
                <Link className="list" to={'/login'} >Login</Link>
            </nav>
            
            
            
        </div>
      )

}