import { combineReducers, createStore } from "redux";
import { pshycoReducer } from "./PyschoRedux";

let rootReducer = combineReducers({
    pshyco:pshycoReducer
})
let store = createStore(rootReducer)
export {store};
