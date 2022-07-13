import React, { Fragment } from 'react';
import b from './b.jpg'

let Pizzahurt = ()=>{


  return(
      <Fragment>
        <div className="card">
           <div className="card-header bg-warning text-center">
           <h2>pizza delivery shop</h2>
           </div>
           <div className="card-body">
               <div className="row">
                    <div className="col-md-6 ">
                      <img src = {b} alt="" className="img-fluid"/>
                      
                    </div>
                    <div className="col-md-6 bg-info text-danger text-center">
                      <h2>pizza count:150</h2>
                    </div>
               </div>
           </div>
        </div>

    </Fragment>);


}
export default Pizzahurt;