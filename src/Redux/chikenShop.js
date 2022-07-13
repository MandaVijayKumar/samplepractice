import React from "react";
import {useSelector,useDispatch} from 'react-redux';
import { buyChiken, removeChiken } from "./chikenActions";
import { buy_chicken } from "./chikenactiontype";
import { buypizz } from "./pizzaactions";
let ChikenShop = ()=>{
    let dispatch = useDispatch()
    let chikenInfo = useSelector((state)=>{
        return state.chiken;
    })
    let pizzainfo = useSelector((state)=>{
        return state.pizza;
    })
    return(<div>
        <h1>chiken cost:{chikenInfo.cost}</h1>
        <h1>pizza cost:{pizzainfo.count}</h1>
        <button className="btn btn-primary" onClick={()=>dispatch(buyChiken(1000))}>purchase</button>
        <button className="btn btn-danger" onClick={()=>dispatch(removeChiken())}>cancel</button>
        <button className="btn btn-success" onClick={()=>dispatch(buypizz(2000))}>buypizza</button>
        </div>)
}
export default ChikenShop;