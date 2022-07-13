import {FETCH_EMPLOYEE_REQUEST, FETCH_EMPLOYEE_FAILURE, FETCH_EMPLOYEE_SUCCESS } from "./EmployeeActionType";

let initialState = {
    loading:false,
    data:[],
    error:null
}

let EmployeeReducer = (state= initialState,action)=>{
    let {type,payload} = action;
    switch(type){
        case FETCH_EMPLOYEE_REQUEST: return{...state,loading:true};
        case FETCH_EMPLOYEE_SUCCESS: return{...state,data:payload,loading:false};

        case FETCH_EMPLOYEE_FAILURE: return {...state,loading:false,data:[],error:payload};
        default: return state;
    }

}
export {EmployeeReducer}