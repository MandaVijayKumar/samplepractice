import React from 'react';
import CompB from './CompB.js';

let CompA = function(props)
{



    return(
        <div>
        <h1> This is component A </h1>
        <h2>Student id = {props.id}</h2>
        <CompB sname={props.name} smarks={props.marks} sage={props.age} scourse={props.course}/>
        </div>
    );
}

export default CompA;