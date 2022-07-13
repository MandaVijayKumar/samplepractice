
import React, {useState} from 'react'
import {auth} from './firebase.js'
import {createUserWithEmailAndPassword} from 'firebase/auth'

function Register() {
    const [userData, setUserData] = useState({email:'', password:''});
    const submitHandler =  async (e) => {
        e.preventDefault();
        let user = await createUserWithEmailAndPassword(auth, userData.email, userData.password);
        console.log(user);
        
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className='form-group'>
                <input type='email' name='email' value={userData.email} onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className='form-control' placeholder='email'/>
                
            </div>
            <div className='form-group'>
                <input type='password' name='password' value={userData.password} onChange={(e)=>setUserData({...userData,[e.target.name]:e.target.value})} className='form-control' placeholder='password'/>
                
            </div>
            <button type='submit'>submit</button>
        </form>
    </div>
  )
}

export default Register