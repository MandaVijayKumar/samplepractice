import { userReducer } from "./userReducer";
import {combineReducers,createStore} from 'redux';
import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'

let rootReducer = combineReducers({
    userdata:userReducer
})
let store = createStore(rootReducer,applyMiddleware(logger,thunk));
export {store};
