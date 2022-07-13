import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {auth} from './firebase';



function Navebar() {
    
        const [user, setUser] = useState(null);
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
   
  return (
    <div>
        <ul className='mynav'>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/login'>Login</Link></li>
            <li>{user?.email}<Link to='/signout' onClick={()=>auth.signOut()}>signout</Link></li>
        </ul>
    </div>
  )
}

export default Navebar