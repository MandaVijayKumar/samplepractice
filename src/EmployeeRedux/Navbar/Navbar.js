import React,{Fragment} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

let Navbar = ()=>{

    return(<Fragment>
        
            <ul id="Nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Employee">EmployeesList</Link></li>
              
                <li><Link to="/Stock">StockList</Link></li>
               
            </ul>
              
        </Fragment>)
}
export default Navbar;