import {FETCH_EMPLOYEE_REQUEST,FETCH_EMPLOYEE_SUCCESS,FETCH_EMPLOYEE_FAILURE} from './EmployeeActionType'
import Axiom from 'axios';
let fetch_employee_request = ()=>{
    return({
        type: FETCH_EMPLOYEE_REQUEST
    })
}
let fetch_employee_success = (employees)=>{
         return ({
             type:FETCH_EMPLOYEE_SUCCESS,
             payload:employees
         })
}
let fetch_employee_failure = (error)=>{
    return ({
        type:FETCH_EMPLOYEE_FAILURE,
        payload:error
    })
}
let fetchallEmployeeusers = ()=>{
    return async (dispatch)=>{
        try{
               dispatch(fetch_employee_request());
               let response = await Axiom.get('https://jsonplaceholder.typicode.com/users')
               dispatch(fetch_employee_success(response.data));
        }
        catch(error){
              dispatch(fetch_employee_failure(error.response))
        }
    }
}
export {fetch_employee_failure,fetchallEmployeeusers,fetch_employee_success,fetch_employee_request};