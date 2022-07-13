import { DEC_COUNT, INC_COUNT } from "./PshycoActionType";

let initialState ={
    Count:0,
    Questions:[],
    previous:[],
    user:{}
}
let pshycoReducer = (state=initialState,action)=>{
    let {type,payload}=action;
    switch(type){
        case INC_COUNT : return {
                                         ...state,
                                         Count:state.Count+ payload.info,
                                         Questions:[
                                                      ...state.Questions,
                                                      {
                                                          qid:payload.id,
                                                          title:payload.title,
                                                          answer:payload.answer
                                                       }
                                                    ]
                                };
        case DEC_COUNT : return {...state,Count:state.Count-payload.info};
        case 'set_home': return {   ...state,
                                     Count:0,
                                     Questions:[]
                                };
        case 'set_previous': return{
                                       ...state,
                                       privious:[...state.previous,{qid:payload.id,counter:payload.counter,priviousCount:payload.priviousCount}]}
        case 'set_user': return {
                                         ...state, 
                                         user:{
                                                   username:payload.username, 
                                                   email:payload.email, 
                                                   gender:payload.gender,
                                                   time:payload.time
                                                }
                                }
        default: return state;
    }

}
export {pshycoReducer};