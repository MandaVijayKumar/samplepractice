import { say_wish } from "./wishActionTypes"

let initialState = {
    msg:"hello"
}
let wishReducer = (state=initialState,action) =>{
    switch(action.type) {
        case say_wish: return {...state,msg:action.payload.info}
        default: return state;
    }
}
export {wishReducer}