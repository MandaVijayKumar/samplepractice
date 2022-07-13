import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {Link} from 'react-router-dom';
import './Home.css'
import { setDefault } from "./Redux/PsycoType";
let Home =()=>{
    let psychoInfo = useSelector((state)=>{return state.pshyco});
    let dispatch = useDispatch();
    useEffect(()=>{
        dispatch(setDefault());
    },[])
    return(
              <div className="full-landing">
                <div className="over-landing">
            
                      <div className=" m-5 text-center ">
                           <h4><span className="text-primary ">{psychoInfo.user.username} </span><br/>Choose one of the following problem</h4>
                      </div>
                      <div className="" id="homeoptions" >
                      
                      <div className="row categories">
                          <div className="col-sm-3 ">
                             <Link to="/Main"> 
                 
                                     <div className="card  depression-bg ">
                                         <div className="card-body ">
                          <h5>Depression</h5>
                      </div>
                  </div>
                  </Link>
            </div>
             <div className="col-sm-3 personal-padding">
                   <div className="card personal-bg ">
                      <div className="card-body">
                         <h5>personal Problems</h5>
                      </div>
                   </div>
             
             </div>
             <div className="col-sm-3 pl-5">
                   <div className="card love-bg ">
                       <div className="card-body ">
                           <h5>Love Problem</h5>
                       </div>
                   </div>
             
             </div>
             <div className="col-sm-3 ">
                   <div className="card educational-bg">
                        <div className="card-body">
                             <h5>Educational Problem</h5>
                        </div>
                   </div>
             
             </div>
        </div>
  
   </div>
                </div>
        

                  
       </div>)
}
export default React.memo(Home);