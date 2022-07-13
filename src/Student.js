import React from 'react';

let Student = function(props) {

    

    return(
        <div>
        
             <h1>student id :{props.id}</h1>
             <h1>student name: {props.sname}</h1>
             <h1>student fees{props.fees}</h1>
        
        
        </div>);
}
export default Student;