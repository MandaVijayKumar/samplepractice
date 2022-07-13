import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./useractiontypes";
import axios from 'axios'

let fetchuserrequest = ()=> {
    return {
                   type:FETCH_USER_REQUEST
    }
}
let fetchusersuccess = (users)=>{
    return {
        type:FETCH_USER_SUCCESS,
        payload:users
    }
}
let fetchuserfailure = (errors)=>{
    return {
        type:FETCH_USER_FAILURE,
        payload:errors
    }
}

let fetchallusers = ()=>{
    return ((dispatch)=>{
        dispatch(fetchuserrequest())
        axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            dispatch(fetchusersuccess(response.data))

        }).catch((error)=>{
            dispatch(fetchuserfailure(error))

        })
    })
}
export {fetchuserrequest,fetchallusers,fetchusersuccess,fetchuserfailure}
