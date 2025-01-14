import React from 'react'
import { Link } from 'react-router-dom';
import '../../src/assets/css/NavBar.css'
const NavBar=()=>{
    return(
        <div>
            <nav>
            <ul>
                <li ><Link to= "/">Home</Link></li>
                <li ><Link to="/about">About</Link></li>
                <li ><Link to="/counter">Counter</Link></li>
                <li ><Link to="/use-ref">UseRef</Link></li>
                <li ><Link to="/signin">Signin</Link></li>
                <li ><Link to="/signup">SignUp</Link></li>
            </ul>
            </nav>
        </div>    
            
    );
}
export default NavBar;