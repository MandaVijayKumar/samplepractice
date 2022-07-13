import React,{useState} from 'react';
import Axios from 'axios';

function Home() {
    const [Employees, setEmployees] = useState({login:{email:'',password:''},register:{username:'',email:'',password:''}})
       let submitRegister = (e)=> {
             e.preventDefault();
             Axios.post('http://127.0.0.1:5000/register',Employees.register).then(Response=>{
                 if(Response.status ===200){
                     alert(Response.data.username +'successfully Registered');
                 } else {
                     alert('Registration failed');
                 }

             }).catch(error=>console.log(error))

       }
       let submitLogin = (e)=> {
            e.preventDefault();
            Axios.post('http://127.0.0.1:5000/login',Employees.login).then(Response=>{
                let employee = Response.data;
               if(employee.email===Employees.login.email) {
                   if(employee.password===Employees.login.password){
                       alert('login is successfull')
                   }
               }   
               if(Response.status===200) {
                   alert('login successfull')
               } else {
                   alert('login is failed')
               }
            console.log(employee);console.log(Response)}).catch(error=>console.log(error));
       }
   
    return (
        <div>
           <pre>{JSON.stringify(Employees)}</pre>
            <div className='row'>
               <div className='col-md-6'>
                   <div className='card'>
                      <div className='card-header'>
                         <h1>REGISTER</h1>
                      </div>
                      <div className='card-body'>
                          <form onSubmit={submitRegister}>
                             <div className='form-group'>
                                 <input type="text" onChange = {(e)=>setEmployees({...Employees,register:{...Employees.register,[e.target.name]:e.target.value}})} className='form-control' name='username' value={Employees.register.username} placeholder='username'/>
                             </div>
                             <div className='form-group'>
                                 <input type="email" 
                                 onChange = {(e)=>setEmployees({...Employees,register:{...Employees.register,[e.target.name]:e.target.value}})}
                                 className='form-control' name='email' value={Employees.register.email} placeholder='email'/>
                             </div>
                             <div className='form-group'>
                                 <input type="password" 
                                 onChange = {(e)=>setEmployees({...Employees,register:{...Employees.register,[e.target.name]:e.target.value}})}
                                 className='form-control' name='password' value={Employees.register.password} placeholder='password'/>
                              </div>
                              <div className='text-center'>
                                 <input type="submit" value="Register" className='btn btn-primary'/>
                              </div>
                          </form>
                      </div>
                   </div> 
               
               </div>
               <div className='col-md-6'>
               <div className='card'>
               <div className='card-header'>
                  <h1>LOGIN</h1>
               </div>
               <div className='card-body'>
                   <form onSubmit={submitLogin}>
                   
                      <div className='form-group'>
                          <input type="email" 
                          onChange = {(e)=>setEmployees({...Employees,login:{...Employees.login,[e.target.name]:e.target.value}})} className='form-control' name='email' value={Employees.login.email} placeholder='email'/>
                      </div>
                      <div className='form-group'>
                          <input type="password" 
                          onChange = {(e)=>setEmployees({...Employees,login:{...Employees.login,[e.target.name]:e.target.value}})}className='form-control' name='password' value={Employees.login.password} placeholder='password'/>
                       </div>
                       <div className='text-center'>
                          <input type="submit" value="LOGIN" className='btn btn-primary'/>
                       </div>
                   </form>
               </div>
            </div> 
        
               
               </div>
            </div>
        </div>
    )
}

export default Home
