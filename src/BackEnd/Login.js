import React, {useState} from 'react'
import {auth} from './firebase';
import {onAuthStateChanged} from 'firebase/auth'

function Login() {
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
  return (
    <div>{user?.email}</div>
  )
}

export default Login