import React from 'react';
import CompC from './CompC.js'

let CompB = (props) => {


  

    return(
        <div>
        <h1> This is component B </h1>
        <h2>Student name = {props.sname}</h2>
        <h2>Student age = {props.sage}</h2>
        <CompC ssmarks={props.smarks} sscourse={props.scourse}/>
        </div>
    );
}

export default CompB;