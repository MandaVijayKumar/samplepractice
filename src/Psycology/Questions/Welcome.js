import React,{Fragment, useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';
import './Welcome.css'
import { setUser } from '../Redux/PsycoType';
let Welcome = ()=>{
        let navigate = useNavigate();
        let pshycoInfo = useSelector((state)=>{
              return state.pshyco;
        });
        let dispatch = useDispatch();
       

        let [register,setRegister] = useState({username:'',email:'',gender:''});
        let changeHandler = (e)=>{
            setRegister({...register,[e.target.name]:e.target.value})
            
        }
        let submitHandler =  (e)=>{
            e.preventDefault();
            dispatch(setUser(register.username,register.email,register.gender));

          navigate('/Home')

            
          
            
        }
    return(
        <Fragment>
           <div className="full-landing1">
               <div className="over-landing1">
                    <div className="row inside-landing">
                        <div className="col-sm-8">
                         <div className="container text-center m-0 wel-div">
                            
                            
                             <h1>Psychology Counselling Expert System</h1>
                             <p>Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this</p>
                         </div>
                        </div>
                        <div className="col-sm-4">
                        
                         <div className="container">
                            <div className="card pl-3" id="form-card">
                                <div className="card-header text-center">
                                     <h4>REGISTER</h4>
                                </div>
                                <div className="card-body">
                                <form onSubmit={submitHandler}>
                                  <div class="mb-3">
                                      <label for="exampleInputPassword1" className="form-label">Your Name</label>
                                      <input type="text" className="form-control" onChange = {changeHandler} name="username" value={register.username} required/>
                                  </div>
                                  <div class="mb-3">
                                      <label for="exampleInputEmail1" className="form-label">Email address</label>
                                      <input type="email" className="form-control" onChange = {changeHandler} name="email" value={register.email} aria-describedby="emailHelp" required/>
                                      <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
                                  </div>
                                  <select class="form-select form-select-sm" onChange={changeHandler} name="gender" value={register.gender} aria-label=".form-select-sm example" required>
                                       <option value=" " selected>Select Gender</option>
                                       <option value="male">Male</option>
                                       <option value="female">Female</option>
                                       
                                  </select>
  
  
                                   <div className="text-center mt-3">
                                        <button type="submit" onClikc={()=>navigate('/Home')} className="btn btn-lg btn-secondary">Submit</button>
                                   </div>
                                </form>

                                </div>

                            </div>
                           </div>

                        </div>


                    </div>

               </div>
           
           </div>
        
        </Fragment>
    )
}
export default Welcome;