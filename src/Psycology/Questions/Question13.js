import React, { Fragment,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Psycol1.css';
import { increaseCount } from "../Redux/PsycoType";
let Question13 = ()=>{
      let [qDetails,setQuestionDetails]=useState({qid:14,title:'Are you feelling homesick?',options:{option1:'yes',option2:'no'},yes:2,no:0})
      let pshycoInfo = useSelector((state)=>{
            return state.pshyco;
      });
      let dispatch = useDispatch();

return(<Fragment>
      <div className="row " id="q1">
           <div className=" ">
                  <h1> {qDetails.title} </h1> 
            </div>

       </div>
      <div className="row qbpart">
           <div className="col-sm-6 ba1">
                   <Link to="/Question26">  <button className="btn  b11" onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option1,qDetails.yes))}>{qDetails.options.option1}</button></Link>

            </div>
            <div className="col-sm-6 ba2">
                      <Link to="/Question27"> <button className="btn  b12"onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option2,qDetails.no))}>{qDetails.options.option2}</button> </Link>
            </div>
      </div>
     
      
     
</Fragment>)

}
export default Question13;
