import { applyMiddleware, combineReducers, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { EmployeeReducer } from "../Employee/EmployeeReducer";


let rootReducer = combineReducers({

    emp:EmployeeReducer
})
let store = createStore(rootReducer,applyMiddleware(logger,thunk));
export {store};