import React from "react";
import c4 from './c4.jpg';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import { buypizz,cancelPizz } from "./pizzaactions";


let PizzaHunt = ()=>{
    let dispatch = useDispatch();

  let pizzainfo = useSelector((state)=>{
      return state.pizza;
  });
  

    return(<div className="card">
    <div className="card-header">
          <h1>this is PizzaHunt</h1>
    </div>
    <div className="card-body">
    <img src={c4} alt=" "/>
    
    <h1>pizzCount {pizzainfo.count}</h1>
    <button  className="btn btn-danger" onClick={()=>dispatch(buypizz())}>buy</button>
    <button className="btn btn-primary" onClick={()=>dispatch(cancelPizz())}>cancel</button>
    </div>
                   
                
        </div>)
}
export default PizzaHunt;