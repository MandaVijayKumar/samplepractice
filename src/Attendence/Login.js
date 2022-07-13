import React,{useState} from 'react';
import Axios from 'axios'
import {Link} from 'react-router-dom';
let Login = ()=>{
    let [data,setData]= useState({email:'',password:''});
    let submitLogin = (e)=> {
        e.preventDefault();
        Axios.post('http://127.0.0.1:5000/login',data).then(Response=>{
            let employee = Response.data;
           if(employee.email===data.email) {
               if(employee.password===data.password){
                   alert('login is successfull')
               }
           }   
           if(Response.status===200) {
               alert('login successfull')
              
           } else {
               alert('login is failed')
           }
        console.log(employee);
    }).catch(error=>console.log(error));
   }


    return(<div className="card w-25 m-auto text-center">
             <div className="card-header bg-secondary">
                  <h2>LOGIN</h2>
             </div>
             <div className="card-body bg-info">
               <form onSubmit={submitLogin}>
                 <div className="form-group">
                     <input type="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="email" value={data.email} placeholder="enter employee email"/>
                 </div>
                 <div className="form-group">
                 <input type="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="password" value={data.password} placeholder="enter employee password"/>
                 </div>
                 <div>
                     <input type="submit" value="LOGIN" className="btn btn-danger"/>
                     <p>don't have Account:<Link to="/Register" className='btn btn-sm btn-danger'>Sign Up</Link></p>
                 </div>


                </form>
             </div>
        </div>);

}
export default Login;