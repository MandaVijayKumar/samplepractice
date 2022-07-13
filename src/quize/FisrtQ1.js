import React, { Fragment,useState } from 'react';
import SecondQ from './SecondQ.js';
import ThirdQ from './ThirdQ.js'
let FirstQ1 = ()=>{
    let [answer,setAnswer]=useState("")
    if(answer===""){
        return(<Fragment>
       
            <div className=" bg-info text-center">
             <h1 className="bg-secondary text-warning"> Qes: Do you have fever?</h1>
             <button className="btn btn-primary btn-lg mx-4" onClick={()=>{setAnswer("yes")}}>yes</button>
             <button className="btn btn-danger btn-lg mx-4" onClick={()=>{setAnswer("no")}}>no</button>
             </div>
        
            
            </Fragment>)
    }
    if(answer==="yes")
    {
        return(<div><SecondQ/></div>)
    }
    if(answer==="no"){
        return(<div><ThirdQ/></div>)
    }

    
}
export default FirstQ1;