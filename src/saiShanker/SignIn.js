import React, { Fragment,useState } from 'react';
import './SignIn.css';

let SingIn = ()=>{
    let [loginData, setLoginData] = useState( { Email:'', Password:'' } );
    let [LoggedIn, setLoggedIn] =  useState(false);
    let [stayIn, setStayIn] = useState(false);
    let submitHandler = event =>{
        event.preventDefault();
        setLoggedIn(!LoggedIn);
    }
   


    if(LoggedIn){
           return(<Fragment><h1 className="text-center text-primary">Submitted Successfully</h1></Fragment>)
    } 
    else {
        return(
            <Fragment>
              <div className ="row">
                <div className = "col-sm-4">

                </div>
                <div className = "col-sm-4">
                    <div className = "card">
                      
                       <div className = "card-body">
                         
                           <form onSubmit={submitHandler} id="form-style">
                                <div> 
                                    <label className = "form-check-label" for = "SignedIn"><h3>Sign In</h3></label>
                                 </div>
                                <div className = "form-group my-3">
                                     <input
                                            type = "email" 
                                            className = "form-control input-element my-3"                                           
                                            name = "Email"
                                            value = {loginData.Email} 
                                            onChange = {(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})}
                                            placeholder = "Email Address"
                                            required />
                                </div>
                           
                           <div className=" form-group my-3">
                             
                             <input
                                    type = "password" 
                                    className = "form-control input-element my-3 " 
                                    name = "Password"
                                    value = {loginData.Password}
                                    onChange = {(e)=>setLoginData({...loginData,[e.target.name]:e.target.value})}
                                    placeholder = "Password"                                   
                                    required/>
                           </div>
                           <div className = " form-check">
                             <input 
                                    type = "checkbox" 
                                    className = "form-check-input  " 
                                    id = "staySignedIn"
                                    onClick={e=>setStayIn(!stayIn)}/>
                             <label className = "form-check-label ml-2" for = "staySignedIn">Stay signed on.</label>
                           </div>
                           <div className="text-center my-4">
                                <button type = "submit" className = "btn btn-block text-white" id="button-bg">Sign In</button>
                                <h5 id="forgot-password">Forgot Password?</h5>
                           </div>
                         </form>
                           
                           
                           
                           
                   

                       </div>


                    </div>

                </div>

                <div className="col-sm-4">

                </div>
              
              
              </div>
       
       
            </Fragment>
             )


    }

   

   
}
export default SingIn;