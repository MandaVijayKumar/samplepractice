import React,{Fragment} from 'react' ;
import {Link} from 'react-router-dom';
import Anuradha from './NatureImages/Anuradha.jpg'

import './Navbar.css';
let Navbar = ()=>{
    return(
       <Fragment>
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <div className="container-fluid">
        <img src={Anuradha} width='4%' height='1%' className='img-thumbnail rounded'/>
         <Link to="/" className="navbar-brand mx-1 text-success mam" > Prof.Dr.T.Anuradha </Link>
         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
         </button>
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
           <ul className="navbar-nav mx-4 mb-2 mb-lg-0" id="nav-margin">
             <li className="nav-item mx-4">
               <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
             </li>
             <li className="nav-item mx-4">
               <Link to="/About" className="nav-link" >About</Link>
             </li>
            
             <li className="nav-item mx-4">
               <Link to="/Acknowledge" className="nav-link "  tabindex="-1" >Acknowledge</Link>
             </li>
           </ul>
           <form className="d-flex ml-auto">
             <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
             <button className="btn btn-outline-success" type="submit">Search</button>
           </form>
         </div>
       </div>
     </nav>
      
      
       </Fragment>)
}
export default Navbar;
