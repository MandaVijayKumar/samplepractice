import axios from "axios";
import React, {useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Axios from 'axios';
let EmployeesDetails = ()=>{
     let params = useParams();
      let [data,setData]=useState([])
           useEffect(()=>{
            axios.get(`http://127.0.0.1:3001/Employees/${params.id}`).then((response)=>{
                setData(response.data);
                console.log(response.data)

            }).catch((error)=>{
                console.log(error)
            })
           },[])
    return(<div>
        <h1>this is empolyee details component{params.id} </h1>
        {data.map((d)=>{return(<div>
            <ul>
            <li>{d.id}</li>
            <li>{d.ename}</li>
            <li>{d.salary}</li>
            </ul>
            </div>)})}
        </div>)
}
export default EmployeesDetails;