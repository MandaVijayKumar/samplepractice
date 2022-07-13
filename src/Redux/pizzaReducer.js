import { buy_pizza,cancel_pizza } from "./pizzaactiontypes"

let initialState = {
    count:100
}
let pizzaReducer= (state=initialState,action)=>{
    switch(action.type) {
        case buy_pizza : return {...state,
                                  count: state.count+action.payload.info
        }
        case cancel_pizza: return {...state, count:state.count-10}
        default : return state;
    }

}
export {pizzaReducer};