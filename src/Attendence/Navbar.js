import React from 'react';
import './Navbar.css'
import {Link} from 'react-router-dom';

let Navbar = ()=>{

    return(<div>
        
           <ul className="nav">
               <li><Link to="/Employees">Home</Link></li>
               <li><Link to="/">Login</Link></li>
               <li><Link to="/Register">Register</Link></li>

           </ul> 
        
        </div>)
}
export default Navbar;
