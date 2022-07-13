import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css'
let Navbar = ()=>{
    return(<div className="bg-success">
    
       <ul id="One">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/AddEmployee">AddEmployee</Link></li>
          <li><Link to="/UpdateEmployee">UpdateEmployee</Link></li>
       </ul>
    
    </div>)
}
export default Navbar;