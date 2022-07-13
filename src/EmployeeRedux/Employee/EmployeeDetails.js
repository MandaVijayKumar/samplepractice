import React,{Fragment} from 'react';
import {useParams,useHistory} from 'react-router-dom'

let EmployeesDetails = ()=>{
    let params = useParams()
    

    return(<Fragment>
        
            <h1>Employee details component{params.id}</h1>
        
        </Fragment>)
}
export default EmployeesDetails;