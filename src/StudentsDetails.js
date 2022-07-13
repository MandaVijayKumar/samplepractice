import React,{Fragment, useState} from 'react';

let StudentsDetails = ()=>{

    let[data,setData]=useState([{
        id:1,
        name:'smith',
        age:20,
        course:'mca'
    },
    {
        id:2,
        name:'james',
        age:20,
        course:'mca'
    },
    {
        id:3,
        name:'blark',
        age:20,
        course:'mca'
    },
    {
        id:4,
        name:'jones',
        age:20,
        course:'mca'
    },
    {
        id:5,
        name:'miller',
        age:20,
        course:'mca'
    }
      ]);
      return(
          <div>
          <table>
          <thead>
          <th>Student ID</th>
          <th>Student Name</th>
          <th>Student Age</th>
          <th>Student Courses</th>
          </thead>
          <tbody>
          {
              data.map((student)=>{
                  return(
                      <Fragment>
                      <tr>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>{student.age}</td>
                      <td>{student.course}</td>
                      </tr>
                      </Fragment>
                  );
              })
          }
          </tbody>
          </table>
          </div>
      );
}

export default StudentsDetails;