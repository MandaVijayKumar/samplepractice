import {combineReducers,createStore} from 'redux';
import { chikenReducer } from './chikenReducer.js';
import {pizzaReducer} from './pizzaReducer.js'


let rootReducer = combineReducers({
    pizza:pizzaReducer,
    chiken:chikenReducer
});
let store = createStore(rootReducer);
export {store}