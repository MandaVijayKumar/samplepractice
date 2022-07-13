import React, { useReducer } from 'react';
let initialState = {text:"hello"};
let reducer = (state=initialState,action)=>{
    switch(action){
        case 'gm': return {text:"good morning"};
        case 'ga': return {text:'good afternoon'};
        case 'ge': return {text:'good evening'};
        default : return state;
    }

}

let Wishes = ()=>{
    let [message,dispatch]= useReducer(reducer,initialState);


    return(<div>
         <h1>{message.text}</h1>
         <button onClick={()=>dispatch('gm')}className="btn btn-sm btn-primary">good morning</button>
         <button onClick={()=>dispatch('ga')} className="btn btn-sm btn-success">good afternoon</button>
         <button onClick = {()=>dispatch('ge')} className="btn btn-sm btn-secondary">good evening</button>
        
        </div>);
}
export default Wishes;