import React from 'react';

let Counter2 = (props)=>{
    return(
        <div>
         <h1>counter2 value is : {props.count}</h1>
         <button onClick={props.increment}>increment</button>
         
    
    
    </div>);
}
export default Counter2;