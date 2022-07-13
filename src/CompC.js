import React from 'react';

let CompC = (props)=> {




    return(
        <div>
        <h1> This is component C </h1>
        <h2>Student marks = {props.ssmarks}</h2>
        <h2>Student Course = {props.sscourse}</h2>
        </div>
    );
}

export default CompC;