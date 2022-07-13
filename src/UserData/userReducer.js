
import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from './useractiontypes.js'

let initialState = {
    loading:false,
    user:[],
    error:null
}
let userReducer = (state=initialState,action)=>{
    let {type,payload} = action;
    switch(type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading:true
        }
        case FETCH_USER_SUCCESS: return {
            loading:false,
            user:payload
        }
        case FETCH_USER_FAILURE: return {
            loading:false,
            error:payload
        }
        default: return state;
    }
}
export {userReducer}