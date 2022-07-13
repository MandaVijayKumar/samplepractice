import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';

function EmployeeDetails() {
    const [employees, setemployees] = useState([])
    useEffect(() => {
        Axios.get('http://127.0.0.1:5000/employeeDetails').then(Response=>setemployees(Response.data)).catch(error=>console.log(error))
        return () => {
            
        }
    }, [])
    return (
       <Fragment>
       {
        employees.length?employees.map((emp,index)=>{
            return(<div>
                    <ul>
                       <li key={index}>{emp.username}</li>
                       <li key ={index}>{emp.email}</li>
                       <li key={index}>is admin:{emp.isAdmin}</li>
                       <li key={index}>created:{emp.created}</li>
                    </ul>
                </div>)
        }):null
    }
       </Fragment>
    )
}

export default EmployeeDetails;
