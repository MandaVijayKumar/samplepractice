import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sayWish } from './wishActions';

let Wishes = ()=>{
    let hellowishes = useSelector((state)=>{return state.wishInfo})
    let dispatch = useDispatch();
    return(<div>
        <h1 className="text-info">{hellowishes.msg}</h1>
        <button className="btn btn-warning" onClick={()=>dispatch(sayWish("good Morning"))}>good Morning</button>
        <button className="btn btn-primary" onClick={()=>dispatch(sayWish("good afternoon"))}>good Afternoon</button>
        <button className="btn btn-success" onClick={()=>dispatch(sayWish("good evening"))}>good Evening</button>
        <button className="btn btn-seconday" onClick={()=>dispatch(sayWish("good night"))}>good Night</button>
        
        </div>
        )
        
}
export default Wishes;