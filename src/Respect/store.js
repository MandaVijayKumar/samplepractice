import { combineReducers, createStore } from "redux";
import { wishReducer } from "./wishReducer";
import logger from 'redux-logger';

let rootReducer = combineReducers({
    wishInfo:wishReducer
})
let store = createStore(rootReducer,applyMiddleware(logger));
export {store}_