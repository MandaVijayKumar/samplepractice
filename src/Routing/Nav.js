import React from "react";
import {Link} from 'react-router-dom'
let Nav = ()=>{
    return(<div>
           <ul id="navItems">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/Employees">Employees</Link></li>
               <li><Link to="/Students">Students</Link></li>
           </ul>

        </div>)
}
export default Nav;