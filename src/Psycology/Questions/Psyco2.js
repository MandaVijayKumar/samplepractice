import React, { Fragment } from "react";
import './Psycol1.css';
import {useSelector,useDispatch} from 'react-redux'
let Psyco2 = ()=>{
      let pshycoInfo = useSelector((state)=>{
            return state.pshyco;
      });
      let dispatch = useDispatch();

return(<Fragment>
      <div className="row " id="q1">
           <div className=" ">
                  <h1> Do you have sucide Thoughts? </h1>
            </div>

       </div>
      <div className="row qbpart">
           <div className="col-sm-3 ">
                     <button className="btn btn-success b11" >Very Good</button>

            </div>
            <div className="col-sm-3 ">
                       <button className="btn btn-danger b12">Good</button>
            </div>
            <div className="col-sm-3 ">
                      <button className="btn btn-success b13">Normal</button>
            </div>
            <div className="col-sm-3 ">
                  <button className="btn btn-danger b14">Nothing</button>
            </div>
      </div>
     
      
     
</Fragment>)

}
export default Psyco2;
