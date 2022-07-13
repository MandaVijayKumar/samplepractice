import React,{useState} from 'react';
import Axios from 'axios'
let Register = ()=>{
    let [data,setData]= useState({username:'',email:'',password:'',cpassword:''})

    let submitRegister = (e)=> {
     e.preventDefault();
     if(data.password===data.cpassword){
          Axios.post('http://127.0.0.1:5000/register',data).then(Response=>{
               if(Response.status ===200){
                   alert(Response.data.username +'successfully Registered');
               } else {
                   alert('Registration failed');
               }
      
           }).catch(error=>console.log(error))

     } else {
          alert('password and conporm password is not match');

     }
    

}
    return(<div className="card w-25 m-auto text-center">
             <div className="card-header text-center bg-secondary">
                  <h2>REGISTER</h2>
             </div>
             <div className="card-body bg-info">
               <form onSubmit={submitRegister}>
                 <div className="form-group">
                     <input type="text" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="username" value={data.username} placeholder="enter employee name"/>
                 </div>
                 <div className="form-group">
                      <input type="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="email" value={data.email} placeholder="enter employee email"/>
                 </div>
                 <div className="form-group">
                       <input type="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="password" value={data.password} placeholder="enter password"/>
                 </div>
                 <div className="form-group">
                      <input type="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} className="form-control" name="cpassword" value={data.cpassword} placeholder="enter confirm password"/>
                 </div>
                 <div>
                      <input type="submit" value="register" className="btn btn-primary"/>
                 </div>
                </form>
             </div>
        </div>);

}
export default Register