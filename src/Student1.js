import React from 'react';

let Student1 = function(){
    let marks = [78,90,87,65];
    let names = ['naaz','mehatab','shaheen'];
    let sdetails={
        id : 201,
        name : "naaz",
        fees : 20000
    };
    let fname = "mehatab";
    let lname = "naaz";
    let fullname = fname + lname;

    return(
        <div>
        <h2>Student name is {names[0]} and marks are {marks[0]} </h2>
        <h2>Student name is {names[1]} and marks are {marks[1]} </h2>
        <h2>Student id is {sdetails.id}</h2>
        <h2>Student name is {sdetails.name}</h2>
        <h2>Student fee is {sdetails.fees}</h2>
        <h2>full name of the student {fullname}</h2>
        </div>
    );
}

export default Student1;