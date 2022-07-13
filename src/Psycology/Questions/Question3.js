import React, { Fragment,useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './Question3.css';
import { increaseCount } from "../Redux/PsycoType";
let Question3 = ()=>{
      let [qDetails,setQuestionDetails]=useState({qid:3,title:'Are you feelling Guilty?',options:{option1:'Never',option2:'Once in a While', option3: 'About half the Time', option4: ' Most of the Time', option5: 'Always'},one:0,two:1, three: 2, four: 3, five: 4})
      let pshycoInfo = useSelector((state)=>{
            return state.pshyco;
      });
      let dispatch = useDispatch();

return(<Fragment>
      <div className="full-landing-q3">
          <div className="over-landing-q3">
             <div className="row " id="question-part-q3">
                <div className=" text-center text-white">
                      <h1> {qDetails.title} </h1> 
                </div>
             </div>
             <div className="row" id="question-option-q3">
             <div className="col-sm-2  ">
                     <Link to="/Question4">  <button className="btn op1 " onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option1,qDetails.one))}>{qDetails.options.option1}</button></Link>
  
                 </div>
                 <div className="col-sm-2  ">
                        <Link to="/Question4"> <button className="btn  op1"onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option2,qDetails.two))}>{qDetails.options.option2}</button> </Link>
                 </div>
                 <div className="col-sm-2  ">
                     <Link to="/Question4">  <button className="btn  op1" onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option1,qDetails.three))}>{qDetails.options.option3}</button></Link>
  
                 </div>
                 <div className="col-sm-2  ">
                     <Link to="/Question4">  <button className="btn  op1" onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option1,qDetails.four))}>{qDetails.options.option4}</button></Link>
  
                 </div>
                 <div className="col-sm-2  ">
                     <Link to="/Question4">  <button className="btn  op1" onClick={()=>dispatch(increaseCount(qDetails.qid,qDetails.title,qDetails.options.option1,qDetails.five))}>{qDetails.options.option5}</button></Link>
  
                 </div>
             </div>

          </div>
      </div>
      
    
     
      
     
</Fragment>)

}
export default Question3;
