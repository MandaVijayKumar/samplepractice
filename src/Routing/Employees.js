import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { Link } from "react-router-dom";
let Employees = ()=>{
    let [empData,setEmpData]=useState([]);
    useEffect(()=>{
        Axios.get('http://localhost:3001/Employees').then((response)=>{
            console.log(response.data);
            setEmpData(response.data);
        }).catch((error)=>{console.log(error)})
    },[])
    return(<div>
             <h1>this is employee component</h1>
             {
                 empData.map(data=> {
                     return(<ul>
                          
                          <li>{data.id}</li>
                          <li><Link to={`/Employees/${data.id}`}>{data.ename}</Link></li>
                          <li>{data.salary}</li>
                        </ul>)
                 })
             }
        
        
        </div>)
}
export default Employees;