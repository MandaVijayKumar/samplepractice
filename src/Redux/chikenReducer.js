import { buy_chicken, remove_chiken } from "./chikenactiontype"

let initialState = {
    cost:0
}
let chikenReducer = (state=initialState,action)=>{
    switch(action.type) {
        case buy_chicken: return {...state, cost:state.cost + 100}
        case remove_chiken:return {...state,cost:state.cost-100}
        default:return state;
    }

}
export {chikenReducer}